import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemList from "@/src/components/ItemList";
import { Divider, Header, Loader } from "semantic-ui-react";
import Head from "next/head";
import { GetStaticProps } from "next";

export interface List {
  api_featured_image: string;
  brand: string;
  category: string;
  created_at: string;
  currency: null | string;
  description: string;
  id: number;
  image_link: string;
  name: string;
  price: string;
  price_sign: null | string;
  product_api_url: string;
  product_colors: string[];
  product_link: string;
  product_type: string;
  rating: number;
  tag_list: string[];
  updated_at: string;
  website_link: string;
}

interface Props {
  list: List[];
}

function Home({ list }: Props) {
  return (
    <>
      <Header as="h3" style={{ paddingTop: 40 }}>
        베스트 상품
      </Header>
      <Divider />
      <ItemList list={list.slice(0, 9)} />
      <Header as="h3" style={{ paddingTop: 40 }}>
        신상품
      </Header>
      <Divider />
      <ItemList list={list.slice(9)} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const API_URL: string | undefined = process.env.NEXT_PUBLIC_API_URL;
  const res = await axios(API_URL as unknown as string);
  const data = res.data;
  return {
    props: { list: data },
  };
};

export default Home;
