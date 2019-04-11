import React from 'react';
import Button from '@material-ui/core/Button';


const Card = (props) =>{
  const {path, title, date, info} = props;
  return(

    <div className='wrapper'>
      <div className='left'>
        <img alt='data' src={`https://image.tmdb.org/t/p/w500${path}`} />
      </div >
      <div className='left'>
          <div className='mar'>
            <div>
              <h2>{title}</h2>
            </div>
            <div>
              <p>{date}</p>
            </div>
            <div>
              <p>{info}</p>
            </div>
            <div >
              <Button color="inherit">Favourite </Button>
            </div>
         </div>
      </div>
    </div>
  );
}


export default Card;
