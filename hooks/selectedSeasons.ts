import { create } from 'zustand';

interface selectedSeasonsProps {
    seasons: string[];
    setSeasons: (data:string[]) => void;
}

const selectedSeasons = create<selectedSeasonsProps>((set) => ({
    seasons: [],
    setSeasons: (data) => set({ seasons: data}),
    })
)

export default selectedSeasons;