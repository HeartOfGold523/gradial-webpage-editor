type IconProps = { size?: number };

export default function SlidesIcon({ size = 40 }: IconProps) {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      fill="currentColor"
      viewBox="0 0 39.28 18.78"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.13,6a.85.85,0,0,1-.25.61L2.05,9.39l2.83,2.83a.82.82,0,0,1,.25.59.86.86,0,0,1-.25.6.84.84,0,0,1-.62.24.84.84,0,0,1-.61-.24L.25,10A.78.78,0,0,1,0,9.41a.82.82,0,0,1,.25-.6l3.4-3.44a.84.84,0,0,1,.61-.24.84.84,0,0,1,.62.24A.87.87,0,0,1,5.13,6ZM32.21.25a.82.82,0,0,1,.26.61V18a.76.76,0,0,1-.26.57.85.85,0,0,1-.6.25H7.67a.79.79,0,0,1-.58-.25A.78.78,0,0,1,6.85,18V.86A.84.84,0,0,1,7.09.25.79.79,0,0,1,7.67,0H31.61A.85.85,0,0,1,32.21.25ZM30.75,1.72H8.53V17.1H30.75Zm8.53,7.69A.78.78,0,0,1,39,10l-3.4,3.41a.91.91,0,0,1-1.23,0,.86.86,0,0,1-.25-.6.82.82,0,0,1,.25-.59l2.83-2.83L34.4,6.6A.85.85,0,0,1,34.15,6a.87.87,0,0,1,.25-.62.91.91,0,0,1,1.23,0L39,8.81A.82.82,0,0,1,39.28,9.41Z" />
    </svg>
  );
}
