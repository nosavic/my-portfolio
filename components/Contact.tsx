"use client";

import React, { useState } from "react";
import { themeAtom } from "../atom";
import { useAtom } from "jotai";

export default function Contact() {
  const [theme, setTheme] = useAtom(themeAtom);
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Something went wrong");
      }

      setSuccess("Your message has been sent successfully!");
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div
        className={`max-w-lg mx-auto p-4 ${
          theme ? "bg-white text-white" : "bg-black text-black"
        } rounded-lg`}
      >
        <h2
          className={`text-2xl font-bold  ${
            theme ? "text-black" : "text-white"
          }  mb-4`}
        >
          Contact Me
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className={`block ${theme ? "text-black" : "text-white"}`}
            >
              Name
            </label>
            <input
              style={{ backgroundColor: theme ? "black" : "white" }}
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className={`block ${theme ? "text-black" : "text-white"}`}
            >
              Email
            </label>
            <input
              style={{ backgroundColor: theme ? "black" : "white" }}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className={`block ${theme ? "text-black" : "text-white"}`}
            >
              Message
            </label>
            <textarea
              style={{ backgroundColor: theme ? "black" : "white" }}
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2 rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Send Message
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
        </form>
      </div>
    </div>
  );
}
