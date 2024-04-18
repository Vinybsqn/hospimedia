"use client"
import {useEffect, useState} from "react";
import StyleCarte from "@/app/Carte.css"

const FetchData = () => {

    const [listItems, setListItems] = useState([]);

   /* useEffect(() => {
        fetch("http://localhost:3000/users")
            .then(getReponse, getError)
            .then(data => setListItems(data));
    }, []);

    const getReponse = (reponse) => {
        // peut etre positif
        if (reponse.ok) {
            return reponse.json();
        }
        // peut etre negatif
        return [];
    }

    const getError = (error) => {
        console.log(error);
    }
    */

    useEffect(() => {
        setListItems(data);
    }, []);

    return (
        <div>
            <h2 className={"Carte"}>Fetch Data</h2>
            {listItems && listItems.map( (item, index) => {
        return (
            <div key={index}>
                contenu de l'item: {item.name}
            </div>
        )})}
        </div>
    )
}

export default FetchData;