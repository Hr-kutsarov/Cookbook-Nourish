import { create } from 'zustand';


interface ModalProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    label?: string;
}

const useLoginModal = create<ModalProps>((set) => ({
    isOpen: true,
    onOpen: () => set({ isOpen: true}),
    onClose: () => set({ isOpen: false}),
}))

export default useLoginModal;