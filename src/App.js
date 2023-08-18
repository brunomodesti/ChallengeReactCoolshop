import { ComponentRow } from './components/ComponentRow';
import React, {useState} from 'react';
import styles from './styles/styles.module.css';

function App() {
  const [values, setValues] = useState([0]);
  const [rowsStatuses, setRowsStatuses] = useState ([false]);
  const [rowsSign, setRowsSign] = useState ([1])

  function addRow () {
    const newValues = values.concat(0);
    setValues(newValues);
    const newRowsStatuses = rowsStatuses.concat(false);
    setRowsStatuses(newRowsStatuses);
    const newRowsSign = rowsSign.concat(1);
    setRowsSign(newRowsSign);
  };

  function inputChaged(newValue, rowIndex) {
    const newValues = [...values];
    newValues[rowIndex] = newValue;
    setValues(newValues);
  }

  function deleteRow (rowIndex) {
    const newValues = [...values];
    newValues.splice(rowIndex, 1);
    setValues(newValues);
    const newStatuses = [...rowsStatuses];
    newStatuses.splice(rowIndex, 1);
    setRowsStatuses(newStatuses);
    const newRowsSign = [...rowsSign];
    newRowsSign.splice(rowIndex, 1);
    setRowsSign(newRowsSign);
  }

  function disableRow (rowIndex) {
    const newStatuses = [...rowsStatuses];
    newStatuses[rowIndex] =! newStatuses[rowIndex];
    setRowsStatuses(newStatuses);
  }

  function signRow (rowIndex) {
    const changeSign = [...rowsSign];
    changeSign[rowIndex] *= -1;
    setRowsSign(changeSign);
  }

  function calculeResult(){
    let result = 0;
    values.forEach((value, index) => {
      if (rowsStatuses[index] == false) {
        result += Number(value) * rowsSign[index] ;
      }
    })
    return result;
  }

  return (
    <div className="App">
      <div>
        <h2>React Calculator</h2>
        <button className={styles.btn} onClick={ e => addRow()}> Add row</button>
      </div>

      {values.map((v, index) => (
        <ComponentRow
          value={v}
          onChange={newValue => inputChaged(newValue, index)}
          onDelete={() => deleteRow(index)}
          onDisable={() =>disableRow(index)}
          disabledStatus = {rowsStatuses[index]}
          signRow = {rowsSign[index]}
          onSignChanged={() => signRow(index)}
          key={index}
        />
      ))}

      <div>
        <p>Result: {calculeResult()}</p>
      </div>
    </div>
  );
        }


export default App;
