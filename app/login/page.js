import React from "react";
import Input from "../components/Input.js";
import Label from "../components/Label.js";

const page = () => {
  return (
    <div className="bg-white rounded-md p-5 w-1/3 min-w-max shadow-sm">
      <h1 className="text-lg uppercase mb-2">Login</h1>
      <form action="">
        <div className="mb-5">
          <Label forInput="email">Email</Label>
          <Input type="email" id="email" name="email" />
        </div>

        <div className="mb-5">
          <Label forInput="Password">Password</Label>
          <Input type="password" id="password" name="pasword" />
        </div>

        <div className="mb-5 flex justify-between">
          <div className="flex items-center gap-2">
            <input
              className=" text-fuchsia-600 border-gray-300 focus:ring-0 rounded"
              type="checkbox"
              name="temember"
              id="remember"
            />
            <label htmlFor="remember" className=" select-none">
              Remember Me
            </label>
          </div>

          <a href="#">Forgot Password ?</a>
        </div>
      </form>
    </div>
  );
};

export default page;
