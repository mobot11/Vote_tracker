(function(){
var Kitty = function (imgLink, color) {
    this.imgLink = imgLink;
    this.color = color;
    this.score = 0;
};

var kittyOne = new Kitty("contestants/01 - pPA0iM0.jpg", "red");
var kittyTwo = new Kitty("contestants/02 - 7ykJ1xi.jpg", "gold");
var kittyThree = new Kitty("contestants/03 - n91EiPd.jpg", "red");
var kittyFour = new Kitty("contestants/04 - LDiTFeQ.jpg", "gold");
var kittyFive = new Kitty("contestants/05 - ywavhKp.jpg", "red");
var kittySix = new Kitty("contestants/07 - leaDJOY.jpg", "gold");
var kittySeven = new Kitty("contestants/08 - XA0PRs2.jpg", "red");
var kittyEight = new Kitty("contestants/09 - rkO8XVX.jpg", "gold");
var kittyNine = new Kitty("contestants/09 - rkO8XVX.jpg", "red");
var kittyTen = new Kitty("contestants/10 - QBZjjMe.jpg", "gold");
var kittyEleven = new Kitty("contestants/11 - aGJW6lS.jpg", "red");
var kittyTwelve = new Kitty("contestants/12 - 60maZWt.jpg", "gold");
var kittyThirteen = new Kitty("contestants/13 - u9wzm0f.jpg", "red");
var kittyFourteen = new Kitty("contestants/14 - vyz8MGP.jpg", "gold");


  kittyArray = [kittyOne, kittyTwo, kittyThree, kittyFour, kittyFive, kittySix,
  kittySeven, kittyEight, kittyNine, kittyTen, kittyEleven, kittyTwelve, kittyThirteen,
  kittyFourteen]


Kitty.prototype.render = function(){
  var imageEl1 = document.getElementById('image1');
  var imageEl2 = document.getElementById('image2');
  var newImage1 = document.createElement('img');
  var newImage2 = document.createElement('img');
  this.kitty1 = kittyArray[Math.floor(Math.random() * kittyArray.length)];
  this.kitty2 = kittyArray[Math.floor(Math.random() * kittyArray.length)];
  while (this.kitty1 === this.kitty2) {
    this.kitty1 = kittyArray[Math.floor(Math.random() * kittyArray.length)];
    this.kitty2 = kittyArray[Math.floor(Math.random() * kittyArray.length)];
  }
  var kittyImg1 = this.kitty1.imgLink;
  var kittyImg2 = this.kitty2.imgLink;
  newImage1.src = kittyImg1;
  newImage2.src = kittyImg2;
  imageEl1.appendChild(newImage1);
  imageEl2.appendChild(newImage2);

};


 window.Kitty = Kitty;

})();
