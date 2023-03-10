import React from 'react';
import { LogoProps } from '.';

const ScalaLogo: React.FC<LogoProps> = ({ width = 64, height = 64 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3_108)">
        <path
          d="M13.5385 24.6154C13.5385 24.6154 50.4616 28.3077 50.4616 34.4615V19.6923C50.4616 19.6923 50.4616 13.5384 13.5385 9.84613V24.6154Z"
          fill="url(#paint0_linear_3_108)"
        />
        <path
          d="M13.5385 44.3077C13.5385 44.3077 50.4616 48 50.4616 54.1539V39.3846C50.4616 39.3846 50.4616 33.2308 13.5385 29.5385V44.3077Z"
          fill="url(#paint1_linear_3_108)"
        />
        <path
          d="M50.4616 -3.05176e-05V14.7692C50.4616 14.7692 50.4616 20.9231 13.5385 24.6154V9.84613C13.5385 9.84613 50.4616 6.15382 50.4616 -3.05176e-05Z"
          fill="url(#paint2_linear_3_108)"
        />
        <path
          d="M13.5385 29.5385C13.5385 29.5385 50.4616 25.8461 50.4616 19.6923V34.4615C50.4616 34.4615 50.4616 40.6154 13.5385 44.3077V29.5385Z"
          fill="url(#paint3_linear_3_108)"
        />
        <path
          d="M13.5385 64V49.2308C13.5385 49.2308 50.4616 45.5385 50.4616 39.3846V54.1539C50.4616 54.1539 50.4616 60.3077 13.5385 64Z"
          fill="url(#paint4_linear_3_108)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_3_108"
          x1="13.6015"
          y1="22.0672"
          x2="50.3946"
          y2="22.0672"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#656565" />
          <stop offset="1" stopColor="#010101" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3_108"
          x1="13.6015"
          y1="41.8018"
          x2="50.3946"
          y2="41.8018"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#656565" />
          <stop offset="1" stopColor="#010101" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_3_108"
          x1="13.6015"
          y1="12.3205"
          x2="50.3946"
          y2="12.3205"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9F1C20" />
          <stop offset="1" stopColor="#ED2224" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_3_108"
          x1="13.6015"
          y1="32.064"
          x2="50.3946"
          y2="32.064"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9F1C20" />
          <stop offset="1" stopColor="#ED2224" />
        </linearGradient>
        <linearGradient
          id="paint4_linear_3_108"
          x1="13.6015"
          y1="51.8006"
          x2="50.3946"
          y2="51.8006"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9F1C20" />
          <stop offset="1" stopColor="#ED2224" />
        </linearGradient>
        <clipPath id="clip0_3_108">
          <rect width={width} height={height} fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ScalaLogo;
