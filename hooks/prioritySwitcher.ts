import { create } from 'zustand';

interface prioritySwitcherProps {
    priorityState: string;
    onPrimary: () => void;
    onSecondary: () => void;
}

const prioritySwitcher = create<prioritySwitcherProps>((set) => ({
    priorityState: 'primary',
    onPrimary: () => set({ priorityState: 'primary'}),
    onSecondary: () => set({ priorityState: 'secondary'}),
})
)

export default prioritySwitcher;