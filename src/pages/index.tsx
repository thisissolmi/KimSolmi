"use client";

import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const content =
    "안녕하세요.\n제 이름은 김솔미 입니다.\n소통하는 개발자가 되고 싶어요!";

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index >= content.length) return;

    const interval = setInterval(() => {
      setText((prev) => prev + content[index]);
      setIndex((prev) => prev + 1);
    }, 320);

    return () => clearInterval(interval);
  }, [index, content]);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-start justify-items-center min-h-screen px-4 sm:px-8 py-8 gap-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-md">
        <Image
          className="dark:invert w-full max-w-xs sm:max-w-sm rounded-md"
          src="/thisissolmi.jpeg"
          alt="김솔미 사진"
          width={400}
          height={300}
          priority
        />
        <p
          id="dynamic"
          className="text-base sm:text-lg font-semibold whitespace-pre-line text-center"
        >
          {text}
        </p>
      </main>

      <footer className="row-start-3 flex gap-4 flex-wrap items-center justify-center text-sm">
      <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/thisisolmi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.png"
            alt="Instagram 아이콘"
            width={30}
            height={30}
          />
          LinkedIn
        </a>

        <br></br>



        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.instagram.com/thisissolmi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/insta.jpeg"
            alt="Instagram 아이콘"
            width={30}
            height={30}
          />
          Instagram
        </a>


        <br></br>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://thisissolmi.tistory.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/tistory.png"
            alt="Tistory 아이콘"
            width={30}
            height={30}
          />
          tistory
        </a>
      </footer>
    </div>
  );
}
