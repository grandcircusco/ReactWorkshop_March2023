import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import SearchForm from '../SearchForm/SearchForm'
import ResultsList from '../ResultsList/ResultsList'
import { GiphySearchResponse } from '../../types/api';
import { search } from '../../services/search';

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
            <Header />
            <SearchForm searchFormSubmitted={searchFormSubmitted} />
            {
                searchResults && (
                    <ResultsList searchResults={searchResults} />
                )
            }
        </div>
    )
}
