const paths = {
  plus: "M12 5v14M5 12h14",
  minus: "M5 12h14",
  upload: "M12 16V4m-5 5 5-5 5 5M4 16v4h16v-4",
  download: "M12 4v12m-5-5 5 5 5-5M4 16v4h16v-4",
  reset: "M3 10a9 9 0 1 1 2 8M3 4v6h6",
  trash: "M3 6h18M9 6V3h6v3M5 6l1 15h12l1-15M10 10v7m4-7v7",
  arrow: "M4 12h16m-6-6 6 6-6 6",
  play: "m8 5 11 7-11 7Z",
  pause: "M8 5v14M16 5v14",
  step: "m5 5 10 7-10 7ZM19 5v14",
  stop: "M6 6h12v12H6Z",
  chevron: "m9 5 7 7-7 7",
  close: "m6 6 12 12M6 18 18 6",
  connect: "M8 12h8M3 8h5v8H3Zm13 0h5v8h-5Z",
  cursor: "m5 3 14 10-7 1-3 7Z",
  grid: "M3 3h7v7H3Zm11 0h7v7h-7ZM3 14h7v7H3Zm11 0h7v7h-7Z",
  list: "M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01",
  info: "M12 11v6M12 7h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0",
  check: "m5 12 4 4L19 6",
};
export default function Icon({ name, size = 16, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d={paths[name] || paths.info} />
    </svg>
  );
}
