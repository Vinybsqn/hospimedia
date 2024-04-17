"use client";
import {useEffect, useState} from "react";
import Button from "@/app/components/commons/button";
import DeadCompo from "@/app/components/deadCompo";

const Lifecycle = () => {
    const [ok, setOk] = useState(false);

   useEffect(() => {
        console.log('Le composant est monté');
    });

    useEffect(() => {
        // effet de l'ecoute de mon parametre ok
        console.log('i change');
    }, [ok]);

    const handleClick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        setOk(!ok);
    }

    return (
        <div>
        <h1 className={"title"}>Mon composant Lifecycle</h1>
            <Button handleClick={handleClick}>
                Refresh
            </Button>
            { ok && (
                <div>
                    <h2>Apparition</h2>
                    <DeadCompo/>
                </div>
                )}
            { ok ? <h2>Solution 1</h2> : <h2>Solution 2</h2>}
        </div>
    );
}

export default Lifecycle;