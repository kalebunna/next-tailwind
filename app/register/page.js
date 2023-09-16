import React from "react";
import Button from "../components/Button.js";
import Label from "../components/Label.js";
import Input from "../components/Input.js";
import Link from "next/link.js";
export default function page() {
  return (
    <div className="bg-white rounded-md p-5 w-1/3 min-w-max shadow-sm">
      <h1 className="text-lg uppercase mb-2">Register</h1>
      <form action="">
        <div className="mb-5">
          <Label forInput="email">Email</Label>
          <Input type="email" id="email" name="email" />
        </div>

        <div className="mb-5">
          <Label forInput="Password">Password</Label>
          <Input type="password" id="password" name="pasword" />
        </div>
        <div className="flex justify-between items-center">
          <Button type="submit">simpan</Button>

          <div>
            <span>
              Already Have Acount ?
              <Link
                href="/login"
                className="text-sky-700  font-medium"
                prefetch={false}
              >
                Login
              </Link>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
