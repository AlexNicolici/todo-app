import React from "react";

function GlobalSearchComponent({
  globalSearchList,
  setGlobalSearchList,
}: {
  globalSearchList: string;
  setGlobalSearchList: (value: string) => void;
}) {
  return (
    <div>
      <div className="global-search-container">
        <h3>Global movies search:</h3>
        <input
          className="search-bar"
          placeholder="Search your movie"
          value={globalSearchList}
          onChange={(e) => setGlobalSearchList(e.target.value)}
        />
      </div>
    </div>
  );
}

export default GlobalSearchComponent;
