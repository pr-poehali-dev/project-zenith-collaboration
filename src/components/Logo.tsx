export const Logo = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 120 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* 1337 text logo */}
      <text
        x="0"
        y="26"
        fontFamily="'Courier New', monospace"
        fontSize="28"
        fontWeight="bold"
        fill="white"
        letterSpacing="-1"
      >
        1337
      </text>
      {/* Orange accent underline */}
      <rect x="0" y="29" width="90" height="2" fill="hsl(var(--primary))" />
    </svg>
  );
};
