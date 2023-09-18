import styles from './checkbox.module.scss';

const Checkbox = () => {
  return (
    <label className={styles.checkboxWrapper}>
      <input className={styles.checkboxInput} type="checkbox" />
      <span className={styles.checkboxMark}></span>
    </label>
  );
};
export default Checkbox;
