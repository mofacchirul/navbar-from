"use client";

import { useState } from "react";
import { Sininuser } from "../action/auth/SingIn";
import Userinfo from "@/componets/userinfo";


export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignIn = async (e) => {
    e.preventDefault();
   await Sininuser({email,password,redirect: false,})

  };

  return (
    <div className="flex justify-center items-center h-screen ">
      <form
        onSubmit={handleSignIn}
        className=" p-8 rounded shadow-md w-80"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border border-gray-300 p-2 w-full rounded"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border border-gray-300 p-2 w-full rounded"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white p-2 w-full rounded"
        >
          Sign In
        </button>
      </form>

      <Userinfo></Userinfo>
    </div>
  );
}
