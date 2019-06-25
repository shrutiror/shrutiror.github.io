(function(){

	var button = document.getElementById('cn-button'),
    wrapper = document.getElementById('cn-wrapper');

    //open and close menu when the button is clicked
	var open = false;
	button.addEventListener('click', handler, false);

	function handler(){
	  if(!open){
	    this.innerHTML = "Close";
	    classie.add(wrapper, 'opened-nav');
	  }
	  else{
	    this.innerHTML = "Select";
		classie.remove(wrapper, 'opened-nav');
	  }
	  open = !open;
	}
	function closeWrapper(){
		classie.remove(wrapper, 'opened-nav');
	}
	$('#cn-wrapper').on('click', function () {
    $('#component').hide();
    $('#section1').fadeIn();
    $('#section2').fadeIn();
    $('#section3').fadeIn();
    $('#section4').fadeIn();
    $('#section5').fadeIn();
    $('#section6').fadeIn();
    $('#section7').fadeIn();
});

})();
