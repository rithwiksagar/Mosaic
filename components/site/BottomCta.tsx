"use client";
import { motion, spring } from "motion/react";
import { useState } from "react";

export default function BottomCTA() {
  const [email, setEmail] = useState("");
  const [loader, setLoader] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  async function handleRequest(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);
    setLoader(true);

    try {
      const response = await fetch("/api/notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });

      if (response.status === 400) {
        setError(true);
        return;
      }

      const data = await response.json();

      if (data.success) {
        setSent(true);
      }
    } finally {
      setLoader(false);
    }
  }

  return (
    <section className="my-60">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-xl md:text-2xl font-medium tracking-tighter text-neutral-800 dark:text-neutral-200">
          Notify me
        </h2>

        <p className="mx-auto mt-2 max-w-xl text-base leading-7 text-neutral-500">
          Production-ready React and Next.js components for modern AI
          applications. Copy, customize, and ship.
        </p>

        <form
          onSubmit={handleRequest}
          className="mt-8 space-x-2 flex flex-col items-center justify-center md:flex-row gap-3 md:gap-1"
        >
          <motion.input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(false);
            }}
            whileHover={{ width: 300 }}
            whileFocus={{ width: 300 }}
            placeholder="you@gmail.com"
            className={`border ${error ? "border-red-400 bg-red-100 dark:border-red-400" : "border-neutral-200 bg-neutral-100"} p-3 rounded-2xl placeholder:text-neutral-300 outline-none dark:border-neutral-800 dark:placeholder:text-neutral-600 dark:bg-neutral-900`}
          ></motion.input>

          <motion.button
            whileHover={{
              width: 140,
              transition: { type: spring, bounce: 0.5 },
            }}
            className="rounded-2xl px-4 py-3 bg-blue-500 text-white cursor-pointer"
          >
            {loader && !error ? "Sending..." : sent ? "Sent" : "Notify me"}
          </motion.button>
        </form>
        <p className="mt-4 text-xs text-neutral-400">
          No spam. Just the launch.
        </p>
      </div>
    </section>
  );
}
