import React, { useState } from 'react'
import './search.css'
// import PlayerData from ''

function SearchBar () {
    return (
        <div>
            <div className="form" action="/" method="get">
                <div className="searchInputs">
                <input
                    type="text"
                    id="header-search"
                    placeholder="Search for players"
                    name="search"
                />
                <i class="searchIcon bi bi-search p-2"></i>
                </div>
            </div>
        </div>
    )
}

export default SearchBar