import React from 'react'
import styles from "../App.module.scss";
import NavBar from "../components/NavBar/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";

const MainLayout = ({children}) => {
  return (
    <div className={styles.appContainer}>
      <header className={styles.navContainer}>
        <NavBar />
      </header>
      <main className={styles.mainContainer}>
        {children}
      </main>
      <footer className={styles.footerContainer}>Footer</footer>
    </div>
  )
}

export default MainLayout