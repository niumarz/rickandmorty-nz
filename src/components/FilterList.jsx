import React from 'react'


const FilterList = ({suggestedList}) => {


    const handleClick = id => setSearchInput (id)    
    
  return (
    <ul>
        {
            suggestedList?.map(location => (
                <li onClick={handleClick} key={location.id}>{location.name}</li>
            ))
        }
    </ul>

  )
}

export default FilterList