import React from 'react'
import '../Styles/search.css' 

const SearchBar = ({userDetails, setSearchQuery}) => {
  const handleSubmit = (event)  => {
    event.preventDefault ()
  }
  const handleSearch = (event) => {
    if (!event.target.value) {
      setSearchQuery(userDetails)
    }
    const filteredData = (userDetails.filter(function(user){
      return (
        user.title.toLowerCase().includes(event.target.value.toLowerCase()) ||
        user.firstName.toLowerCase().includes(event.target.value.toLowerCase()) ||
        user.lastName.toLowerCase().includes(event.target.value.toLowerCase()) 

      )
    }))
    setSearchQuery (filteredData);
  }
  return (

      <form onSubmit={handleSubmit} className='search-container'>
        <input onChange={handleSearch} type='text' placeholder='search by name'/>  
      </form>
  )
}

export default SearchBar