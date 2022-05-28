import React from 'react'
import Image from "next/image";
import styles from "../styles/Tile.module.css";


const Tile = () => {
  return (
    <div className={styles.tiles}>
    <div className="">
      {" "}
      <Image
        src="/ff.png"
        alt="Picture of the author"
        width={600}
        height={1800}
      />
    </div>
    <div className={styles.tiles__mid}>
      {" "}
      <Image
        src="/Shark.png"
        alt="Picture of the author"
        width="53px"
        height="53px"
      />
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
      <span>0.1</span>
        <button>Buy</button>
        <Image
        src="/open.png"
        alt="Picture of the author"
        width="19px"
        height="18px"
      />
      </div>{" "}
      <h4> 25 mins ago</h4>
    </div>
  </div>
  )
}

export default Tile