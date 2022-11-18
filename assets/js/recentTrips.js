let tripHistory = document.querySelector(".trip-history");
let trips;
let getIcon = function (mode) {
    switch (mode) {
        case "Traffic":
            return "navigator map-driving  text-3xl";
            break;

        case "Driving":
            return "navigator map-driving  text-3xl";
            break;

    }
};

if(localStorage.getItem('tripInfos')==null){
    tripHistory.innerHTML="<h2>There are no searches</h2>";
    tripHistory.style="text-align:center";
}else{
    trips =JSON.parse(localStorage.getItem('tripInfos'))
   
    for(let i = 0; i<trips.length; i++){
        let tableRow = $("<tr>").addClass("column");
        let dateTime = trips[i].dateTime;
        dateTime=dateTime.split(" ");
        let date = dateTime[0];
        let time = dateTime[1];
        tableRow.append(
        $("<td>").html("<i class='"+getIcon(trips[i].mode)+"'></li>"),
        $("<td>").text(time),
        $("<td>").text(trips[i].origin),
        $("<td>").text(trips[i].destination),
        $("<td>").text(date)
        )
    
        $(".tableBody").append(tableRow);
    }
}
