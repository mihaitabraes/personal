"use client";

interface Props {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  inView: boolean;
}

export default function SplitWords({ text, className, delay = 0, stagger = 0.04, inView }: Props) {
  return (
    <span className={className} style={{ display: "inline-block" }}>
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            clipPath: "inset(0 -100% 0 -100%)",
            verticalAlign: "bottom",
            marginRight: "0.22em",
            paddingBlock: "0.28em",
            marginBlock: "-0.28em",
            lineHeight: "inherit",
          }}
        >
          <span
            style={{
              display: "inline-block",
              transform: inView ? "translateY(0%)" : "translateY(110%)",
              opacity: inView ? 1 : 0,
              transition: `transform 0.9s cubic-bezier(0.22,1,0.36,1) ${delay + i * stagger}s, opacity 0.6s ease ${delay + i * stagger}s`,
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}
