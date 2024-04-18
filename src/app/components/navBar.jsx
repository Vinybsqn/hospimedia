import Link from "next/link";

const NavBar = () => {
    return (
        <div className="nav">
            <Link href={"/exercice"}>Exercice</Link>
            <Link href={"/"}>Home</Link>
            <Link href={"/masuperroute"}>Ma super route</Link>
            <Link href={"/characteres"}>Characters</Link>
            <Link href={"/dynamique"}>Dynamique</Link>
            <Link href={"/formulaire"}>Formulaire</Link>
            <Link href={"/callApi"}>Call API</Link>
        </div>
    )
}

export default NavBar;