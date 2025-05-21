import { ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai"
import styles from "./Modal.module.css"

export type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children?: ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
    if (!isOpen) return null;
    return (
        <div className={styles["modal-background"]} onClick={onClose}>
            <div className={styles["modal-container"]} onClick={e => e.stopPropagation()}>
                <AiOutlineClose className={styles["modal-close-button"]} onClick={onClose} />
                {children}
            </div>
        </div>
    )
}