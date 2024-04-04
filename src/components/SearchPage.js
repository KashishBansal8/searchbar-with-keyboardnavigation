import React from 'react'
import Searchbar from './Searchbar';
import SearchedCards from './SearchedCards';

const SearchPage = () => {
    return (
        <div className='main-search-page-section flex'>
            <Searchbar />
            <SearchedCards />
        </div>
    )
}

export default SearchPage
