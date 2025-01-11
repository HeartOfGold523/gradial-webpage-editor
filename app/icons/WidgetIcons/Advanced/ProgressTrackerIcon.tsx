type IconProps = { size?: number };

export default function ProgressTrackerIcon({ size = 40 }: IconProps) {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      fill="none"
      viewBox="0 0 25 23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="3.57422"
        y="7.03906"
        width="17.8571"
        height="3.28571"
        rx="0.5"
        stroke="currentColor"
      />
      <path
        d="M15.5039 8.68164L5.26717 8.68164"
        stroke="currentColor"
        strokeLinecap="square"
      />
      <path
        d="M23.492 4.99591H1.508V20.4039C1.508 20.8519 1.652 21.2279 1.94 21.5319C2.228 21.8359 2.58 21.9879 2.996 21.9879H22.004C22.42 21.9879 22.772 21.8359 23.06 21.5319C23.348 21.2279 23.492 20.8519 23.492 20.4039V4.99591ZM23.492 3.98791V2.59591C23.492 2.14791 23.348 1.77191 23.06 1.46791C22.772 1.14791 22.42 0.987906 22.004 0.987906H2.996C2.58 0.987906 2.228 1.14791 1.94 1.46791C1.652 1.77191 1.508 2.14791 1.508 2.59591V3.98791H23.492ZM24.5 20.4039C24.5 20.8679 24.388 21.2999 24.164 21.6999C23.94 22.0999 23.636 22.4119 23.252 22.6359C22.868 22.8759 22.452 22.9959 22.004 22.9959H2.996C2.548 22.9959 2.132 22.8759 1.748 22.6359C1.364 22.4119 1.06 22.0999 0.836 21.6999C0.612 21.2999 0.5 20.8679 0.5 20.4039V2.59591C0.5 2.11591 0.612 1.68391 0.836 1.29991C1.06 0.899906 1.356 0.587906 1.724 0.363906C2.108 0.123906 2.532 0.00390625 2.996 0.00390625H22.004C22.468 0.00390625 22.884 0.123906 23.252 0.363906C23.636 0.587906 23.94 0.899906 24.164 1.29991C24.388 1.68391 24.5 2.11591 24.5 2.59591V20.4039ZM3.5 2.49991C3.5 2.62791 3.452 2.74791 3.356 2.85991C3.26 2.95591 3.14 3.00391 2.996 3.00391C2.852 3.00391 2.732 2.95591 2.636 2.85991C2.54 2.74791 2.492 2.62791 2.492 2.49991C2.492 2.37191 2.54 2.25991 2.636 2.16391C2.748 2.05191 2.868 1.99591 2.996 1.99591C3.124 1.99591 3.236 2.04391 3.332 2.13991C3.444 2.23591 3.5 2.35591 3.5 2.49991ZM5.492 2.49991C5.492 2.62791 5.444 2.74791 5.348 2.85991C5.252 2.95591 5.14 3.00391 5.012 3.00391C4.884 3.00391 4.764 2.95591 4.652 2.85991C4.556 2.74791 4.508 2.62791 4.508 2.49991C4.508 2.37191 4.556 2.25991 4.652 2.16391C4.748 2.05191 4.868 1.99591 5.012 1.99591C5.156 1.99591 5.268 2.04391 5.348 2.13991C5.444 2.23591 5.492 2.35591 5.492 2.49991ZM7.508 2.49991C7.508 2.62791 7.46 2.74791 7.364 2.85991C7.268 2.95591 7.148 3.00391 7.004 3.00391C6.86 3.00391 6.74 2.95591 6.644 2.85991C6.548 2.74791 6.5 2.62791 6.5 2.49991C6.5 2.37191 6.548 2.25991 6.644 2.16391C6.74 2.05191 6.86 1.99591 7.004 1.99591C7.148 1.99591 7.268 2.04391 7.364 2.13991C7.46 2.23591 7.508 2.35591 7.508 2.49991Z"
        fill="currentColor"
      />
    </svg>
  );
}
