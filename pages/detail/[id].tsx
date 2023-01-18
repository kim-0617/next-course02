import Item from "@/src/components/Item";
import axios from "axios";
import { GetStaticProps, GetStaticPropsContext } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { List } from "../index";

interface Props {
  item: List;
}

function Detail({ item }: Props) {
  return (
    <div>
      <Head>
        <title>{item?.name}</title>
        <meta name="description" content={item?.description} />
      </Head>
      <Item item={item} />
    </div>
  );
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context?.params?.id;
  const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
  const res = await axios(API_URL);
  const data = res.data;

  return {
    props: { item: data },
  };
};

export const getStaticPaths = async () => {
  const API_URL: string | undefined = process.env.NEXT_PUBLIC_API_URL;
  const res = await axios(API_URL as unknown as string);
  const data = res.data;
  const paths = data.slice(0, 9).map((item: List) => ({
    params: { id: item.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default Detail;
