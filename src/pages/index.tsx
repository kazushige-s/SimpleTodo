import { Inter } from "next/font/google";
import { ColorfulMessage } from "src/components/ColorfulMessage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>
      <ColorfulMessage color="blue" message="お元気ですか" />
      <ColorfulMessage color="pink" message="元気です" />
      <button onClick={onClickButton} className="bg-slate-500">
        ボタン
      </button>
    </>
  );
}