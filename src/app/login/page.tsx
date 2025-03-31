"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      router.push("/home");
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-secondary">
      <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-lg">
        <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">Sign In</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="relative" st>
            <FaUser className="absolute left-3 top-4 text-gray-500" />
            <input
              type="text"
              placeholder="Username"
              className="w-full rounded-lg border border-gray-300 p-3 pl-10 focus:border-blue-500 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-3 top-4 text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-lg border border-gray-300 p-3 pl-10 focus:border-blue-500 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="w-full rounded-lg bg-primary px-6 py-3 text-white font-semibold shadow-md transition">
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have an account? <a href="#" className="text-primary hover:underline">Sign up</a>
        </p>
      </div>
    </div>
  );
}