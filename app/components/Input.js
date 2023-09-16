import React from "react";

export default function Input({ type = "text", ...props }) {
  return (
    <input
      {...props}
      type={type}
      className="w-full border px-2 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-fuchsia-500 border-slate-100 focus:border-none shadow-sm "
    />
  );
}
