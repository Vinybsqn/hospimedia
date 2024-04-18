"use client"
import Button from "@/app/components/commons/button";
import StyleCarte from "@/app/Carte.css"

const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log({
        "nom": e.target.nom.value,
        "prenom": e.target.prenom.value,
        "age": e.target.age.value
    });
    const formData = new FormData(e.target);
    console.log({
        "nom": formData.get("nom"),
        "prenom": formData.get("prenom"),
        "age": formData.get("age")
    });
}

const UncontrolledFormulaire = () => {
    return (
        <div>
            <form className="Carte" onSubmit={handleSubmit}>
                <h3 className="Carte">UnControlled Formulaire</h3>
                <label>Nom: </label><input type="text" name="nom"/>
                <label>Prénom: </label><input type="text" name="prenom"/>
                <label>Age: </label><input type="number" name="age"/>
                <Button typeBtn="submit">Envoyer</Button>
                <Button typeBtn="reset">Effacer</Button>
            </form>
        </div>
    )
}

export default UncontrolledFormulaire;