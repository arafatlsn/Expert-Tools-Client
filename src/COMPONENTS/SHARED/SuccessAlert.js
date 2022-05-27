import React from "react";

const SuccessAlert = ({ message }) => {
  return (
    <div
      class="p-4 mb-4 mt-[1rem] text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
      role="alert"
    >
      <span class="font-medium">Success!</span> {message}
    </div>
  );
};

export default SuccessAlert;
