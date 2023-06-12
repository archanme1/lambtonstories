"use client";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  if (session.status === "loading") {
    return <p>Loading....</p>;
  }

  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }

  const handleClick = (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    signIn("credentials", { email, password });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>LOGIN</h1>
      <form className={styles.form} onSubmit={handleClick}>
        <input
          type="email"
          className={styles.input}
          required
          autoComplete="off"
        />
        <input
          type="password"
          className={styles.input}
          required
          autoComplete="off"
        />
        <button className={styles.button}>Login</button>
      </form>
      <button
        className={styles.googleBtn}
        onClick={() => {
          signIn("google");
        }}
      >
        Login with Google
      </button>
      <span>OR</span>
      <Link href="/dashboard/register" className={styles.question}>
        New User! REGISTER
      </Link>
    </div>
  );
};

export default Login;
