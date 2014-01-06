if (typeof (ba_bc_stat) == "undefined") {
    function ba_bc_stat(tracer_id) {
        if (!$("#" + tracer_id).width()) {
            $("body").prepend('<div id="' + tracer_id + '" style="top: 0px; left: 0px; width: 1px; height: 1px; position: absolute;"></div>');
        }

        $("#" + tracer_id).html('<img src="http://tracer.blogads.com/click.php?zoneid=' + tracer_id + '&rand=' + Math.floor(Math.random() * 99999999) + '" style="width: 1px; height: 1px; border: none;">');
    }
}

if (typeof (ba_bc_client_btn) == "undefined") {
    function ba_bc_client_btn(tracer_id, url) {
        ba_bc_stat(tracer_id);
        window.open(url);
    }
}

function ba_bc_class() {
    //CONFIGURATION
    //Posts
    var ba_bc_pinned_post_items = [
        {
            id: "dtr",
            ti: "DTR",
            co: "Define The Relationship. When two people discuss their mutual understanding of a romantic relationship (casual dating, serious boyfriend, etc).",
            pc: "",
            ul: "http://" + document.location.hostname + "/define.php?term=dtr"
        },
        {
            id: "bromance",
            ti: "Bromance",
            co: "Describes the complicated love and affection shared by two straight males.",
            pc: "",
            ul: "http://" + document.location.hostname + "/define.php?term=bromance"
        }
    ]; //The pinned posts have higher priority, they appear at the top in the unit.

    var ba_bc_post_items = [
        {
            id: "its_complicated",
            ti: "It's complicated",
            co: "One of the options for \"Relationship Status\" on Facebook. Refers to a couple in an ambiguous state between \"friends\" and \"in a relationship\".",
            pc: "",
            ul: "http://" + document.location.hostname + "/define.php?term=it%27s%20complicated"
        },
        {
            id: "datingish",
            ti: "datingish",
            co: "The stage before an actual relationship...... Hanging out and having sex, but not \"boyfriend / girlfriend\".",
            pc: "",
            ul: "http://" + document.location.hostname + "/define.php?term=datingish"
        },
        {
            id: "wifed_up",
            ti: "wifed up",
            co: "When a man is held down or in check by a female counterpart so as to not engage in social situations with other members of the general public.",
            pc: "",
            ul: "http://" + document.location.hostname + "/define.php?term=wifed+up"
        },
        {
            id: "sprung",
            ti: "sprung",
            co: "The state of being very attracted to a person, obsession often mistaken for love.",
            pc: "",
            ul: "http://" + document.location.hostname + "/define.php?term=sprung"
        },
        {
            id: "dateability",
            ti: "dateability",
            co: "The degree of \"the quality of being dateable\" that one possesses.",
            pc: "",
            ul: "http://" + document.location.hostname + "/define.php?term=dateability"
        },
        {
            id: "date_a_thon",
            ti: "Date-a-thon",
            co: "The act of dating on a regular basis. This can include a wide range of activities, such as mini-golf and dinner.",
            pc: "",
            ul: "http://" + document.location.hostname + "/define.php?term=Date-a-thon"
        },
        {
            id: "caught_up",
            ti: "Caught up",
            co: "Becoming so involved with a person that you become oblivious to the reality of the situation.",
            pc: "",
            ul: "http://" + document.location.hostname + "/define.php?term=caught%20up"
        },
        {
            id: "friends_with_benefits",
            ti: "friends with benefits",
            co: "Two friends who have a sexual realtionship without being emotionally involved.",
            pc: "",
            ul: "http://" + document.location.hostname + "/define.php?term=friends%20with%20benefits"
        },
        {
            id: "bro_code",
            ti: "Bro Code",
            co: "A set of rules meant to be a guideline to live by between Bro's.",
            pc: "",
            ul: "http://" + document.location.hostname + "/define.php?term=bro+code"
        },
        {
            id: "bros_before_hoes",
            ti: "bros before hoes",
            co: "The unwritten law that your bros (male friends) should always become before hoes (female with whom you are/hoping to have a relationship with).",
            pc: "",
            ul: "http://" + document.location.hostname + "/define.php?term=bros+before+hoes"
        },
        {
            id: "sisters_before_misters",
            ti: "sisters before misters",
            co: "The unwritten law that dictates that a the wishes of an unmarried woman's or girl's female friends trump those of a men she wants to have a relationship with.",
            pc: "",
            ul: "http://" + document.location.hostname + "/define.php?term=sisters%20before%20misters"
        },
        {
            id: "sexting",
            ti: "sexting",
            co: "v: the act of text messaging someone in the hopes of having a sexual encounter with them later; initially casual, transitioning into highly suggestive and even sexually explicit.",
            pc: "",
            ul: "http://" + document.location.hostname + "/define.php?term=sexting"
        },
        {
            id: "sexplanation",
            ti: "Sexplanation",
            co: "The act or process of explaining to the opposite sex why you want sex or why you just had sex.",
            pc: "",
            ul: "http://" + document.location.hostname + "/define.php?term=sexplanation"
        },
        {
            id: "booty_call",
            ti: "booty call",
            co: "A late night summons -- often made via telephone -- to arrange clandestine sexual liaisons on an ad hoc basis.",
            pc: "",
            ul: "http://" + document.location.hostname + "/define.php?term=booty%20call"
        },
        {
            id: "drunk_dial",
            ti: "Drunk Dial",
            co: "A drunk dial is a communication via telephone (usually through talking but also applies to text messanging) that is somehow embarrassing or absurd.",
            pc: "",
            ul: "http://" + document.location.hostname + "/define.php?term=drunk%20dial"
        },
        {
            id: "broactive",
            ti: "Broactive",
            co: "1. (adj./adverb) The act of helping out your fellow bro.",
            pc: "",
            ul: "http://" + document.location.hostname + "/define.php?term=Broactive"
        },
        {
            id: "falling",
            ti: "Falling",
            co: "The state of mind and feelings you get when you begin to feel love for a person you are sexually attracted to.",
            pc: "",
            ul: "http://" + document.location.hostname + "/define.php?term=falling"
        }
    ];

    //Date for tune-in.
    var ba_bc_tomorrow_date = "2014-1-30"; //The date when the tonight version of the skin has to run, for example: 2013-4-1 or 2013-10-10.
    var ba_bc_tonight_date = "2014-1-31"; //The date when the tonight version of the skin has to run, for example: 2013-4-1 or 2013-10-10.
    var ba_bc_date = new Date(); //Do NOT modify!
    var ba_bc_today = ba_bc_date.getFullYear() + '-' + (ba_bc_date.getMonth() + 1) + '-' + ba_bc_date.getDate(); //It will be: yyyy-m-d

    var ba_bc_max_items = 8; //Max number of post items to display. Set 0 to include all.
    var ba_bc_items_in_random_order = "yes"; //Posts in random order. Values: yes, no. If the value is "no", then they will showing up in reverse chronological order.
    var ba_bc_rand = Math.floor(Math.random() * 99999999); //Do NOT modify.

    //Third party trackers.
    var ba_bc_default_tracer_id_prefix = '131230_ud_that_awkward_branded_content'; //For example: 130903_blogads_branded_content
    var ba_bc_default_tracer_id_suffix = 'paid';
    var ba_bc_default_tracer_id = ba_bc_default_tracer_id_prefix + '_' + ba_bc_default_tracer_id_suffix;
    var ba_bc_click_tracker_for_300x600_ad = 'http://ad.doubleclick.net/clk;278132467;105381835;j'; //For example: http://blogads.com/
    var ba_bc_impression_tracker_for_300x600_ad = 'http://ad.doubleclick.net/ad/N1068.altavista.mass.com/B7968832.48;sz=1x1;ord=' + ba_bc_rand + '?'; //For example: 'http://skins.blogads.com/blogads/blank.gif?rand=' + ba_bc_rand

    //Video elements.
    var ba_bc_videoplayer = 'http://skins.blogads.com/blogads/branded_content/videoplayer/aspect_ratio_16_per_9_v2.swf?v=4';
    var ba_bc_video_url = 'http://skins.blogads.com/urbandictionary/131230_That_Awkward_Moment/video/TAM_3021H_SOSOSO_30_h264_Jan31.f4v';
    var ba_bc_video_first_frame = 'http://skins.blogads.com/urbandictionary/131230_That_Awkward_Moment/video/first_frame.jpg';

    //Sponsored tab for 300x600 unit.
    var ba_bc_sponsored_tab_for_300x600_unit = 'http://skins.blogads.com/urbandictionary/131230_That_Awkward_Moment/sponsored_tab/tab-jan-31.jpg';

    if (ba_bc_today == ba_bc_tomorrow_date || location.href.search(/version\=tomorrow/i) !== -1) {
        ba_bc_sponsored_tab_for_300x600_unit = 'http://skins.blogads.com/urbandictionary/131230_That_Awkward_Moment/sponsored_tab/tab-tomorrow.jpg';
    }

    else if (ba_bc_today == ba_bc_tonight_date || location.href.search(/version\=tonight/i) !== -1) {
        ba_bc_sponsored_tab_for_300x600_unit = 'http://skins.blogads.com/urbandictionary/131230_That_Awkward_Moment/sponsored_tab/tab-tonight.jpg';
    }

    //728x90 ad.
    var ba_bc_728x90_ad = '<div style="width: 728px; height: 50px; background: #077782; color: #ffffff; padding-top: 40px; font-size: 24px; text-align: center; font-family: Arial, Helvetica, sans-serif;">728x90</div>';

    //Ad boxes
    //var ba_bc_div_of_300x250_ad = '#HP_300x600'; //The div of the 300x250 ad. The code will put the 300x600 unit into this. For index pages. 
    var ba_bc_div_of_300x250_ad = '#ROS_Right_160x60'; //For post pages.

    var ba_bc_hide_these_ad_boxes = '<style type="text/css">#Define_300x250, #Define_300x250_BTF, #ROS_BTF_728x90 {display: none !important;}</style>'; //The code will hide these boxes on selected post pages.

    //SOV and other variables.
    if (typeof (window.ba_bc_sov) == 'undefined') {
        window.ba_bc_sov_paid = 100; //The SOV of paid part of the campaign.
        window.ba_bc_sov_added = 0;  //The SOV of free part of the campaign.
        window.ba_bc_sov = window.ba_bc_sov_paid + window.ba_bc_sov_added;
    }

    if (typeof (window.ba_bc_branded_content_rand) == 'undefined')
        window.ba_bc_branded_content_rand = Math.floor(100 * Math.random()) + 1;
    
    if (typeof (window.ba_bc_already_running) == 'undefined')
        window.ba_bc_already_running = false;

    var ba_bc_cookie_name = ba_bc_default_tracer_id + '_cookie';
    var ba_bc_available_posts_in_the_unit = 0;
    // /CONFIGURATION

    //CSS
    var ba_bc_css = '<style type="text/css"> \n\
#ba_bc_container { width: 300px; height: 600px; position: relative; }  \n\
#ba_bc_tab { width: 300px; height: 101px; position: relative; background: transparent url("' + ba_bc_sponsored_tab_for_300x600_unit + '") no-repeat scroll 0 0; cursor: pointer; }  \n\
#ba_bc_video { width: 300px; height: 168px; position: relative; }  \n\
#ba_bc_video_player { top: 0px; left: 0px; width: 300px; height: 168px; position: absolute; background: #000000; }  \n\
#ba_bc_video .border_left, \n\
#ba_bc_video .border_right { top: 0px; width: 2px; height: 168px; position: absolute; background: #077782; }  \n\
#ba_bc_video .border_left { left: 0px; }  \n\
#ba_bc_video .border_right { right: 0px; }  \n\
#ba_bc_list { width: 288px; height: 321px; padding: 4px; border-left: #077782 solid 2px; border-right: #077782 solid 2px; border-bottom: #077782 solid 2px; background: #ffffff; overflow: auto; font-family: Arial,Helvetica,Garuda,sans-serif; font-size: 11px; position: relative; }  \n\
#ba_bc_list .row { width: 260px; height: auto; position: relative; border-bottom: #d5d5d5 solid 1px; margin: 0 0 5px 0; text-align: left; line-height: 1.2; }\n\
#ba_bc_list .text { width: 260px; color: #373737; float: left; padding: 0 0 5px 0; line-height: 1.2; }  \n\
#ba_bc_list .text p a:link, \n\
#ba_bc_list .text p a:visited { color: #fabacb; text-decoration: none; }  \n\
#ba_bc_list .text p a:hover { text-decoration: underline; }  \n\
#ba_bc_list .text p.title { margin: 0 0 5px 0; }  \n\
#ba_bc_list .text p.title a:link, #ba_bc_list .text p.title a:visited { color: #373737; font-size: 14px; font-weight: bold; text-decoration: none; }  \n\
#ba_bc_list .text p.title a:hover { color: #077782; text-decoration: none; background-color: transparent; } \n\
#ba_bc_list .clear { clear: both; margin: 0; padding: 0; }\n\
#ba_bc_list_loading {width: 100%; text-align: center; margin-top: 20px;}\n\
#ba_bc_list_loading img {vertical-align: middle;}\n\
</style>';
    // /CSS

    //FUNCTIONS
    this.ba_bc_set_video = function(width, height, div_id, mute, autoplay) {
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
    };

    this.ba_bc_init = function() {
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
                self.ba_bc_client_btn('300x600_click_on_tab');
            });
        }

        if (this.ba_bc_get_cookie(ba_bc_cookie_name) === null) {
            this.ba_bc_set_cookie(ba_bc_cookie_name, 'yes', 1);
            this.ba_bc_set_video('300', '168', 'ba_bc_video_player', 'on', 'yes');
        }

        else {
            this.ba_bc_set_video('300', '168', 'ba_bc_video_player', 'off', 'no');
        }

        this.ba_bc_set_items(ba_bc_pinned_post_items);
        this.ba_bc_set_items(ba_bc_post_items);
        this.ba_bc_set_impression_tracker();
        this.ba_bc_stat('300x600_impressions');
    };

    this.ba_bc_hide_list = function() {
        $("#ba_bc_list").hide();
        $("#ba_bc_container").css("height", "300px");
    };

    this.ba_bc_set_items = function(items) {
        if ($("#ba_bc_list_loading").width())
            $("#ba_bc_list_loading").remove();

        if (typeof (items) !== 'object' || items.length < 1)
            this.ba_bc_hide_list();

        if (ba_bc_items_in_random_order == "yes")
            items = this.ba_bc_shuffle_array(items);

        var i;
        var html = '';

        for (i = 0; i < items.length; i++) {
            if (ba_bc_available_posts_in_the_unit >= ba_bc_max_items)
                break;

            if (typeof (items[i]) !== 'undefined') {
                html += this.ba_bc_get_row(items[i]);
                ba_bc_available_posts_in_the_unit = ba_bc_available_posts_in_the_unit + 1;
            }
        }

        $("#ba_bc_list").html($("#ba_bc_list").html() + html);
    };

    this.ba_bc_get_row = function(item) {
        var picture = item["pc"];
        var content = item["co"];
        var url_for_picture = 'http://tracer.blogads.com/click.php?zoneid=' + ba_bc_default_tracer_id + '_click_on_story_picture_' + item["id"] + '&rand=' + Math.floor(Math.random() * 99999999) + '&url=' + encodeURIComponent(item["ul"]);
        var url_for_title = 'http://tracer.blogads.com/click.php?zoneid=' + ba_bc_default_tracer_id + '_click_on_story_title_' + item["id"] + '&rand=' + Math.floor(Math.random() * 99999999) + '&url=' + encodeURIComponent(item["ul"]);

        if (picture == '')
            picture = 'http://skins.blogads.com/blogads/blank.gif';

        var answer = '<div class="row">';
        //answer += '<div class="picture">';
        //answer += '<a href="' + url_for_picture + '"><img src="' + picture + '" align="left"></a>';
        //answer += '</div>';
        answer += '<div class="text">';
        answer += '<p class="title"><a href="' + url_for_title + '" target="_top">' + item["ti"] + '</a></p>';
        answer += '<p>' + content + '</p>';
        answer += '</div>';
        answer += '<div class="clear"></div>';
        answer += '</div>';

        return answer;
    };

    this.ba_bc_stat = function(id) {
        var tracer_id = ba_bc_default_tracer_id + '_' + id;

        if (!$("#" + tracer_id).width()) {
            $("body").prepend('<div id="' + tracer_id + '" style="top: 0px; left: 0px; width: 1px; height: 1px; position: absolute;"></div>');
        }

        $("#" + tracer_id).html('<img src="http://tracer.blogads.com/click.php?zoneid=' + tracer_id + '&rand=' + Math.floor(Math.random() * 99999999) + '" style="width: 1px; height: 1px; border: none;">');
    };

    this.ba_bc_click_on = function(id, url) {
        this.ba_bc_stat(id);
        window.open(url);
    };

    this.ba_bc_client_btn = function(id) {
        this.ba_bc_stat(id);
        window.open(ba_bc_click_tracker_for_300x600_ad);
    };

    this.ba_bc_set_impression_tracker = function() {
        if (ba_bc_impression_tracker_for_300x600_ad !== '')
            $("#ba_bc_impression_tracker").html('<img src="' + ba_bc_impression_tracker_for_300x600_ad + '" />');
    };

    this.ba_bc_shuffle_array = function(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    };

    this.ba_bc_show_300x600 = function() {
        if (window.ba_bc_already_running)
            return false;
        else if ((window.ba_bc_branded_content_rand <= window.ba_bc_sov &&
                window.ba_bc_already_running === false) || this.ba_bc_is_it_preview_page()) {
            window.ba_bc_already_running = true;
        }
        else if (this.ba_bc_is_it_needed_post_page())
            window.ba_bc_already_running = true;
        else
            window.ba_bc_already_running = false;

        return window.ba_bc_already_running;
    };

    this.ba_bc_is_it_needed_post_page = function() {
        var i;
        var regexp;
        var posts = ba_bc_pinned_post_items.concat(ba_bc_post_items);

        for (i = 0; i < posts.length; i++) {
            regexp = new RegExp(posts[i]["ul"], "gi");

            if (location.href.search(regexp) !== -1)
                return true;
        }

        return false;
    };

    this.ba_bc_set_728x90_ad = function() {
        if (this.ba_bc_is_it_needed_post_page()) {
            var ba_bc_div_of_728x90_ad = 'ba_728x90_top';
            
            $(".container .big-header").after('<div id="' + ba_bc_div_of_728x90_ad + '"></div>');
            $("#" + ba_bc_div_of_728x90_ad).html(ba_bc_728x90_ad);
            $("#" + ba_bc_div_of_728x90_ad).css("width", "728px");
            $("#" + ba_bc_div_of_728x90_ad).css("height", "90px");
            $("#" + ba_bc_div_of_728x90_ad).css("margin", "0 auto 10px auto");
            this.ba_bc_stat('728x90_impressions');
        }
    };

    this.ba_bc_get_url_params = function() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m, key, value) {
            vars[key] = value;
        });
        return vars;
    };

    this.ba_bc_set_cookie = function(c_name, value, exdays) {
        var exdate = new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
        document.cookie = c_name + "=" + c_value + "; path=/";
    };

    this.ba_bc_get_cookie = function(c_name) {
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
    };

    this.ba_bc_hide_other_ads = function() {
        $("head").append(ba_bc_hide_these_ad_boxes);
    };

    this.ba_bc_is_it_preview_page = function() {
        if (location.href.search(/ba_bc_preview\=yes/i) !== -1) {
            return true;
        }
        else {
            return false;
        }
    };
    // /FUNCTIONS
}

//ACTIONS
babcclass = new ba_bc_class();

if (babcclass.ba_bc_show_300x600()) {
    
    babcclass.ba_bc_init();

    if (babcclass.ba_bc_is_it_needed_post_page()) {
        //setTimeout("babcclass.ba_bc_hide_other_ads()", 1000);
    }
}
// /ACTIONS
