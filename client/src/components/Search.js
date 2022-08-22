import React, { useState } from 'react'
import  { useNavigate }  from 'react-router-dom'
import './search.css'



function SearchBar () {
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate({
            pathname: `/search/${searchTerm}`,
        });

        setSearchTerm("");
    };

    return (
        <>
            <nav class="navbar bg-light">
            <div class="container-fluid">
                <form 
                onSubmit={handleSubmit}
                class="d-flex" 
                role="search">
                <input 
                    class="form-control me-2" 
                    type="search" 
                    placeholder="Search" 
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                    aria-label="Find" />
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
            </nav>
        </>
    )
}

export default SearchBar