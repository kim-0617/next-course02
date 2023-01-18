import Item from "@/src/components/Item";
import axios from "axios";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { List } from "../index";

interface Props {
  item: List;
}

function Detail({ item }: Props) {
  return (
    <div>
      <Head>
        <title>{item.name}</title>
        <meta name="description" content={item.description} />
      </Head>
      <Item item={item} />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context?.params?.id;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios(API_URL);
  const data = res.data;

  return {
    props: { item: data },
  };
};

export default Detail;
