
import { Outlet } from "react-router-dom";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import App from "../App";
import AppNav from "./AppNav";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      
      <Outlet />


      {/* <footer className={styles.footer}>
        <p className={styles.copyright}>Copyright {new Date().getFullYear()}  by WorldWise Inc</p>
      </footer>
      */}


    </div>
  )
}

export default Sidebar
