"use client";

import { ScriptProps } from "next/script";

export default function HeaderText({ children, className }: Readonly<ScriptProps>) {
  return (
    <h1 className={`
        font-normal text-[32px] leading-[36px] -tracking-[0.8px]
        sm:text-[44px] sm:leading-[48px] sm:-tracking-[1px]
        lg:text-[64px] lg:leading-[68px]
        text-darkcolor dark:text-white  
    ` + className}>
        {children}
    </h1>
  );
}
