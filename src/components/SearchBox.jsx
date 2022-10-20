import React from 'react'

const SearchBox = ({ handleSearch }) => {
  return (
    <div>
        <input className="pa3 ba b--green bg-lightest-blue" type="search" placeholder='search robots' onChange={handleSearch}/>
    </div>
  )
}

export default SearchBox