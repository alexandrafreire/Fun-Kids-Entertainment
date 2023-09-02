import React from "react";
import "./SearchAndFilter.css";

const SearchAndFilterComponent = ({
  setSearchTerm,
  setFilter,
  sitesArray,
  filter,
  clearAllFilters,
}) => {
  return (
    <div className="searchAndFilter">
      <input
        type="text"
        placeholder="Search by site name..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <select
        onChange={(e) =>
          setFilter({ ...filter, amusementTypeName: e.target.value })
        }
      >
        <option value="">All Types</option>
        {[...new Set(sitesArray.map((site) => site.amusementTypeName))].map(
          (type) => (
            <option key={type} value={type}>
              {type}
            </option>
          )
        )}
      </select>
      <select
        onChange={(e) => setFilter({ ...filter, siteAgeRange: e.target.value })}
      >
        <option value="">All Age Ranges</option>
        {[...new Set(sitesArray.map((site) => site.siteAgeRange))].map(
          (ageRange) => (
            <option key={ageRange} value={ageRange}>
              {ageRange}
            </option>
          )
        )}
      </select>
      <select
        onChange={(e) => setFilter({ ...filter, siteVillage: e.target.value })}
      >
        <option value="">All Villages</option>
        {[...new Set(sitesArray.map((site) => site.siteVillage))].map(
          (village) => (
            <option key={village} value={village}>
              {village}
            </option>
          )
        )}
      </select>
      <select
        onChange={(e) => setFilter({ ...filter, siteCounty: e.target.value })}
      >
        <option value="">All Counties</option>
        {[...new Set(sitesArray.map((site) => site.siteCounty))].map(
          (county) => (
            <option key={county} value={county}>
              {county}
            </option>
          )
        )}
      </select>
      <button onClick={clearAllFilters}>Clear Filters</button>
    </div>
  );
};

export default SearchAndFilterComponent;
