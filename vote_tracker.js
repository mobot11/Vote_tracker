var Img = function(){
    this.imgLink = ["contestants/01 - pPA0iM0.jpg", "contestants/02 - 7ykJ1xi.jpg",
    "contestants/03 - n91EiPd.jpg", "contestants/04 - LDiTFeQ.jpg", "contestants/05 - ywavhKp.jpg",
    "contestants/06 - 9Fg6CZS.jpg", "contestants/07 - leaDJOY.jpg", "contestants/08 - XA0PRs2.jpg",
    "contestants/09 - rkO8XVX.jpg", "contestants/10 - QBZjjMe.jpg", "contestants/11 - aGJW6lS.jpg",
    "contestants/12 - 60maZWt.jpg", "contestants/13 - u9wzm0f.jpg", "contestants/14 - vyz8MGP.jpg" ];
}


Img.prototype.render = function(){
    var imageEl1 = document.getElementById("image1")
    var newImage1 = document.createElement('img')
    newImage1.src = this.imgLink[Math.floor(Math.random() * 15)]
    imageEl1.appendChild(newImage1);
    var imageEl2 = document.getElementById("image2")
    var newImage2 = document.createElement('img')
    newImage2.src = this.imgLink[Math.floor(Math.random() * 15)]
    imageEl2.appendChild(newImage2);

}
 var test = new Img();
 test.render();



var kittenTable= document.getElementById("kittenTable").getContext("2d");
// new Chart(countries).Pie(pieData, pieOptions);
var pieData = [
    {
        value: 50,
        color:"#F2B512"
    },
    {
        value : 50,
        color : "#D92525"
    },

];
var pieOptions = {
    segmentShowStroke : false,
    animateScale : true
}
new Chart(kittenTable).Pie(pieData, pieOptions);
