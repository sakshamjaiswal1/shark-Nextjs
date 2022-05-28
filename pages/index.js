import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Tile from "../component/Tile";

export default function Home() {
  return (
    <div className={styles.mainCon}>
      <div className={styles.tilesCon}>
        <div className={styles.tilesCon__topCon}>
          <h3>Listings (50)</h3>

          <div className={styles.custom_select}>
            <select name="" id="" className={styles.select}>
              <option value="">
                {" "}
                <span>
                  <Image
                    src="/list.png"
                    alt="Picture of the author"
                    width="8px"
                    height="8px"
                  />
                </span>{" "}
                Date
              </option>
              <option value="">Price</option>
              <option value="">Rank</option>
            </select>
          </div>
        </div>

        <div className={styles.tilesCon__midCon}>
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile />
          <Tile /> 
          <Tile />
          <Tile />
        </div>
      </div>
    </div>
  );
}
