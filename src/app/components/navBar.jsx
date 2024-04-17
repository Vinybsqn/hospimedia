import Link from "next/link";

const NavBar = () => {
    return (
        <div className="nav">
            <Link href={"/exercice"}>Exercice</Link>
            <Link href={"/"}>Home</Link>
            <Link href={"/masuperroute"}>Ma super route</Link>
        </div>
    )
}

export default NavBar;