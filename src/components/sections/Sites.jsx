import "../.././App.css";
import "./../pages/Home.css";
import SitesCardCollection from "./../../ui-components/SitesCardCollection";


function HomePageSites () {



    return (
        <>
        <div className="sites-container">
        <SitesCardCollection width="100%" className='sites-component'/>
        </div>
        </>
    )
  };
  
  export default HomePageSites;
  