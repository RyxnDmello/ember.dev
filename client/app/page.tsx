import Navbar from "@components/Common/Navbar";
import Header from "@components/Home/Header";

export default function Home() {
  return (
    <main>
      <Navbar />

      <div className="mt-[67px]">
        <Header />
      </div>
    </main>
  );
}
