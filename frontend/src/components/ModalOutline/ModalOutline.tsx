import { ReactNode } from "react"
import { createPortal } from "react-dom"
import styles from "./ModalOutline.module.css"

interface ModalProps {
  open: boolean,
  onClose: () => void,
  children: ReactNode
}

export const Modal = ({ open, onClose, children }: ModalProps) => {
  if (!open) return null

  return createPortal(
    <>
      <div className={styles.modalOverlay} onClick={onClose} />
      <div className={styles.modal}>
        <button className={styles.X} id="ttt" onClick={onClose}>X</button>
        {children}
      </div>
    </>,
    document.getElementById('portal') as HTMLElement
  )
}