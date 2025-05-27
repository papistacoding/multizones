"use client";

import Link from "next/link";
import { useState, useRef } from "react";

export default function Header() {
  const [hovered, setHovered] = useState<string | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    setHovered(menu);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setHovered(null);
    }, 200); // 200ms delay before hiding
  };

  const navItemStyle: React.CSSProperties = {
    fontWeight: 600,
    color: "#1f2937",
    cursor: "pointer",
    position: "relative",
  };

  const dropdownStyle: React.CSSProperties = {
    position: "absolute",
    top: "100%",
    marginTop: "0.5rem",
    backgroundColor: "#ffffff",
    boxShadow: "0px 2px 6px rgba(0,0,0,0.1)",
    padding: "0.5rem",
    borderRadius: "0.25rem",
    zIndex: 10,
  };

  const linkStyle: React.CSSProperties = {
    display: "block",
    textDecoration: "none",
    color: "#1f2937",
    padding: "0.25rem 0",
  };

  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 1.5rem",
        backgroundColor: "#f3f4f6",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <nav style={{ display: "flex", gap: "1.5rem" }}>
        <Link href="/" style={navItemStyle}>
          Home
        </Link>

        {/* App A */}
        <div
          onMouseEnter={() => handleMouseEnter("app-a")}
          onMouseLeave={handleMouseLeave}
          style={navItemStyle}
        >
          <span>App A</span>
          {hovered === "app-a" && (
            <div
              style={dropdownStyle}
              onMouseEnter={() => handleMouseEnter("app-a")}
              onMouseLeave={handleMouseLeave}
            >
              <a href="/app-a/page1" style={linkStyle}>
                Page 1
              </a>
              <Link href="/app-a/page2" style={linkStyle}>
                Page 2
              </Link>
            </div>
          )}
        </div>

        {/* App B */}
        <div
          onMouseEnter={() => handleMouseEnter("app-b")}
          onMouseLeave={handleMouseLeave}
          style={navItemStyle}
        >
          <span>App B</span>
          {hovered === "app-b" && (
            <div
              style={dropdownStyle}
              onMouseEnter={() => handleMouseEnter("app-b")}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/app-b/page1" style={linkStyle}>
                Page 1
              </Link>
              <Link href="/app-b/page2" style={linkStyle}>
                Page 2
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
