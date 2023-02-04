import React, { useState } from "react";
import { restrautList } from "../constants";
import RestaruntList from "./RestaruntList";

const filterText = (value) => {
  return restrautList.filter((restarunt) =>
    restarunt.data.name.includes(value)
  );
};

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restarunts, setRestarunts] = useState(restrautList);
  const onSearch = () => {
    const restarunt = filterText(searchText);
    setRestarunts(restarunt);
  };
  return (
    <div>
      <input
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={onSearch}>Search</button>
      <div className="restaurant-list">
        {restarunts.map((item) => (
          <RestaruntList {...item.data} key={item.data.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
