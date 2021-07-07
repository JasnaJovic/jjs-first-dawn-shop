// using local storage

	let darkMode = localStorage.getItem('darkMode');	
	const darkModeToggle = document.querySelector('.demo-color-toggle');
	const darkThemeIcon = document.querySelector('.dark-theme-icon');
	const lightThemeIcon = document.querySelector('.light-theme-icon')
	lightThemeIcon.style.display = 'none';
	darkThemeIcon.style.display = 'flex';
	// check if dark mode is enabled 
	// if it's enabled turn it off
	// if it's disabled turn it on

	const enableDarkMode = () => {
		lightThemeIcon.style.display = 'flex';
		darkThemeIcon.style.display = 'none';
		// 1. add class dark-mode to body
		document.body.classList.add('dark-mode');
		$('head').append('<link href="/assets/theme-dark.css?v=12966452138792579536" rel="stylesheet" type="text/css" media="all">');	
		setTimeout(function () {
		$('head link[href*="-light"]').remove();
		}, 500)
		// 2. update dark mode in local storage
		localStorage.setItem('darkMode', 'enabled');
	};

	if(darkMode === 'enabled') {
		enableDarkMode()
	}

	const disableDarkMode = () => {
		lightThemeIcon.style.display = 'none';
		darkThemeIcon.style.display = 'flex';
		// 1. add class dark-mode to body
		document.body.classList.remove('dark-mode');
		$('head').append('<link href="/assets/theme-light.css?v=4954933951495250391" rel="stylesheet" type="text/css" media="all">');
		setTimeout(function () {
			$('head link[href*="-dark"]').remove();
		}, 500)
		// 2. update dark mode in local storage
		localStorage.setItem('darkMode', null);
	};



	darkModeToggle.addEventListener('click', () => {
		darkMode = localStorage.getItem('darkMode');
		if(darkMode !== 'enabled') {
			enableDarkMode();
		}
		else {
			disableDarkMode();
		}
	})

// enabling system dark mode

	/* this is all in css 
	
	@media(prefers-color-scheme: dark) {
		bla bla bla...
	} 
	
	
	*/

	// $('.demo-color-toggle').on('click', function () {
	// 	if(!$('body').hasClass('theme-light')){
	// 		$('.demo-color-toggle').addClass('disable');
	// 		$('body').addClass('theme-light').removeClass('theme-dark');
	// 		$('head').append('<link href="//cdn.shopify.com/s/files/1/0026/0400/7539/t/44/assets/demo-style-nutrition_1_light.css?v=9089566506140902260" rel="stylesheet" type="text/css" media="all" />');
    //         setTimeout(function () {
    //             $('head link[href*="_dark"]').remove();
    //             $('head link[href*="demo-style-dark"]').remove();
    //         }, 500)
    //         var srcset = $('.logo-holder img').attr('srcset');
    //         srcset = srcset.replace(/-dark.png/g,".png");
    //         $('.logo-holder-s img').attr('srcset', srcset);
    //         $('.footer-logo-lined img').attr('srcset', srcset);
    //         $('.footer-logo img').attr('srcset', srcset);
	// 		setTimeout(function () {
	// 			$('.demo-color-toggle').removeClass('disable');
	// 		}, 1000)
    //     }
	// 	else {
	// 		$('body').addClass('theme-dark').removeClass('theme-light');
	// 		$('.demo-color-toggle').addClass('disable');
	// 		$('head').append('<link href="//cdn.shopify.com/s/files/1/0026/0400/7539/t/44/assets/demo-style_dark.css?v=10040537579002364497" rel="stylesheet" type="text/css" media="all" />');	
	// 		setTimeout(function () {
	// 		$('head link[href*="_light"]').remove();
	// 		$('head link[href*="style-new"]').remove();
	// 		}, 500)
    //         var srcset = $('.hdr-desktop .logo-holder img').attr('srcset').replace('_140x', '').replace('files/logo', 't/29/assets/logo');
    //         srcset = srcset.replace(/.png/g,"-dark.png");
    //         $('.logo-holder-s img').attr('srcset', srcset);
    //         $('.footer-logo-lined img').attr('srcset', srcset);
    //         $('.footer-logo img').attr('srcset', srcset);
	// 		setTimeout(function () {
	// 			$('.demo-color-toggle').removeClass('disable');
	// 		}, 1000)
	// 	}
	// })