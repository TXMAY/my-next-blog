import Head from "next/head";
import Image from "next/image";
import axious from "axios";
import { useEffect, useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [blogList, setBlogList] = useState([]);

  const fetchData = async () => {
    const result = await axious.get("/api/blog");
    setBlogList(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      블로그 목록
      {blogList.map((blog) => {
        return (
          <div className={styles.blog} key={blog.id}>
            <div>{blog.title}</div>
          </div>
        );
      })}
    </div>
  );
}
