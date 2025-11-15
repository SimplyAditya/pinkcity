"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <h1 style={{ fontSize: "4rem", margin: 0 }}>500</h1>
      <p style={{ fontSize: "1.5rem", marginTop: "1rem" }}>
        Something went wrong!
      </p>
      <button
        onClick={reset}
        style={{
          marginTop: "2rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#FE5E85",
          color: "white",
          border: "none",
          borderRadius: "0.5rem",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Try again
      </button>
    </div>
  );
}
