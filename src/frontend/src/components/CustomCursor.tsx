import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const outerPos = useRef({ x: 0, y: 0 });
  const [isDown, setIsDown] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (innerRef.current) {
        innerRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const animate = () => {
      outerPos.current.x += (pos.current.x - outerPos.current.x) * 0.12;
      outerPos.current.y += (pos.current.y - outerPos.current.y) * 0.12;
      if (outerRef.current) {
        outerRef.current.style.transform = `translate(${outerPos.current.x - 15}px, ${outerPos.current.y - 15}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    const onDown = () => setIsDown(true);
    const onUp = () => setIsDown(false);

    const onMouseEnterLink = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-hover]")) setIsHover(true);
    };
    const onMouseLeaveLink = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [data-hover]")) setIsHover(false);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onMouseEnterLink);
    document.addEventListener("mouseout", onMouseLeaveLink);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onMouseEnterLink);
      document.removeEventListener("mouseout", onMouseLeaveLink);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const outerSize = isDown ? 22 : isHover ? 44 : 30;

  return (
    <>
      <div
        ref={outerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: outerSize,
          height: outerSize,
          border: "2px solid #00C2FF",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          transition: "width 0.2s, height 0.2s, background 0.2s",
          willChange: "transform",
          background: isHover ? "rgba(0,194,255,0.1)" : "transparent",
        }}
      />
      <div
        ref={innerRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          background: "#00C2FF",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 99999,
          willChange: "transform",
          boxShadow: "0 0 6px #00C2FF",
        }}
      />
    </>
  );
}
