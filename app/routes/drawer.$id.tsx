import { useParams } from "@remix-run/react";
import React from "react";

const DrawerId = () => {
  const params = useParams();
  console.log("params", params);
  return (
    <div>
      DrawerId ================={" "}
      <strong className="text-red-600 font-extrabold text-2xl">
        {params?.id} {">>>>>>>>>>"}{" "}
      </strong>
    </div>
  );
};

export default DrawerId;
