import { Component } from "react";

/**
 * App-level error boundary. A render/effect throw anywhere in the tree shows a
 * branded, on-palette fallback instead of a blank white page. Dependency-free
 * (class component — the only way to catch render errors in React).
 */
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    if (import.meta.env.DEV) console.error("Axora UI error:", error, info);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div
        role="alert"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 100,
          display: "grid",
          placeItems: "center",
          padding: "24px",
          background: "var(--bg-0)",
          color: "var(--ink-1)",
          fontFamily: "var(--sans)",
        }}
      >
        <div
          style={{
            maxWidth: "460px",
            textAlign: "center",
            padding: "40px 32px",
            borderRadius: "20px",
            background: "var(--surface)",
            border: "1px solid var(--line)",
            boxShadow: "var(--shadow)",
          }}
        >
          <p
            style={{
              fontFamily: "var(--mono)",
              fontSize: "12px",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--accent)",
              margin: "0 0 14px",
            }}
          >
            Axora Technologies
          </p>
          <h1
            style={{
              fontFamily: "var(--display)",
              fontSize: "28px",
              lineHeight: 1.15,
              color: "var(--ink-0)",
              margin: "0 0 12px",
            }}
          >
            Something went wrong.
          </h1>
          <p style={{ fontSize: "15px", color: "var(--ink-2)", margin: "0 0 24px" }}>
            The page hit an unexpected error. A refresh usually fixes it — if not,
            reach us at{" "}
            <a
              href="mailto:support@axoratechnologies.in"
              style={{ color: "var(--accent)" }}
            >
              support@axoratechnologies.in
            </a>
            .
          </p>
          <button
            onClick={() => window.location.reload()}
            className="btn btn-primary"
          >
            Reload page
          </button>
        </div>
      </div>
    );
  }
}
