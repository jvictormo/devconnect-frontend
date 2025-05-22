import { useState } from "react";
import Modal, { ModalProps } from "../Modal/Modal";
import styles from "./SignupModal.module.css"

type SignupModalProps = Omit<ModalProps, 'children'> & {
    onSuccess?: () => void;
};

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
    const [modalPage, setModalPage] = useState(1);
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <img className={styles["signup-modal-logo"]} src="devconnect-logo.png" alt="devconnect-logo" />
            {modalPage === 1 ? (
                < div className={styles["signup-modal-forms"]}>
                    <h2>Sign Up</h2>
                    <input placeholder="Email" id="email"/>
                    <input placeholder="Username" id="username"/>
                    <input placeholder="Password" id="password"/>
                    <input placeholder="Confirm Password" id="confirmPassword"/>
                    <div className={styles["signup-modal-buttons-container"]}>
                        <button disabled>Previus</button>
                        <button onClick={() => setModalPage(2)}>Next</button>
                    </div>
                </div>
            ) : (
                <div className={styles["signup-modal-forms"]}>
                    <h2>Sign Up</h2>
                    <input placeholder="Name" id="name"/>
                    <input placeholder="Biography" id="biography"/>
                    <select>
                        <option value="" disabled>Technologies you have interest</option>
                        <option value="">Technologies you have interest</option>
                        <option value="">Technologies you have interest</option>
                    </select>
                    <div className={styles["signup-modal-buttons-container"]}>
                        <button onClick={() => setModalPage(1)}>Previus</button>
                        <button>Sign-up</button>
                    </div>
                </div>
            )}
        </Modal >
    )
}