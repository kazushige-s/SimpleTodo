import { Inter } from "next/font/google";
import { useState } from "react";
import { ColorfulMessage } from "src/components/ColorfulMessage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log("さいしょ");

  const [num, setNum] = useState(0);
  const [faceShow, setFaceShow] = useState(true);

  const onClickCountUp = () => {
    setNum((num) => num + 1);
  };

  const onClickSwitchFace = () => {
    setFaceShow(!faceShow);
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは</h1>

      {/* 日本語部分はchildrenになる */}
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です</ColorfulMessage>
      <button onClick={onClickCountUp} className="bg-slate-300">
        カウントアップ
      </button>
      <br />
      <button className="bg-slate-300" onClick={onClickSwitchFace}>
        on/of
      </button>
      <p>{num}</p>
      {faceShow && <p>m(_ _)m</p>}
      {/* {faceShow ? <p>m(_ _)m</p> : null} */}
    </>
  );
}
