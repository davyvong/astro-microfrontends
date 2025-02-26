import React from "react";
import merge from "lodash.merge";
import moment from "moment";
import "./App.css";

const App = () => {
  // Add lodash.merge and moment libraries to demonstrate chunk fetching
  console.log({
    merge: merge({ a: 'a' }, { b: 'b' }),
    moment: moment().toISOString(),
  });
  return (
    <section className="app-a">
      <h1>App a</h1>
    </section>
  );
}

export default App;
