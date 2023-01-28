import { MouseEvent } from "react"
import { DISCLAIMER } from "../../../../messages"
import { Link } from "../../../../components"
import styles from "./Footer.module.scss"

const viewDisclaimer = (e: MouseEvent<HTMLAnchorElement>) => {
  window.confirm(DISCLAIMER)
  e.preventDefault()
}

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link href="#" onClick={viewDisclaimer} target="_self">Disclaimer</Link>
      <Link href="https://github.com/chris56974/pethreon#attribution">Attribution</Link>
      <Link href="https://github.com/chris56974/pethreon/blob/main/LICENSE">License</Link>
    </footer>
  )
}