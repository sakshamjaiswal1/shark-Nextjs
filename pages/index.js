import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Tile from "../component/Tile";
import { getData } from "./api/main";
import { useEffect, useState } from "react";

export default function Home({ data }) {
  const [count, setCount] = useState(10);
  const [sel,setSel]=useState("date")
  useEffect(() => {
    console.log(data);
  }, []);
  return (
    <div className={styles.mainCon}>
      <div className={styles.tilesCon}>
        <div className={styles.tilesCon__topCon}>
          <h3>Listings ({count})</h3>

          <div className={styles.custom_select}>
            <select name="" id="" className={styles.select}>
              <option value="date"> Date</option>
              <option value="price">Price</option>
              <option value="rank">Rank</option>
            </select>
          </div>
        </div>

        <div className={styles.tilesCon__midCon}>
          {data?.expiration_times.slice(0, count).map((elem, index) => {
            
            return(
            <>
              <Tile key={index} nature={data.natures.slice(0,count)[index]} price={data.prices.slice(0,count)[index]} marketCode={data.marketplaces.slice(0,count)[index]}
              listingtime={data.listing_times.slice(0,count)[index]}
              token_id = {data.token_ids.slice(0,count)[index]}
              contract_address={data.contract_address}
              
              />
            </>)
          })}
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps(ctx) {
  const data = await getData();
  return { props: { data } };
}
