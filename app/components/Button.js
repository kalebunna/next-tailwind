import React from "react";

export default function Button({ children, type }) {
  return (
    <button
      type={type}
      className="px-5 py-2 bg-fuchsia-700 text-white font-semibold rounded-xl shadow-sm uppercase hover:bg-fuchsia-800 hover:shadow-md border-none"
    >
      {children}
    </button>
  );
}
