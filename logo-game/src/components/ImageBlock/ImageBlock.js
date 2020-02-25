import React from "react";
import "./ImageBlock.css";

const ImageBlock = (props) => (
  <img className={"col-sm-2 col-xs-3 col-xs-10 pb-4 imageBlock rounded-circle" + (props.gameStatus == "2" ? " gameLost" : (props.gameStatus == "1" ? " gameWon" : ""))} src={process.env.PUBLIC_URL + "/images/" + props.imageFileName} alt={props.alt} height={props.imageBlockHeight} width={props.imageBlockWidth} onClick={props.clickHandler} />
);

export default ImageBlock;