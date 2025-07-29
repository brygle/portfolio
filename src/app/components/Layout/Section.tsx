"use client";

import { ScriptProps } from "next/script";

export default function Section({ children, id="" }: Readonly<ScriptProps>) {
  return (
    <section id={id} className="w-full px-[16px] sm:px-[24px] lg:px-[32px] flex justify-center">
        <div className="w-full max-w-[1536px] min-h-[400px]">
            {children}
        </div>
    </section>
  );
}
