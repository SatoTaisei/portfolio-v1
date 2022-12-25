import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.wrapper}>
            <span className={styles.copylight}>&copy; Sato Taisei 2022</span>
        </footer>
    );
};
