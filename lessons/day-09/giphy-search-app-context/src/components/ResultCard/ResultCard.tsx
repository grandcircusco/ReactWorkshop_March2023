import React, { useContext } from 'react'
import { GiphyResultItem } from '../../types/api/search';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../../App';
import { GifDetailsResponse } from '../../types/api/searchById';

export interface ResultCardProps {
  // GiphyResultItem is object for the individual result from the API
  giphyResult: GiphyResultItem | GifDetailsResponse;
}

export default function ResultCard({ giphyResult }: ResultCardProps) {
  const { favorites, toggleFavorite } = useContext(FavoritesContext);
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>{giphyResult.title}</h3>
      <img src={giphyResult.images.original.url} alt="search response" />
      <br />
      <Link to={`/details?gifID=${giphyResult.id}`}>Click to see more details.</Link>
      <br />
      <a target='_blank' rel="noreferrer" href={giphyResult.url}>
        Link to Giphy
      </a>
      <div>
        <span>Add To Favorites</span>
        <input onChange={() => toggleFavorite(giphyResult.id)} checked={favorites.includes(giphyResult.id)} type="checkbox" />
      </div>
    </div>
  )
}
