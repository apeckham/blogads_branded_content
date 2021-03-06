//CONFIGURATION
var ba_sw_tracer_id = BA_SW_MACROS.tracer_id;
var ba_sw_suggested_words = BA_SW_MACROS.suggested_words;
var ba_sw_hostname = BA_SW_MACROS.hostname;
if (ba_sw_hostname == 'mockups.blogads.com')
    ba_sw_hostname = 'urbandictionary.com';
// /CONFIGURATION

//FUNCTIONS
function ba_sw_set_suggested_word() {
    var current = $("#term", window.parent.document).val();
    var word_id = -1;
    if (ba_sw_is_suggested_word(current, "trueorfalse")) {
        word_id = ba_sw_is_suggested_word(current, "id");
    }

    var rand = Math.floor(ba_sw_suggested_words.length * Math.random());
    while (word_id == rand) {
        rand = Math.floor(ba_sw_suggested_words.length * Math.random());
    }

    var word = ba_sw_suggested_words[rand];
    var cookie_name = ba_sw_tracer_id + "_suggested_word_" + ba_sw_replace_space(word);
    var tracer_url_for_word = "http://tracer.blogads.com/click.php?zoneid=" + ba_sw_tracer_id + "_click_on_suggested_word_" + ba_sw_replace_space(word) + "&rand=" + Math.floor(Math.random() * 99999999) + "&url=" + encodeURIComponent("http://" + ba_sw_hostname + "/define.php?term=" + word);

    if (ba_sw_read_cookie(cookie_name) === null) {
        var tracer_url_for_unique = "http://tracer.blogads.com/click.php?zoneid=" + ba_sw_tracer_id + "_click_on_suggested_word_" + ba_sw_replace_space(word) + "_unique&rand=" + Math.floor(Math.random() * 99999999) + "&url=" + encodeURIComponent(tracer_url_for_word);

        ba_sw_create_cookie(cookie_name, "1", 1);
        $(".define-form .look_up a", window.parent.document).attr("href", tracer_url_for_unique);
    }
    else {
        $(".define-form .look_up a", window.parent.document).attr("href", tracer_url_for_word);
    }

    $(".define-form .look_up a", window.parent.document).html(word);
}

function ba_sw_is_suggested_word(word, needed) {
    if (typeof (word) !== "undefined" && word !== "") {
        for (var i = ba_sw_suggested_words.length - 1; i >= 0; i--) {
            if (ba_sw_suggested_words[i].toLowerCase() === word.toLowerCase()) {
                if (needed == "id")
                    return i;
                else
                    return true;
            }
        }
    }

    return false;
}

function ba_sw_init_submit_btn() {
    $(".define-form .input-append input.btn", window.parent.document).unbind();
    $(".define-form .input-append input.btn", window.parent.document).click(function() {
        var word = $("#term", window.parent.document).val();
        if (ba_sw_is_suggested_word(word, "trueorfalse")) {
            var cookie_name = ba_sw_tracer_id + "_search_" + ba_sw_replace_space(word);

            if (ba_sw_read_cookie(cookie_name) === null) {
                ba_sw_create_cookie(cookie_name, "1", 1);
                ba_sw_stat(ba_sw_tracer_id + "_click_on_search_" + ba_sw_replace_space(word) + "_unique", "http://tracer.blogads.com/click.php?zoneid=" + ba_sw_tracer_id + "_click_on_search_" + ba_sw_replace_space(word) + "&rand=" + Math.floor(Math.random() * 99999999) + "&url=" + encodeURIComponent("http://" + ba_sw_hostname + "/define.php?term=" + word));
            }
            else {
                ba_sw_stat(ba_sw_tracer_id + "_click_on_search_" + ba_sw_replace_space(word), "http://" + ba_sw_hostname + "/define.php?term=" + word);
            }
        }
        else {
            parent.location.href = "http://" + ba_sw_hostname + "/define.php?term=" + word;
        }

        return false;
    });
}

function ba_sw_create_cookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else
        var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function ba_sw_read_cookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function ba_sw_stat(id, url) {
    var tracer_url = 'http://tracer.blogads.com/click.php?zoneid=' + id + '&rand=' + Math.floor(Math.random() * 99999999);

    if (url !== '') {
        tracer_url = tracer_url + "&url=" + encodeURIComponent(url);
        parent.location.href = tracer_url;
    }

    else {
        if (!$("#" + id, window.parent.document).width()) {
            $("body", window.parent.document).prepend('<div id="' + id + '" style="top: 0px; left: 0px; width: 1px; height: 1px; position: absolute;"></div>');
        }

        $("#" + id, window.parent.document).html('<img src="' + tracer_url + '" style="width: 1px; height: 1px; border: none;" />');
    }
}

function ba_sw_replace_space(string) {
    return string.replace(/ /gi, '_');
}
// /FUNCTIONS

//ACTIONS
$(document, window.parent.document).ready(function() {
    ba_sw_set_suggested_word();
    ba_sw_init_submit_btn();
});
// /ACTIONS
