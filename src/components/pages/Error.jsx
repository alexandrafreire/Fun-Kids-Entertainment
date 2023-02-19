import { Link } from "react-router-dom";
import React from "react";

function Error() {
  return (
    <section className="error">
      <h2>404</h2>
      <p>page not found</p>
      <Link to="/">back home</Link>
    </section>
  );
}

export default Error;
