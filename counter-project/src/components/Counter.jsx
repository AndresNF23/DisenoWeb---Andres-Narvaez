import styles from "./Counter.module.css";

export function Counter({ value }) {
  const shadow = {
    textShadow:
      "1px 1px 3px rgba(0, 0, 0, 0.5), -1px -1px 3px rgba(255, 255, 255, 0.8)",
  };

  return (
    <div className={styles.container}>
      <h1 style={shadow}>{value}</h1>
    </div>
  );
}
