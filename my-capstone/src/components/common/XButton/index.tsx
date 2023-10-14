interface Props {
  width: string;
  height: string;
}
export function XButton({ width, height }: Props) {
  return (
    <svg width={width} height={height} role="img" aria-hidden="true">
      <path fill="none" d="M0 0h21v21H0z"></path>
      <path d="m12.12 10 4.07-4.06a1.5 1.5 0 1 0-2.11-2.12L10 7.88 5.94 3.81a1.5 1.5 0 1 0-2.12 2.12L7.88 10l-4.07 4.06a1.5 1.5 0 0 0 0 2.12 1.51 1.51 0 0 0 2.13 0L10 12.12l4.06 4.07a1.45 1.45 0 0 0 1.06.44 1.5 1.5 0 0 0 1.06-2.56Z"></path>
    </svg>
  );
}
