



const button = document.getElementById('scrapeButton');
const ytButton = document.getElementById('ytButton');
const namezy = document.getElementById('namezy');
button.addEventListener('click',()=>{
    
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function(tabs) {
        var tabId = tabs[0].id;
        getQsn(tabId);
        ytButton.style.display = 'block';
        button.style.display = 'none';

    });
    
})
let qName;
ytButton.addEventListener('click',()=>{
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function(tabs) {
            var tabId = tabs[0].id;
            //alert("clciked");
            getLink(tabId);
            //alert("Link to the question is copied to clipboard");

    });
})
function getLink(tabId){
    chrome.scripting.executeScript({target:{tabId:tabId},func:findLink});
}

function findLink(){
    // alert( qName);
    let que = qName.split('-').join('+');
    // alert(qName);
    let question="https://www.youtube.com/results?search_query=Leetcode+";
    question+=que;
    //alert(question);
    window.open(question);

}


function getQsn(tabId){
    chrome.scripting.executeScript({target:{tabId:tabId},func:scrapeQsn});
}

function scrapeQsn(){
    const url = window.location.href;
    const firstIndex = url.indexOf('problems')+'problems'.length+1;
    let qsnName="";
    for(let i=firstIndex;i<=url.length && url[i]!='/';i++) qsnName += url[i];
    // namezy.innerText = qsnName;
    qName  = qsnName;

}

