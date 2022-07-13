import Head from "next/head";
import Image from "next/image";
import axious from "axios";
import { useEffect, useState } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/router";

export default function Home() {
  const [blogList, setBlogList] = useState([]);
  const router = useRouter();

  const fetchData = async () => {
    const result = await axious.get("/api/blog");
    setBlogList(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const clickBlog = (id) => {
    return () => {
      router.push(`/blog/${id}`);
    };
  };

  return (
    <div>
      블로그 목록
      {blogList.map((blog) => {
        return (
          <div
            className={styles.blog}
            key={blog.id}
            onClick={clickBlog(blog.id)}
          >
            <div>{blog.title}</div>
          </div>
        );
      })}
    </div>
  );
}
