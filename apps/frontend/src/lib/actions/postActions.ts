"use server";

import { fetchGraphQL } from "../fetchGraphQL";
import { GET_POSTS } from "../gqlQueries";
import { print } from "graphql";
import { Post } from "@/lib/types/modelTypes";

export const getPosts = async () => {
  const data = await fetchGraphQL(print(GET_POSTS));
  console.log(data);
  return data.posts as Post[];
};
