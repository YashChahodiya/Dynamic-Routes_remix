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
        <h1 className="text-emerald-600 font-extrabold text-2xl">
          {params?.name}
        </h1>
      </strong>
    </div>
  );
};

export default DrawerId;
