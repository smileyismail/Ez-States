import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <div className="mt-[10%] flex flex-col items-center justify-center gap-4">
      <h3 className="text-2xl font-semibold">Page Not Found </h3>
      <button
        onClick={goBackHandler}
        className="rounded-md bg-rose-600 px-6 py-3 font-medium text-neutral-100 transition-all hover:bg-rose-500"
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFoundPage;
