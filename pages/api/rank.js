import { RANK_BASE,RANK_END } from "../../constants/allUrl";

export const getRank= async()=>{
  let res = await fetch(`${RANK_BASE}${RANK_END}`)

  return res.json()
}