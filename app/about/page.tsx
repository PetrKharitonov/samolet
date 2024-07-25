import styles from "./page.module.scss";
import variables from "@/app/variables.module.scss";
import type { Metadata } from "next";
import { swift } from "../fonts";
import Image from "next/image";

import aboutImg1 from "@/public/about3.png";
import sema from "@/public/sema.png";

import AnimatedText from "../components/animations/AnimatedText/AnimatedText";
import AnimatedLine from "../components/animations/AnimatedLine/AnimatedLine";

export const metadata: Metadata = {
  title: "О студии",
  description:
    "Сочиняем, генерируем идеи, рисуем, проектируем и воплощаем все это в жизнь. Каждый раз, взявшись за работу, мы придумываем что-то новое, нечто такое, чем по праву может гордиться каждый, обратившийся к нам.",
};

const BrandingPage = () => {
  return (
    <main className={variables.container}>
      <div style={{ marginTop: "5rem" }} />
      <AnimatedText text={"О студии"} />
      <div style={{ marginTop: "2rem" }} />
      <AnimatedLine wide={false} />
      <div className={styles.preview}>
        <Image src={aboutImg1} fill alt="aboutImage" />
      </div>

      <div>

        
        <video style={{width: '100%', marginTop: "1rem"}} src="http://a1010350.xsph.ru/wp-content/uploads/2024/07/compressed.mp4" width="680" height="400" playsInline controls></video>
      </div>

      <div className={styles.text}>
        <p className={variables.textMain}>
          Сочиняем, генерируем идеи, рисуем, проектируем и воплощаем все это в
          жизнь. Каждый раз, взявшись за работу, мы придумываем что-то новое,
          нечто такое, чем по праву может гордиться каждый, обратившийся к нам.
        </p>
      </div>
      <div style={{ marginTop: "5rem" }} />
      <AnimatedLine wide={false} />
      <div className={styles.second}>
        <div className={styles.semenihin}>
          <Image src={sema} alt="semenihin" />
        </div>

        <div>
          <AnimatedText
            text={[
              "Мы уверены в том, что",
              "будущее будет таким,",
              "каким сегодня создаем",
              "его мы",
            ]}
          />
        </div>
      </div>
    </main>
  );
};
export default BrandingPage;
