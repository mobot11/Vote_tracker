$(function(){
   function runAjax(){
    var images;
    var filepath = [];
    window.filepath;

  var saveToLocalStorage = function(data) {
    localStorage.setItem('ajaxData', JSON.stringify(data));
  };

  var renderImages = function(images) {
    var $main = $('#content');

    images.forEach(function(img) {
      // $main.append('<img src="' + img.link + '"></img>');
      filepath.push(img.link);
      console.log(filepath);
    });
    saveToLocalStorage(images);
  };


  $.ajax({
    url: 'https://api.imgur.com/3/album/GHHvu.json',
    method: 'GET',
    headers: {
      'Authorization': 'Client-ID 771c94be66ed54b'
    }
  })
  .done(function(res) {
    images = res.data.images
    renderImages(images);
  })
  .fail(function(err) {
    console.log(err);
  });


};


runAjax();

var Kitty = function (imgLink) {
    this.imgLink = imgLink;
    // this.color = color;
    this.score = 0;
    this.graphTotal = 50;
    // kittyArray = [];
};

// var filepath = ["contestants/01.jpg","contestants/02.jpg", "contestants/03.jpg",
// "contestants/04.jpg", "contestants/05.jpg", "contestants/06.jpg", "contestants/07.jpg",
//  "contestants/08.jpg", "contestants/09.jpg", "contestants/10.jpg", "contestants/11.jpg",
//  "contestants/12.jpg", "contestants/13.jpg","contestants/14.jpg", ];

 var kittyArray = [];

 filepath.forEach(function(path){
  kittyArray.push(new Kitty(path))
 })


var scoreArray = [];





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
