import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-300 p-10 text-white grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 ">
      <div className="links">
        <h3>Useful links</h3>
        <ul className="flex flex-col gap-2 my-5">
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>
        </ul>
      </div>
      <div className="links">
        <h3>Useful links</h3>
        <ul className="flex flex-col gap-2 my-5">
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>
        </ul>
      </div>
      <div className="links">
        <h3>Useful links</h3>
        <ul className="flex flex-col gap-2 my-5">
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>
          <Link to="/about">About</Link>
        </ul>
      </div>
    </footer>
    // <footer className="bg-red-500">
    //   <div className="links">
    //     <h3 className="text-red-500">Heading</h3>
    //     <ul>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //       <li>
    //         <Link to="/about">About</Link>
    //       </li>
    //     </ul>
    //   </div>
    // </footer>
  );
};

export default Footer;
