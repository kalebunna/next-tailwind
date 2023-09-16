import React from "react";

export default function Label({ forInput, children }) {
  return (
    <label
      htmlFor="{forInput"
      className="block mb-2 font-medium text-sm text-slate-500"
    >
      {children}
    </label>
  );
}
