import React from "react";

const DetailMovie = (props) => {
  console.log("PROPS: ", props);
  return (
    <div className="result-detail">
      <h3>{props.title}</h3>
      <p>{props.year}</p>
      <img src={props.img} />
    </div>
  );
};

export default DetailMovie;
