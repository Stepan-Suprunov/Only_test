import { InfoBlockLayoutPropsType } from './types';
import styles from './style.module.scss'

export function InfoBlockLayout({ children }: InfoBlockLayoutPropsType) {
    return (
        <div className={styles.infoBlockLayout}>
            {children}
        </div>
    );
};