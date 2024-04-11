import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageContentOne from "./Page Contents/PageContentOne";
import PageContentTwo from "./Page Contents/PageContentTwo";
import PageContentThree from "./Page Contents/PageContentThree";
import PageContentFour from "./Page Contents/PageContentFour";
import PageContentFive from "./Page Contents/PageContentFive";
import PageContentSix from "./Page Contents/PageContentSix";
import PageAddContentOne from "./Page Contents/PageAddContentOne";
import ScrollUpButton from "./Page Contents/ScrollUpButton";

const Home = () => {
  return (
    <>
      {/* Sroll Button Implementation */}
      <ScrollUpButton />
      {/* Add Content - 1 */}
      {/* Carousal */}
      <PageContentOne />
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

      {/* Scroll to Top Button */}
    </>
  );
};

export default Home;
