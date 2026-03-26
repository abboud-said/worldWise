import styles from "./Footer.module.css";
function Footer() {
  return (
    <div>
         <footer className={styles.footer}>
              <p className={styles.copyright}>Copyright {new Date().getFullYear()}  by WorldWise Inc</p>
            </footer>
    </div>
  )
}

export default Footer
