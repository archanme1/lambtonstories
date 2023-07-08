"use client";

import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
import { signOut, useSession } from "next-auth/react";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
];

const Navbar = () => {
  const session = useSession();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        lambtonStories
      </Link>
      <div className={styles.links}>
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" && (
          <>
            <h4>Hey {session?.data?.user.name} 👋🏼</h4>
            <button className={styles.logout} onClick={signOut}>
              LogOut
            </button>
          </>
        )}
      </div>
      <DarkModeToggle />
    </div>
  );
};

export default Navbar;
