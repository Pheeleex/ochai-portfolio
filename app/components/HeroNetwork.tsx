"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

type NodeKey =
  | "field"
  | "mobile"
  | "operations"
  | "location"
  | "internal"
  | "data"
  | "compliance"
  | "automation"
  | "integrations";

type Node = {
  key: NodeKey;
  label: string;
  x: number;
  y: number;
};

type EventSignal = {
  label: string;
  path: string;
  activeNodes: NodeKey[];
};

const nodes: Node[] = [
  { key: "field", label: "FIELD", x: 20, y: 16 },
  { key: "mobile", label: "MOBILE", x: 49, y: 10 },
  { key: "operations", label: "OPERATIONS", x: 72, y: 21 },
  { key: "location", label: "LOCATION", x: 18, y: 50 },
  { key: "internal", label: "INTERNAL TOOLS", x: 48, y: 42 },
  { key: "data", label: "DATA", x: 74, y: 50 },
  { key: "compliance", label: "COMPLIANCE", x: 22, y: 80 },
  { key: "automation", label: "AUTOMATION", x: 50, y: 76 },
  { key: "integrations", label: "INTEGRATIONS", x: 72, y: 82 },
];

const signals: EventSignal[] = [
  {
    label: "Site verified",
    path: "M 18 50 C 19 38, 17 28, 20 16",
    activeNodes: ["location", "field"],
  },
  {
    label: "Report generated",
    path: "M 48 42 C 57 44, 66 47, 74 50 C 68 62, 61 71, 50 76",
    activeNodes: ["internal", "data", "automation"],
  },
  {
    label: "Task assigned",
    path: "M 49 10 C 60 12, 67 16, 72 21 C 57 40, 40 61, 22 80",
    activeNodes: ["mobile", "operations", "compliance"],
  },
  {
    label: "Route synced",
    path: "M 18 50 C 34 58, 46 66, 50 76 C 59 79, 66 81, 72 82",
    activeNodes: ["location", "automation", "integrations"],
  },
  {
    label: "Inventory updated",
    path: "M 48 42 C 57 45, 66 48, 74 50",
    activeNodes: ["internal", "data"],
  },
];

const staticConnections = [
  "M 20 16 C 31 16, 39 13, 49 10",
  "M 49 10 C 60 12, 67 16, 72 21",
  "M 20 16 C 18 29, 18 40, 18 50",
  "M 20 16 C 30 25, 39 35, 48 42",
  "M 49 10 C 49 24, 48 34, 48 42",
  "M 72 21 C 73 34, 74 43, 74 50",
  "M 18 50 C 31 50, 40 46, 48 42",
  "M 48 42 C 57 45, 66 48, 74 50",
  "M 18 50 C 18 63, 20 73, 22 80",
  "M 48 42 C 49 56, 50 68, 50 76",
  "M 74 50 C 74 63, 73 74, 72 82",
  "M 22 80 C 34 81, 43 79, 50 76",
  "M 50 76 C 59 79, 66 81, 72 82",
];

const HeroNetwork = () => {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % signals.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, [reduceMotion]);

  const activeSignal = signals[activeIndex];
  const activeNodeSet = useMemo(
    () => new Set(activeSignal.activeNodes),
    [activeSignal.activeNodes]
  );

  return (
    <div
      className="relative isolate w-full overflow-hidden border border-[#6f6250]/55 bg-[#15130f] p-3 sm:p-5"
      aria-label="Animated map of internal software capabilities"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(244,234,215,0.45) 1px, transparent 0)",
          backgroundSize: "20px 20px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-72 w-72 rounded-full border border-[#d9673b]/20"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-20 h-52 w-52 rounded-full border border-[#d9673b]/10"
      />

      <div className="relative z-10 flex items-center justify-between border-b border-[#4d4438] pb-3 font-mono text-[9px] uppercase tracking-[0.22em] text-[#8e816f] sm:text-[10px]">
        <span>System map / live signals</span>
        <span className="flex items-center gap-2 text-[#b8aa96]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#d9673b]" aria-hidden="true" />
          active
        </span>
      </div>

      <div className="relative mt-4 aspect-[1.1/1] min-h-[330px] sm:aspect-[1.35/1] sm:min-h-[380px] lg:min-h-[440px]">
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {staticConnections.map((path) => (
            <path
              key={path}
              d={path}
              fill="none"
              stroke="rgba(190,176,154,0.34)"
              strokeWidth="0.38"
              strokeDasharray="1.2 1.8"
              vectorEffect="non-scaling-stroke"
            />
          ))}

          <motion.path
            key={`${activeIndex}-${activeSignal.label}`}
            d={activeSignal.path}
            fill="none"
            stroke="#d9673b"
            strokeWidth="0.72"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0.2 }}
            animate={{ pathLength: 1, opacity: [0.3, 1, 0.55] }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 1.65, ease: "easeInOut" }
            }
          />
        </svg>

        {nodes.map((node) => {
          const isActive = activeNodeSet.has(node.key);
          const isCenter = node.key === "internal";

          return (
            <motion.div
              key={node.key}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              animate={
                reduceMotion
                  ? undefined
                  : isActive
                    ? { scale: [1, 1.035, 1] }
                    : { scale: 1 }
              }
              transition={{ duration: 0.7 }}
            >
              {isActive && (
                <motion.span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d9673b]/40"
                  initial={reduceMotion ? false : { scale: 0.45, opacity: 0.8 }}
                  animate={reduceMotion ? undefined : { scale: 1.7, opacity: 0 }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
                />
              )}

              <div
                className={`relative whitespace-nowrap border px-2 py-2 font-mono text-[8px] uppercase tracking-[0.14em] transition-colors duration-300 sm:px-3 sm:text-[9px] ${
                  isActive
                    ? "border-[#d9673b] bg-[#d9673b] text-[#17130e] shadow-[0_0_25px_rgba(217,103,59,0.15)]"
                    : isCenter
                      ? "border-[#d5c7b1] bg-[#eee2cf] text-[#17130e]"
                      : "border-[#746856] bg-[#171510]/95 text-[#e5d8c5]"
                }`}
              >
                {node.label}
              </div>
            </motion.div>
          );
        })}

        <motion.div
          key={`signal-label-${activeIndex}`}
          className="absolute bottom-[3%] left-1/2 z-20 -translate-x-1/2 border border-[#d9673b]/60 bg-[#17130e]/95 px-3 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-[#f0c3a8] shadow-[0_8px_30px_rgba(0,0,0,0.25)] sm:text-[10px]"
          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: reduceMotion ? 0 : 0.35 }}
        >
          <span className="mr-2 text-[#d9673b]">●</span>
          {activeSignal.label}
        </motion.div>
      </div>

      <div className="relative z-10 mt-4 border-t border-[#4d4438] pt-3">
        <div className="mb-2 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-[#918472] sm:text-[10px]">
          <span>Recent signals</span>
          <span>0{activeIndex + 1} / 0{signals.length}</span>
        </div>
        <div className="flex min-h-6 flex-wrap gap-x-4 gap-y-2 font-mono text-[9px] uppercase tracking-[0.12em] sm:text-[10px]">
          {signals.map((signal, index) => (
            <span
              key={signal.label}
              className={index === activeIndex ? "text-[#f09a72]" : "text-[#928673]"}
            >
              <span className="mr-1.5">•</span>
              {signal.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroNetwork;
