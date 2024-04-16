"use client";
import {useState} from "react";
import Button from "@/app/components/commons/button";

const Counter = () => {
    const [myCounter, setMyCounter] = useState(0);

    const handleLocalClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setMyCounter(myCounter + 1);
    }

    return (
        <div>
            <h2>Compteur : {myCounter}</h2>
            <Button handleClick={handleLocalClick}
                    children={"Incrémenter"}
            />
        </div>
    )
}

export default Counter;