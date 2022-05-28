import {BASE,END} from '../../constants/allUrl'

export const getData = async ()=>{
  let res = await fetch(`${BASE}${END}`)
    return res.json()
}