import styles from '../styles/Components.module.css'

export default function Header() {
    return (
        <div>
            <header className={styles.header}>
                <a href="/">
                    <h1>MitosInfo</h1>
                </a>
            </header>
        </div>
    )
}