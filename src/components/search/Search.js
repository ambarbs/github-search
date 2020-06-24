import React, { useState, useCallback, useEffect } from 'react';
import _ from 'lodash';
import { GridView } from '../common/Common.styles';
import Card from '../card/Card';
import { SearchBox } from './Search.styles';

const Search = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const fetchData = async (url) => {
    const response = await fetch(url);
    response
      .json()
      .then((res) => setData(res))
      .catch((err) => setError(err));
  };

  const [searchTerm, setSearchTerm] = useState('');
  const debounceLoadData = useCallback(_.debounce(fetchData, 300), []);

  const url = `https://api.github.com/search/repositories?q=${searchTerm}&sort=stars&order=desc`;
  useEffect(() => {
    if (searchTerm) {
      debounceLoadData(url);
    }
  }, [url, searchTerm, debounceLoadData]);

  const { items = [] } = data;
  const renderedContent = error ? (
    <>Error</>
  ) : (
    <GridView data-testid="search">
      {items.map((item) => {
        const { id, name, watchers_count: watchersCount } = item;
        return <Card id={id} name={name} watchersCount={watchersCount} />;
      })}
    </GridView>
  );
  return (
    <>
      <SearchBox
        placeholder="Search Github repo..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {renderedContent}
    </>
  );
};

export default Search;
