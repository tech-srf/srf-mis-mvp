import React from 'react'
import './search.css'


function SearchBar () {
    return (
        // <form action="/upload" method="POST" enctype="multipart/form-data">
        //     <div className="searchInputs col-lg-4 mt-2 mb-2">
        //     <input
        //         className="form-control"
        //         type="search"
        //         id="header-search"
        //         placeholder="Search"
        //         name="search"
        //         // onChange={this.handleTextSearch}
        //     />
        //     </div>
        // </form>
        <>
            <nav class="navbar bg-light">
            <div class="container-fluid">
                <form class="d-flex" role="search">
                <input class="form-control me-4" type="search" placeholder="Search for ...." aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Find</button>
                </form>
            </div>
            </nav>
        </>
    )
}

export default SearchBar