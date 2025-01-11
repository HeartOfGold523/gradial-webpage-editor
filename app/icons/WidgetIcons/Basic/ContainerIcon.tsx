type IconProps = { size?: number };

export default function ContainerIcon({ size = 40 }: IconProps) {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      fill="currentColor"
      viewBox="0 0 65.95 45"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M63,0a2.79,2.79,0,0,1,2.09.9A3,3,0,0,1,66,3v39a2.94,2.94,0,0,1-3,3H3a2.89,2.89,0,0,1-2.09-.86A2.89,2.89,0,0,1,0,42.05V3A3,3,0,0,1,.86.9,2.81,2.81,0,0,1,3,0Zm0,3H3v39H63Zm-48,3V9H9v3H6v-6ZM9,18v9H6V18Zm0,15v3h6v3H6v-6Zm21-27V9H21V6.05Zm0,30v3H21V36ZM45,6.05V9H36V6.05Zm0,30v3H36V36ZM60,6.05v6H57V9H51V6.05Zm0,27v6H51V36h6v-3Zm0-15v9H57V18Z" />
    </svg>
  );
}
