// src/types/react-namespace.d.ts
import type * as ReactNS from "react";

declare global {
  namespace React {
    type ReactNode = ReactNS.ReactNode;
    type ComponentType<P = unknown> = ReactNS.ComponentType<P>;
  }
}

export {};
