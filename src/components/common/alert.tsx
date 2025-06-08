"use client";

import { Toaster } from "react-hot-toast";

export default function Alert() {
  return (
    <Toaster
      position="top-right"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options
        className: "",
        duration: 3000,
        removeDelay: 1000,
        style: {
          background: "#fff",
          color: "#363636",
        },

        // Default options for specific types
        success: {
          duration: 3000,
          iconTheme: {
            primary: "limegreen",
            secondary: "white",
          },
        },
        error: {
          duration: 3000,
          iconTheme: {
            primary: "red",
            secondary: "white",
          },
        },
      }}
    />
  );
}
