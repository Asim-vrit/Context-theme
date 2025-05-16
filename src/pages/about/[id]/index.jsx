import React from "react";
import { useParams } from "react-router";

function AboutInnerPage() {
  const params = useParams();
  console.log(params);
  return <div>{params.name}</div>;
}

export default AboutInnerPage;
