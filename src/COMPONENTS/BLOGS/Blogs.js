import React from "react";

const Blogs = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl">
          Q. How will you improve the performance of a React Application?
        </h1>
        <mark>Ans.</mark>
        <p>
          1. Avoid using Index as Key for map. <br />
          2. Avoiding Props in Initial States. <br />
          3. Memoizing React components to prevent unnecessary re-renders.{" "}
          <br />
          4. Lazy loading images in React. <br />
          5. Code-splitting in React using dynamic import().
        </p>
        <h1 className="text-3xl mt-[3rem]">
          Q. What are the different ways to manage a state in a React
          application?
        </h1>
        <mark>Ans.</mark>
        <p>
          1. Local state. <br />
          2. Global state. <br />
          3. Server state. <br />
          4. URL state.
        </p>
        <h1 className="text-3xl mt-[3rem]">
          Q. How does prototypical inheritance work?
        </h1>
        <mark>Ans.</mark>
        <p>
          When we read a property from object, and it's missing, JavaScript
          automatically takes it from the prototype. In programming, this is
          called “prototypal inheritance”. And soon we'll study many examples of
          such inheritance, as well as cooler language features built upon it.
        </p>
        <h1 className="text-3xl mt-[3rem]">
          Q. You have an array of products. Each product has a name, price,
          description, etc. How will you implement a search to find products by
          name?
        </h1>
        <mark>Ans.</mark>
        <p>
          const findProducts = products.find(el => your searching name === el.name) <br />
          result: findProducts // it's return an object
        </p>
        <h1 className="text-3xl mt-[3rem]">
          Q. What is a unit test? Why should write unit tests?
        </h1>
        <mark>Ans.</mark>
        <p>
        Unit testing is an essential instrument in the toolbox of any serious software developer. However, it can sometimes be quite difficult to write a good unit test for a particular piece of code. Having difficulty testing their own or someone else’s code, developers often think that their struggles are caused by a lack of some fundamental testing knowledge or secret unit testing techniques.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
