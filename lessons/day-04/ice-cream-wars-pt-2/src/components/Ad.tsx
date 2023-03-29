import React from 'react'
// consumes the styles from AdDesigner since its imported there.

interface AdProps {
    className: string;
    fontSize: number;
    iceCreamName: string;
}
export default function Ad({ className, fontSize, iceCreamName}: AdProps) {
  return (
    <div className={className}>
        <p>Vote for</p>
        <p style={{ fontSize: fontSize }} className="flavor">{iceCreamName}</p>
      </div>
  )
}
