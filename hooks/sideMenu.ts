import { create } from 'zustand';


interface SideMenuProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
    label?: string;
}

const useSideMenu = create<SideMenuProps>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true}),
    onClose: () => set({ isOpen: false}),
})
)

export default useSideMenu;