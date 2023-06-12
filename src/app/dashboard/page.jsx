"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  // using USING USEEFFECT

  // const [data, setData] = useState([]);
  // const [error, setError] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   const getData = async () => {
  //     setIsLoading(true);
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
  //       cache: "no-store",
  //     });
  //     if (!res.data) {
  //       setError(true);
  //     }

  //     setIsLoading(false);
  //     const fetchedData = await res.json();
  //     setData(fetchedData);
  //   };
  //   getData();
  // }, []);

  // USING 3RD PART FRAMEWORK SWR - OR WE CAN USE REACT QUERY

  // const fetcher = (...args) => fetch(...args).then((res) => res.json());

  // const { data, error, isLoading } = useSWR(
  //   "https://jsonplaceholder.typicode.com/posts/",
  //   fetcher
  // );

  // console.log(data);

  const router = useRouter();
  const session = useSession();
  console.log(session);

  if (session.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (session.status === "authenticated") {
    return <div className={styles.container}>Dashboard</div>;
  }
};

export default Dashboard;
