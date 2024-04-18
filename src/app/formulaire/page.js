import ControlledFormulaire from "@/app/components/controlledFormulaire";
import UncontrolledFormulaire from "@/app/components/uncontrolledFormulaire";


const PageFormulaire = () => {

    return (
        <div>
            <h2 className="Carte">Formulaire</h2>
            <ControlledFormulaire />
            <UncontrolledFormulaire/>
        </div>
    )
}

export default PageFormulaire;