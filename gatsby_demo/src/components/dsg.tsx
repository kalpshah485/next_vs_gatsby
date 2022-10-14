import { PageProps } from "gatsby";
import { MainImage, StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import * as styles from "../styles/Home1.module.css";

type pageContextType = {
  data: {
    message: string[];
    status: string;
  };
};

const StaticSitePage = ({ pageContext }: PageProps<{}, pageContextType>) => {
  const { data } = pageContext;
  return (
    // <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Deferred Statically Generated Page</h1>
        <div className={styles.grid}>
          {data.status === "success" &&
            data.message.map((img_url: string, ind: number) => {
              return (
                <img src={img_url} height={200} width={200} alt="Dog Image" />
              );
            })}
        </div>
      </main>
    // </div>
  );
};

export default StaticSitePage;