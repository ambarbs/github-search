import React, { useState, useCallback, useEffect } from 'react';
import _ from 'lodash';
import {GridView, Image} from '../common/Common.styles';
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

  const url = `https://api.unsplash.com/search/photos?client_id=wBHy5K4D5J0aQRyKNjS-0fZBAeLZnTWuY0Hha7LoKoI&query=${searchTerm}`;
  useEffect(() => {
    if (searchTerm) {
      debounceLoadData(url);
    }
  }, [url, searchTerm, debounceLoadData]);

  const { results = [] } = data;
  console.log('items length ', results.length)
  const renderedContent = error ? (
    <>Error</>
  ) : (
    <GridView data-testid="search" noOfItems={results.length}>
      {results.map((item) =>
        <Image src={item.urls.small}/>
      )}
    </GridView>
  );
  return (
    <>
      <SearchBox
        placeholder="Search for images..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      {renderedContent}
    </>
  );
};

export default Search;
