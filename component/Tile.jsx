import React from "react";
import Image from "next/image";
import styles from "../styles/Tile.module.css";
import { useState, useEffect } from "react";
import {
  changeBorder,
  changeMaret,
  changeListingTime,
  checkProfit
} from "../helpers/changeBorder";
import { IMAGE, imageUrlGenerator } from "../constants/allUrl";

const Tile = ({
  nature,
  price,
  marketCode,
  listingtime,
  token_id,
  contract_address,
  last_trade_event,
  rank
}) => {
  // const IMAGE= `https://img.nftnerds.ai/0xed5af388653567af2f388e6224dc7c4b3241c544_1025_96x96`
  const [boder, setBorder] = useState("#C7C6C6");
  const [marketplace, setMarketPlace] = useState('/open.png');
  const [newTime, setNewTime] = useState(listingtime);
  const [imgUrl, setImgUrl] = useState(IMAGE);
  const [profit,setProfit]=useState("/green.png")
  useEffect(() => {
    changeBorder(nature, setBorder);
    changeMaret(marketCode, setMarketPlace);
    changeListingTime(listingtime, setNewTime);
    imageUrlGenerator(contract_address, token_id, setImgUrl);
    checkProfit(price,last_trade_event,setProfit)
 
 
  }, [contract_address, last_trade_event, listingtime, marketCode, nature, price, token_id]);
  return (
    <div className={styles.tiles} style={{ borderRight: `5px solid ${boder}` }}>
      <div className="">
        {" "}
        <Image
          src={profit}
          alt="Picture of the author"
          width={600}
          height={1800}
        />
      </div>
      <div className={styles.tiles__mid}>
        {" "}
        <div className="">
          <Image
            src={imgUrl}
            alt="Picture of the author"
            width="53px"
            height="53px"
          />
          <p>#{token_id}</p>
        </div>
        <h4>
          {" "}
          <span>Rank:</span>{rank}
        </h4>
      </div>
      <div className={styles.tiles__right}>
        <div className="">
          <Image
            src="/etherum.png"
            alt="Picture of the author"
            height="4px"
            width="10px"
          />
          <span>{(Math.round(price * 10) / 10).toFixed(1)}</span>
          <button>Buy</button>
          <Image
            src={marketplace}
            alt="Picture of the author"
            width="19px"
            height="18px"
          />
        </div>{" "}
        <h4> {newTime}</h4>
      </div>
    </div>
  );
};

export default Tile;
