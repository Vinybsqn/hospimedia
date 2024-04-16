export const CarteComponent = ({nom, image, age, ville}) => {
    return (
        <div className={"Carte"}>
            <h2>Nom: {nom}</h2>
            <h3>Ville: {ville}</h3>
            <p>Age: {age} ans</p>
            <img className={"img"} src={image} alt="Personnage"/>
        </div>
    );
}

export default CarteComponent;