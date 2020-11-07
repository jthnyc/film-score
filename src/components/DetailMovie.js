import React from "react";

const DetailMovie = (props) => {
  // console.log("PROPS: ", props);
  return (
    <div className="result-detail">
      <h3>{props.title}</h3>
      <p>{props.year}</p>
      <img src={props.img} alt={props.title} />
    </div>
  );
};

export default DetailMovie;
