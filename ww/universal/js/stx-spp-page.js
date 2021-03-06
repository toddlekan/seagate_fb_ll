/* The sppSameHeightRow function resizes elements of various spp display views so that
 * items with the same class name will have the same height based on the tallest one.
 */
function sppSameHeightRow(itemClass) {
	if ($(window).innerWidth() > 767) {
	    setSameElementHeight(itemClass);
	} else {
		resetElementHeight(itemClass);
	}
}

/* The toggleWhatsNew function trigger the desktop version of whats new modal window and 
 * hide it in mobile view.
 */
function toggleWhatsNew() {
	if ($(window).innerWidth() > 767) {
	    $('#am-whats-new').modal('show');
        $('#am-whats-new').addClass('am-on');/* Adding class to trigger css animation in modal*/
	} else {
		$('#am-whats-new').modal('hide');
        $('#am-whats-new').removeClass('am-on');
	}
}

/* The showWhatsNew function decide when to show whats new modal window by defecting if the cookie exists
 */
function showWhatsNew() {
    var visited = $.cookie('visited');
    /* If no cookie visited created, then looking for what's new modal */
    if (typeof(visited) == "undefined") {
        /* If what's new desktop version exist */
        if ($('.am-whats-new').length > 0 && $('.spp-page-dashboard').length > 0) {
            toggleWhatsNew();
            $(window).resize(function() {
                toggleWhatsNew();
                /* Add specific class, remove css transition delay during window resize */
                $('.am-whats-new').addClass('window-resizing');
            });
            $('.am-skip').on('click', function(e){
                $('#am-whats-new').modal('hide');
                $('.am-whats-new-m').remove();
                $('.am-whats-new').remove();
                $('.modal-backdrop').remove();
            });
        }
        /* If what's new mobile version exist */
        if ($('.am-whats-new-m').length > 0 && $('.spp-page-dashboard').length > 0) {
			if ($(".am-whats-new-m .m-carousel").length > 0) {
				$('.am-whats-new-m .m-carousel').carousel();
			}
            $('.am-whats-new-m').addClass('visible-phone');
            $('.am-m-skip').on('click', function(e){
                e.preventDefault;
                $('.am-whats-new-m').remove();
                $('.am-whats-new').remove();
            });

            /* Extend backdrop when scroll over the page title, to cover whole screen in transparent white */
            $(function() {
                var amBackDrop = $(".am-m-backdrop");
                $(window).scroll(function() {
                    var scroll = $(window).scrollTop();

                    if (scroll >= 100) {
                        amBackDrop.addClass("scroll-over-page-title");
                    } else {
                        amBackDrop.removeClass('scroll-over-page-title');
                    }
                });
            });
        }
        $.cookie("visited", 1,{expires:200});
    }
}

function getNumDays(s) {
    var endDate=s;
    var d_date=new Array();
    d_date=s.split("-");
    var enMonth=new Array("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Spt","Oct","Nov","Dec");
    for(var i=0;i<=enMonth.length;i++) {
        if(enMonth[i]==d_date[1]){
        	endDate = ((i + 1) + "/" + d_date[0] + "/" + d_date[2]);
            break;
        }
    }
    return(getDays(endDate));
}

function getDays(strDateEnd){
   var strDateS = new Date();
   var strDateE = new Date(strDateEnd);
   iDays = parseInt(Math.abs(strDateS - strDateE ) / 1000 / 60 / 60 /24);
   return (iDays+1) ;
}

jQuery(function ($) {
    var sppNewsAlertBoxStatus = $.cookie("spp-news-alert-box-status");
    if (typeof sppNewsAlertBoxStatus === 'undefined' || sppNewsAlertBoxStatus !== "isClose") {
        $("#spp-news-alert-box").show();
    }
    $("#spp-news-button").click(function (e) {
        e.preventDefault();
        $.cookie("spp-news-alert-box-status", "isClose", {
            path : "/"
        });
    });
});

$(document).ready(function(){
    if ($("#spp-search-support")[0]) {
		$("#spp-search-support").submit(function(e) {
			e.preventDefault();
			if (document.getElementById('spp-support-search-textbox').value == '' || 
				document.getElementById('spp-support-search-textbox').value == document.getElementById('defaultText').value) {
				return false;
			}
			var n = rcLocaleJS.split("-");
			var localeURL = "/" + n[1] + "/" + n[0];
			if (rcLocaleJS == "en-us") {
				localeURL = "";
			}
			window.location.href = "//" + serverHost + localeURL + "/search/?tab=nav-tabs-sp&keyword=" + 
			encoding(document.getElementById("spp-support-search-textbox").value);
			return false;
		});
	}
    // Initalize collapse list in mobile view for SPP Segmented List and SPP Self Service
    $('.spp-box-collapse').on('click', '.collapse-icn', function (e) {
        e.preventDefault();
        var t = this;
        var collapseContent = $(this).closest('.spp-box-collapse').find('.collapse-content');
        $(collapseContent).toggleClass('in');
        $(this).toggleClass('open');
    });
    
    /* https://jira.okla.seagate.com/jira/browse/SPP-18
    /* Modify Current SPP LMS Activities Display View
    /* If title extends beyond 68 characters add ... to end. "New" icon is included in total character count.*/
    $(".table-activity .txt-title span").each(function(){
        var totalength = 68;
        var spanlength = $(this).text().length;
        if (spanlength > totalength) {
            $(this).text($(this).text().substr(0, totalength)); 
            $(this).append('...');
        }
    });
    
    // Initalize equal height function for serveal class group
    if ($('.spp-page-dashboard [class*="same-height-row"]').length > 0) {
		sppSameHeightRow(".same-height-row-b");
		sppSameHeightRow(".same-height-row-a");
		sppSameHeightRow(".same-height-row-c");
		sppSameHeightRow(".same-height-row-d");
		$(window).resize(function () {
			sppSameHeightRow(".same-height-row-b");
			sppSameHeightRow(".same-height-row-a");
			sppSameHeightRow(".same-height-row-c");
			sppSameHeightRow(".same-height-row-d");
		});
	}
	if ($('.spp-page-support [class*="same-height-row"]').length > 0) {
		sppSameHeightRow(".same-height-row-c");
		sppSameHeightRow(".same-height-row-d");
		$(window).resize(function () {
			sppSameHeightRow(".same-height-row-c");
			sppSameHeightRow(".same-height-row-d");
		});
	}
	if ($('.spp-top-profile [class*="same-height-row"]').length > 0) {
		sppSameHeightRow(".same-height-row-e");
		sppSameHeightRow(".same-height-row-f");
		$(window).resize(function () {
			sppSameHeightRow(".same-height-row-e");
			sppSameHeightRow(".same-height-row-f");
		});
	}
    
    /* Disclaimer pop up */
    $('.disclaimer-btn').on('click', function(e){
        e.stopPropagation();
        $(this).find('.disclaimer-pop').toggle();
    });
    $('.disclaimer-pop').on('click', function(e){
        e.stopPropagation();
    });
    $(document).on('click touchstart', function() {
        if ($('.disclaimer-pop').is(':visible')) {
            $('.disclaimer-pop').hide();
        }
    });
    
    /* If renewal modal exist, display it and if what's new modal also exist, display it until renewal modal closed */
    var contactStatus = $("#renewalStatus").val();
	var contactExpDate = $("#renewalDate").val();
	if (contactStatus != "" || contactExpDate != "") {
		if (contactStatus == "AboutToExpire") {
			var idays = getNumDays(contactExpDate);
			handleAtExpire(idays);
		} else {
			if (contactStatus == "Expired" || contactStatus == "TandCNotAccepted") {
				handleExpired(contactStatus);
			}else {
				showWhatsNew();
			}
		}
	}else {
		showWhatsNew();
	}
});

function handleAtExpire(s) {
	if (s <= 90) {
		var expireTxt = $("#expired90").val();
		expireTxt = expireTxt.replace("{DYNAMIC_DATE}", ("<strong>" + $("#renewalDate").val() + "</strong>"));
		$("#expiredW").html(expireTxt);
	}
	var sppPopupRe = $.cookie("sppPopup");
	if ($(".am-spp-renewal").length > 0 && (typeof(sppPopupRe) == "undefined" || sppPopupRe!= $("#rel_smUserID").val())) {
		$("#am-spp-renewal").modal("show");
		$.cookie("sppPopup", $("#rel_smUserID").val());
		$("#am-spp-renewal").on("hidden.bs.modal", function () {
			showWhatsNew();
		});
	} else {
		showWhatsNew();
	}
}

function handleExpired(s) {
	$("#am-spp-renewal").find(".close").hide();
	if (s == "Expired") {
		$("#notNow").css("display", "none");
		var expireTxt = "<strong>" + $("#expiredWarning").val() + "</strong>" + $("#expired").val();
		$("#expiredW").html(expireTxt);
	}else if(s == "TandCNotAccepted"){
		$("#notNow").css("display", "none");
		$("#renew-title").text($("#spp_renewHeadingContinue").val());
		$("#expiredW").text($("#accountTCnotAccepted").val());
		$("#renewbutton").html($("#ContinueBtn").val());
		$("#renewbutton").attr("href", $("#tclink").val());
	}
	$("#am-spp-renewal").modal("show");
	$("#am-spp-renewal").on("hidden.bs.modal", function () {
		showWhatsNew();
	});
}
