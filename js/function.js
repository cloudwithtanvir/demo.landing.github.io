
function openNav() {
	document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
	document.getElementById("myNav").style.width = "0%";
  }
  
  window.onscroll = function() {myFunction()};
  
  var navbar = document.getElementById("main-menu");
  // var business = document.getElementById("business");
  
  
  function myFunction() {
	if (window.pageYOffset) {
	  navbar.classList.add("sticky")
	  // business.classList.add("business")
  
	} else {
	  navbar.classList.remove("sticky");
	  // business.classList.add("business")
	}
  }
  
  document.getElementById("humbargurMenu").addEventListener("click", function() {
	var x = document.getElementById("humbargurMenu");
	var y = document.getElementById("humbargurMenu").style.width = "100%";
	if (y === "100%") {
	   document.getElementById("myNav").style.width = "0%";
	} else {
	  document.getElementById("humbargurMenu").style.width = "100%";
	}
  
  });
  
  
  // //  Main Menu animate
  // function animateToDom(event, id) {
  //     var $id = $(id);
  //     if ($id.length === 0) {
  //         return;
  //     }
  
  //     event.preventDefault();
  //     var pos = $id.offset().top - $('#navbar').height() - 0;
  //     $('body, html').animate({ scrollTop: pos });
  // }
  
  
  // //  Stikcy Menu animate
  // function animateToDomStikcy(event, id) {
  //     var $id = $(id);
  //     if ($id.length === 0) {
  //         return;
  //     }
  
  //     event.preventDefault();
  //     var pos = $id.offset().top - $('#navbar').height() - 0;
  //     $('body, html').animate({ scrollTop: pos });
  // }
  // //  Footer Menu animate
  // function animateToDomFooter(event, id) {
  //     var $id = $(id);
  //     if ($id.length === 0) {
  //         return;
  //     }
  
  //     event.preventDefault();
  //     var pos = $id.offset().top - $('#navbar').height() - 0;
  //     $('body, html').animate({ scrollTop: pos });
  // }
  
  // //  Humbergur Menu animate
  // function animateToDomHumbergur(event, id) {
  //     var $id = $(id);
  //     if ($id.length === 0) {
  //         return;
  //     }
  
  //     event.preventDefault();
  //     var pos = $id.offset().top - $('#humbargurMenu').height() - 0;
  //     $('body, html').animate({ scrollTop: pos });
  // }
  
  
  // main menu
  function animateHashLinks() {
	  $(document).on('click', '.level-menu ul li a', function(event) {
		  var id = $(this).attr('href');
  
		  animateToDom(event, id);
	  });
  
	  if (window.location.hash) {
		  var hashValue = window.location.hash;
  
		  if (hashValue.length > 2) {
			  setTimeout(() => {
				  animateToDom(new Event('click'), hashValue);
			  }, 1000);
		  }
	  }
  }
  
  
  // Sticky menu
  function animateHashLinksSticky() {
	  $(document).on('click', '.sticky .level-menu ul li a', function(event) {
		  var id = $(this).attr('href');
  
		  animateToDomStikcy(event, id);
	  });
  
	  if (window.location.hash) {
		  var hashValue = window.location.hash;
  
		  if (hashValue.length > 2) {
			  setTimeout(() => {
				  animateToDomStikcy(new Event('click'), hashValue);
			  }, 1000);
		  }
	  }
  }
  
  // Footer menu
  function animateHashLinksFooter() {
	  $(document).on('click', '.footer-level-menu ul li a', function(event) {
		  var id = $(this).attr('href');
  
		  animateToDomFooter(event, id);
	  });
  
	  if (window.location.hash) {
		  var hashValue = window.location.hash;
  
		  if (hashValue.length > 2) {
			  setTimeout(() => {
				  animateToDomFooter(new Event('click'), hashValue);
			  }, 1000);
		  }
	  }
  }
  
  
  // Humbergur menu
  function animateHashLinksHumbergur() {
	  $(document).on('click', '.overlay-content a', function(event) {
		  var id = $(this).attr('href');
  
		  animateToDomHumbergur(event, id);
	  });
  
	  if (window.location.hash) {
		  var hashValue = window.location.hash;
  
		  if (hashValue.length > 2) {
			  setTimeout(() => {
				  animateToDomHumbergur(new Event('click'), hashValue);
			  }, 1000);
		  }
	  }
  }
  
  
  
  jQuery(document).ready(function($) {
	  animateHashLinks();
   
   
  });
  
  
  
  