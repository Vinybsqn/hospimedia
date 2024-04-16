"use client";
import {useRef, useState} from "react";
import Button from "@/app/components/commons/button";

const DemoUseref = () => {
    let memoryCount = useRef(0);
    let [ok, setOk] = useState(false);
    const handleClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        memoryCount.current += 1;
        console.log(memoryCount.current);
    }
    const handleRefresh = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setOk(!ok);
    }

    return (
        <div>
            <h2>Mon composant UseRef</h2>
            <p>La valeur actuelle est à : {memoryCount.current}</p>
            <Button
                handleClick={handleClick}>
                Incrémenter</Button>
            <Button
                handleClick={handleRefresh}>
                Changer l'état</Button>
        </div>
    );
}

export default DemoUseref;