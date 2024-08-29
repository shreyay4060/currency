//1

// const base_url="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

// const dropdowns=document.querySelectorAll(".dropdown select");

// for(let select of dropdowns){
//     for(currCode in countryList){
//         let option=document.createElement("option");
//         option.innerText=currCode;
//         option.value=currCode;
//        if(select.name === "from" && currCode === "USD"){
//         option.selected= "selected";
//        }
//        else if(select.name === "to" && currCode === "INR"){
//         option.selected="selected";
//        }
//         select.append(option);
//     }
//     select.addEventListener("change",(evt)=>{
//         updateFlag(evt.target);
//     });
// }
// const updateFlag=(element)=>{
//     let currCode=element.value;
//     let countryCode=countryList[currCode];
//     let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
//     let img=element.parentElement.querySelector("img");
//     img.src=newSrc;
// }








//2

// const url="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

// const dropdowns=document.querySelectorAll(".dropdown select");

// // for ( code in countryList){
// //     console.log(code, countryList[code])
// // }

// for(let select of dropdowns){
//     for (code in countryList){
//         let option=document.createElement("option");
//         option.innerText=code;
//         option.value=code;

//         if(select.name === "from" && code === "USD"){
//             option.selected="selected";
//         }
//         else if(select.name === "to" && code === "INR"){
//             option.selected="selected";
//         }
//         select.append(option);
//     }

// select.addEventListener("change",(evt)=>{
//     updateFlag(evt.target)

// });
// }
// const updateFlag=(element)=>{
//     let code=element.value;
//     let countryCode=countryList[code];
//     let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
//     let img= element.parentElement.querySelector("img");
//     img.src=newSrc;



//3

// const B_URL="https://api.currencyapi.com/v3/latest?apikey=cur_live_bHxWynGj443Ca7J4C1mD3LLiZEFCiFN5MG70byHw";

// const dropdowns=document.querySelectorAll(".dropdown select");

// const amount=document.querySelector(".amount input");

// const btn=document.querySelector("form button");


// const fromCurr=document.querySelector(".from select");
// const toCurr=document.querySelector(".to select");

// const msg=document.querySelector(".msg");

// for(let select of dropdowns){
//     for(currCode in countryList){
//         let option=document.createElement("option");
//         option.innerText=currCode;
//         option.value=currCode;

//         if( select.name === "from" && currCode === "USD"){
//             option.selected="selected";
//         }
//         else if( select.name=== "to"&& currCode === "INR"){
//             option.selected="selected";
//         }
//         select.append(option)
//     }
//     select.addEventListener("change",(evt)=>{
//         updateFlag(evt.target);
//     })
// }
// const updateFlag=(element)=>{
//     let currCode=element.value;
//     let countryCode=countryList[currCode];
//     let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
//     let img=element.parentElement.querySelector("img");
//     img.src=newSrc;
// }

// btn.addEventListener("click", async (evt) => {
//     evt.preventDefault();
//     let amtval=amount.value;
//     if(amtval === "" || amtval < 1){
//         alert("Please enter a valid amount");
//     }

    
//     const url=`${B_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
//     let response = await fetch(url);
//     let data= await response.json();
//     let rate=data[toCurr.value.toLowerCase()];
    
//     let finalAmt=amtval*rate;

//     msg.innerText=`${amtval} ${fromCurr.value} = ${finalAmt}
//     ${toCurr.value} `;
// });


const B_URL="https://api.currencyapi.com/v3/latest?apikey=cur_live_bHxWynGj443Ca7J4C1mD3LLiZEFCiFN5MG70byHw";

const dropdowns=document.querySelectorAll(".dropdown select");

const amount=document.querySelector(".amount input");

const btn=document.querySelector("form button");


const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");

const msg=document.querySelector(".msg");

 

for(let select of dropdowns){
    for(let currCode in countryList){
        let option=document.createElement("option");
        option.innerText=currCode;
        option.value=currCode;

        if( select.name === "from" && currCode === "USD"){
            option.selected="selected";
        }
        else if( select.name=== "to"&& currCode === "INR"){
            option.selected="selected";
        }
        select.append(option)
    }
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}
const updateFlag=(element)=>{
    let currCode=element.value;
    let countryCode=countryList[currCode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img=element.parentElement.querySelector("img");
    img.src=newSrc;
}

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amtval=amount.value;
    if(amtval === "" || amtval < 1){
        alert("Please enter a valid amount");
    }

    
    const url=`${B_URL}&base=${fromCurr.value.toLowerCase()}&currencies=${toCurr.value.toLowerCase()}`;
    let response = await fetch(url);
    let data= await response.json();
    let rate=data.rates[toCurr.value.toLowerCase()];
    
    let finalAmt=amtval*rate;

    msg.innerText=`${amtval} ${fromCurr.value} = ${finalAmt}
    ${toCurr.value} `;
});