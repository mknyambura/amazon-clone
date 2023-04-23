'use client'

import Banner from "@/components/Banner";
import Header from "@/components/Header";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      {/* Header */}
      <Header/>
      {/* Scrollable Banner */}
      <main className="max-w-screen-2xl mx-auto">
        {/* Banner  */}
        <Banner/>
        {/* Product Feed */}
        
      </main>
    </div>
  );
}