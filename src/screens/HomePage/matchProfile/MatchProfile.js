import React from "react";
import HomeLayout from "../HomeLayout";
import DetailNavbar from "./DetailNavbar";
import MatchDetail from "./MatchDetail";

const MatchProfile = () => {
  return (
    <>
      <HomeLayout>
        <DetailNavbar />
        <MatchDetail />
      </HomeLayout>
    </>
  );
};

export default MatchProfile;
