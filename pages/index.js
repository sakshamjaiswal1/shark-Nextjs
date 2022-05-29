import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Tile from "../component/Tile";
import { getData } from "./api/main";
import { getRank } from "./api/rank";
import { useEffect, useState } from "react";
import {
  insertArray,
  rankSort,
  timeSort,
  priceSort,
} from "../helpers/insertArray";

export default function Home({ data, rank }) {
  const [count, setCount] = useState(10);

  const [sel, setSel] = useState("");
  const [sortArray, setSortArrray] = useState([]);

  useEffect(() => {
    console.log(data,rank)
    insertArray(data, rank, count, setSortArrray);
  }, [count, data,rank]);
  const handleSort = (e) => {

    if (e.target.value === "date") {
      setSel("date");
      setSortArrray(sortArray.sort(timeSort));
    } else if (e.target.value === "price") {
      setSel("price");
      setSortArrray(sortArray.sort(priceSort));
    } else {
      setSel("rank");
      setSortArrray(sortArray.sort(rankSort));
    }
  };
  const increment = () => {
    setCount(count + 10);
  };
  const decrement = () => {
    if (count > 10) {
      setCount(count - 10);
    }
  };
  const reset = () => {
    setCount(10);
  };
  return (
    <div className={styles.mainCon}>
      <div className={styles.tilesCon}>
        <div className={styles.tilesCon__topCon}>
          <h3>
            Listings ({count}) &nbsp;{" "}
            <Image
              src="/info.png"
              alt="Picture of the author"
              width={16}
              height={16}
              padding={5}
              className={styles.indoImg}
            />{" "}
          </h3>

          <div className={styles.custom_select}>
            <select
              value={sel}
              onChange={(e) => handleSort(e)}
              className={styles.select}
            > 
              <option value="date"> Date</option>
              <option value="price">Price</option>
              <option value="rank">Rank</option>
            </select>
          </div>
        </div>

        <div className={styles.tilesCon__midCon}>
       
          {sortArray?.map((elem, index) => (
            <>
              <Tile key={elem.token_id}
                nature={elem.nature}
                price={elem.price}
                marketCode={elem.marketCode}
                listingtime={elem.listingtime}
                token_id={elem.token_id}
                contract_address={elem.contract_address}
                last_trade_event={elem.last_trade_event}
                rank={elem.rank}
              />
            </>
          ))}
        </div>
        <div className={styles.btn_Container}>
          <button onClick={reset}>R</button>
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  const data = await getData();
  const rank = await getRank();
  return { props: { data, rank } };
}
