"use client";

import styles from "./style.module.scss";
import Image from "next/image";

import { swift } from "@/app/fonts";
import variables from "@/app/variables.module.scss";
import { Dispatch, SetStateAction } from "react";

import arrow from "@/public/arrow.svg";

type setModalType = {
  active: boolean;
  index: number;
};

const ProjectsGallery = ({
  title,
  setModal,
  image,
  index,
}: {
  title: string;
  setModal: Dispatch<SetStateAction<setModalType>>;
  image?: JSX.Element;
  index: number;
}) => {
  return (
    <div
      className={`${styles.gallery} `}
      onMouseEnter={() => {
        setModal({ active: true, index: index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index: index });
      }}
    >
      <h1 className={`${swift.className} ${variables.textTitle}`}>{title}</h1>

      <div className={styles.imgContainer}>
        <div className={styles.imgSlider}>
          <Image src={arrow} alt="arrow_icon" fill />
        </div>
      </div>
    </div>
  );
};
export default ProjectsGallery;