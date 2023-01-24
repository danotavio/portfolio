import { Intro } from "./intro";

export default function Home() {
  return (
    <main className=" bg-black w-full h-full text-white snap-y snap-mandatory">
      <Intro className=" snap-center snap-always w-full h-full" />
      <section className="snap-center snap-always w-full h-full p-10 bg-zinc-700">
        teste
      </section>
    </main>
  );
}
