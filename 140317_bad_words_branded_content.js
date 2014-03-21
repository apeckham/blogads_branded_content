//CONFIGURATION
var ba_bc_hostname = document.location.hostname;

if (ba_bc_hostname == 'mockups.blogads.com')
    ba_bc_hostname = 'urbandictionary.com';

//Posts
var ba_bc_pinned_post_items = []; //The pinned posts have higher priority, they appear at the top in the unit.

var ba_bc_post_items = [
    {
        id: "bangorrhea",
        ti: "Bangorrhea",
        co: "Obsessively talking about sex, or \"banging.\" An oral disorder usually found in those who aren't actually having sex.",
        ul: "http://" + ba_bc_hostname + "/define.php?term=bangorrhea"
    },
    {
        id: "fapidextrous",
        ti: "Fapidextrous",
        co: "The ability to masturbate with equal efficiency using either hand.",
        ul: "http://" + ba_bc_hostname + "/define.php?term=fapidextrous"
    },
    {
        id: "nocializing",
        ti: "Nocializing",
        co: "The act of being out in a social public setting (i.e. Restaurant, Cocktail Bar, Coffee shop) and only spending time on your mobile device...",
        ul: "http://" + ba_bc_hostname + "/define.php?term=nocializing"
    },
    {
        id: "delazify",
        ti: "Delazify",
        co: "Prying one's fat ass off the couch to get shit done.",
        ul: "http://" + ba_bc_hostname + "/define.php?term=delazify"
    },
    {
        id: "vurp",
        ti: "Vurp",
        co: "A burp laced with a little vomit, usually occurs when you've had one too many and it has become difficult to distinguish between the two.",
        ul: "http://" + ba_bc_hostname + "/define.php?term=vurp"
    },
    {
        id: "fwisdom",
        ti: "Fwisdom",
        co: "Mindless drivel spoken as if it were fact and backed up with plagarism and lies.",
        ul: "http://" + ba_bc_hostname + "/define.php?term=fwisdom"
    },
    {
        id: "autofellatio",
        ti: "Autofellatio",
        co: "Autofellatio is the act of oral stimulation of one's own penis as a form of masturbation.",
        ul: "http://" + ba_bc_hostname + "/define.php?term=autofellatio"
    },
    {
        id: "touron",
        ti: "Touron",
        co: "A combination of a tourist and a moron.",
        ul: "http://" + ba_bc_hostname + "/define.php?term=touron"
    },
    {
        id: "brinksmanshit",
        ti: "Brinksmanshit",
        co: "When two or more parties have entered separate bathroom stalls at nearly the same time and deliberately delay moving...",
        ul: "http://" + ba_bc_hostname + "/define.php?term=brinksmanshit"
    },
    {
        id: "carsophagus",
        ti: "Carsophagus",
        co: "A carsophagus is a pothole in the road that is so large that it tends to \"eat a car\".",
        ul: "http://" + ba_bc_hostname + "/define.php?term=carsophagus"
    },
    {
        id: "thesaurused",
        ti: "Thesaurused",
        co: "To use the thesaurus for every second word in order to make yourself sound smarter or to take up space and make an essay longer.",
        ul: "http://" + ba_bc_hostname + "/define.php?term=thesaurused"
    },
    {
        id: "texticle",
        ti: "Texticle",
        co: "When you have your phone on vibrate in your pocket and you're wearing baggy trousers so when you get a text it tickles your nuts.",
        ul: "http://" + ba_bc_hostname + "/define.php?term=texticle"
    },
    {
        id: "malemployed",
        ti: "Malemployed",
        co: "When what you do for a living makes you want to kill yourself.",
        ul: "http://" + ba_bc_hostname + "/define.php?term=malemployed"
    },
    {
        id: "ambisextrous",
        ti: "Ambisextrous",
        co: "Having the ability to masturbate successfully with both hands.",
        ul: "http://" + ba_bc_hostname + "/define.php?term=ambisextrous"
    },
    {
        id: "defecately",
        ti: "Defecately",
        co: "A more dignified way to say \"Shit Yeah!\" so you don't sound uneducated in the presence of others.",
        ul: "http://" + ba_bc_hostname + "/define.php?term=defecately"
    },
    {
        id: "shexting",
        ti: "Shexting",
        co: "The act of texting while taking a shit. Sometimes, the textee is unaware that the texter is shitting.",
        ul: "http://" + ba_bc_hostname + "/define.php?term=shexting"
    },
    {
        id: "scoratorium",
        ti: "Scoratorium",
        co: "The purposeful avoidance of all forms of media or communication which might disclose the results of a sporting event...",
        ul: "http://" + ba_bc_hostname + "/define.php?term=scoratorium"
    },
    {
        id: "boregasm",
        ti: "Boregasm",
        co: "Noun, verb: the result of or act of reaching the apex or climax of boredom...",
        ul: "http://" + ba_bc_hostname + "/define.php?term=boregasm"
    },
    {
        id: "manolescent",
        ti: "Manolescent",
        co: "Noun: A man of any age that shirks adult responsibilities.",
        ul: "http://" + ba_bc_hostname + "/define.php?term=manolescent"
    },
    {
        id: "carcolepsy",
        ti: "Carcolepsy",
        co: "A condition affecting buddies on a trip who fall asleep as soon as the car starts moving, providing no company or driving help.",
        ul: "http://" + ba_bc_hostname + "/define.php?term=carcolepsy"
    },
    {
        id: "acarpous",
        ti: "Acarpous",
        co: "Not producing fruit, sterile, barren.",
        ul: "http://" + ba_bc_hostname + "/define.php?term=acarpous"
    },
    {
        id: "coprophilia",
        ti: "Coprophilia",
        co: "An obsessive interest in feces.",
        ul: "http://" + ba_bc_hostname + "/define.php?term=coprophilia"
    },
    {
        id: "haustellum",
        ti: "Haustellum",
        co: "The proboscis or sucking organ of an insect or crustacean.",
        ul: "http://" + ba_bc_hostname + "/define.php?term=haustellum"
    },
    {
        id: "libidinous",
        ti: "Libidinous",
        co: "Full of sexual lust, lustful, lewd, lascivious.",
        ul: "http://" + ba_bc_hostname + "/define.php?term=libidinous"
    }
];

//Date for tune-in.
var ba_bc_date = new Date(); //Do NOT modify!
var ba_bc_today = ba_bc_date.getFullYear() + '-' + (ba_bc_date.getMonth() + 1) + '-' + ba_bc_date.getDate(); //It will be: yyyy-m-d

var ba_bc_max_items = 8; //Max number of post items to display. Set 0 to include all.
var ba_bc_items_in_random_order = "yes"; //Posts in random order. Values: yes, no. If the value is "no", then they will showing up in reverse chronological order.
var ba_bc_rand = Math.floor(Math.random() * 99999999); //Do NOT modify.

//Third party trackers.
var ba_bc_default_tracer_id_prefix = BA_BC_MACROS.tracer_id_prefix; //For example: 130903_blogads_branded_content
var ba_bc_default_tracer_id_suffix = BA_BC_MACROS.tracer_id_suffix;
var ba_bc_default_tracer_id = ba_bc_default_tracer_id_prefix + '_' + ba_bc_default_tracer_id_suffix;
var ba_bc_click_tracker_for_300x600_ad = BA_BC_MACROS.click_url; //For example: http://blogads.com/
var ba_bc_impression_tracker_for_300x600_ad = BA_BC_MACROS.impression_tracker; //For example: 'http://skins.blogads.com/blogads/blank.gif?rand=' + ba_bc_rand

//Video elements.
var ba_bc_videoplayer = 'http://skins.blogads.com/blogads/branded_content/videoplayer/aspect_ratio_16_per_9_v2.swf?v=4';
var ba_bc_video_url = 'http://vids.perezhilton.com/videos/645bc8e0f3ade/formats/h264_600kbps/file.mp4';
var ba_bc_video_first_frame = 'http://vids.perezhilton.com/videos/645bc8e0f3ade/screenshots/300w.jpg';

//Sponsored tab for 300x600 unit.
var ba_bc_sponsored_tab_for_300x600_unit = 'http://skins.blogads.com/urbandictionary/140317_Bad_Words/sponsored_tab/300x128-march28.jpg';

if (ba_bc_today == '2014-3-24' || 
        ba_bc_today == '2014-3-25' || 
        ba_bc_today == '2014-3-26' || 
        ba_bc_today == '2014-3-27' ||
        ba_bc_today == '2014-3-28') {
    ba_bc_sponsored_tab_for_300x600_unit = 'http://skins.blogads.com/urbandictionary/140317_Bad_Words/sponsored_tab/300x128-friday.jpg';
}

//Other variables.
var ba_bc_cookie_name = ba_bc_default_tracer_id + '_cookie';
var ba_bc_posts_in_the_unit = 0;
// /CONFIGURATION

//CSS
var ba_bc_css = '<style type="text/css"> \n\
#ba_bc_container { width: 300px; height: 600px; position: relative; }  \n\
#ba_bc_tab { width: 300px; height: 128px; position: relative; background: transparent url("' + ba_bc_sponsored_tab_for_300x600_unit + '") no-repeat scroll 0 0; cursor: pointer; }  \n\
#ba_bc_video { width: 300px; height: 168px; position: relative; }  \n\
#ba_bc_video_player { top: 0px; left: 0px; width: 300px; height: 168px; position: absolute; background: #000000; }  \n\
#ba_bc_video .border_left, \n\
#ba_bc_video .border_right { top: 0px; width: 2px; height: 168px; position: absolute; background: #000000; }  \n\
#ba_bc_video .border_left { left: 0px; }  \n\
#ba_bc_video .border_right { right: 0px; }  \n\
#ba_bc_list { width: 288px; height: 294px; padding: 4px; border-left: #000000 solid 2px; border-right: #000000 solid 2px; border-bottom: #000000 solid 2px; background: #ffffff; overflow: auto; font-family: Arial,Helvetica,Garuda,sans-serif; font-size: 11px; position: relative; }  \n\
#ba_bc_list .row { width: 273px; height: auto; position: relative; border-bottom: #d5d5d5 solid 1px; margin: 0 0 8px 0; text-align: left; line-height: 1.2; }\n\
#ba_bc_list .text { width: 273px; color: #373737; float: left; padding: 0; line-height: 1.2; }  \n\
#ba_bc_list .text p {margin: 0 0 8px 0; padding: 0;}\n\
#ba_bc_list .text p a:link, \n\
#ba_bc_list .text p a:visited { color: #fabacb; text-decoration: none; }  \n\
#ba_bc_list .text p a:hover { text-decoration: underline; }  \n\
#ba_bc_list .text p.title { margin: 0 0 8px 0; }  \n\
#ba_bc_list .text p.title a:link, #ba_bc_list .text p.title a:visited { color: #373737; font-size: 14px; font-weight: bold; text-decoration: none; }  \n\
#ba_bc_list .text p.title a:hover { color: #077782; text-decoration: none; background-color: transparent; } \n\
#ba_bc_list .clear { clear: both; margin: 0; padding: 0; }\n\
#ba_bc_list_loading {width: 100%; text-align: center; margin-top: 20px;}\n\
#ba_bc_list_loading img {vertical-align: middle;}\n\
</style>';
// /CSS

//FUNCTIONS
function ba_bc_set_video(width, height, div_id, mute, autoplay) {
    var flashvars = 'video_url=' + ba_bc_video_url + '&first_frame=' + encodeURIComponent(ba_bc_video_first_frame) + '&mute=' + mute + '&autoplay=' + autoplay + '&click_tracker=' + encodeURIComponent(ba_bc_click_tracker_for_300x600_ad) + '&tracer_id=' + ba_bc_default_tracer_id;
    var html = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" width="' + width + '" height="' + height + '">';
    html += '<param name="movie" value="' + ba_bc_videoplayer + '" />';
    html += '<param name="quality" value="high" />';
    html += '<param name="bgcolor" value="#ffffff" />';
    html += '<param name="allowscriptaccess" value="always" />';
    html += '<param name="wmode" value="transparent" />';
    html += '<param name="FlashVars" value="' + flashvars + '" />';
    html += '<embed src="' + ba_bc_videoplayer + '" FlashVars="' + flashvars + '" wmode="transparent" quality="high" bgcolor="#ffffff" width="' + width + '" height="' + height + '" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" allowscriptaccess="always"></embed>';
    html += '</object>';

    $("#" + div_id).html(html);
}

function ba_bc_init() {
    $("head").append(ba_bc_css);

    var self = this;

    var html = '<div id="ba_bc_container">';
    html += '<div id="ba_bc_tab"></div>';
    html += '<div id="ba_bc_video">';
    html += '<div id="ba_bc_video_player"></div>';
    html += '<div class="border_left"></div>';
    html += '<div class="border_right"></div>';
    html += '</div>';
    html += '<div id="ba_bc_list"><div id="ba_bc_list_loading"><img src="http://skins.blogads.com/blogads/loading.gif" /> ...loading</div></div>';
    html += '</div>';
    html += '<div id="ba_bc_impression_tracker" style="top: 0px; left: 0px; width: 1px; height: 1px; position: absolute;"></div>';

    document.write(html);

    if (ba_bc_click_tracker_for_300x600_ad !== '') {
        $("#ba_bc_tab").click(function() {
            $("#ba_bc_tab").css("cursor", "pointer");
            ba_bc_client_btn(ba_bc_default_tracer_id + '_300x600_click_on_tab');
        });
    }

    if (ba_bc_get_cookie(ba_bc_cookie_name) === null) {
        ba_bc_set_cookie(ba_bc_cookie_name, 'yes', 1);
        ba_bc_set_video('300', '168', 'ba_bc_video_player', 'on', 'yes');
    }

    else {
        ba_bc_set_video('300', '168', 'ba_bc_video_player', 'off', 'no');
    }

    ba_bc_set_items(ba_bc_pinned_post_items);
    ba_bc_set_items(ba_bc_post_items);
    ba_bc_set_impression_tracker();
    ba_bc_stat(ba_bc_default_tracer_id + '_300x600_impressions');
}

function ba_bc_hide_list() {
    $("#ba_bc_list").hide();
    $("#ba_bc_container").css("height", "300px");
}

function ba_bc_set_items(items) {
    if ($("#ba_bc_list_loading").width())
        $("#ba_bc_list_loading").remove();

    if (typeof (items) !== 'object' || items.length < 1)
        return;

    if (ba_bc_items_in_random_order == "yes")
        items = ba_bc_shuffle_array(items);

    var i;
    var html = '';

    for (i = 0; i < items.length; i++) {
        if (ba_bc_posts_in_the_unit >= ba_bc_max_items)
            break;

        if (typeof (items[i]) !== 'undefined') {
            html += ba_bc_get_row(items[i]);
            ba_bc_posts_in_the_unit = ba_bc_posts_in_the_unit + 1;
        }
    }

    $("#ba_bc_list").html($("#ba_bc_list").html() + html);
}

function ba_bc_get_row(item) {
    var content = item["co"];
    var url_for_title = 'http://tracer.blogads.com/click.php?zoneid=' + ba_bc_default_tracer_id + '_click_on_story_title_' + item["id"] + '&rand=' + Math.floor(Math.random() * 99999999) + '&url=' + encodeURIComponent(item["ul"]);

    var answer = '<div class="row">';
    answer += '<div class="text">';
    answer += '<p class="title"><a href="' + url_for_title + '" target="_top">' + item["ti"] + '</a></p>';
    answer += '<p>' + content + '</p>';
    answer += '</div>';
    answer += '<div class="clear"></div>';
    answer += '</div>';

    return answer;
}

function ba_bc_stat(id) {
    if (!$("#" + id).width()) {
        $("body").prepend('<div id="' + id + '" style="top: 0px; left: 0px; width: 1px; height: 1px; position: absolute;"></div>');
    }

    $("#" + id).html('<img src="http://tracer.blogads.com/click.php?zoneid=' + id + '&rand=' + Math.floor(Math.random() * 99999999) + '" style="width: 1px; height: 1px; border: none;">');
}

function ba_bc_click_on(id, url) {
    ba_bc_stat(id);
    window.open(url);
}

function ba_bc_client_btn(id) {
    ba_bc_stat(id);
    window.open(ba_bc_click_tracker_for_300x600_ad);
}

function ba_bc_set_impression_tracker() {
    if (ba_bc_impression_tracker_for_300x600_ad !== '')
        $("#ba_bc_impression_tracker").html('<img src="' + ba_bc_impression_tracker_for_300x600_ad + '" />');
}

function ba_bc_shuffle_array(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function ba_bc_get_url_params() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
        vars[key] = value;
    });
    return vars;
}

function ba_bc_set_cookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value + "; path=/";
}

function ba_bc_get_cookie(c_name) {
    var c_value = document.cookie;
    var c_start = c_value.indexOf(" " + c_name + "=");
    if (c_start == -1) {
        c_start = c_value.indexOf(c_name + "=");
    }
    if (c_start == -1) {
        c_value = null;
    } else {
        c_start = c_value.indexOf("=", c_start) + 1;
        var c_end = c_value.indexOf(";", c_start);
        if (c_end == -1)
        {
            c_end = c_value.length;
        }
        c_value = unescape(c_value.substring(c_start, c_end));
    }
    return c_value;
}
// /FUNCTIONS

//ACTIONS
ba_bc_init();
// /ACTIONS
