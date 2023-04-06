import React, { useEffect, useState } from 'react'
import { GiphySearchResponse } from '../../types/api/search';
import { search } from '../../services/search';
import SearchForm from '../../components/SearchForm/SearchForm';
import ResultsList from '../../components/ResultsList/ResultsList';

export default function Main() {
    const [searchResults, setSearchResults] = useState<GiphySearchResponse>();
    const [searchQuery, setSearchQuery] = useState("");
    // this function will call the API and set the state
    const searchFormSubmitted = (searchQuery: string) => {
        // set the searchQuery state,
        // this will re-run the useEffect hook
        // providing the searchQuery state as the q parameter in the api request.
        setSearchQuery(searchQuery);
    }

    useEffect(() => {
        if (!searchQuery) {
            return;
        }
        search(searchQuery)
        .then((res) => {
            setSearchResults(res.data);
        });
    }, [searchQuery]);

    return (
        <div>
            <SearchForm searchFormSubmitted={searchFormSubmitted} />
            {
                searchResults && (
                    <ResultsList searchResults={searchResults} />
                )
            }
        </div>
    )
}
