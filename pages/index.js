import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Tile from "../component/Tile";
import { getData } from "./api/main";
import { getRank } from "./api/rank";
import { useEffect, useState } from "react";

export default function Home({ data ,rank}) {
  const [count, setCount] = useState(10);
  
  const [sel,setSel]=useState("date")
  const [sortArray,setSortArrray]=useState(data.prices.slice(0,count).sort())

  useEffect(() => {

    console.log(data,rank);
  }, [data]);
  const handleSort=(e)=>{
   
    if(e.target.value==='date'){
      setSel('date')
      setSortArrray(data.listing_times.slice(0,count).sort())
    }
    else if(e.target.value==='price'){
      setSel('price')
      setSortArrray(data.prices.slice(0,count).sort())
    }
    else{
      setSel('rank')
    }
  }
  return (
    <div className={styles.mainCon}>
      <div className={styles.tilesCon}>
        <div className={styles.tilesCon__topCon}>
          <h3>Listings ({count})</h3>

          <div className={styles.custom_select}>
            <select value={sel}  onChange={(e)=>handleSort(e)} className={styles.select}>
              <option value="date"> Date</option>
              <option value="price">Price</option>
              <option value="rank">Rank</option>
            </select>
          </div>
        </div>

        <div className={styles.tilesCon__midCon}>
          {sortArray.map((elem, index) => {
            
            return(
            <>
              <Tile key={data.token_ids.slice(0,count)[index]} nature={data.natures.slice(0,count)[index]} price={data.prices.slice(0,count)[index]} marketCode={data.marketplaces.slice(0,count)[index]}
              listingtime={data.listing_times.slice(0,count)[index]}
              token_id = {data.token_ids.slice(0,count)[index]}
              contract_address={data.contract_address}
              last_trade_event={data.last_trade_events.slice(0,count)[index]}
              rank={rank.ranks[index][0]}
              
              />
            </>)
          })}
        </div>
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  const data = await getData();
  const rank = await getRank()
  return { props: { data,rank } };
}
