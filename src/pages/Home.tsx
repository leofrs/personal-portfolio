import Content from "../components/Content";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <section className="flex gap-5 p-[32px]">
      <Sidebar />
      <Content />
    </section>
  );
}
