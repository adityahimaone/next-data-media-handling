import React from "react";
import Skeleton from "@mui/material/Skeleton";

function SkeletonLoader() {
  return (
    <Skeleton
      variant="rect"
      width="100%"
      height={400}
      style={{ borderRadius: "10px" }}
    />
  );
}

export default SkeletonLoader;
