

export const changeBorder = (nature, setBorder) => {
    switch (nature) {
        case null || 0:
            setBorder("#C7C6C6");
            break;
        case 1:
            setBorder("#1DB448");
            break;
        case 2:
            setBorder("#FEB137");
            break;
        case 3:
            setBorder("#FF4747");
            break;
        default:
            setBorder("#C7C6C6");
    }
};

export const changeMaret = (marketCode, setMarketPlace) => {
    switch (marketCode) {
        case 1:
            setMarketPlace('/open.png');
            break;
        case 2:
            setMarketPlace('/rare.png');
            break;
        default:
            setMarketPlace('/open.png');
    }
};

export const changeListingTime = (listingtime, setNewTime) => {
    let msPerMinute = 60 * 1000;
    let msPerHour = msPerMinute * 60;
    let msPerDay = msPerHour * 24;
    let msPerMonth = msPerDay * 30;
    let msPerYear = msPerDay * 365;


    let dateNow = Math.floor(new Date().getTime() / 1000.0)
    let elapsed = dateNow - listingtime
   
    if (elapsed < msPerMinute) {
        setNewTime(Math.round(elapsed / 1000) + ' seconds ago')
    }

    else if (elapsed < msPerHour) {
        setNewTime(Math.round(elapsed / msPerMinute) + ' minutes ago')
    }

    else if (elapsed < msPerDay) {
        setNewTime(Math.round(elapsed / msPerHour) + ' hours ago')
    }

    else if (elapsed < msPerMonth) {
        setNewTime('approximately ' + Math.round(elapsed / msPerDay) + ' days ago')
    }

    else if (elapsed < msPerYear) {
        setNewTime('approximately ' + Math.round(elapsed / msPerMonth) + ' months ago')
    }

    else {
        setNewTime('approximately ' + Math.round(elapsed / msPerYear) + ' years ago')
    }


}

export const checkProfit=(price,last_trade_event,setProfit)=>{
    if(last_trade_event===null){
        setProfit('/green.png')
        return
    }
    
    else if(price>last_trade_event?.price?last_trade_event.price:0){
        setProfit('/red.png')
        return
    }
    else{
        setProfit('/green.png')
        return
    }
debugger
}