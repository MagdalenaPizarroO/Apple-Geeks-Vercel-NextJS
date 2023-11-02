import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomeContent from "./components/HomeContent";

type Props = {};

export default function Home({}: Props) {
  return (
    <div>
      {/* <Navbar /> */}
      <HomeContent />
      {/* <Footer /> */}
    </div>
  );
}
