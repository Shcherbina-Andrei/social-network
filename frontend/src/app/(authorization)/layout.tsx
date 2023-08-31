import styles from './auth-layout.module.scss';

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.authWrapper}>{children}</div>;
};
export default AuthLayout;
