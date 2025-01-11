type IconProps = { size?: number };

export default function LoopCarouselIcon({ size = 40 }: IconProps) {
  return (
    <svg
      width={`${size}px`}
      height={`${size}px`}
      fill="currentColor"
      viewBox="0 0 69.77 52.42"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m69.77,6.12v25.42c0,.38-.12.72-.36,1.01s-.55.48-.94.58h-7.49v3.02c0,.34-.12.65-.36.94-.24.29-.55.48-.94.58H10.37c-.34,0-.65-.12-.94-.36-.29-.24-.48-.55-.58-.94v-3.24H1.58c-.38,0-.72-.12-1.01-.36-.29-.24-.46-.55-.5-.94v-.29s-.07-4.25-.07-12.74V6.12c0-.38.12-.72.36-1.01.24-.29.55-.48.94-.58h7.49V1.51c0-.38.12-.71.36-.97.24-.26.55-.44.94-.54h49.32c.38,0,.72.12,1.01.36.29.24.46.53.5.86v.29s.07.5.07,1.51v1.51h7.2c.38,0,.72.12,1.01.36.29.24.48.55.58.94v.29ZM8.78,30.02V7.63H3.17v22.32h5.69l-.07.07Zm49.1,1.51V3.1H11.95v31.46h45.94v-3.02Zm-30.1,17.57c0,.91-.31,1.69-.94,2.34-.62.65-1.39.97-2.3.97s-1.68-.32-2.3-.97c-.62-.65-.94-1.43-.94-2.34s.31-1.68.94-2.3c.62-.62,1.39-.94,2.3-.94s1.68.31,2.3.94c.62.62.94,1.39.94,2.3Zm7.13-3.24c-.91,0-1.68.31-2.3.94-.62.62-.94,1.39-.94,2.3s.31,1.69.94,2.34c.62.65,1.39.97,2.3.97s1.68-.32,2.3-.97c.62-.65.94-1.43.94-2.34s-.31-1.68-.94-2.3c-.62-.62-1.39-.94-2.3-.94Zm10.37,0c-.91,0-1.68.31-2.3.94-.62.62-.94,1.39-.94,2.3s.31,1.69.94,2.34c.62.65,1.39.97,2.3.97s1.68-.32,2.3-.97c.62-.65.94-1.43.94-2.34s-.31-1.68-.94-2.3c-.62-.62-1.39-.94-2.3-.94ZM66.67,7.7h-5.69v22.32h5.69V7.63v.07Z" />
    </svg>
  );
}
