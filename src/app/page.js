"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const Router = useRouter();
  const navigation = (link) => {
    Router.push(link);
  };
  return (
    <>
      <main>Home page</main>
      <button onClick={() => navigation("/login")}>Go to Login page</button>
      <br />
      <button onClick={() => navigation("/about")}>Go to About page</button>
    </>
  );
}
