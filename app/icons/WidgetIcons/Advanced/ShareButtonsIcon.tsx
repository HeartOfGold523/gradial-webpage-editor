type IconProps = { size?: number };

export default function ShareButtonsIcon({ size = 40 }: IconProps) {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      fill="currentColor"
      viewBox="0 0 41 41"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M37.58,28.27a6.91,6.91,0,0,1,2.5,2.48,6.6,6.6,0,0,1,.92,3.4,6.76,6.76,0,0,1-.92,3.43,7,7,0,0,1-2.5,2.5,6.76,6.76,0,0,1-3.43.92,6.6,6.6,0,0,1-3.4-.92,6.91,6.91,0,0,1-2.48-2.5,6.66,6.66,0,0,1-.92-3.43,7,7,0,0,1,.41-2.25L12.5,24.27a7.06,7.06,0,0,1-2.43,2.24,6.48,6.48,0,0,1-3.22.84,6.67,6.67,0,0,1-3.43-.93,6.81,6.81,0,0,1-2.5-2.5,6.82,6.82,0,0,1,0-6.84,6.81,6.81,0,0,1,2.5-2.5,6.76,6.76,0,0,1,6.65-.11,6.91,6.91,0,0,1,2.43,2.22L27.76,9.1a7,7,0,0,1-.41-2.25,6.66,6.66,0,0,1,.92-3.43A6.91,6.91,0,0,1,30.75.92,6.6,6.6,0,0,1,34.15,0a6.76,6.76,0,0,1,3.43.92,7,7,0,0,1,2.5,2.5A6.76,6.76,0,0,1,41,6.85a6.6,6.6,0,0,1-.92,3.4,6.91,6.91,0,0,1-2.5,2.48,6.76,6.76,0,0,1-3.43.92,6.56,6.56,0,0,1-3.22-.82,6.79,6.79,0,0,1-2.43-2.21L13.24,18.24a6.56,6.56,0,0,1,.41,2.26,6.46,6.46,0,0,1-.41,2.25L28.5,30.38a6.79,6.79,0,0,1,2.43-2.21,6.56,6.56,0,0,1,3.22-.82A6.66,6.66,0,0,1,37.58,28.27ZM9.51,24.85A5.31,5.31,0,0,0,11.4,22.8v-.05A4.72,4.72,0,0,0,12,20.48a4.79,4.79,0,0,0-.57-2.28,5.31,5.31,0,0,0-1.89-2.05,4.83,4.83,0,0,0-2.64-.77,5,5,0,0,0-2.59.69,5.37,5.37,0,0,0-1.86,1.87,5,5,0,0,0,0,5.12,5.37,5.37,0,0,0,1.86,1.87,5,5,0,0,0,2.57.7A4.88,4.88,0,0,0,9.51,24.85ZM31.59,2.42a5.18,5.18,0,0,0-1.86,1.86A4.89,4.89,0,0,0,29,6.85,5.41,5.41,0,0,0,29.6,9.1v0a5.25,5.25,0,0,0,1.89,2,4.84,4.84,0,0,0,2.64.78,4.91,4.91,0,0,0,2.59-.7,5.26,5.26,0,0,0,1.86-1.86,4.86,4.86,0,0,0,.7-2.56,4.89,4.89,0,0,0-.7-2.57,5.26,5.26,0,0,0-1.86-1.86,5,5,0,0,0-5.13,0Zm5.13,36.16a5.29,5.29,0,0,0,1.86-1.87,5,5,0,0,0,0-5.12,5.37,5.37,0,0,0-1.86-1.87A5,5,0,0,0,34.13,29a4.84,4.84,0,0,0-2.64.78,5.25,5.25,0,0,0-1.89,2.05v0A5.41,5.41,0,0,0,29,34.15a4.83,4.83,0,0,0,.7,2.56,5.21,5.21,0,0,0,1.86,1.87,5,5,0,0,0,5.13,0Z" />
    </svg>
  );
}
