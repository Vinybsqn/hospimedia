export async function getStaticProps() {
   const reponse = await fetch("http://localhost:3000/users")
    const data = await reponse.json();
    return {
        props: {
            data
        }
    }
}

