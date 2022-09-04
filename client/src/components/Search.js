import React from 'react'

function Search() {
    return (
        <form>
            <div>
                <div className="input-group">
                    <input type="text" class="form-control" placeholder="Search"></input>
                    <button type="button" class="btn btn-success"><i class="bi-search"></i></button>
                </div>
            </div>
        </form>
        
    )
}

export default Search