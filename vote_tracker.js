(function(){
var Kitty = function (imgLink, color) {
    this.imgLink = imgLink;
    this.color = color;
    this.score = 0;
    this.kittyArray = [];
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



var Img = function(){
    this.redKittyArray = [kittyOne, kittyThree, kittyFive, kittySeven, kittyNine, kittyEleven, kittyThirteen];
    this.goldKittyArray = [kittyTwo, kittyFour, kittySix, kittyEight, kittyTen, kittyTwelve,
    kittyFourteen]
    this.kittyObj1 = '';
    this.kittyObj2 = '';
};


Img.prototype.getRed = function(){
  this.kittyObj1 = this.redKittyArray[Math.floor(Math.random() * this.redKittyArray.length)]
   return this.kittyObj1;

    // imageEl1.appendChild(newImage1);
};
Img.prototype.getGold = function() {
    this.kittyObj2 = this.goldKittyArray[Math.floor(Math.random() * this.goldKittyArray.length)]
    return this.kittyObj2;

    // newImage2.src = kittyLink2;
    // imageEl2.appendChild(newImage2);
};

Img.prototype.renderRed = function(){
    var imageEl1 = document.getElementById("image1")
    var newImage1 = document.createElement('img')
    var kittyLink1 = this.getRed();
    newImage1.src = kittyLink1.imgLink
    imageEl1.appendChild(newImage1);
};
Img.prototype.renderGold = function(){
  var imageEl2 = document.getElementById("image2");
  var newImage2 = document.createElement('img');
  var kittyLink2 = this.getGold();
  newImage2.src = kittyLink2.imgLink;
  imageEl2.appendChild(newImage2);
};

 window.Img = Img;
 window.Kitty = Kitty;

})();
