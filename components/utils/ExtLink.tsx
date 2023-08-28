import React from "react";

export default function ExtLink({
  children,
  href,
}: React.PropsWithChildren<{ href: string }>) {
  return (
    <a
      href={href}
      className="text-onedark-blue"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
