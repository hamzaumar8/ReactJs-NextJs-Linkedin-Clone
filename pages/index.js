import { signOut } from "next-auth/react";
import Header from "../components/Header";
import HeadTag from "../components/HeadTag";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-[#F3F2EF] dark:bg-black dark:text-white h-screen overflow-y-scroll md:space-y-6">
      <HeadTag title="Feed" />

      <Header />

      <main className="flex justify-center gap-x-5 px-4 sm:px-12">
        <div className="flex flex-col md:flex-row gap-x-5 gap-5">
          {/* SideBar */}
          <Sidebar />
        </div>
        {/* feed */}
        <div>feed</div>
        {/* widget */}
        <div>widget</div>
      </main>
    </div>
  );
}
