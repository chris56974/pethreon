import { useEffect, useState, useRef } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowSVG } from "../../svgs"
import styles from "./CircleC.module.scss"

interface CircleCProps {
  duration: number,
  delay: number,
  textDelay: number
}

export const CircleC = ({ delay, duration, textDelay }: CircleCProps) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [disabled, setDisabled] = useState(true)
  const ref = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (location.pathname === "/") {
      ref.current?.style.setProperty("top", "var(--top-login)")
      ref.current?.style.setProperty("left", "var(--left-login)")
      ref.current?.style.setProperty("width", "var(--width-login)")
      ref.current?.style.setProperty("height", "var(--height-login)")
      ref.current?.style.setProperty("background-color", "var(--primary)")
      ref.current?.style.setProperty("border-radius", "50%")
      ref.current?.style.setProperty("color", "transparent")
      ref.current?.style.setProperty("fill", "transparent")
      ref.current?.style.setProperty("--animation-duration", `${duration}s`)
      ref.current?.style.setProperty("--animation-delay", `${delay}s`)
      ref.current?.style.setProperty("--text-delay", `0s`)
      setDisabled(true)
    }
    if (location.pathname === "/contribute") {
      ref.current?.style.setProperty("top", "var(--top-contribute)")
      ref.current?.style.setProperty("left", "var(--left-contribute)")
      ref.current?.style.setProperty("width", "var(--width-contribute)")
      ref.current?.style.setProperty("height", "var(--height-contribute)")
      ref.current?.style.setProperty("background-color", "var(--primary)")
      ref.current?.style.setProperty("border-radius", "0%")
      ref.current?.style.setProperty("border-bottom-left-radius", "50px")
      ref.current?.style.setProperty("color", "var(--text)")
      ref.current?.style.setProperty("fill", "var(--text)")
      ref.current?.style.setProperty("--outline-color", "var(--primary)")
      ref.current?.style.setProperty("--text-delay", `${textDelay}s`)
      setDisabled(false)
    }
    if (location.pathname === "/create") {
      ref.current?.style.setProperty("top", "var(--top-create)")
      ref.current?.style.setProperty("left", "var(--left-create)")
      ref.current?.style.setProperty("width", "var(--width-create)")
      ref.current?.style.setProperty("height", "var(--height-create)")
      ref.current?.style.setProperty("background-color", "var(--secondary)")
      ref.current?.style.setProperty("border-radius", "0%")
      ref.current?.style.setProperty("border-bottom-left-radius", "50px")
      ref.current?.style.setProperty("color", "var(--text)")
      ref.current?.style.setProperty("fill", "var(--text)")
      ref.current?.style.setProperty("--outline-color", "var(--secondary)")
      ref.current?.style.setProperty("--text-delay", `${textDelay}s`)
      setDisabled(false)
    }
  }, [location, duration, delay, textDelay])

  function navigateToNewPage() {
    location.pathname === "/contribute"
      ? navigate("/create")
      : navigate("/contribute")
  }

  return (
    <motion.button
      className={styles.circleC}
      disabled={disabled}
      ref={ref}
      onClick={navigateToNewPage}
      animate={
        location.pathname === "/" ?
          {
            scale: 1.25,
            transition: {
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse"
            }
          }
          : {}
      }
    >
      {location.pathname === "/create" ? "Donate" : "Create"}
      < ArrowSVG />
    </motion.button >
  )
}