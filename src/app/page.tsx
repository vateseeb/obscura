import Image from "next/image";
import { getTopic } from "./lib/topics";

export default function Home() {
  const topic = getTopic(new Date());

  return (
    <div className="h-screen flex flex-col">
      <header className="w-full bg-current p-4 top-0 flex items-center gap-4">
        <Image src="/logo.svg" alt="Logo" width={80} height={80} className="pl-6"/>
        <h1 className="text-4xl font-bold text-background">Obscura</h1>
      </header>
    <main className="flex flex-col items-center justify-center flex-grow">
      <h2 className="text-2xl font-semibold">Topic of the Week</h2>
      <p className="text-6xl font-bold mt-4">{topic?.title}</p>
    </main>
    </div>
  );
}
