"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import localFont from "next/font/local";

// ✅ Pretendard 폰트 적용
const pretendard = localFont({
  src: "../fonts/Pretendard-Bold.otf",
  variable: "--font-pretendard",
  display: "swap",
});

// 💬 타입 선언
type SocialType = "Instagram" | "LinkedIn" | "Tistory";

interface LinkBase {
  name: string;
  url: string;
  iconSrc: string;
}

interface SocialLink extends LinkBase {
  type: SocialType;
}

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/thisisolmi/",
    iconSrc: "/linkedin.png",
    type: "LinkedIn",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/thisissolmi/",
    iconSrc: "/insta.jpeg",
    type: "Instagram",
  },
  {
    name: "Tistory",
    url: "https://thisissolmi.tistory.com/",
    iconSrc: "/tistory.png",
    type: "Tistory",
  },
];

// 💬 제네릭 함수
const wrapInArray = <T,>(item: T): T[] => [item];

// 💬 유틸리티 타입
interface User {
  name: string;
  age: number;
  email: string;
}

const updateUser = (user: Partial<User>) => {
  console.log("Updating user:", user);
};

export default function Home() {
  const content: string =
    "안녕하세요.\n 두 번째 과제입니다! 제 이름은 김솔미 입니다.\n소통하는 개발자가 되고 싶어요!\n";

  const [text, setText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (index >= content.length) return;

    const interval = setInterval(() => {
      setText((prev) => prev + content[index]);
      setIndex((prev) => prev + 1);
    }, 320);

    return () => clearInterval(interval);
  }, [index, content]);

  return (
    // ✅ Pretendard 폰트 전체 적용
    <div
      className={`grid grid-rows-[auto_1fr_auto] items-start justify-items-center min-h-screen px-4 sm:px-8 py-8 gap-8 ${pretendard.variable} font-[var(--font-pretendard)]`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center w-full max-w-md">
        <Image
          className="dark:invert w-full max-w-xs sm:max-w-sm rounded-md"
          src="/thisissolmi.jpeg"
          alt="김솔미 사진"
          width={400}
          height={400}
          priority
        />
        <h2> My information </h2>

        <p
          id="dynamic"
          className="text-base sm:text-lg font-semibold whitespace-pre-line text-center"
        >
          {text}
        </p>
      </main>

      <footer className="row-start-3 flex gap-4 flex-wrap items-center justify-center text-sm">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src={link.iconSrc}
              alt={`${link.name} 아이콘`}
              width={30}
              height={30}
            />
            {link.name}
          </a>
        ))}
      </footer>
    </div>
  );
}
