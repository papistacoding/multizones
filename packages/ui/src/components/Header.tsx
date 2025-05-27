"use client";

import Link from "next/link";
import { useState, useRef } from "react";

type SmartLinkProps = {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  basePath?: string;
};

export function SmartLink({ href, children, style, basePath }: SmartLinkProps) {
  const isSameZone = !!basePath && href.startsWith(basePath);

  if (isSameZone) {
    const zoneHref = href.slice(basePath.length) || "/";
    return (
      <Link href={zoneHref} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} style={style}>
      {children}
    </a>
  );
}
export default function Header({ basePath }: { basePath?: string }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (menu: string) => {
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
    setHovered(menu);
  };

  const handleMouseLeave = () => {
    hideTimeoutRef.current = setTimeout(() => {
      setHovered(null);
    }, 200);
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
        <a href="/" style={navItemStyle}>
          Home
        </a>

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
              <SmartLink
                href="/app-a/page1"
                basePath={basePath}
                style={linkStyle}
              >
                Page 1
              </SmartLink>
              <SmartLink
                href="/app-a/page2"
                basePath={basePath}
                style={linkStyle}
              >
                Page 2
              </SmartLink>
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
              <SmartLink
                href="/app-b/page1"
                basePath={basePath}
                style={linkStyle}
              >
                Page 1
              </SmartLink>
              <SmartLink
                href="/app-b/page2"
                basePath={basePath}
                style={linkStyle}
              >
                Page 2
              </SmartLink>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
