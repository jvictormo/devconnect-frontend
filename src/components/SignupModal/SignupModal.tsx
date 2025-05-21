import Modal, {ModalProps} from "../Modal/Modal";

type SignupModalProps = Omit<ModalProps, 'children'> & {
    onSuccess?: () => void;
};

export default function SignupModal({ isOpen, onClose }: SignupModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h1>Sign Up</h1>
            <input />
            <input />
            <input />
            <input />
        </Modal>
    )
}