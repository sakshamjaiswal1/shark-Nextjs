export const BASE = " https://s3objectlambda-test.s3.us-east-1.amazonaws.com"
export const END='/warm/0xed5af388653567af2f388e6224dc7c4b3241c544'
export const IMAGE= `https://img.nftnerds.ai/0xed5af388653567af2f388e6224dc7c4b3241c544_1025_96x96`
export const RANK_BASE='https://s3objectlambda-test.s3.us-east-1.amazonaws.com'
export const RANK_END='/tally_ranks/0xed5af388653567af2f388e6224dc7c4b3241c544'

export const imageUrlGenerator= (contract_address,token_id,setImgUrl)=>{
            setImgUrl(`https://img.nftnerds.ai/${contract_address}_${token_id}_96x96`)
}
export const PROFIT= '/green.png'
export const MARKETPLACE = '/open.png'
export const BORDER='#C7C6C6'