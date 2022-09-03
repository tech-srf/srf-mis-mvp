import React from 'react'

function Search() {
    return (
        <form>
            <div className="input-group">
            <input type="text" class="form-control" placeholder="Search"></input>
            <button type="button" class="btn btn-secondary"><i class="bi-search"></i></button>
        </div>
        </form>
        
    )
}

export default Search