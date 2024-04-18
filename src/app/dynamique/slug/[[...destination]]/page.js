import Link from "next/link";

const MySlugPage = ({params: {destination}}) => {
    return (
        <div>
            <h2>Page slug</h2>
            <p>Destination: {destination}</p>
            <Link href="/dynamique">Retour</Link>
        </div>
    )

}
export default MySlugPage;