

var allImage = document.querySelectorAll('.child img');

var mainImage = document.querySelector('#mainImage')

for (let i = 0 ; i < allImage.length; i++) {
    allImage[i].addEventListener('click' , function (e) {
    
        var clickedImage = e.target.getAttribute("src") ;
        mainImage.setAttribute("src", clickedImage)
    })
}
