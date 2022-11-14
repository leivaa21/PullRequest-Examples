import styles from './button.module.css';

export type buttonProps = {
  label: string
}

const Button = ({label}: buttonProps) => {
  return <button className={styles.button}>
    <p>{label}</p>
  </button>
}

export default Button;