"use client";

import { ScriptProps } from "next/script";

export default function Text({ children, className }: Readonly<ScriptProps>) {
  return (
    <p className={`
        font-normal text-[16px] leading-[22px] -tracking-[0.6px]
        lg:-tracking-[0.5px]
        text-darkcolor dark:text-white  
    ` + className}>
        {children}
    </p>
  );
}
