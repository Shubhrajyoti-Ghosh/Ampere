'use client';
import React from 'react';
import Link from 'next/link';
import './NeonButton.css'; // Make sure this path is correct

export default function NeonButton({ href, children }) {
  return (
    <Link href={href} className="neon-button-link">
      <button className="neon-btn">
        {children}
        {[...Array(6)].map((_, i) => (
          <div key={i} className={`star-${i + 1}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 784.11 815.53"
              className="star-svg"
            >
              <path
                className="fil0"
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 
                207.96,29.37 371.12,197.68 392.05,407.74 
                20.93,-210.06 184.09,-378.37 392.05,-407.74 
                -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              ></path>
            </svg>
          </div>
        ))}
      </button>
    </Link>
  );
}
