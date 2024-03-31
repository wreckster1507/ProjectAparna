import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageContentOne from "./Page Contents/PageContentOne";
import PageContentTwo from "./Page Contents/PageContentTwo";
import PageContentThree from "./Page Contents/PageContentThree";
import PageContentFour from "./Page Contents/PageContentFour";
import PageContentFive from "./Page Contents/PageContentFive";
import PageContentSix from "./Page Contents/PageContentSix";

const Home = () => {
  return (
    <>
      {/* Carousal */}
      <div>
        <PageContentOne />
      </div>
      {/* Page content -2 */}
      <PageContentTwo />
      {/* Page content - 3 */}
      <PageContentThree />
      {/* Page Content - 4 */}
      <PageContentFour />
      {/* Page Content - 5 */}
      <PageContentFive />
      {/* Page content - 6 */}
      <PageContentSix />
    </>
  );
};

export default Home;
