"use client";
import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "100px auto",
};

const LoadingPage = ({ loading }) => {
  return (
    <ClipLoader
      color="#c69963"
      loading={loading}
      cssOverride={override}
      size={100}
      arial-label="Loading Spinner"
    />
  );
};

export default LoadingPage;
