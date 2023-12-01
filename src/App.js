import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div>
      <Sum valueA={5} valueB={3} />
      <Sum valueA={52} valueB={8} />
      <Sum valueA={5623} valueB={2122} />
      <Sum valueA={9521} valueB={10} />
      <Sum valueA={76} valueB={34} />
    </div>
  );
}

function Sum({ valueA, valueB }) {
  return (
    <p>
      {valueA} + {valueB} = {valueA + valueB}
    </p>
  );
}
