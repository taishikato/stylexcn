"use client";

import { useEffect } from "react";
import { getAnalytics } from "./analytics";

export function DataFastInit() {
  useEffect(() => {
    void getAnalytics();
  }, []);

  return null;
}
