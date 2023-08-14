import { create } from 'zustand';

interface MainMenuPros {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    label?: string;
}

const MainMenuToggler = create<MainMenuPros>((set) => ({
    isOpen: true,
    onOpen: () => set({ isOpen: true}),
    onClose: () => set({ isOpen: false}),
})
)

export default MainMenuToggler;