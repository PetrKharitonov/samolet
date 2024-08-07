"use client";
import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";
import { Project } from "@/app/types";
import ProjectCardReg from "../../cards/ProjectCardReg/ProjectCardReg";
import { AnimatePresence, motion } from "framer-motion";

const BrandingProjects = ({
  tags,
  projects,
}: {
  tags: Array<string>;
  projects: Array<Project>;
}) => {
  const [selectedTag, setSelectedTag] = useState("Все");
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [loading, setLoading] = useState(false);

  function handleTagClick(tag: string) {
    if (selectedTag === tag) {
      return;
    } else {
      setLoading(true);
      setTimeout(() => {
        setSelectedTag(tag);
        setLoading(false);
      }, 100);
    }
  }

  useEffect(() => {
    filterProjects();
  }, [selectedTag]);

  function filterProjects() {
    if (selectedTag !== "Все") {
      const temp = projects.filter((pr) =>
        pr.tags.join("").includes(selectedTag)
      );
      setFilteredProjects(temp);
    } else {
      setFilteredProjects(projects);
    }
  }

  return (
    <>
      <div className={`${styles.filterContainer} ${variables.textMain}`}>
        <div className={styles.tags}>
          {tags.map((tag) => {
            return (
              <button
                key={tag}
                onClick={() => handleTagClick(tag)}
                className={selectedTag === tag ? `${styles.tagActive}` : ""}
              >
                {tag}
              </button>
            );
          })}
        </div>
      </div>
      <div className={styles.projectsGrid}>
        <AnimatePresence>
          {loading && (
            <motion.div
              className={styles.loading}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.06,
                ease: "easeInOut",
              }}
              style={{
                backgroundColor: "white",
                position: "absolute",
                width: "100%",
                height: "100%",
                zIndex: 100,
              }}
            ></motion.div>
          )}
        </AnimatePresence>

        {filteredProjects.map((el, i) => {
          return (
            <ProjectCardReg
              cat={el.cat}
              id={el.id}
              key={i}
              title={el.title}
              preview={el.preview}
              tags={el.tags}
            />
          );
        })}
      </div>
    </>
  );
};

export default BrandingProjects;
