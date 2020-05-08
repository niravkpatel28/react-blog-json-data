import React from "react";
import "./paragraph.styles.css";
const Paragraph = (props) => (
  <div className="blog-text">
    <p> {props.body} </p>
    <p> {props.body} </p>
    <p> {props.body} </p>
  </div>
);
export default Paragraph;
