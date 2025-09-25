"use client";

import React from "react";

export default function BulletPoints({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={`list-disc list-outside ml-4 space-y-3 text-neutral-400 ${className}`}>
      {items.map((it, idx) => (
        <li key={idx} className="text-left">
          {it}
        </li>
      ))}
    </ul>
  );
}
