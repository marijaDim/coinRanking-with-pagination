const baseUrl = "https://api.coinranking.com/v2/coins";
const proxyUrl = "https://protected-sea-17533.herokuapp.com/"

let coinsData = [];

let curPage = 1;
let pagseSize = 5;



async function getData() {

    const res = await fetch(proxyUrl + baseUrl);
    const coins = await res.json();

    coinsData = coins.data.coins;
}


async function rendertable(page = 1) {

    await getData();
    if (page == 1) {

        document.getElementById("previous").style.visibility = "hidden";


    } else {
        document.getElementById("previous").style.visibility = "visible";
    }

    if (page == Math.ceil(coinsData.length / pagseSize)) {

        document.getElementById("next").style.visibility = "hidden";


    } else {
        document.getElementById("next").style.visibility = "visible";
    }


    let ispis = "";




    coinsData.filter((elem, index) => {


        let start = (curPage - 1) * pagseSize;
        let end = curPage * pagseSize;
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



    document.getElementById("data").innerHTML = ispis

}

rendertable()


document.getElementById("previous").addEventListener("click", previousPage)
document.getElementById("next").addEventListener("click", nextPage)


function nextPage() {

    if ((curPage * pagseSize) < coinsData.length) {
        curPage++;
        rendertable(curPage);
    }


}

function previousPage() {

    if (curPage > 1) {
        curPage--;
        rendertable(curPage)
    }
}