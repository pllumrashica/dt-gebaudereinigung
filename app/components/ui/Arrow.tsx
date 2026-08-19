export function Arrow({ direction = "up" }: { direction?: "up" | "down" | "right" }) {
  const arrows = { up: "↗", down: "↓", right: "→" };
  return <span aria-hidden="true">{arrows[direction]}</span>;
}
