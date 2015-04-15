$(function(){
var Kitty = function (imgLink) {
    this.imgLink = imgLink;
    // this.color = color;
    this.score = 0;
    this.graphTotal = 50;
    // kittyArray = [];
};

var filepath = ["contestants/01.jpg","contestants/02.jpg", "contestants/03.jpg",
"contestants/04.jpg", "contestants/05.jpg", "contestants/06.jpg", "contestants/07.jpg",
 "contestants/08.jpg", "contestants/09.jpg", "contestants/10.jpg", "contestants/11.jpg",
 "contestants/12.jpg", "contestants/13.jpg","contestants/14.jpg", ];

 var kittyArray = [];

 filepath.forEach(function(path){
  kittyArray.push(new Kitty(path))
 })






Kitty.prototype.render = function(){
  this.kitty1 = kittyArray[Math.floor(Math.random() * kittyArray.length)];
  this.kitty2 = kittyArray[Math.floor(Math.random() * kittyArray.length)];
  while (this.kitty1 === this.kitty2) {
    this.kitty1 = kittyArray[Math.floor(Math.random() * kittyArray.length)];
    this.kitty2 = kittyArray[Math.floor(Math.random() * kittyArray.length)];
  }
  var kittyImg1 = this.kitty1.imgLink;
  var kittyImg2 = this.kitty2.imgLink;
  $("#image1").attr("src",kittyImg1);
  $("#image2").attr("src", kittyImg2);

};

 window.kittyArray = kittyArray;
 window.Kitty = Kitty;
});
