import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Custom404() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
        padding: "2rem",
        backgroundColor: "var(--primary-background)",
      }}
    >
      <div>
        <h1 style={{ fontSize: "4rem", margin: "0" }}>404</h1>
        <h5 style={{ fontSize: "1.5rem", margin: "1rem 0" }}>
          Oops! The page you're looking for isn't here.
        </h5>
        <p style={{ fontSize: "1rem", marginBottom: "2rem" }}>
          It looks like the page you are trying to access doesn't exist or has
          been moved. Please check the URL or head back to our homepage.
        </p>
        <Button asChild>
              <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}