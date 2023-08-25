import { useState } from "react";
import { Counter, Button, Header } from './components'

import styles from "./App.module.css";

function App() {
  const [counterValue, setCounterValue] = useState(0);

  const counterUpdate = (amount) => {
    const newdValue = counterValue + amount;
    if (newdValue >= 0) {
      setCounterValue(newdValue);
    }
  };

  return (
    <div className="app">
      <Header title="COUNTER" />
      <div className={styles.counter}>
        <Counter value={counterValue} />
        <div className={styles.buttons}>
          <Button type={"remove"} onClick={() => counterUpdate(-1)} />
          <Button type={"add"} onClick={() => counterUpdate(+1)} />
        </div>
      </div>
    </div>
  );
}

export default App;
