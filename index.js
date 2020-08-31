function move() {
    var movingItem = document.getElementById("home");
    var pos = 0;
    var id = setInterval(move, 1);
    function move() {
        if(pos < -120){
            enableScroll()
            movingItem.style.display = "none";
            clearInterval(id);
        } else {
            pos -= 2;
            movingItem.style.top = pos + "vh";
        }
    }
}

function disableScroll() { 
	scrollTop = window.pageYOffset || document.documentElement.scrollTop; 
	scrollLeft = window.pageXOffset || document.documentElement.scrollLeft; 

		window.onscroll = function() { 
			window.scrollTo(document.documentElement.scrollTop, document.documentElement.scrollLeft); 
		}; 
} 

function enableScroll() { 
	window.onscroll = function() {}; 
} 

disableScroll()