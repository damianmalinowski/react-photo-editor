import React from "react";
import styles from "./app.scss";
import { AddNumberComponent } from 'react-photo-editor';
function App() {
  return (
    <div className={styles.app}>
      <h1>react-photo-editor example</h1>
      <AddNumberComponent a={2} b={3} />
    </div>
  );
}

export default App;
