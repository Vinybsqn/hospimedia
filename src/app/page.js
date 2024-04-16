import FirstClasseComponent from "@/app/components/firstClasseCompo";
import FirstFunctionCompo from "@/app/components/firstFunctionCompo";
import styles from "@/app/page.module.css";
import styles2 from "@/app/page2.module.css";

export default function Home() {
    return (
        <section>
            <h1> Mon super site web en react</h1>
            <h1 className={"title"}> Mon super site web en react</h1>
            <h2 className={styles.soustitre}>Composant Classe : </h2>
            <FirstClasseComponent />
            <h2 className={styles2.soustitre}>Composant fonction : </h2>
            <FirstFunctionCompo />
        </section>
    );
}