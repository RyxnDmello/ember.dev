import Header from "@components/Home/Header";
import Navbar from "@components/Common/Navbar";
import Platform from "@components/Home/Platform";

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="mt-[67px]">
        <Header />
        <Platform />
      </div>
    </main>
  );
}
