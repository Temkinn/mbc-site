"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from 'react'

import Parallax from "@/components/parallax/parallax";
import Welcome from '@/components/welcome/welcome'
import About from "@/components/about/about"


export default function Home() {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <>
      <Parallax />
      <Welcome />
      <About />
    </>
  );
}
