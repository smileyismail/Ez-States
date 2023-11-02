import React from "react";

import EstateItem from "../components/EstateItem";

const EstatesList = (props) => {
  const { estates } = props;

  if (estates.length <= 0) {
    return (
      <div>
        <h2>No Estates found...</h2>
      </div>
    );
  } else {
    return (
      <ul className="flex flex-wrap items-center justify-center gap-4">
        {estates.map((estate) => (
          <li key={estate.id}>
            <EstateItem item={estate} />
          </li>
        ))}
      </ul>
    );
  }
};

export default EstatesList;
