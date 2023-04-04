import React from 'react'
import { GiphyResultItem } from '../../types/api';

export interface ResultCardProps {
  // GiphyResultItem is object for the individual result from the API
  giphyResult: GiphyResultItem;
}

export default function ResultCard({ giphyResult }: ResultCardProps) {
  return (
    <div>
      <h3>{giphyResult.title}</h3>
      <img src={giphyResult.images.original.url} alt="search response" />
      <a target='_blank' rel="noreferrer" href={giphyResult.url}>
        Link to Giphy
      </a>
    </div>
  )
}
