type IconProps = { size?: number };

export default function DividerIcon({ size = 40 }: IconProps) {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      fill="currentColor"
      viewBox="0 0 39.28 39.28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M.25,15.13A.83.83,0,0,1,0,14.51a.81.81,0,0,1,.25-.61.81.81,0,0,1,.61-.25H38.42a.79.79,0,0,1,.61.27.83.83,0,0,1,0,1.19.79.79,0,0,1-.61.27H.86A.85.85,0,0,1,.25,15.13Zm38.78,9a.83.83,0,0,1,0,1.19.79.79,0,0,1-.61.27H.86a.85.85,0,0,1-.61-.25A.83.83,0,0,1,0,24.76a.81.81,0,0,1,.25-.61.81.81,0,0,1,.61-.25H38.42A.79.79,0,0,1,39,24.17ZM13.74,8a.83.83,0,0,1,.08-.87L18.94.33a.91.91,0,0,1,1.4,0l5.12,6.84a.73.73,0,0,1,.08.87.88.88,0,0,1-.78.49H14.51A.88.88,0,0,1,13.74,8ZM25.54,31.2a.85.85,0,0,1,.06.45,1,1,0,0,1-.14.45L20.34,39a.91.91,0,0,1-1.4,0L13.82,32.1a1.09,1.09,0,0,1-.15-.45,1,1,0,0,1,.07-.45.81.81,0,0,1,.77-.45H24.76A.82.82,0,0,1,25.54,31.2ZM16.24,6.81H23l-3.4-4.56ZM23,32.43h-6.8L19.64,37Z" />
    </svg>
  );
}
