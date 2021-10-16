import React from 'react'
import styles from '../styles/Header.module.css'

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <a href="/" >
                <img src="\assets\1200x630bb.png" alt="logo" className={styles.logo}></img>
                </a>
            </div>
        </div>
    )
}
