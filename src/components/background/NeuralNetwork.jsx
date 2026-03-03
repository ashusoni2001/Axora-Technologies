import { useMemo } from "react";
import { motion } from "framer-motion";

function seededRandom(seed) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };
}

export default function NeuralNetwork() {
  const { nodes, lines } = useMemo(() => {
    const rand = seededRandom(42);
    const nodeCount = 25;
    const nodeList = Array.from({ length: nodeCount }, (_, i) => ({
      id: i,
      cx: rand() * 1000,
      cy: rand() * 600,
      r: 1.5 + rand() * 2,
      dx: (rand() - 0.5) * 40,
      dy: (rand() - 0.5) * 40,
      duration: 15 + rand() * 15,
    }));

    const lineList = [];
    const threshold = 200;
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = nodeList[i].cx - nodeList[j].cx;
        const dy = nodeList[i].cy - nodeList[j].cy;
        if (Math.sqrt(dx * dx + dy * dy) < threshold) {
          lineList.push({ from: i, to: j });
        }
      }
    }

    return { nodes: nodeList, lines: lineList };
  }, []);

  return (
    <svg
      viewBox="0 0 1000 600"
      className="absolute inset-0 w-full h-full opacity-40 hidden md:block"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {lines.map((line, i) => (
        <line
          key={i}
          x1={nodes[line.from].cx}
          y1={nodes[line.from].cy}
          x2={nodes[line.to].cx}
          y2={nodes[line.to].cy}
          stroke="#3b82f6"
          strokeOpacity={0.12}
          strokeWidth={0.5}
        />
      ))}
      {nodes.map((node) => (
        <motion.circle
          key={node.id}
          cx={node.cx}
          cy={node.cy}
          r={node.r}
          fill="#3b82f6"
          fillOpacity={0.35}
          animate={{
            cx: [node.cx, node.cx + node.dx, node.cx],
            cy: [node.cy, node.cy + node.dy, node.cy],
          }}
          transition={{
            duration: node.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
}
