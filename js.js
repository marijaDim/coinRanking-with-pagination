const baseUrl = "https://api.coinranking.com/v2/coins";
const proxyUrl = "https://protected-sea-17533.herokuapp.com/"

let coinsData = []; //50 total

let curPage = 1;
let pagseSize = 5;



async function getData() {

    const res = await fetch(proxyUrl + baseUrl);
    const coins = await res.json();

    coinsData = coins.data.coins;
}


async function rendertable(page = 1) {

    await getData();
    
    document.getElementById("first").style.visibility = "visible";
    document.getElementById("previous").style.visibility = "visible";
    document.getElementById("previousOfCurr").style.visibility = "visible";
    document.getElementById("previousOfCurr").innerText= curPage-1; //-1
    document.getElementById("curPage").style.visibility = "visible"; //1
    document.getElementById("curPage").innerText = curPage;
    document.getElementById("curPage").style.color = "red";
    document.getElementById("nextOfCurr").style.visibility = "visible";
    document.getElementById("nextOfCurr").innerText= curPage+1; //2
    document.getElementById("next").style.visibility = "visible";
    document.getElementById("last").style.visibility = "visible";



//last page
    if (page == Math.ceil(coinsData.length / pagseSize)) {

    document.getElementById("nextOfCurr").style.visibility = "hidden";
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("last").style.visibility = "hidden";
    }
//first page
else if(page ==1){
    document.getElementById("first").style.visibility = "hidden";
    document.getElementById("previous").style.visibility = "hidden";
    document.getElementById("previousOfCurr").style.visibility = "hidden";
}
//last page -1
else if(page == Math.ceil(coinsData.length / pagseSize)-1){
    document.getElementById("next").style.visibility = "hidden";
    document.getElementById("last").style.visibility = "hidden";
}
//second page, without first and previous
else if(page ==2){
    document.getElementById("first").style.visibility = "hidden";
    document.getElementById("previous").style.visibility = "hidden";

}



    let ispis = "";




    coinsData.filter((elem, index) => {


        let start = (curPage - 1) * pagseSize; //we want num of index of the first element in our list,if we are starting with curent page 1, thats mean starting position is 0 (index)
        //in the second interation is 1*10 (or 5), and we have index of the first item on the next page
        let end = curPage * pagseSize;

        //we filered just that elem that have index from let start until let end
        if (index >= start && index < end) return true;
    }).forEach(coin => {


        ispis += `<tr> 
<td> ${coin.rank}</td>
<td>${coin.name} </td>
<td> ${coin.price}</td>
<td> ${coin.marketCap}</td>
<td>${coin.symbol}</td>
</tr>`

    })



    document.getElementById("data").innerHTML = ispis;

}

rendertable();


//set up listeneres on all # with a defferentt function

document.getElementById("previous").addEventListener("click", previousPage);
document.getElementById("next").addEventListener("click", nextPage);

document.getElementById("last").addEventListener("click",lastPage);
document.getElementById("first").addEventListener("click",firstPage);
document.getElementById("previousOfCurr").addEventListener("click",previousOfCur);
document.getElementById("nextOfCurr").addEventListener("click",nextOfCur);


function previousPage() {

    if (curPage > 1) {
        curPage--;
        rendertable(curPage)
    }
}
function nextPage() {

    if ((curPage * pagseSize) < coinsData.length) {
        curPage++;
        rendertable(curPage);
    }
}

function lastPage(){
    curPage=Math.ceil(coinsData.length / pagseSize);
    rendertable(curPage);
}

function firstPage(){
    curPage=1;
    rendertable(curPage);
}
function previousOfCur(){
    curPage=curPage-1;
    rendertable(curPage);
}
function nextOfCur(){
    curPage=curPage+1;
    rendertable(curPage);
}
