



const button = document.getElementById('scrapeButton');
button.addEventListener('click',()=>{
    
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function(tabs) {
        var tabId = tabs[0].id;
        getQsn(tabId);
    });
    
})

function getQsn(tabId){
    chrome.scripting.executeScript({target:{tabId:tabId},func:scrapeQsn});
}

function scrapeQsn(){
    const url = window.location.href;
    const firstIndex = url.indexOf('problems')+'problems'.length+1;
    let qsnName="";
    for(let i=firstIndex;i<=url.length && url[i]!='/';i++) qsnName += url[i];
    alert(qsnName);
}

