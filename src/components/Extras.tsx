"use client";

import dynamic from "next/dynamic";

const StickyActions = dynamic(() => import("./StickyActions"), {
  ssr: false,
});
const ScrollToTop = dynamic(() => import("./ScrollToTop"), {
  ssr: false,
});

export default function Extras() {
  return (
    <>
      <StickyActions />
      <ScrollToTop />
    </>
  );
}
