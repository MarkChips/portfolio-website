import Image from "next/image";
import TextGif from "@/components/ui/text-gif";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <TextGif text="Mark Chipperfield" gifUrl="https://media.giphy.com/media/4bhs1boql4XVJgmm4H/giphy.gif" />
      </main>
    </div>
  );
}
