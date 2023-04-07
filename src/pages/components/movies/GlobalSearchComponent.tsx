import React from "react";

function GlobalSearchComponent({ globalSearchList, setGlobalSearchList }) {
  return (
    <div>
      <div className="global-search-container">
        <h3>Global movies search:</h3>
        <input
          placeholder="Search your movie"
          value={globalSearchList}
          onChange={(e) => setGlobalSearchList(e.target.value)}
        />
      </div>
    </div>
  );
}

export default GlobalSearchComponent;
