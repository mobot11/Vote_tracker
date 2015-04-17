$(function(){
  $("#button").toggle();
  var images;
  window.filePathArray = [];

  var saveToLocalStorage = function(data) {
    localStorage.setItem('ajaxData', JSON.stringify(data));
  };

  var filepath = function(image) {
    image.forEach(function(img) {
      filePathArray.push(img.link);

    });
    saveToLocalStorage(image);
  };
  var voteTracker = function(){

    var Kitty = function (imgLink) {
      this.imgLink = imgLink;
      // this.color = color;
      this.score = 0;
      this.graphTotal = 50;
      // kittyArray = [];
    };

    var kittyArray = [];

    filePathArray.forEach(function(path){
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
      var table = function (this.kitty2, this.kitty1) {
        var kittenTable= document.getElementById("kittenTable").getContext("2d");
    var pieData = [
      {
        value: value1,
        color:"gold"
      },
     {
        value : value2,
        color : "red"
    },
  ];
    var pieOptions = {
      segmentShowStroke : false,
      animateScale : true
    }
  new Chart(kittenTable).Doughnut(pieData, pieOptions);
  };

    window.kittyArray = kittyArray;
    window.Kitty = Kitty;
  };
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
    filepath(images);
    console.log(filePathArray)
    voteTracker();
    events();
  })
  .fail(function(err) {
    console.log(err);
  });



});







