import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { ColorfulMessage } from "src/components/ColorfulMessage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  console.log("さいしょ");

  const [num, setNum] = useState(0);
  const [faceShow, setFaceShow] = useState(false);

  const onClickCountUp = () => {
    setNum((num) => num + 1);
  };

  const onClickSwitchFace = () => {
    setFaceShow(!faceShow);
  };

  // useEffectに空の配列を渡すと、最初の一回だけ実行される
  //numを渡すと、numが更新されるたびに実行される
  useEffect(() => {
    // setFaceShowが呼ばれるたびに、faceShowが更新されるため、||と&&を使っている
    if (num > 0) {
      if (num % 3 === 0) {
        faceShow || setFaceShow(true);
      } else {
        faceShow && setFaceShow(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

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
