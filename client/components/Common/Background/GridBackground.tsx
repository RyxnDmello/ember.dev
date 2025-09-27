"use client";

import { useRef, useState, useEffect, PropsWithChildren } from "react";

interface GridBackgroundProps extends PropsWithChildren {
  tileGap?: number;
  tileSize?: number;
  tileScale?: number;
  tileColor?: string;
  tileShadow?: string;
  tileRotation?: number;
  gridEffects?: boolean;
  gridHeight?: number;
  className?: string;
}

export default function GridBackground({
  tileGap = 0,
  tileSize = 20,
  tileScale = 1.25,
  gridHeight = 600,
  tileRotation = 45,
  gridEffects = true,
  tileColor = "#ffffff50",
  tileShadow = "0px 0px 5px 0px #ffffff25",
  children,
  className,
}: GridBackgroundProps) {
  const [rows, setRows] = useState<number>(0);
  const [columns, setColumns] = useState<number>(0);

  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const backgroundRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnterTile = (tile: HTMLDivElement | null) => {
    if (!gridEffects || !tile) return;

    tile.style.boxShadow = tileShadow;
    tile.style.backgroundColor = tileColor;
    tile.style.scale = `${Math.max(1, tileScale)}`;
    tile.style.rotate = `${Math.max(0, tileRotation)}deg`;
  };

  const handleMouseLeaveTile = (tile: HTMLDivElement | null) => {
    if (!gridEffects || !tile) return;

    setTimeout(() => {
      tile.style.scale = "1";
      tile.style.rotate = `${0}deg`;
      tile.style.boxShadow = "none";
      tile.style.backgroundColor = "";
    }, 200);
  };

  useEffect(() => {
    const current = backgroundRef.current;

    if (!current) return;

    const handleCalculate = () => {
      const { clientWidth, clientHeight } = current;

      setRows(() => {
        return Math.ceil((clientHeight + tileGap) / (tileSize + tileGap));
      });

      setColumns(() => {
        return Math.ceil((clientWidth + tileGap) / (tileSize + tileGap));
      });
    };

    const observer = new ResizeObserver(() => {
      handleCalculate();
    });

    observer.observe(current);

    handleCalculate();

    return () => observer.disconnect();
  }, [gridHeight, tileSize, tileGap]);

  useEffect(() => {
    tileRefs.current = tileRefs.current.slice(0, rows * columns);
  }, [rows, columns]);

  const total = rows * columns;

  return (
    <div
      className={`${className} relative overflow-hidden`}
      ref={backgroundRef}
      style={{
        height: gridHeight,
      }}
    >
      {children}

      <div
        className="absolute inset-0 grid items-center justify-center"
        style={{
          gap: tileGap,
          gridTemplateRows: `repeat(${rows}, ${tileSize}px)`,
          gridTemplateColumns: `repeat(${columns}, ${tileSize}px)`,
        }}
      >
        {Array.from({ length: total }, (_, index) => (
          <div
            className="border border-white/1 transition-all duration-200 ease-in-out"
            key={index}
            ref={(tile) => {
              tileRefs.current[index] = tile;
            }}
            style={{
              width: tileSize,
              height: tileSize,
            }}
            onMouseEnter={() => handleMouseEnterTile(tileRefs.current[index])}
            onMouseLeave={() => handleMouseLeaveTile(tileRefs.current[index])}
          />
        ))}
      </div>
    </div>
  );
}
