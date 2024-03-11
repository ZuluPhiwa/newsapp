import React, { useState } from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className=" shadow-lg p-2 bg-gray-50">
      <div className=" justify-center">
        <h1 className=" font-bold font-rahmuna text-xl md:text-2xl text-center">
          Web App Ye Tindzaba
        </h1>

        <div className=" justify-center mx-auto">
          <ul className="flex space-x-3 font-bold p-2 justify-center">
            <Link to="/newsapp/">
              <li>Home</li>
            </Link>
            <li>
              {" "}
              <Link to="/newsapp/sports">Sports</Link>
            </li>
            <li>
              {" "}
              <Link to="/newsapp/entertainment">Entertainment</Link>{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
