 export const insertArray = (data,rank,count,setSortArrray)=>{
   let modifiedData=[]
   
    data.token_ids.slice(0,count).map((elem,index)=>modifiedData.push({
        nature:data.natures[index],
        price:data.prices[index],
        marketCode:data.marketplaces[index],
        listingtime:data.listing_times[index],
        token_id:data.token_ids[index],
        contract_address:data.contract_address,
        last_trade_event:data.last_trade_events[index],
        rank:rank.ranks[index][0]

    }))
    
    setSortArrray(modifiedData)
 }

 export const timeSort=(a,b)=>{
     if( a.listingtime<b.listingtime) return 1
     else if(a.listingtime>b.listingtime)return -1
     else return 0
 }

 export const rankSort =(a,b)=>{
    if(a.rank<b.rank) return -1
    else if(a.rank>b.rank)return 1
    else return 0
 }
 export const priceSort =(a,b)=>{
    if(a.price<b.price) return -1
    else if(a.price>b.price)return 1
    else return 0
 }
 