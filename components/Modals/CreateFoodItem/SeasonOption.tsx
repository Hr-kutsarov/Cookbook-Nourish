'use client'

import { IconType } from 'react-icons'
import { twMerge } from 'tailwind-merge';
import selectedSeasons from '@/hooks/selectedSeasons'
import { useState } from 'react'

interface SeasonOptionType {
    icon: IconType;
    label: string;
    selected: boolean;
}

const SeasonOption: React.FC<SeasonOptionType> = ({
    icon: Icon, 
    label, 
    selected,
}) => {
    const handler = selectedSeasons();

    return (
        <span
        onClick={() => { }}
        className={twMerge(`flex flex-auto gap-2 px-2 py-1 rounded-md`, selected && 'bg-pink-600')}>
        <p><Icon />{label}</p>
        </span>
    )
}

export default SeasonOption;