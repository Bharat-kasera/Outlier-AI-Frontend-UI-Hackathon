import React from 'react';

const animations = [
  { name: 'pressDown1', duration: '2s'   },
  { name: 'pressDown2', duration: '3s'   },
  { name: 'pressDown3', duration: '4s'   },
  { name: 'pressDown4', duration: '2.5s' },
  { name: 'pressDown5', duration: '2.5s' },
  { name: 'pressDown6', duration: '3.5s' },
  { name: 'pressDown7', duration: '2.2s' },
  { name: 'pressDown8', duration: '3.2s' },
];

export default function AnimatedText({ text, className = '' }) {
  const letters = text.split('');
  return (
    <h1 className={`inline-block ${className}`}>
      {letters.map((char, idx) => {
        const anim = animations[idx % animations.length];
        return (
          <span
            key={idx}
            className="inline-block transition-transform duration-200"
            style={{ animation: `${anim.name} ${anim.duration} infinite` }}
          >
            {char}
          </span>
        );
      })}

      {/* keyframes */}
      <style>
        {`
          @keyframes pressDown1 {
            30%,40%,100% { transform: translateY(0) }
            35%          { transform: translateY(10px) }
          }
          @keyframes pressDown2 {
            70%,80%,100% { transform: translateY(0) }
            75%          { transform: translateY(10px) }
          }
          @keyframes pressDown3 {
            30%,40%,100% { transform: translateY(0) }
            35%          { transform: translateY(10px) }
          }
          @keyframes pressDown4 {
            40%,50%,100% { transform: translateY(0) }
            45%          { transform: translateY(10px) }
          }
          @keyframes pressDown5 {
            20%,30%,100% { transform: translateY(0) }
            25%          { transform: translateY(10px) }
          }
          @keyframes pressDown6 {
            60%,70%,100% { transform: translateY(0) }
            65%          { transform: translateY(10px) }
          }
          @keyframes pressDown7 {
            10%,20%,100% { transform: translateY(0) }
            15%          { transform: translateY(10px) }
          }
          @keyframes pressDown8 {
            35%,45%,100% { transform: translateY(0) }
            40%          { transform: translateY(10px) }
          }
        `}
      </style>
    </h1>
  );
}
