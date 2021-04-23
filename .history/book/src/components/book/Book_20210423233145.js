import React from "react";

// props - properties
// props are read only
let Card = (props) => {
  const details = props.details;
  return (
    <div className="card">
      {/* this is a comment */}
      {/* '/' in img is required */}
      <img src={details.imgSrc} alt={props.details.alt} />
      <h3>{details.name}</h3>
      <p>Phone: {details.phone}</p>
      <p style={{ display: details.email ? "block" : "none" }}>
        Email: {details.email}
      </p>
    </div>
  );
};

// in case some field is not sent to props,
// it will take the value from defaultProps
Card.defaultProps = {
  details: {
    imgSrc: "http://i.pravatar.cc/200?img=20",
    alt: "#",
    name: "not specified",
    phone: "not specified",
    email: "",
  },
};

export default Card;
