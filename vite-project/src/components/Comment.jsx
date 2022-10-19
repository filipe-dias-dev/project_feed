import styles from "./Comment.module.css";
import { Trash, ThumbsUp } from 'phosphor-react' 

export function Comment() {
  return (
    <div className={styles.comment}>
      <img
        src="https://avatars.githubusercontent.com/u/97606816?v=4"
        alt="imagem__avatar"
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Filipe Dias</strong>
              <time
                title="19 de Outubro ás 07:50"
                dateTime="2022-10-19 07:50:00"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}
