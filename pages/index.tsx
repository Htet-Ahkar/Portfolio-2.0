import React, { useEffect } from "react";
import Head from "next/head";
//Redux
import { useDispatch } from "react-redux";
//Action
import { getBlogs } from "../actions/blogs";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Htet Ahkar</title>
        <link rel="icon" href="/icon.jpeg" />
      </Head>
      <h1>body</h1>
    </div>
  );
}
