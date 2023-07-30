"use client";
import styles from "./page.module.css";
import useSWR, { mutate } from "swr";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import { UploadButton } from "@uploadthing/react";

const Dashboard = () => {
  const [selectedImg, setSelectedImg] = useState("");

  const router = useRouter();
  const session = useSession();

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data, mutate, error, isLoading } = useSWR(
    `/api/posts?username=${session?.data?.user.name}`,
    fetcher
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const desc = e.target[1].value;
    const content = e.target[2].value;
    const img = selectedImg;

    try {
      await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          desc,
          img,
          content,
          username: session.data.user.name,
        }),
      });
      mutate();
      e.target.reset();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`/api/posts/${id}`, {
        method: "DELETE",
      });
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  if (session?.status === "loading") {
    return <p>Loading...</p>;
  }

  if (session?.status === "unauthenticated") {
    router?.push("/dashboard/login");
  }

  if (session?.status === "authenticated") {
    return (
      <div className={styles.container}>
        <div className={styles.posts}>
          {isLoading
            ? "loading"
            : data?.map((post) => (
                <div className={styles.post} key={post._id}>
                  <div className={styles.imgContainer}>
                    <Image
                      src={post.img}
                      className={styles.img}
                      alt=""
                      width={200}
                      height={100}
                    />
                  </div>
                  <h2 className={styles.postTitle}>{post.title}</h2>
                  <span
                    className={styles.delete}
                    onClick={() => handleDelete(post._id)}
                  >
                    X
                  </span>
                </div>
              ))}
        </div>
        <form className={styles.new} onSubmit={handleSubmit}>
          <h1
            style={{
              textAlign: "center",
              marginBottom: "10px",
            }}
          >
            Add New Post
          </h1>
          <input type="text" placeholder="Title" className={styles.input} />
          <input type="text" placeholder="Desc" className={styles.input} />

          <textarea
            placeholder="Content"
            className={styles.textArea}
            cols="30"
            rows="10"
          ></textarea>
          <div className={styles.uploadButtonContainer}>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                setSelectedImg(res[0].fileUrl);
              }}
              onUploadError={(error) => {
                // Do something with the error.
                console.log(error);
              }}
            >
              <label className={styles.uploadButtonLabel}>
                Upload Image
                <span className={styles.uploadButtonOverlay} />
              </label>
            </UploadButton>
          </div>
          <button
            className={
              selectedImg
                ? `${styles.button}`
                : `${styles.additionalButtonName}`
            }
          >
            Send
          </button>
        </form>
      </div>
    );
  }
};

export default Dashboard;
