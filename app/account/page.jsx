"use client";
import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../configs/firebase";
import { useRouter } from "next/navigation"; // Import useRouter

const Account = () => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const router = useRouter(); // Call useRouter hook

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      let userCredential;
      if (isRegister) {
        if (password !== confirm) {
          setError("Passwords do not match.");
          return;
        }
        userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
      } else {
        userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
      }

      const idToken = await userCredential.user.getIdToken();

      // Call our API to set session cookie
      await fetch("/api/sessionLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken }),
      });
      router.push("/"); // Now router should be defined
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <div
      className="flex min-h-screen bg-cover bg-center items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1598514980816-4e1d6afda7e5?auto=format&fit=crop&w=1400&q=80')",
      }}
    >
      <div className="bg-black/70 backdrop-blur-sm p-8 rounded-2xl max-w-md w-full text-white">
        <h2 className="text-3xl font-serif font-bold text-amber-400 text-center mb-6">
          {isRegister ? "Create Account" : "Sign In"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md bg-white/10 focus:bg-white/20 outline-none"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-md bg-white/10 focus:bg-white/20 outline-none"
            />
          </div>
          {isRegister && (
            <div>
              <label className="block text-sm mb-1">Confirm Password</label>
              <input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                required
                className="w-full px-4 py-2 rounded-md bg-white/10 focus:bg-white/20 outline-none"
              />
            </div>
          )}
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-3 bg-amber-600 hover:bg-amber-700 rounded-md font-semibold transition"
          >
            {isRegister ? "Register" : "Log In"}
          </button>
        </form>
        <p className="text-center text-sm text-gray-300 mt-4">
          {isRegister ? "Already have an account?" : "Don’t have an account?"}{" "}
          <button
            onClick={() => {
              setIsRegister(!isRegister);
              setError("");
            }}
            className="text-amber-400 hover:underline"
          >
            {isRegister ? "Sign In" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Account;