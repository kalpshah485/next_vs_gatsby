import { createRemoteFileNode } from "gatsby-source-filesystem";
import { GatsbyNode } from "gatsby";
import { resolve } from "path";
import fetch from "isomorphic-fetch";

export const createPages: GatsbyNode["createPages"] = async ({
  actions: { createPage },
}) => {
  const res = await fetch("https://dog.ceo/api/breeds/image/random/5");
  const data = await res.json();

  createPage({
    path: "/ssg",
    component: resolve(__dirname, "./src/components/ssg.tsx"),
    context: { data },
  });
  const dsgData = await (
    await fetch("https://dog.ceo/api/breeds/image/random/5")
  ).json();
  createPage({
    path: "/dsg",
    component: resolve(__dirname, "./src/components/dsg.tsx"),
    context: { data: dsgData },
    defer: true,
  });
};
