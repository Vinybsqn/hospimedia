import styles from "./page.module.css";
import FirstClasseComponent from "@/app/components/firstClasseCompo";
import FirstFunctionCompo from "@/app/components/firstFunctionCompo";

export default function Home() {
  return (
      <section>
        <h1> Mon super site web en react</h1>
          <FirstClasseComponent />
          <FirstFunctionCompo />
      </section>
  );
}
