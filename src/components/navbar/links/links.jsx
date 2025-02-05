"use client";
import React,{useState} from 'react'
import NavLink from "./navLink/navLink.jsx"
import styles from "./links.module.css"


    const links = [
        {
            title: "Homepage",
            path: "/"
        },

        {
            title: "About",
            path: "/about"
        },

        {
            title: "Contact",
            path: "/contact"
        },

        {
            title: "Blog",
            path: "/blog"
        },
    ]

    const Links = () => {
        const [open, setOpen] = useState(false) 
     
    //  TEMPORARY
    const session = true
    const isAdmin = true

  return (
    <div className={styles.container}>

    <div className={styles.links}>
      {links.map((link =>(
   <NavLink item={link} key={link.title}/>
)))}{
    session ? (
        <>
        {
            isAdmin && (
        <NavLink item={{title: "login", path: "/admin"}}/>
            )
        }
        <button className={styles.logout}>Logout</button>
        </>
    ) : (
        <NavLink item={{title: "login", path: "/login"}}/>
    )
}
    </div>
    <button className={styles.menuButton} onClick={()=> setOpen(prev => !prev)}>menu</button>
    {
        open && <div className={styles.mobileLinks}>
           {links.map((link) =>(
            <NavLink item={link} key={link.title}/>
           ))}  
        </div>
    }
    </div>

  )
}

export default Links
