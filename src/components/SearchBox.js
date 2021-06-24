import React from 'react';
function SearchBox({searchrobot}) {
    return (
        <input className="ba b--light-green bg-light-green pa3" type="search" placeholder="search robots" onChange={searchrobot}/>
    );
}
  
export default SearchBox;