"use strict"; (function () {
	var
	userAgent = navigator.userAgent.toLowerCase(), initialDate = new Date(), $document = $(document), $window = $(window), $html = $("html"), $body = $("body"), isDesktop = $html.hasClass("desktop"), isIE = userAgent.indexOf("msie") !== -1 ? parseInt(userAgent.split("msie")[1], 10) : userAgent.indexOf("trident") !== -1 ? 11 : userAgent.indexOf("edge") !== -1 ? 12 : !1, isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), windowReady = !1, isNoviBuilder = !1, livedemo = !0, plugins = { bootstrapTabs: $(".tabs-custom"), counter: $(".counter"), captcha: $('.recaptcha'), copyrightYear: $(".copyright-year"), lightGallery: $("[data-lightgallery='group']"), lightGalleryItem: $("[data-lightgallery='item']"), owl: $(".owl-carousel"), preloader: $(".preloader"), rdNavbar: $(".rd-navbar"), rdMailForm: $(".rd-mailform"), rdInputLabel: $(".form-label"), regula: $("[data-constraints]"), swiper: $(".swiper-container"), wow: $(".wow"), parallaxJs: $(".parallax-scene-js") }; function isScrolledIntoView(elem) { if (isNoviBuilder) return !0; return elem.offset().top + elem.outerHeight() >= $window.scrollTop() && elem.offset().top <= $window.scrollTop() + $window.height() }
	$window.on('load', function () {
		if (plugins.preloader.length && !isNoviBuilder) { pageTransition({ target: document.querySelector('.page'), delay: 0, duration: 500, classIn: 'fadeIn', classOut: 'fadeOut', classActive: 'animated', conditions: function (event, link) { return !/(\#|callto:|tel:|mailto:|:\/\/)/.test(link) && !event.currentTarget.hasAttribute('data-lightgallery') }, onTransitionStart: function (options) { setTimeout(function () { plugins.preloader.removeClass('loaded') }, options.duration * .75) }, onReady: function () { plugins.preloader.addClass('loaded'); windowReady = !0 } }) }
		if (plugins.counter.length) {
			for (var i = 0; i < plugins.counter.length; i++) {
				var
				counter = $(plugins.counter[i]), initCount = function () { var counter = $(this); if (!counter.hasClass("animated-first") && isScrolledIntoView(counter)) { counter.countTo({ refreshInterval: 40, speed: counter.attr("data-speed") || 1000, from: 0, to: parseInt(counter.text(), 10) }); counter.addClass('animated-first') } }; $.proxy(initCount, counter)(); $window.on("scroll", $.proxy(initCount, counter))
			}
		}
	}); $(function () {
		isNoviBuilder = window.xMode; function toggleSwiperInnerVideos(swiper) {
			var prevSlide = $(swiper.slides[swiper.previousIndex]), nextSlide = $(swiper.slides[swiper.activeIndex]), videos, videoItems = prevSlide.find("video"); for (var i = 0; i < videoItems.length; i++) { videoItems[i].pause() }
			videos = nextSlide.find("video"); if (videos.length) { videos.get(0).play() }
		}
		function toggleSwiperCaptionAnimation(swiper) {
			var prevSlide = $(swiper.container).find("[data-caption-animate]"), nextSlide = $(swiper.slides[swiper.activeIndex]).find("[data-caption-animate]"), delay, duration, nextSlideItem, prevSlideItem; for (var i = 0; i < prevSlide.length; i++) { prevSlideItem = $(prevSlide[i]); prevSlideItem.removeClass("animated").removeClass(prevSlideItem.attr("data-caption-animate")).addClass("not-animated") }
			var tempFunction = function (nextSlideItem, duration) { return function () { nextSlideItem.removeClass("not-animated").addClass(nextSlideItem.attr("data-caption-animate")).addClass("animated"); if (duration) { nextSlideItem.css('animation-duration', duration + 'ms') } } }; for (var i = 0; i < nextSlide.length; i++) { nextSlideItem = $(nextSlide[i]); delay = nextSlideItem.attr("data-caption-delay"); duration = nextSlideItem.attr('data-caption-duration'); if (!isNoviBuilder) { if (delay) { setTimeout(tempFunction(nextSlideItem, duration), parseInt(delay, 10)) } else { tempFunction(nextSlideItem, duration) } } else { nextSlideItem.removeClass("not-animated") } }
		}
		function initOwlCarousel(c) {
			var aliaces = ["-", "-sm-", "-md-", "-lg-", "-xl-", "-xxl-"], values = [0, 576, 768, 992, 1200, 1600], responsive = {}; for (var j = 0; j < values.length; j++) {
				responsive[values[j]] = {}; for (var k = j; k >= -1; k--) {
					if (!responsive[values[j]].items && c.attr("data" + aliaces[k] + "items")) { responsive[values[j]].items = k < 0 ? 1 : parseInt(c.attr("data" + aliaces[k] + "items"), 10) }
					if (!responsive[values[j]].stagePadding && responsive[values[j]].stagePadding !== 0 && c.attr("data" + aliaces[k] + "stage-padding")) { responsive[values[j]].stagePadding = k < 0 ? 0 : parseInt(c.attr("data" + aliaces[k] + "stage-padding"), 10) }
					if (!responsive[values[j]].margin && responsive[values[j]].margin !== 0 && c.attr("data" + aliaces[k] + "margin")) { responsive[values[j]].margin = k < 0 ? 30 : parseInt(c.attr("data" + aliaces[k] + "margin"), 10) }
				}
			}
			if (c.attr('data-dots-custom')) {
				c.on("initialized.owl.carousel", function (event) {
					var carousel = $(event.currentTarget), customPag = $(carousel.attr("data-dots-custom")), active = 0; if (carousel.attr('data-active')) { active = parseInt(carousel.attr('data-active'), 10) }
					carousel.trigger('to.owl.carousel', [active, 300, !0]); customPag.find("[data-owl-item='" + active + "']").addClass("active"); customPag.find("[data-owl-item]").on('click', function (e) { e.preventDefault(); carousel.trigger('to.owl.carousel', [parseInt(this.getAttribute("data-owl-item"), 10), 300, !0]) }); carousel.on("translate.owl.carousel", function (event) { customPag.find(".active").removeClass("active"); customPag.find("[data-owl-item='" + event.item.index + "']").addClass("active") })
				})
			}
			c.on("initialized.owl.carousel", function () { initLightGalleryItem(c.find('[data-lightgallery="item"]'), 'lightGallery-in-carousel') }); c.owlCarousel({ autoplay: isNoviBuilder ? !1 : c.attr("data-autoplay") === "true", loop: isNoviBuilder ? !1 : c.attr("data-loop") !== "false", items: 1, center: c.attr("data-center") === "true", dotsContainer: c.attr("data-pagination-class") || !1, navContainer: c.attr("data-navigation-class") || !1, mouseDrag: isNoviBuilder ? !1 : c.attr("data-mouse-drag") !== "false", nav: c.attr("data-nav") === "true", dots: c.attr("data-dots") === "true", dotsEach: c.attr("data-dots-each") ? parseInt(c.attr("data-dots-each"), 10) : !1, animateIn: c.attr('data-animation-in') ? c.attr('data-animation-in') : !1, animateOut: c.attr('data-animation-out') ? c.attr('data-animation-out') : !1, responsive: responsive, smartSpeed: c.attr('data-smart-speed') ? c.attr('data-smart-speed') : 250, navText: c.attr("data-nav-text") ? $.parseJSON(c.attr("data-nav-text")) : [], navClass: c.attr("data-nav-class") ? $.parseJSON(c.attr("data-nav-class")) : ['owl-prev', 'owl-next'] })
		}
		function attachFormValidator(elements) {
			regula.custom({ name: 'PhoneNumber', defaultMessage: 'Invalid phone number format', validator: function () { if (this.value === '') return !0; else return /^(\+\d)?[0-9\-\(\) ]{5,}$/i.test(this.value) } }); for (var i = 0; i < elements.length; i++) { var o = $(elements[i]), v; o.addClass("form-control-has-validation").after("<span class='form-validation'></span>"); v = o.parent().find(".form-validation"); if (v.is(":last-child")) o.addClass("form-control-last-child"); }
			elements.on('input change propertychange blur', function (e) { var $this = $(this), results; if (e.type !== "blur") if (!$this.parent().hasClass("has-error")) return; if ($this.parents('.rd-mailform').hasClass('success')) return; if ((results = $this.regula('validate')).length) { for (i = 0; i < results.length; i++) { $this.siblings(".form-validation").text(results[i].message).parent().addClass("has-error") } } else { $this.siblings(".form-validation").text("").parent().removeClass("has-error") } }).regula('bind'); var regularConstraintsMessages = [{ type: regula.Constraint.Required, newMessage: "The text field is required." }, { type: regula.Constraint.Email, newMessage: "The email is not a valid email." }, { type: regula.Constraint.Numeric, newMessage: "Only numbers are required" }, { type: regula.Constraint.Selected, newMessage: "Please choose an option." }]; for (var i = 0; i < regularConstraintsMessages.length; i++) { var regularConstraint = regularConstraintsMessages[i]; regula.override({ constraintType: regularConstraint.type, defaultMessage: regularConstraint.newMessage }) }
		}
		function isValidated(elements, captcha) {
			var results, errors = 0; if (elements.length) {
				for (var j = 0; j < elements.length; j++) { var $input = $(elements[j]); if ((results = $input.regula('validate')).length) { for (k = 0; k < results.length; k++) { errors++; $input.siblings(".form-validation").text(results[k].message).parent().addClass("has-error") } } else { $input.siblings(".form-validation").text("").parent().removeClass("has-error") } }
				if (captcha) { if (captcha.length) { return validateReCaptcha(captcha) && errors === 0 } }
				return errors === 0
			}
			return !0
		}
		function validateReCaptcha(captcha) {
			var captchaToken = captcha.find('.g-recaptcha-response').val(); if (captchaToken.length === 0) { captcha.siblings('.form-validation').html('Please, prove that you are not robot.').addClass('active'); captcha.closest('.form-wrap').addClass('has-error'); captcha.on('propertychange', function () { var $this = $(this), captchaToken = $this.find('.g-recaptcha-response').val(); if (captchaToken.length > 0) { $this.closest('.form-wrap').removeClass('has-error'); $this.siblings('.form-validation').removeClass('active').html(''); $this.off('propertychange') } }); return !1 }
			return !0
		}
		window.onloadCaptchaCallback = function () { for (var i = 0; i < plugins.captcha.length; i++) { var $capthcaItem = $(plugins.captcha[i]); grecaptcha.render($capthcaItem.attr('id'), { sitekey: $capthcaItem.attr('data-sitekey'), size: $capthcaItem.attr('data-size') ? $capthcaItem.attr('data-size') : 'normal', theme: $capthcaItem.attr('data-theme') ? $capthcaItem.attr('data-theme') : 'light', callback: function (e) { $('.recaptcha').trigger('propertychange') } }); $capthcaItem.after("<span class='form-validation'></span>") } }; function initLightGallery(itemsToInit, addClass) { if (!isNoviBuilder) { $(itemsToInit).lightGallery({ thumbnail: $(itemsToInit).attr("data-lg-thumbnail") !== "false", selector: "[data-lightgallery='item']", autoplay: $(itemsToInit).attr("data-lg-autoplay") === "true", pause: parseInt($(itemsToInit).attr("data-lg-autoplay-delay")) || 5000, addClass: addClass, mode: $(itemsToInit).attr("data-lg-animation") || "lg-slide", loop: $(itemsToInit).attr("data-lg-loop") !== "false" }) } }
		function initLightGalleryItem(itemToInit, addClass) { if (!isNoviBuilder) { $(itemToInit).lightGallery({ selector: "this", addClass: addClass, counter: !1, youtubePlayerParams: { modestbranding: 1, showinfo: 0, rel: 0, controls: 0 }, vimeoPlayerParams: { byline: 0, portrait: 0 } }) } }
		if (plugins.captcha.length) { $.getScript("//www.google.com/recaptcha/api.js?onload=onloadCaptchaCallback&render=explicit&hl=en") }
		if (navigator.platform.match(/(Mac)/i)) { $html.addClass("mac-os") }
		if (isIE) { if (isIE === 12) $html.addClass("ie-edge"); if (isIE === 11) $html.addClass("ie-11"); if (isIE < 10) $html.addClass("lt-ie-10"); if (isIE < 11) $html.addClass("ie-10"); }
		if (plugins.bootstrapTabs.length) {
			for (var i = 0; i < plugins.bootstrapTabs.length; i++) {
				var bootstrapTabsItem = $(plugins.bootstrapTabs[i]); if (bootstrapTabsItem.find('.slick-slider').length) { bootstrapTabsItem.find('.tabs-custom-list > li > a').on('click', $.proxy(function () { var $this = $(this); var setTimeOutTime = isNoviBuilder ? 1500 : 300; setTimeout(function () { $this.find('.tab-content .tab-pane.active .slick-slider').slick('setPosition') }, setTimeOutTime) }, bootstrapTabsItem)) }
				if (bootstrapTabsItem.attr('data-view-triggerable') === 'true') { (function (bootstrapTabsItem) { bootstrapTabsItem.on('shown.bs.tab', function (event) { var prevTriggerable = bootstrapTabsItem.find('[data-view-trigger="' + event.relatedTarget.getAttribute('href') + '"]'), triggerable = bootstrapTabsItem.find('[data-view-trigger="' + event.target.getAttribute('href') + '"]'); prevTriggerable.removeClass('active'); triggerable.addClass('active') }) })(bootstrapTabsItem) }
			}
		}
		if (plugins.copyrightYear.length) { plugins.copyrightYear.text(initialDate.getFullYear()) }
		if (isDesktop && !isNoviBuilder) { $().UItoTop({ easingType: 'easeOutQuad', containerClass: 'ui-to-top fa fa-angle-up' }) }
		if (plugins.rdNavbar.length) {
			var aliaces, i, j, len, value, values, responsiveNavbar; aliaces = ["-", "-sm-", "-md-", "-lg-", "-xl-", "-xxl-"]; values = [0, 576, 768, 992, 1200, 1600]; responsiveNavbar = {}; for (i = j = 0, len = values.length; j < len; i = ++j) {
				value = values[i]; if (!responsiveNavbar[values[i]]) { responsiveNavbar[values[i]] = {} }
				if (plugins.rdNavbar.attr('data' + aliaces[i] + 'layout')) { responsiveNavbar[values[i]].layout = plugins.rdNavbar.attr('data' + aliaces[i] + 'layout') }
				if (plugins.rdNavbar.attr('data' + aliaces[i] + 'device-layout')) { responsiveNavbar[values[i]].deviceLayout = plugins.rdNavbar.attr('data' + aliaces[i] + 'device-layout') }
				if (plugins.rdNavbar.attr('data' + aliaces[i] + 'hover-on')) { responsiveNavbar[values[i]].focusOnHover = plugins.rdNavbar.attr('data' + aliaces[i] + 'hover-on') === 'true' }
				if (plugins.rdNavbar.attr('data' + aliaces[i] + 'auto-height')) { responsiveNavbar[values[i]].autoHeight = plugins.rdNavbar.attr('data' + aliaces[i] + 'auto-height') === 'true' }
				if (isNoviBuilder) { responsiveNavbar[values[i]].stickUp = !1 } else if (plugins.rdNavbar.attr('data' + aliaces[i] + 'stick-up')) { responsiveNavbar[values[i]].stickUp = plugins.rdNavbar.attr('data' + aliaces[i] + 'stick-up') === 'true' }
				if (plugins.rdNavbar.attr('data' + aliaces[i] + 'stick-up-offset')) { responsiveNavbar[values[i]].stickUpOffset = plugins.rdNavbar.attr('data' + aliaces[i] + 'stick-up-offset') }
			}
			plugins.rdNavbar.RDNavbar({
				anchorNav: !isNoviBuilder, stickUpClone: (plugins.rdNavbar.attr("data-stick-up-clone") && !isNoviBuilder) ? plugins.rdNavbar.attr("data-stick-up-clone") === 'true' : !1, responsive: responsiveNavbar, callbacks: {
					onStuck: function () { var navbarSearch = this.$element.find('.rd-search input'); if (navbarSearch) { navbarSearch.val('').trigger('propertychange') } }, onDropdownOver: function () { return !isNoviBuilder }, onUnstuck: function () {
						if (this.$clone === null)
							return; var navbarSearch = this.$clone.find('.rd-search input'); if (navbarSearch) { navbarSearch.val('').trigger('propertychange'); navbarSearch.trigger('blur') }
					}
				}
			}); if (plugins.rdNavbar.attr("data-body-class")) { document.body.className += ' ' + plugins.rdNavbar.attr("data-body-class") }
		}
		if (plugins.swiper.length) {
			for (var i = 0; i < plugins.swiper.length; i++) {
				var s = $(plugins.swiper[i]); var pag = s.find(".swiper-pagination"), next = s.find(".swiper-button-next"), prev = s.find(".swiper-button-prev"), bar = s.find(".swiper-scrollbar"), swiperSlide = s.find(".swiper-slide"), autoplay = !1; for (var j = 0; j < swiperSlide.length; j++) { var $this = $(swiperSlide[j]), url; if (url = $this.attr("data-slide-bg")) { $this.css({ "background-image": "url(" + url + ")", "background-size": "cover" }) } }
				swiperSlide.end().find("[data-caption-animate]").addClass("not-animated").end(); s.swiper({ autoplay: !isNoviBuilder && $.isNumeric(s.attr('data-autoplay')) ? s.attr('data-autoplay') : !1, direction: s.attr('data-direction') ? s.attr('data-direction') : "horizontal", effect: s.attr('data-slide-effect') ? s.attr('data-slide-effect') : "slide", speed: s.attr('data-slide-speed') ? s.attr('data-slide-speed') : 600, keyboardControl: s.attr('data-keyboard') === "true", mousewheelControl: s.attr('data-mousewheel') === "true", mousewheelReleaseOnEdges: s.attr('data-mousewheel-release') === "true", nextButton: next.length ? next.get(0) : (s.attr('data-custom-next') ? $(s.attr('data-custom-next')) : null), prevButton: prev.length ? prev.get(0) : (s.attr('data-custom-prev') ? $(s.attr('data-custom-prev')) : null), pagination: pag.length ? pag.get(0) : null, paginationClickable: pag.length ? pag.attr("data-clickable") !== "false" : !1, paginationBulletRender: pag.length ? pag.attr("data-index-bullet") === "true" ? function (swiper, index, className) { return '<span class="' + className + '">' + (index + 1) + '</span>' } : null : null, scrollbar: bar.length ? bar.get(0) : null, scrollbarDraggable: bar.length ? bar.attr("data-draggable") !== "false" : !0, scrollbarHide: bar.length ? bar.attr("data-draggable") === "false" : !1, loop: isNoviBuilder ? !1 : s.attr('data-loop') !== "false", simulateTouch: s.attr('data-simulate-touch') && !isNoviBuilder ? s.attr('data-simulate-touch') === "true" : !1, onTransitionStart: function (swiper) { toggleSwiperInnerVideos(swiper) }, onTransitionEnd: function (swiper) { toggleSwiperCaptionAnimation(swiper) }, onInit: function (swiper) { toggleSwiperInnerVideos(swiper); toggleSwiperCaptionAnimation(swiper); initLightGalleryItem(s.find('[data-lightgallery="item"]'), 'lightGallery-in-carousel') } })
			}
		}
		if (plugins.owl.length) { for (var i = 0; i < plugins.owl.length; i++) { var c = $(plugins.owl[i]); plugins.owl[i].owl = c; initOwlCarousel(c) } }
		if ($html.hasClass("wow-animation") && plugins.wow.length && !isNoviBuilder && isDesktop) { new WOW().init() }
		if (plugins.rdInputLabel.length) { plugins.rdInputLabel.RDInputLabel() }
		if (plugins.regula.length) { attachFormValidator(plugins.regula) }
		if (plugins.rdMailForm.length) {
			var i, j, k, msg = { 'MF000': 'Successfully sent!', 'MF001': 'Recipients are not set!', 'MF002': 'Form will not work locally!', 'MF003': 'Please, define email field in your form!', 'MF004': 'Please, define type of your form!', 'MF254': 'Something went wrong with PHPMailer!', 'MF255': 'Aw, snap! Something went wrong.' }; for (i = 0; i < plugins.rdMailForm.length; i++) {
				var $form = $(plugins.rdMailForm[i]), formHasCaptcha = !1; $form.attr('novalidate', 'novalidate').ajaxForm({
					data: { "form-type": $form.attr("data-form-type") || "contact", "counter": i }, beforeSubmit: function (arr, $form, options) {
						if (isNoviBuilder)
							return; var form = $(plugins.rdMailForm[this.extraData.counter]), inputs = form.find("[data-constraints]"), output = $("#" + form.attr("data-form-output")), captcha = form.find('.recaptcha'), captchaFlag = !0; output.removeClass("active error success"); if (isValidated(inputs, captcha)) {
								if (captcha.length) {
									var captchaToken = captcha.find('.g-recaptcha-response').val(), captchaMsg = { 'CPT001': 'Please, setup you "site key" and "secret key" of reCaptcha', 'CPT002': 'Something wrong with google reCaptcha' }; formHasCaptcha = !0; $.ajax({ method: "POST", url: "bat/reCaptcha.php", data: { 'g-recaptcha-response': captchaToken }, async: !1 }).done(function (responceCode) {
										if (responceCode !== 'CPT000') {
											if (output.hasClass("snackbars")) {
												output.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + captchaMsg[responceCode] + '</span></p>')
												setTimeout(function () { output.removeClass("active") }, 3500); captchaFlag = !1
											} else { output.html(captchaMsg[responceCode]) }
											output.addClass("active")
										}
									})
								}
								if (!captchaFlag) { return !1 }
								form.addClass('form-in-process'); if (output.hasClass("snackbars")) { output.html('<p><span class="icon text-middle fa fa-circle-o-notch fa-spin icon-xxs"></span><span>Sending</span></p>'); output.addClass("active") }
							} else { return !1 }
					}, error: function (result) {
						if (isNoviBuilder)
							return; var output = $("#" + $(plugins.rdMailForm[this.extraData.counter]).attr("data-form-output")), form = $(plugins.rdMailForm[this.extraData.counter]); output.text(msg[result]); form.removeClass('form-in-process'); if (formHasCaptcha) { grecaptcha.reset() }
					}, success: function (result) {
						if (isNoviBuilder)
							return; var form = $(plugins.rdMailForm[this.extraData.counter]), output = $("#" + form.attr("data-form-output")), select = form.find('select'); form.addClass('success').removeClass('form-in-process'); if (formHasCaptcha) { grecaptcha.reset() }
						result = result.length === 5 ? result : 'MF255'; output.text(msg[result]); if (result === "MF000") { if (output.hasClass("snackbars")) { output.html('<p><span class="icon text-middle mdi mdi-check icon-xxs"></span><span>' + msg[result] + '</span></p>') } else { output.addClass("active success") } } else { if (output.hasClass("snackbars")) { output.html(' <p class="snackbars-left"><span class="icon icon-xxs mdi mdi-alert-outline text-middle"></span><span>' + msg[result] + '</span></p>') } else { output.addClass("active error") } }
						form.clearForm(); if (select.length) { select.select2("val", "") }
						form.find('input, textarea').trigger('blur'); setTimeout(function () { output.removeClass("active error success"); form.removeClass('success') }, 3500)
					}
				})
			}
		}
		if (plugins.lightGallery.length) { for (var i = 0; i < plugins.lightGallery.length; i++) { initLightGallery(plugins.lightGallery[i]) } }
		if (plugins.lightGalleryItem.length) {
			var notCarouselItems = []; for (var z = 0; z < plugins.lightGalleryItem.length; z++) { if (!$(plugins.lightGalleryItem[z]).parents('.owl-carousel').length && !$(plugins.lightGalleryItem[z]).parents('.swiper-slider').length && !$(plugins.lightGalleryItem[z]).parents('.slick-slider').length) { notCarouselItems.push(plugins.lightGalleryItem[z]) } }
			plugins.lightGalleryItem = notCarouselItems; for (var i = 0; i < plugins.lightGalleryItem.length; i++) { initLightGalleryItem(plugins.lightGalleryItem[i]) }
		}
		if (plugins.parallaxJs.length && isDesktop) { for (var i = 0; i < plugins.parallaxJs.length; i++) { var scene = plugins.parallaxJs[i]; new Parallax(scene) } }
	})
}())
// Sélectionne le bouton et le menu
const menuBtn = document.getElementById('menu-btn');
const sideMenu = document.getElementById('side-menu');

// Ajoute un événement de clic au bouton
menuBtn.addEventListener('click', () => {
  // Bascule la classe 'translate-x-0' pour afficher ou masquer le menu
  sideMenu.classList.toggle('-translate-x-full');
  sideMenu.classList.toggle('translate-x-0');
});
