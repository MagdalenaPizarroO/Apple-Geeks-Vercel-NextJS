import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

type Props = {};

export default function Home({}: Props) {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
}
