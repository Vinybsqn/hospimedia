"use client"
import Button from "@/app/components/commons/button";
import {useState} from "react";
import StyleCarte from "@/app/Carte.css"

const ControlledFormulaire = () => {
    const [nom, setNom] = useState("");
    const [prenom, setPrenom] = useState("");
    const [age, setAge] = useState(0);

    const handleChangeNom = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setNom(e.target.value);
    }
    const handleChangePrenom = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setPrenom(e.target.value);
    }

    const handleChangeAge = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setAge(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log({"nom": nom, "prenom": prenom, "age": age});
    }

    return (
        <div>
            <form className="Carte" onSubmit={handleSubmit}>
                <h3 className="Carte">Controlled Formulaire</h3>
                <label>Nom: </label>
                <input type="text" value={nom} onChange={handleChangeNom}/>
                <label>Prénom: </label>
                <input type="text" value={prenom} onChange={handleChangePrenom}/>
                <label>Age: </label>
                <input type="number" value={age} onChange={handleChangeAge}/>
                <Button typeBtn="submit" handleClick={() => {
                }}>
                    Envoyer
                </Button>
            </form>
        </div>
    )
}

export default ControlledFormulaire;