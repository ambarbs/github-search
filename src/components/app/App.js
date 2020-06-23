import React, { useState, useCallback, useEffect } from "react";
import _ from "lodash";
import "../../App.css";
import {AppWrapper, SearchBox} from "./App.styles";
import Card from "../card/Card";

const App = () => {
  const fetchData = async (url) => {
    console.log("url = ", url);
    const res = await fetch(url);
    res
      .json()
      .then((res) => setData(res))
      .catch((err) => setError(err));
  };

  const [searchTerm, setSearchTerm] = useState("");
  const debounceLoadData = useCallback(_.debounce(fetchData, 1000), []);

  const url = `https://api.github.com/search/repositories?q=${searchTerm}&sort=stars&order=desc`;
  useEffect(() => {
    if (searchTerm) {
      debounceLoadData(url);
    }
  }, [url]);

  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  const { items = [] } = data;
  const renderContent = error ? (
    <>Error</>
  ) : (
    <div>
      {items.map((item) => {
        const { id, name, watchers_count } = item;
        return <Card id={id} name={name} watchersCount={watchers_count} />;
      })}
    </div>
  );
  return (
    <AppWrapper>
      <SearchBox
          placeholder='Search Github repo...'
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {renderContent}
    </AppWrapper>
  );
};

export default App;
