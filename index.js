async function fetchText(){

    let response = await fetch("https://api.covid19api.com/summary");

    if(response.status==200)
    {
        return response.json();
    }else
    {
        console.log("Network Error");
        return "Network Error";
    }
}

async function renderData()
{
    let datas = await fetchText();
    let html='';
    datas=datas.Countries;
    for(var i=0;i<190;i++){
        let htmlElement=`
        <div class="data">
        <div class="heading">Covid Data</div>
        <div class="country_name">Name:${datas[i].Country}</div>
        <div class="confirmed">Total Confirmed Cases:${datas[i].TotalConfirmed}</div>
        <div class="deaths">Total Deaths:${datas[i].TotalDeaths}</div>
        <div class="recovered">Total Recovered:${datas[i].TotalRecovered}</div>
        </div>`;
    html+=htmlElement; 
    }
    let container = document.querySelector('.container');
    container.innerHTML=html;
}

renderData();