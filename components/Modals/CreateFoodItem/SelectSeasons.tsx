'use client'

import { PiFlowerTulipBold, PiSunBold, PiCloudRainBold, PiSnowflakeBold} from 'react-icons/pi'
import selectedSeasons from '@/hooks/selectedSeasons'

import SeasonOption from "./SeasonOption";

const SelectSeasons: React.FC = () => {

    const seasonsHandler = selectedSeasons();


    return (
        <>
            <label>Seasons</label>
        </>
    )
}

export default SelectSeasons;