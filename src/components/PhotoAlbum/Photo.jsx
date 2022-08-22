import React, { useEffect, useState } from 'react';
import { Collection } from './Collection';
import './Photo.scss';

const photoCat = [
  { name: 'Все' },
  { name: 'Море' },
  { name: 'Горы' },
  { name: 'Архитектура' },
  { name: 'Города' },
];

export const Photo = () => {
  const [page, setPage] = useState(1);
  const [categoryId, setCategoryId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [collections, setCollection] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    const category = categoryId ? `category=${categoryId}` : '';
   
    fetch(
      `https://630242ccc6dda4f287b66dd9.mockapi.io/CollectionPhotos?page=${page}&limit=3&${category}`
    )
      .then((res) => res.json())
      .then((json) => {
        setCollection(json);
      })
      .catch((err) => {
        console.warn(err);
        alert('Не удалось получить информацию!');
      })
      .finally(() => setIsLoading(false));
  }, [categoryId, page]);

  return (
    <div className='photo_album'>
      <h1>My Photo Album</h1>
      <div className='top'>
        <ul className='tags'>
          {photoCat.map((obj, i) => (
            <li
              onClick={() => setCategoryId(i)}
              className={categoryId === i ? 'active' : ''}
              key={obj.name}
            >
              {obj.name}
            </li>
          ))}
        </ul>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className='search-input'
          placeholder='Search...'
        />
      </div>
      <div className='content'>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          collections
            .filter((obj) =>
              obj.name.toLowerCase().includes(searchValue.toLowerCase())
            )
            .map((obj, index) => (
              <Collection key={index} name={obj.name} images={obj.photos} />
            ))
        )}
      </div>
      <ul className='pagination'>
        {[...Array(3)].map((_, index) => (
          <li
            onClick={() => setPage(index + 1)}
            className={page === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </li>
        ))}
      </ul>
    </div>
  );
};
