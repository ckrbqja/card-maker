import React from "react"
import styles from "./login.module.css"

const Login = (props) => {
    return (
        <container className={styles.form}>
            <section className={styles.header}>
                <img src="/favicon.ico" alt="img" className={styles.logo} />
                <h1>Business Card Maker</h1>
            </section>
            <section className={styles.body}>
                <h1>Login</h1>
                <div className={styles.btn}>
                    <button class={styles.eachBtn}>Google</button>
                    <button class={styles.eachBtn}>Gitub</button>
                </div>
            </section>
            <section className={styles.footer}>Code yout dream</section>
        </container>
    )
}

export default Login
