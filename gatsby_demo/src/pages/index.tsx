import * as React from "react";
import { graphql, HeadFC } from "gatsby";
import * as styles from "../styles/Home.module.css";

const docLinks = [
  {
    text: "Server Side Rendered Page",
    url: "/ssr",
  },
  {
    text: "Statically Generated Page",
    url: "/ssg",
  },
  {
    text: "Deferred Statically Generated Page",
    url: "/dsg",
  },
  {
    text: "Rick and morty (Statically generated using graphql) Page",
    url: "/rickandmorty",
  },
  {
    text: "Image Optimization",
    url: "/img-opt",
  }
];
type DataType = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
    };
  };
};

const IndexPage = ({ data }: { data: DataType }) => {
  return (
    <main className={styles.pageStyles}>
      <h1 className={styles.headingStyles}>
        Congratulations
        <br />
        <span className={styles.headingAccentStyles}>
          — you just made a Gatsby site! 🎉🎉🎉
        </span>
      </h1>
      <ul className={styles.doclistStyles}>
        {docLinks.map((doc) => (
          <li key={doc.url} className={styles.docLinkStyle}>
            <a className={styles.linkStyle} href={`${doc.url}`}>
              {doc.text}
            </a>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC<DataType> = ({ data }) => {
  return <title>{data.site.siteMetadata.title}</title>;
};

export const query = graphql`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`;
