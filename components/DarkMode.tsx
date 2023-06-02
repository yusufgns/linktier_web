"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function DarkModeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (!localTheme) setTheme(`${systemTheme}`);
    if (!theme) setTheme(`${localTheme}`);
  }, [setTheme, theme, systemTheme]);

  const imgSource = theme === "dark" ? "/sun.svg" : "/moon.svg";

  return (
    <div className=" ml-6 cursor-pointer hover:opacity-60 w-[30px] h-[30px] absolute z-[99]">
      <div
        onClick={() => {
          theme == "dark" ? setTheme("light") : setTheme("dark");
        }}
      >
        <Image
          src={imgSource}
          alt="Darkmode"
          width={30}
          height={30}
          unoptimized
        />
      </div>
    </div>
  );
}