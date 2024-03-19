import React from "react";
import Link from "next/link";
// Страница не сделана
const NewIn = () => {
  return (
    <section className="new-in">
      <div className="container">
        <h3>This is new-in page</h3>
        <Link href='./Modiweek'> Modiweek</Link>
      </div>
    </section>
  );
};

export default NewIn;