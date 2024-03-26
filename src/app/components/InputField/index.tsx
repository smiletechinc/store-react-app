import { useState } from 'react';
import styles from './inputfield.module.css'

export default function InputField(props: any) {
  const { placeholder, onChange } = props;
  const [value, setValue] = useState('');

  return(
      <input className={styles.input} placeholder={placeholder} style={{borderColor: value ? '#1c7962' : 'brown'}} onChange={(target) => { onChange(target.target.value); setValue(target.target.value); }}/>
  )
}