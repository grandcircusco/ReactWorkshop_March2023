import React, { useContext, useEffect, useState } from 'react'
import { FavoritesContext } from '../../App'
import { searchByIDs } from '../../services/search';
import { GiphySearchByIdsResponse } from '../../types/api/searchByIds';
import ResultCard from '../../components/ResultCard/ResultCard';

export default function Favorites() {
  const { favorites } = useContext(FavoritesContext);
  const [favoritesResult, setFavoritesResult] = useState<GiphySearchByIdsResponse | undefined | null>();

  useEffect(() => {
    if (!favorites || favorites.length === 0) {
      setFavoritesResult(null);
      return;
    }
    searchByIDs(favorites)
    .then(res => {
      setFavoritesResult(res.data);
    })
    .catch(() => {
      setFavoritesResult(null);
    });

  }, [favorites]);

  if (favoritesResult === undefined) {
    return <h1>Loading...</h1>
  }

  if (favoritesResult === null) {
    return <h1>No Favorites Found</h1>
  }

  return (
    <div>
      {
        favoritesResult.data.map(item => {
          return (
            <ResultCard key={item.id} giphyResult={item} />
          )
        })
      }
    </div>
  )
}
