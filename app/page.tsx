import Image from "next/image";
import type { Metadata } from "next";
import styles from "./page.module.scss";
import variables from "@/app/variables.module.scss";

import aboutPic from "@/public/about1.png";
import aboutPic2 from "@/public/about2.png";
import samolet from "@/public/samolet.svg";

import { swift } from "./fonts";
import { ptRootUIMed } from "./fonts";
import ButtonSlide from "./components/UI/buttons/ButtonSlide/ButtonSlide";
import SubTitle from "./components/titles/SubTitle/SubTitle";
import NewsBlock from "./components/Main/NewsBlock/NewsBlock";
import AnimatedText from "./components/animations/AnimatedText/AnimatedText";
import AnimatedLine from "./components/animations/AnimatedLine/AnimatedLine";
import Button from "./components/UI/buttons/Button/Button";
import InteractiveProjects from "./components/Main/InteractiveProjects/InteractiveProjects";
import StaggerReveal from "./components/animations/StaggerReveal/StaggerReveal";

import sam from "@/public/shtrih.svg";
import Shtrih from "./components/animations/Shtrih/Shtrih";
import PartnersCarousel from "./components/Main/PartnersCarousel/PartnersCarousel";
import HeaderPlane from "./components/Main/3D/HeaderPlane/HeaderPlane.jsx";
import AwardsBlock from "./components/Main/AwardsBlock/AwardsBlock";
import CanvasPlane from "./components/Main/3D/Canvas/Canvas";
import getPostId from "./lib/getPostId";
import getNews from "./lib/getNews";

export const metadata: Metadata = {
  title: "Главная",
  description: "дизайн-студия Самолет",
};

export default async function Home() {
  const page = await getPostId(86)
  const news = await getNews(3)

  
  const lead = page.post.preview.lead.split('\n')

  const interactivePr = page.post.content[2].attrs

  const logos = page.post.content[4].attrs.items

  const awards = page.post.content[6].attrs.items
  
  //console.log(news)

  return (
    <main className={variables.container}>
      <CanvasPlane />
      <Image
        className={styles.headerImg}
        id="headerImageBlock"
        src={samolet}
        alt="samolet header"
      />

      <section
        className={`${styles.marginTopSection} ${styles.mainAboutSection}`}
      >
        <AnimatedLine wide={true} />
        <div style={{ marginTop: "0.5rem" }} />
        <AnimatedLine wide={false} />

        <div style={{ marginTop: "1rem" }}></div>
        <div className={styles.about_desc}>
          <AnimatedText
            text={lead}
          />
        </div>

        <div className={styles.about_mobile}>
          <AnimatedText text={lead[0]} />
        </div>

        <div className={styles.marginTopSection}></div>

        <AnimatedLine wide={false} />

        <div
          className={`${styles.aboutSectionContentSec_mobile} ${variables.textMain}`}
        >
          {`${lead[1]} ${lead[2]}`}
        </div>

        <div className={`${styles.aboutSectionContentSec}`}>
          <Image src={page.post.preview.src} width={1026} height={609} alt="about_second" />
          <div className={`${styles.textContainer} ${variables.textMain}`}>
            <span className={ptRootUIMed.className}>
              {page.post.preview.subtitle}
            </span>
            <p dangerouslySetInnerHTML={{__html: page.post.preview.text}}>
            </p>

            <div style={{ marginTop: "4rem" }} />

            <Button text="О студии" link="/about" />
          </div>
        </div>
      </section>

      <section className={styles.marginTopSection}>
        <AnimatedLine wide={true} />
        <div style={{ marginTop: "0.5rem" }} />
        <AnimatedLine wide={false} />

        <InteractiveProjects projects={interactivePr}/>
      </section>

      <section className={styles.about_second_mobile}>
        <Image src={page.post.preview.src}  width={1026} height={609} alt="about_second_mobile" />
        <span className={`${ptRootUIMed.className} ${variables.textMain}`}>
        {page.post.preview.subtitle}
        </span>
        <div className={variables.textMain}>
          <p>
          « <br />
          </p>
          <p dangerouslySetInnerHTML={{__html: page.post.preview.text}}>
          </p>
        </div>
        <div style={{ marginTop: "3rem" }} />

        <Button text="О студии" link="" />
      </section>

      <section className={styles.marginTopSection}>
        <p className={variables.textMain} style={{ marginBottom: "0.5rem" }}>
          Наши логотипы
        </p>
        <AnimatedLine wide={true} />
        <PartnersCarousel logos={logos}/>
        <AnimatedLine wide={false} />
      </section>

      <section className={styles.marginTopSection}>
        <p className={variables.textMain} style={{ marginBottom: "0.5rem" }}>
          Наши награды
        </p>
        <AnimatedLine wide={false} />
        <AwardsBlock awards={awards}/>
      </section>

      {/*       <section className={styles.marginTopSection}>
        <ProjectsBlock />
      </section> */}

      <section className={styles.marginTopSection}>
        <p className={variables.textMain} style={{ marginBottom: "0.5rem" }}>
          Последние события
        </p>
        <AnimatedLine wide={false} />
        <NewsBlock news={news} />
      </section>
    </main>
  );
}
