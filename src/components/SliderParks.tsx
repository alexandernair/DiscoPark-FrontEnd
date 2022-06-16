import React, { useState } from 'react'

import data from "../engine/static/parkData.json";
import ParkCard from './ParkCard';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import IconButton from '@mui/material/IconButton';


interface Park {
    name: string;
    code: string;
}
interface RankedPark {
    park: Park;
    score: number;
}

const SliderParks = (props: { rankings: RankedPark[] }) => {
    const rankings = props.rankings;
    const [current, setCurrent] = useState(0);
    const length = rankings.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }


    if (!Array.isArray(rankings) || length == 0) {
        return null;
    }


    return (
        <div>
            <section className="slider">
                <IconButton>
                    <ArrowCircleLeftIcon className="left-Arrow" />
                </IconButton>
                <IconButton>
                    <ArrowCircleRightIcon className="right-Arrow" />
                </IconButton>


                {rankings.slice(1)
                    .map((rankedPark: RankedPark) => (
                        <ParkCard code={rankedPark.park.code} />
                    ))}
            </section>
        </div>
    )
}

export default SliderParks