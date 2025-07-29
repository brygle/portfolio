"use client";

import { ScriptProps } from "next/script";

export default function TitleText({ children, className }: Readonly<ScriptProps>) {
  return (
    <h3 className={`
        font-normal text-[26px] leading-[32px] -tracking-[1.4px]
        lg:text-[36px] lg:leading-[40px] lg:-tracking-[0.6px]
        text-darkcolor dark:text-white  
    ` + className}>
        {children}
    </h3>
  );
}
