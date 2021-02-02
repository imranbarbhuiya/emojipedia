import React from "react";
import Term from "./Term";
import emojipedia from "../emojipedia.js";

function Terms(term) {
  return (
    <Term
      key={term.id}
      emoji={term.emoji}
      name={term.name}
      meaning={term.meaning}
    />
  );
}

function Dictionary() {
  return <dl className="dictionary">{emojipedia.map(Terms)}</dl>;
}

export default Dictionary;
