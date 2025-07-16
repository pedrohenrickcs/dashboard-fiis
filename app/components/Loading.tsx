interface LoadingProps {
  width?: number | string;
  height?: number | string;
  text?: string;
  className?: string;
}

export default function Loading({
  width = 24,
  height = 24,
  text,
  className = "",
}: LoadingProps) {
  return (
    <div className={`${text ? "flex flex-col gap-2" : ""} ${className}`.trim()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-spin text-settle-blue flex flex-col items-center justify-center min-h-screen"
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>

      {text && <p className="text-xs">{text}</p>}
    </div>
  );
}
