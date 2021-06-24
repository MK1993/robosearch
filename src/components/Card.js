import React from 'react';

function Card({id,name,email}) {
  return (
    <div className="grow dib no-underline bg-light-green black-90 pa3 tc br3 ma2"> <div> <img src={`https://robohash.org/${id}?size=200x200`}alt='robots'></img> </div><h1 className='f4 lh-copy'>{name}</h1> <p>{email}</p></div>
  );
}

export default Card;