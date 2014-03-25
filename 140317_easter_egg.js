//CONFIGURATION
var ba_ee_tracer_id = BA_EE_MACROS.tracer_id;
var ba_ee_click_tracker = BA_EE_MACROS.click_url;
var ba_ee_impression_tracker = BA_EE_MACROS.impression_tracker;
var ba_ee_suggested_words = BA_EE_MACROS.suggested_words;
// /CONFIGURATION

//FUNCTIONS
function ba_ee_init() {
    $(".define-form .input-append", window.parent.document).css("position", "relative");
    $(".define-form .input-append", window.parent.document).append('<div id="be_ee_sponsored_by"></div>');

    $("#be_ee_sponsored_by", window.parent.document).css("top", "-" + BA_EE_MACROS.ad_height + "px");
    $("#be_ee_sponsored_by", window.parent.document).css("right", "0px");
    $("#be_ee_sponsored_by", window.parent.document).css("width", "" + BA_EE_MACROS.ad_width + "px");
    $("#be_ee_sponsored_by", window.parent.document).css("height", "" + BA_EE_MACROS.ad_height + "px");
    $("#be_ee_sponsored_by", window.parent.document).css("position", "absolute");
    $("#be_ee_sponsored_by", window.parent.document).css("cursor", "pointer");
    $("#be_ee_sponsored_by", window.parent.document).css("background", "transparent url('" + BA_EE_MACROS.ad_image + "') no-repeat scroll 0 0");
    $("#be_ee_sponsored_by", window.parent.document).click(function() {
        ba_ee_stat(ba_ee_tracer_id + '_clicks_on_ad_' + ba_ee_suggested_word_page());
        window.open(ba_ee_click_tracker);
    });

    //Impression tracker.
    if (ba_ee_impression_tracker !== '')
        $("body", window.parent.document).append('<img id="ba_ee_third_party_impression_tracker" src="' + ba_ee_impression_tracker + '" style="top: 0px; left: 0px; width: 1px; height: 1px; position: absolute; border: none;" />');

    if (ba_ee_suggested_word_page())
        ba_ee_stat(ba_ee_tracer_id + '_impressions_on_ad_' + ba_ee_suggested_word_page());
}

function ba_ee_stat(id) {
    if (!$("#" + id, window.parent.document).width()) {
        $("body", window.parent.document).prepend('<div id="' + id + '" style="top: 0px; left: 0px; width: 1px; height: 1px; position: absolute;"></div>');
    }

    $("#" + id, window.parent.document).html('<img src="http://tracer.blogads.com/click.php?zoneid=' + id + '&rand=' + Math.floor(Math.random() * 99999999) + '" style="width: 1px; height: 1px; border: none;">');
}

function ba_ee_suggested_word_page() {
    var current = $("#term", window.parent.document).val();

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
$(document, window.parent.document).ready(function() {
    ba_ee_init();
});
// /ACTIONS
