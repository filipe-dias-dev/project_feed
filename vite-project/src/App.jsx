/**
 * O mesmo nome que utilizamos na função do Post { button },
 * tem que ser o mesmo aqui no import { Button }.
 */

import { Header } from "../../components/Header";
import { Post } from "../../components/Post";
import { Sidebar } from "../../components/Sidebar";

/* Css arquivo App.module.css */
import styles from "./App.module.css";

/**
 * Importando o css
 */
import "../src/global.css";

/**
 * Componente nada mais é que uma função que retorna HTML,
 * Neste casso o App é um componente.
 * Todos os componentes do React precisa ter a extensão JSX.
 * JSX = JavaScript + XML
 */

/**
 * Nâo podemos ter varios elementos sem ter uma div em volta.
 * Por exemplo o post pode ter um author e content,
 * Podendo acessar passando na minha função no arquivo Post.
 */

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Filipe Rodrigues"
            content="É desenvolvedor Front End React"
          />
          <Post author="João" content="É designer interior" />
        </main>

      </div>
    </div>
  );
}
