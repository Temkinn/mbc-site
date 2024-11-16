"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useState, useEffect } from 'react'
import Welcome from '../components/welcome/welcome'

export default function Home() {
  const [isClient, setIsClient] = useState(false)
 
  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <>
      <Welcome />
      awda
    </>
  );
}
