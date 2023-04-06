import React from 'react'
import { GiphySearchResponse } from '../../types/api/search';
import ResultCard from '../ResultCard/ResultCard';

interface ResultsListProps {
  searchResults: GiphySearchResponse;
}

export default function ResultsList({ searchResults }: ResultsListProps) {
  console.log(searchResults);
  return (
    <div>
      {
        searchResults.data.map(item => {
          return (
            // key is a unique attribute -> react uses this for their library
            <ResultCard key={item.id} giphyResult={item} />
          )
        })
      }
    </div>
  )
}
