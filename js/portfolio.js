var tytoAlba = document.getElementById("tyto-alba");

tytoAlba.addEventListener("click", swapImage ('tyto-alba', 'portfolio/tytoAlba2.png') {
	function swapImage(imgId, newImgSrc) {
	  var existingImg = document.getElementById(imgId);
	  existingImg.src = newImgSrc;
	}
});