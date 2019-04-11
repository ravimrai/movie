import React from 'react';
import Card from './card';

const MainCard = ({ data }) => {
  //console.log(robots);
  const CardComponent = data.map((user, i) =>{
    return <Card key={i} path={data[i].poster_path} title={data[i].title} date={data[i].release_date} info={data[i].overview} />
  })
    return(
      <div>
        {CardComponent}
      </div>
    );
}

export default MainCard;
