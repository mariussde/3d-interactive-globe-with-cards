"use client";

import React from "react";
import Link from "next/link";

const WebsiteTitle: React.FC = () => {
  return (
    <div className="absolute top-6 left-6 z-50">
      <Link href="/" className="block">
        <h1 
          className="text-2xl font-light italic tracking-tight cursor-pointer hover:opacity-70 transition-opacity duration-200"
          style={{ 
            fontFamily: 'PPEditorialNew-UltralightItalic',
            fontWeight: 200,
            letterSpacing: '-0.025em',
            color: '#2C231E'
          }}
          tabIndex={0}
          aria-label="Hind portfolio - Go to homepage"
        >
          Hind portfolio
        </h1>
      </Link>
    </div>
  );
};

export default WebsiteTitle;
