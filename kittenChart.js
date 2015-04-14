var kittenTable= document.getElementById("kittenTable").getContext("2d");
// new Chart(countries).Pie(pieData, pieOptions);
var pieData = [
    {
        value: 50,
        color:"gold"
    },
    {
        value : 50,
        color : "red"
    },

];
var pieOptions = {
    segmentShowStroke : false,
    animateScale : true
}
new Chart(kittenTable).Pie(pieData, pieOptions);

