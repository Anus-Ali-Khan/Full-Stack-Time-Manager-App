import React from "react";
import Navbar from "@/components/Navbar";
import TabsSection from "@/components/TabsSection";
import Cards from "@/components/Cards";

const Home = () => {
  return (
    <div className="h-[100vh] flex justify-center items-center bg-gradient-to-br from-blue-600 via-blue-400 to-cyan-400 ">
      <div className="h-[90%] w-[80%] bg-gray-200 rounded-2xl overflow-y-scroll relative">
        <Navbar />
        <TabsSection />
        <Cards />
      </div>
    </div>
  );
};

export default Home;
