"use client";

import { useEffect, useRef } from "react";

import { DictionarySlidingRateLimiter } from "./utils/rateLimiter";
export default function RateLimiter() {
  const ref = useRef();

  useEffect(() => {
    //@ts-ignore
    ref.current = new DictionarySlidingRateLimiter({
      interval: 10000,
      max: 5,
    });
  }, []);
  return (
    <button
      onClick={() => {
        //@ts-ignore
        ref.current.limit("behzad").then((wasBlocked: any) => {
          console.log("wasBlocked", wasBlocked);
        });
      }}
    >
      check
    </button>
  );
}
