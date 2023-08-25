import styles from "./Button.module.css";
import { ReactComponent as AddIcon } from "../assets/add.svg";
import { ReactComponent as RemoveIcon } from "../assets/remove.svg";

export function Button({ type, onClick }) {
  return (
    <div>
      <button onClick={onClick} className={styles.button}>
        {type === "remove" && <RemoveIcon className={styles.buttonIcon} />}
        {type === "add" && <AddIcon className={styles.buttonIcon} />}
      </button>
    </div>
  );
}
