$(document).ready(function(){
	var slides = ["./assets/images/CBCNews/CBCNewsSplash.png", "./assets/images/CBCNews/CBCNewsMenu.png" ,"./assets/images/CBCNews/CBCNewsHome1.png","./assets/images/CBCNews/CBCNewsHome2.png","./assets/images/CBCNews/CBCNewsNews1.png","./assets/images/CBCNews/CBCNewsNews2.png","./assets/images/CBCNews/CBCNewsNews3.png","./assets/images/CBCNews/CBCNewsPhotoGallery.png"];
	var imageNumber = 1;
	setInterval(function(){
		$(".screen").attr("src", slides[imageNumber]);
		if (imageNumber == slides.length) {
			imageNumber = 0;
		} else {
			imageNumber++;
		}
	} , 3500);
});