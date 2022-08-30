

const total_pages = 10;
const first_page = 1;

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const current_page = urlParams.get('page')

console.log(current_page);


/** 
 * GENERATING OUR BUTTONS
 * AND EXECUTING IT WHEN THE SCRIPT IS LOADED
 */
(() => {
    let i = 1;
    while(i <= total_pages)
    {
        document.querySelector('.buttons').innerHTML += `<a href="list.html?page=${i}" class="page" id="p${i}" data-id="${i}">${i}</a>`;
        i++;
    }
})();

/**
 * ADDING EVENT LISTENERS TO OUR BUTTONS
 */
// const buttons=document.querySelectorAll(".buttons");
// buttons.forEach(element=>{
//     element.addEventListener("click",function(e){
//         current_page=e.target.dataset.id;
//         rendertable();
//     })
// })




/**
 * WHEN A PAGE BUTTON IS TRIGGERED
 */
function rendertable(){

    console.log(current_page);

    // // HIDE all buttons
    // buttons.forEach(element => {
    //     element.style.visibility="hidden";
    // })
    



    // //IF WE ARE ON THE FIRST PAGE
    // if(current_page === first_page)
    // {
    //     // let id = "p"+current_page;
    //     // console.log(id);
    //     document.getElementById("p1").style.visibility="visible";
    //     document.getElementById("p2").style.visibility="visible";
    //     document.getElementById("p10").style.visibility="visible";

    //     //SHOW current page
    //     //SHOW current page + 1
    //     //SHOW last page
        

    // }
    // //IF WE ARE ON THE LAST PAGE
    // else if(current_page === total_pages){

    //     document.getElementById("p10").style.visibility="visible";
    //     document.getElementById("p9").style.visibility="visible";
    //     document.getElementById("p1").style.visibility="visible";


    //     //SHOW last page
    //     //SHOW last - 1
    //     //SHOW first page

    // }
    // //ANY OTHER PAGE
    // else
    // {
    //     //SHOW current page
    //     //SHOW current page - 1
    //     //SHORE current page + 1

    // }


}





rendertable();