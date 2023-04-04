import React, { useState } from 'react'

// we should isolate state to the individual component
// if its not shared between MULTIPLE components

// inputs, anything that we dont really share to other components
// keep isolated in its own component state

interface SearchFormProps {
  searchFormSubmitted: (searchQuery: string) => void
}

export default function SearchForm({ searchFormSubmitted }: SearchFormProps) {
  const [searchInput, setSearchInput] = useState('');

  const submitSearch = (e: any) => {
    // prevents the page from reloading on form submission
    e.preventDefault();
    searchFormSubmitted(searchInput);
  }

  return (
    <div>
      <p>Search For A Gif:</p>
      <form onSubmit={submitSearch}>
        <input onChange={e => setSearchInput(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </div>
  )
}
