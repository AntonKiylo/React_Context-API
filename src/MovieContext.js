import React, { createContext, useState } from 'react';

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '$10',
      id: 25485
    },
    {
      name: 'Game of Thrones',
      price: '$10',
      id: 97425
    },
    {
      name: 'Inception',
      price: '$10',
      id: 751266
    },
  ]);

  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
}