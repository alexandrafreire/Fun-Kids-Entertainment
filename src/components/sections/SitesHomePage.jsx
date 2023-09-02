import React, { useState, useEffect } from "react";
import "./SitesHomePage.css";
import SearchAndFilterComponent from "./SearchAndFilter";

function generateStars(rating) {
  let stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(
        <span className="filled-star" key={i}>
          ★
        </span>
      );
    } else {
      stars.push(
        <span className="unfilled-star" key={i}>
          ☆
        </span>
      );
    }
  }
  return stars;
}

function SitesHomePage({ sitesArray }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState({});

  const filteredSitesArray = sitesArray.filter((site) => {
    return (
      site.siteName.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!filter.amusementTypeName ||
        site.amusementTypeName === filter.amusementTypeName) &&
      (!filter.siteAgeRange || site.siteAgeRange === filter.siteAgeRange) &&
      (!filter.siteVillage || site.siteVillage === filter.siteVillage) &&
      (!filter.siteCounty || site.siteCounty === filter.siteCounty)
    );
  });

  useEffect(() => {
    console.log("Current Page:", currentPage);
    console.log("Items Per Page:", itemsPerPage);

    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    console.log("First and Last Item Index:", firstItemIndex, lastItemIndex);

    const currentItems = sitesArray.slice(firstItemIndex, lastItemIndex);
    console.log("Current Items:", currentItems);

    const totalPages = Math.ceil(sitesArray.length / itemsPerPage);
    console.log("Total Pages:", totalPages);
  }, [currentPage, itemsPerPage, sitesArray, filteredSitesArray]);

  if (!Array.isArray(sitesArray)) {
    console.error("Invalid sitesArray:", sitesArray);
    return null;
  }

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

  const currentItems = filteredSitesArray
    .slice(firstItemIndex, lastItemIndex)
    .sort((a, b) => b.siteTotalRating - a.siteTotalRating);

  const totalPages = Math.ceil(filteredSitesArray.length / itemsPerPage);

  const clearAllFilters = () => {
    setSearchTerm("");
    setFilter({});
  };

  return (
    <div>
      <SearchAndFilterComponent
        setSearchTerm={setSearchTerm}
        setFilter={setFilter}
        sitesArray={sitesArray}
        filter={filter}
        clearAllFilters={clearAllFilters}
      />
      <div className="flexContainer">
        {currentItems.map((site, index) => (
          <div key={index} className="siteCard flexItem">
            <img
              src={site.siteImage}
              alt={`${site.siteName} Thumbnail`}
              className="siteImage"
            />
            <h3 className="siteName">{site.siteName}</h3>
            <div className="ratingContainer">
              <span className="totalRating">{site.siteTotalRating}</span>
              <span className="starRating">
                {generateStars(site.siteTotalRating)}
              </span>
              <span className="reviewCount">
                # of Reviews: {site.siteNumberOfRatings}
              </span>
            </div>
            <hr className="divider" />
            <div className="badgeContainer flexRowContainer">
              <span className="badge flexItem">{site.amusementTypeName}</span>
              <span className="badge flexItem">{site.siteAgeRange}</span>
            </div>
            <div className="locationContainer flexRowContainer">
              <span className="location flexItem">{`${site.siteVillage}, ${site.siteCounty}`}</span>
              <span className="distance flexItem">
                {`${site.distanceFromSite} Km Away`}
              </span>
              <button
                className="mapButton"
                onClick={() => window.open(site.SiteMapURL, "_blank")}
              >
                Map
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? "active" : ""}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SitesHomePage;
