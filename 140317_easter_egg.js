//CONFIGURATION
var ba_ee_tracer_id = BA_EE_MACROS.tracer_id;
var ba_ee_click_tracker = BA_EE_MACROS.click_url;
var ba_ee_impression_tracker = BA_EE_MACROS.impression_tracker;
var ba_ee_suggested_words = BA_EE_MACROS.suggested_words;
// /CONFIGURATION

//FUNCTIONS
function ba_ee_init() {
    $(".define-form .input-append").css("position", "relative");
    $(".define-form .input-append").append('<div id="be_ee_sponsored_by"></div>');

    $("#be_ee_sponsored_by").css("top", "-" + BA_EE_MACROS.ad_height + "px");
    $("#be_ee_sponsored_by").css("right", "0px");
    $("#be_ee_sponsored_by").css("width", "" + BA_EE_MACROS.ad_width + "px");
    $("#be_ee_sponsored_by").css("height", "" + BA_EE_MACROS.ad_height + "px");
    $("#be_ee_sponsored_by").css("position", "absolute");
    $("#be_ee_sponsored_by").css("cursor", "pointer");
    $("#be_ee_sponsored_by").css("background", "transparent url('" + BA_EE_MACROS.ad_image + "') no-repeat scroll 0 0");
    $("#be_ee_sponsored_by").click(function() {
        ba_ee_stat(ba_ee_tracer_id + '_clicks_on_ad_' + ba_ee_suggested_word_page());
        window.open(ba_ee_click_tracker);
    });

    //Impression tracker.
    if (ba_ee_impression_tracker !== '')
        $("body").append('<img id="ba_ee_third_party_impression_tracker" src="' + ba_ee_impression_tracker + '" style="top: 0px; left: 0px; width: 1px; height: 1px; position: absolute; border: none;" />');

    if (ba_ee_suggested_word_page())
        ba_ee_stat(ba_ee_tracer_id + '_impressions_on_ad_' + ba_ee_suggested_word_page());
}

function ba_ee_stat(id) {
    if (!$("#" + id).width()) {
        $("body").prepend('<div id="' + id + '" style="top: 0px; left: 0px; width: 1px; height: 1px; position: absolute;"></div>');
    }

    $("#" + id).html('<img src="http://tracer.blogads.com/click.php?zoneid=' + id + '&rand=' + Math.floor(Math.random() * 99999999) + '" style="width: 1px; height: 1px; border: none;">');
}

function ba_ee_suggested_word_page() {
    var current = $("#term").val();

    if (typeof (current) !== "undefined" && current !== "") {
        for (var i = ba_ee_suggested_words.length - 1; i >= 0; i--) {
            if (ba_ee_suggested_words[i].toLowerCase() === current.toLowerCase()) {
                return ba_ee_suggested_words[i].replace(/ /gi, '_');
            }
        }

        return false;
    }

    else
        return false;
}
// /FUNCTIONS

//ACTIONS
$(document).ready(function() {
    ba_ee_init();
});
// /ACTIONS
