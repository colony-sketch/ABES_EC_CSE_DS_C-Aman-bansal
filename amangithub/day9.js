const waitFortime = (sec)=>{
    setTimeout(()=>{
        console.log("wait has been completed");

    },sec)
    const start =nDate.now();
    while(Date.now() - start < 5000);
}
const syncFun = ()=>{
    waitForTime(5000);
    console.log("Sync function executed after 5 seconds");
}
console.log("before the ivocation of sync function");
syncFun();
const printMessage = (msg)=>{
    console.log(msg);
}
const wait = (msg,time)=>{
    return new Promise((resolve)=>{
    setTimeout(()=>{
        printMessage(msg);
},time)
})
}
const bookTicket = ()=>{
    printMessage("welcome")
    waitFun("login has been successful",2000);
    waitFun("seat has been successfullyl",5000);
    waitFun("payment has been successful",4000);
    waitFun("ticket booked successfully",2000);
    waitFun("thankyou",1000);
}
