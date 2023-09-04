import React, { useEffect, useState} from "react";
import axios from "axios";

export default function LocationModal({
  setShowModal,
  updateSitesWithDistance,
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function closeModal() {
    localStorage.setItem("hasAcceptedLocation", "false");
    setShowModal(false);
  }

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          axios
            .post(
              "https://x4kuutptq7.execute-api.eu-west-1.amazonaws.com/prod/getdrivingdistance",
              { userLat, userLng }
            )
            .then((response) => {
              if (response.data && Array.isArray(response.data.sites)) {
                updateSitesWithDistance(response.data.sites);
                // Save the updated sites to sessionStorage
                sessionStorage.setItem(
                  "sitesWithDistance",
                  JSON.stringify(response.data.sites)
                );
              }
            })
            .catch((error) => {
              console.error(error);
            });

          localStorage.setItem("hasAcceptedLocation", "true");
          setShowModal(false);
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  const modalStyle = {
    position: "fixed",
    top: "35%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: "1000",
    backgroundColor: "rgba(0, 128, 0, 0.85)",
    padding: "10px",
    width: windowWidth <= 768 ? "80%" : "900px",
    height: windowWidth <= 768 ? "80%" : "140px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    color: "white",
  };

  return (
    <div style={modalStyle}>
      <p>
        Enabling access to your location will provide you with visibility to the
        distance to the suggested Sites. Would you like to see this information?
      </p>
      <button onClick={getLocation}>Yes</button>
      <button onClick={closeModal}>No</button>
    </div>
  );
}
