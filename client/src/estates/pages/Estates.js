import React, { useState } from "react";

import EstatesList from "../components/EstatesList";

const dummy = [
  {
    id: 123,
    title: "asdf",
    seller: "smiley group",
    lat: 17.385044,
    lng: 78.486671,
    price: 123,
    image:
      "https://images.inc.com/uploaded_files/image/1920x1080/getty_164107628_970647970450057_56760.jpg",
  },
  {
    id: 12323,
    title: "asdf",
    seller: "smiley group",
    lat: 17.385044,
    lng: 78.486671,
    price: 123,
    image:
      "https://images.inc.com/uploaded_files/image/1920x1080/getty_164107628_970647970450057_56760.jpg",
  },
  {
    id: 1234,
    title: "asdf",
    seller: "smiley group",
    lat: 17.385044,
    lng: 78.486671,
    price: 123,
    image:
      "https://images.inc.com/uploaded_files/image/1920x1080/getty_164107628_970647970450057_56760.jpg",
  },
];

const Estates = () => {
  const [estates, setEstates] = useState();

  return (
    <div className="flex flex-col items-center justify-center">
      <EstatesList estates={dummy} />
    </div>
  );
};

export default Estates;
