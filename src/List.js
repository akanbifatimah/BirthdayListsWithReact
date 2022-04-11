import React from 'react';

const List = ({people}) => {
  return (
    <>
      <article>
        {people.map((persons)=>{
        const{id, name, image, age} = persons;
          return(
            <article key={id} className='person'>
              <img src={image} alt='persons' />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
            </article>
          )
        })}
      </article>
    </>
  );
};

export default List;