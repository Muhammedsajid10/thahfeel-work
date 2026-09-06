import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";
import "./CustomCursor.css";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [cursorText, setCursorText] = useState("");
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
      return;
    }

    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseOver = (e) => {
      let target = e.target;
      
      while (target && target !== document.documentElement) {
        if (target.hasAttribute("data-cursor")) {
          const type = target.getAttribute("data-cursor");
          if (type === "project") {
            setCursorVariant("project");
            setCursorText("VIEW");
          } else if (type === "image") {
            setCursorVariant("image");
            setCursorText("EXPLORE");
          }
          return;
        }

        if (target.tagName === "A" || target.tagName === "BUTTON") {
          setCursorVariant("link");
          setCursorText("→");
          return;
        }

        target = target.parentNode;
      }
      
      setCursorVariant("default");
      setCursorText("");
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => window.removeEventListener("mouseover", handleMouseOver);
  }, [isTouchDevice]);

  const variants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: "var(--off-white)",
      mixBlendMode: "difference",
      opacity: 1
    },
    link: {
      width: 48,
      height: 48,
      backgroundColor: "var(--rust)",
      mixBlendMode: "normal",
      color: "var(--off-white)",
      opacity: 1
    },
    image: {
      width: 80,
      height: 80,
      backgroundColor: "var(--off-white)",
      mixBlendMode: "normal",
      color: "var(--charcoal)",
      opacity: 1
    },
    project: {
      width: 80,
      height: 80,
      backgroundColor: "var(--charcoal)",
      mixBlendMode: "normal",
      color: "var(--off-white)",
      border: "1px solid rgba(255, 255, 255, 0.2)",
      opacity: 1
    }
  };

  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const x = useSpring(0, springConfig);
  const y = useSpring(0, springConfig);

  useEffect(() => {
    x.set(position.x);
    y.set(position.y);
  }, [position, x, y]);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="custom-cursor"
      style={{
        x,
        y,
        translateX: "-50%",
        translateY: "-50%",
      }}
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {(cursorVariant === "link" || cursorVariant === "image" || cursorVariant === "project") && (
        <span className="cursor-text">{cursorText}</span>
      )}
    </motion.div>
  );
}
