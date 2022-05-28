import React from "react";
import Image from "next/image";
import styles from "../styles/Tile.module.css";
import { useState, useEffect } from "react";
import {
  changeBorder,
  changeMaret,
  changeListingTime,
} from "../helpers/changeBorder";
import { IMAGE, imageUrlGenerator } from "../constants/allUrl";

const Tile = ({
  nature,
  price,
  marketCode,
  listingtime,
  token_id,
  contract_address,
}) => {
  const [boder, setBorder] = useState("#C7C6C6");
  const [marketplace, setMarketPlace] = useState("/open.png");
  const [newTime, setNewTime] = useState(listingtime);
  const [imgUrl, setImgUrl] = useState(IMAGE);

  useEffect(() => {
    changeBorder(nature, setBorder);
    changeMaret(marketCode, setMarketPlace);
    changeListingTime(listingtime, setNewTime);
    imageUrlGenerator(contract_address, token_id, setImgUrl);
    console.log(imgUrl);
  }, [nature]);
  return (
    <div className={styles.tiles} style={{ borderRight: `5px solid ${boder}` }}>
      <div className="">
        {" "}
        <Image
          src="/green.png"
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
          <span>Rank:</span>450
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
          <span>{price}</span>
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
