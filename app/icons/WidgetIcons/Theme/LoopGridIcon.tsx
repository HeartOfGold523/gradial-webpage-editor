type IconProps = { size?: number };

export default function LoopGridIcon({ size = 40 }: IconProps) {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      fill="currentColor"
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M145,5c2.5,0,4.5,1.8,4.9,4.1L150,10v90c0,2.5-1.8,4.5-4.1,4.9L145,105H15c-2.5,0-4.5-1.8-4.9-4.1 L10,100V10c0-2.5,1.8-4.5,4.1-4.9L15,5H145z M140,15H20v80h120V15z M145,145c2.8,0,5,2.2,5,5c0,2.5-1.8,4.5-4.1,4.9L145,155H15 c-2.8,0-5-2.2-5-5c0-2.5,1.8-4.5,4.1-4.9L15,145H145z M145,120c2.8,0,5,2.2,5,5c0,2.5-1.8,4.5-4.1,4.9L145,130H15c-2.8,0-5-2.2-5-5 c0-2.5,1.8-4.5,4.1-4.9L15,120H145z M232.1,56.9l0.2-0.8l0.1-0.9l0-0.9l-0.3-1.1l-0.3-0.6l-0.5-0.8l-20-25c-1.7-2.2-4.9-2.5-7-0.8 c-1.9,1.5-2.4,4.2-1.3,6.3l0.5,0.8L217.1,50h-44.6c-2.8,0-5,2.2-5,5c0,2.5,1.8,4.5,4.1,4.9l0.9,0.1h44.6l-13.5,16.9 c-1.7,2.2-1.4,5.3,0.8,7c1.9,1.5,4.6,1.4,6.4-0.1l0.6-0.7l20-25l0.4-0.5L232.1,56.9z M78.1,237.1l0.8,0.2l0.9,0.1l0.9,0l1.1-0.3 l0.6-0.3l0.8-0.5l25-20c2.2-1.7,2.5-4.9,0.8-7c-1.5-1.9-4.2-2.4-6.3-1.3l-0.8,0.5L85,222.1v-44.6c0-2.8-2.2-5-5-5 c-2.5,0-4.5,1.8-4.9,4.1l-0.1,0.9v44.6l-16.9-13.5c-2.2-1.7-5.3-1.4-7,0.8c-1.5,1.9-1.4,4.6,0.1,6.4l0.7,0.6l25,20l0.5,0.4 L78.1,237.1z" />
    </svg>
  );
}
