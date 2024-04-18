import {getCharacteres} from "@/app/data/characteres";
import Link from "next/link";

const PageCharacteres = () => {
    const characteres = getCharacteres();
    return (
        <div>
            <h2>Page characteres</h2>
            <ul>
            {characteres.map( (charactere, index) =>{
                return (
                    <li key={index}>
                    <Link href={`/characteres/${charactere.id}`}>
                        Go to {charactere.nom} page
                    </Link>
                    </li>
                )
            })}
            </ul>
        </div>
    )
}

export default PageCharacteres;