import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.mainCon}>
      <div className={styles.tilesCon}>
        <div className={styles.tilesCon__topCon}>
          <h3>Listings (33)</h3>

          <div className={styles.custom_select}>
            <select name="" id="" className={styles.select}>
              <option value="">Date</option>
              <option value="">Price</option>
              <option value="">Rank</option>
            </select>
          </div>
        </div>

        <div className={styles.tilesCon__midCon}>
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
                <h4> <span>Rank:</span>450</h4>
            </div>
            <div className=""></div>
          </div>
          <div className={styles.tiles}>
            <div className={styles.tiles__right}>
              {" "}
              <Image
                src="/ff.png"
                alt="Picture of the author"
                width={600}
                height={1800}
              />
            </div>
            <div className="">x</div>
            <div className="">x</div>
          </div>
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
            <div className=""> </div>
            <div className="">x</div>
          </div>
        </div>
      </div>
    </div>
  );
}
