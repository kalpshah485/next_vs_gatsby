import { gql } from "@apollo/client";
import { GetServerSideProps, NextPage } from "next";
import * as React from "react";
import client from "../apollo-client";
import styles from "../styles/Home.module.css";

const query = gql`
  {
    characters {
      info {
        count
        next
        pages
        prev
      }
      results {
        gender
        id
        name
      }
    }
  }
`;

type ServerProps = {
  characters: {
    info: {
      count: number;
      prev: number | null;
      next: number | null;
      pages: number;
    };
    results: [
      {
        id: number;
        name: string;
        gender: string;
      }
    ];
  };
};

const RickAndMortyPage: NextPage<{
  data: {
    rickmorty: ServerProps;
  };
}> = ({ data }) => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Statically Generated Page</h1>
        <h1>Page information:</h1>
        <div>
          <p>Count: {data.rickmorty.characters.info.count}</p>
          <p>Prev: {data.rickmorty.characters.info.prev}</p>
          <p>Next: {data.rickmorty.characters.info.next}</p>
          <p>Pages: {data.rickmorty.characters.info.pages}</p>
        </div>
        <h1>Characters:</h1>
        <div>
          {data.rickmorty.characters.results.map((character) => {
            return <p key={character.id}>{character.name}</p>;
          })}
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query<ServerProps>({ query });
  return {
    props: {
      data: {
        rickmorty: data,
      },
    },
  };
};

export default RickAndMortyPage;
