import styles from './style.module.scss'
import { TitlePropsType } from "./types";

export function Title({ title }: TitlePropsType) {

    return (
        <div className={styles.titleWrapper}>
            <div className={styles.stripe}/>
            <div className={styles.title}>
                {title}
            </div>
        </div>
    );
}