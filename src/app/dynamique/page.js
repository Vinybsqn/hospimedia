"use client"
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/app/components/commons/button";
const PageDynamique = () => {
    const [destination, setDestination] = useState("");
    const router = useRouter();
    const handleChange = (e) => {
        setDestination(e.target.value);
    }
    const handleLocalClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        router.push(`dynamique/slug/${destination}`);
    }
    return (
        <div>
            <h1> Page Dynamique </h1>
            <p> Création d'une route avec un morceau d'URL unique</p>
            <p>On les appel des "slug" </p>
            <div>
                <label>Choose your destination: </label>
                <input type="text" onChange={handleChange}></input>
            </div>
            <div>
                <Button handleClick={handleLocalClick}>
                    Navigation vers : {destination}
                </Button>
            </div>
        </div>
    );
}
export default PageDynamique;