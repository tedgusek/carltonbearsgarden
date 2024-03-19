'use client'
import Image from "next/image";
import Navbar from "@/components/Navbar";
import ContentWindow from "@/components/ContentWindow";
import InstagramIcon from "@/components/InstagramIcon";
import FacebookIcon from "@/components/FacebookIcon";
import React, { useState } from "react";

export default function Home() {
  const [content, setContent] = useState<string>('About');
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-br from-yellow-100 to-white">
      <Image
            src="/sunflower.jpeg"
            alt="Painting of a brown teddy bear"
            width={2500}
            height={1500}
            className="fixed left-0 top-0 z-0"
      />
      <div className="z-50 max-w-5xl w-full font-mono text-sm flex items-center justify-center">
        <p className="fixed left-0 top-0 py-6 flex flex-col items-center w-full justify-start bg-gradient-to-br from-green-300 via-transparent to-transparent h-40 md:text-lg text-black font-extrabold md:w-80 md:h-2/3 px-10 text-xl overflow-visible">
          Carlton Bears Garden
          <Image
            src="/bear-logo.png"
            alt="bear logo"
            width={200}
            height={200}
            // className="rounded-full mt-2 drop-shadow-lg border-white border-4 bg-slate-500 bg-opacity-75"
            className=" drop-shadow-lg md:fixed left-10 top-4"
          />
        </p>
        
      </div>
      <div >
        <Navbar content={content} setContent={setContent} />
        <div className="absolute bottom-0 left-0 right-0 mb-15">
          <ContentWindow content={content} />
        </div>
      </div>
      <FacebookIcon />
      <InstagramIcon />
    </main>
  );
}
