import React from 'react';
import styles from '../styles/styles.module.css';

export const ComponentRow = ({onChange, value, onDelete, onDisable, disabledStatus, signRow, onSignChanged}) => {

  return (
    <div>
      <select value={signRow.toString()} onChange={onSignChanged}>
        <option value="1">+</option>
        <option value="-1">-</option>
      </select>
      <input type="number" value={value} onChange={event => onChange(event.target.value)} disabled={disabledStatus}/>
      <button className={styles.btn} onClick={onDelete}>Delete</button>
      <button className={styles.btn} onClick={onDisable}>Disable</button>
    </div>
  )
}
