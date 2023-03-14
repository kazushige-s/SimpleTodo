import { Inter } from "next/font/google";
import { ColorfulMessage } from "src/components/ColorfulMessage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const onClickButton = () => alert();

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>

      {/* 日本語部分はchildrenになる */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickButton} className="bg-slate-500">
        ボタン
      </button>
    </>
  );
}
