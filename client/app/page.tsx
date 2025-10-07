import Header from "@components/Home/Header";
import Navbar from "@components/Common/Navbar";
import Platforms from "@components/Home/Platforms";

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="mt-[67px]">
        <Header />
        <Platforms />
      </div>
    </main>
  );
}
