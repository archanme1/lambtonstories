"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });
      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>REGISTER</h1>
      <form className={styles.form} onSubmit={handleClick}>
        <input
          type="text"
          placeholder="enter your name"
          className={styles.input}
          required
          autoComplete="off"
        />
        <input
          type="email"
          placeholder="email"
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
        <button className={styles.button}>Register</button>
        {error && "SOmething went wrong!! failed to register!!"}
      </form>
      <span>OR</span>
      <Link href="/dashboard/login" className={styles.question}>
        Already a user! LOGIN
      </Link>
    </div>
  );
};

export default Register;
