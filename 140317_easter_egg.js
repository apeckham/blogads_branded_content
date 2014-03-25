//CONFIGURATION
var ba_ee_tracer_id = BA_EE_MACROS.tracer_id;
var ba_ee_click_tracker = BA_EE_MACROS.click_url;
var ba_ee_impression_tracker = BA_EE_MACROS.impression_tracker;
var ba_ee_suggested_words = BA_EE_MACROS.suggested_words;
// /CONFIGURATION

//FUNCTIONS
function ba_ee_init() {
    window.parent.$(".define-form .input-append").css("position", "relative");
    window.parent.$(".define-form .input-append").append('<div id="be_ee_sponsored_by"></div>');

    window.parent.$("#be_ee_sponsored_by").css("top", "-" + BA_EE_MACROS.ad_height + "px");
    window.parent.$("#be_ee_sponsored_by").css("right", "0px");
    window.parent.$("#be_ee_sponsored_by").css("width", "" + BA_EE_MACROS.ad_width + "px");
    window.parent.$("#be_ee_sponsored_by").css("height", "" + BA_EE_MACROS.ad_height + "px");
    window.parent.$("#be_ee_sponsored_by").css("position", "absolute");
    window.parent.$("#be_ee_sponsored_by").css("cursor", "pointer");
    window.parent.$("#be_ee_sponsored_by").css("background", "transparent url('" + BA_EE_MACROS.ad_image + "') no-repeat scroll 0 0");
    window.parent.$("#be_ee_sponsored_by").click(function() {
        ba_ee_stat(ba_ee_tracer_id + '_clicks_on_ad_' + ba_ee_suggested_word_page());
        window.open(ba_ee_click_tracker);
    });

    //Impression tracker.
    if (ba_ee_impression_tracker !== '')
        window.parent.$("body").append('<img id="ba_ee_third_party_impression_tracker" src="' + ba_ee_impression_tracker + '" style="top: 0px; left: 0px; width: 1px; height: 1px; position: absolute; border: none;" />');

    if (ba_ee_suggested_word_page())
        ba_ee_stat(ba_ee_tracer_id + '_impressions_on_ad_' + ba_ee_suggested_word_page());
}

function ba_ee_stat(id) {
    if (!window.parent.$("#" + id).width()) {
        window.parent.$("body").prepend('<div id="' + id + '" style="top: 0px; left: 0px; width: 1px; height: 1px; position: absolute;"></div>');
    }

    window.parent.$("#" + id).html('<img src="http://tracer.blogads.com/click.php?zoneid=' + id + '&rand=' + Math.floor(Math.random() * 99999999) + '" style="width: 1px; height: 1px; border: none;">');
}

function ba_ee_suggested_word_page() {
    var current = window.parent.$("#term").val();

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
window.parent.$(document).ready(function() {
    ba_ee_init();
});
// /ACTIONS
