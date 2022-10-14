import { GetServerDataProps, GetServerDataReturn } from "gatsby";
import * as React from "react";
import * as styles from "../styles/Home1.module.css";

type ServerDataProps = {
  message: string[];
  status: string;
};

const ServerSidePage = ({
  serverData:{ data},
}: {
  serverData: { data: ServerDataProps };
}) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Server Side Rendered Page</h1>
        <div className={styles.grid}>
          {data.status === "success" &&
            data.message.map((img_url: string, ind: number) => {
              return <img key={ind} src={img_url} height={200} width={200} alt="Dog Image" />;
            })}
        </div>
      </main>
    </div>
  );
};

export async function getServerData(
  props: GetServerDataProps
): GetServerDataReturn<{ data: ServerDataProps }> {
  const res = await fetch("https://dog.ceo/api/breeds/image/random/5");
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default ServerSidePage;
