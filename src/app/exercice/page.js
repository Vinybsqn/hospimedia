import StyleFooter from "@/app/Footer.css";
import StyleHeader from "@/app/Header.css";
import StyleCarte from "@/app/Carte.css";
import HeaderComponent from "@/app/components/HeaderComponent";
import FooterComponent from "@/app/components/FooterComponent";
import {CarteComponent} from "@/app/components/CarteComponent";

export default function exercice() {
    return (
        <>
            <h2>Ma page d'exercice</h2>
            <HeaderComponent />
            <CarteComponent
            nom="Basquin"
            ville="Lille"
            age="20"
            image={"https://www.svgrepo.com/show/509009/avatar-thinking-3.svg"}
            />
            <CarteComponent
                nom="Batman"
                ville="Gotham city"
                age="35"
                image={"https://images.all-free-download.com/images/thumbjpg/batman_7_132957.jpg"}
            />
            <FooterComponent />
        </>
    );
}
