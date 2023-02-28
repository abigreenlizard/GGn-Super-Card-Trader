// ==UserScript==
// @name         Super Card Trader
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Extended filtering for trading cards on trade screen.
// @author       abigreenlizard
// @match        https://gazellegames.net/user.php?action=trade&userid=*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=gazellegames.net
// @require https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/0.6.10/js/perfect-scrollbar.jquery.js
// @resource IMPORTED_CSS https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/0.6.10/css/perfect-scrollbar.css
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

var cards = {
    "Random Portal Card": "2425",
    "Have a Breathtaking Christmas": "3341",
    "Grievous": "3340",
    "Doomguy": "3339",
    "Mando": "3338",
    "Jurassic Park": "3336",
    "Die Hard": "3335",
    "Gremlins": "3334",
    "Indy": "3333",
    "Braveheart": "3332",
    "Picard": "3331",
    "Big Lebowski": "3330",
    "Back to the Future": "3329",
    "Santa Claus Is Out There": "3328",
    "King Boo": "3270",
    "Boo": "3269",
    "Ghostbusters": "3268",
    "Inky": "3267",
    "Pinky": "3266",
    "Clyde": "3265",
    "Blinky": "3263",
    "Black Mage": "3163",
    "Kirby": "3162",
    "Simon Belmont": "3161",
    "Samus Aran": "3160",
    "Pac-Man": "3159",
    "Link": "3158",
    "Mega Man": "3157",
    "Little Mac": "3156",
    "Pit": "3155",
    "Dr. Mario": "3154",
    "Duck Hunt Dog": "3153",
    "Donkey Kong": "3152",
    "Bill Rizer": "3151",
    "Mafia": "3111",
    "Gazelle": "3110",
    "Animal Crossing": "3109",
    "Genshin Impact": "3108",
    "Dirt 5": "3107",
    "Watch Dogs Legion": "3106",
    "Cyberpunk 2077": "3105",
    "After Party": "3029",
    "What an Adventure": "3028",
    "Birthday Battle Kart": "3027",
    "Home Sweet Home": "3026",
    "A Fair Fight": "3025",
    "Gazelle Breaking Bad": "3024",
    "Exodus Truce": "3023",
    "Yennefer": "2999",
    "Sophitia": "2998",
    "Jill Valentine": "2997",
    "Ivy Valentine": "2996",
    "Angelise Reiter": "2995",
    "Chainsaw Wizard": "2994",
    "Chainsaw Chess": "2993",
    "Mr. and Mrs. Pac Man": "2992",
    "Dom and Maria": "2991",
    "Master Chief and Cortana": "2990",
    "Aerith and Cloud": "2989",
    "Kirlia and Meloetta": "2988",
    "Yoshi and Birdo": "2987",
    "Sonic and Amy": "2986",
    "Baby Yoda with Gingerbread": "2976",
    "Mario Christmas": "2975",
    "Gingerbread AT Walker": "2974",
    "Millenium Falcon Gingerbread": "2973",
    "Gingerbread Doomslayer": "2972",
    "Gingerbread Marston": "2970",
    "Gingerbread Kitana": "2969",
    "Who eats whom?": "2951",
    "Skultilla the Cake Guard": "2950",
    "Gohma Sees You": "2949",
    "Link was here!": "2948",
    "Memory Boost": "2947",
    "Mommy's Recipe": "2946",
    "Bloody Mario": "2945",
    "Supreme Gazelle": "2836",
    "Lucky Gazelle": "2835",
    "Alien Gazelle": "2834",
    "Future Gazelle": "2833",
    "Gamer Gazelle": "2831",
    "Fancy Gazelle": "2830",
    "Ripped Gazelle": "2829",
    "Christmas Cheer": "2704",
    "Sexy Santa": "2703",
    "Icy Kisses": "2702",
    "Abominable Santa": "2701",
    "Santa Suit": "2700",
    "Mistletoe": "2699",
    "Perfect Snowball": "2698",
    "Lame Pumpkin Trio": "2595",
    "Green Mario Pumpkin": "2594",
    "Russian Pumpkin": "2593",
    "Stormrage Pumpkin": "2592",
    "Carved Pumpkin": "2591",
    "Rotting Pumpkin": "2590",
    "Ripe Pumpkin": "2589",
    "Zé do Caixão Coffin Joe Card": "2410",
    "Goal Pole": "2404",
    "Penguin Suit": "2403",
    "Fire Flower": "2402",
    "Super Mushroom": "2401",
    "LinkinsRepeater Bone Hard Card": "2400",
    "Wario": "2398",
    "Koopa Troopa": "2397",
    "Goomba": "2396",
    "Bowser": "2395",
    "Yoshi": "2394",
    "Toad": "2393",
    "Princess Peach": "2392",
    "Luigi": "2391",
    "Mario": "2390",
    "MuffledSilence's Headphones": "2388",
    "Interdimensional Portal": "2385",
    "Space Wormhole": "2384",
    "Covetor Mining Ship": "2383",
    "Chimera Schematic": "2382",
    "Nyx class Supercarrier": "2381",
    "Rick's Portal Gun": "2380",
    "Mr. Poopy Butthole": "2379",
    "Rick Sanchez": "2378",
    "A Scared Morty": "2377",
    "Portal Gun": "2376",
    "Companion Cube": "2375",
    "GLaDOS": "2374",
    "Cake": "2373",
    "The Realm of Staff": "2372",
    "The Staff Beauty Parlor": "2371",
    "The Biggest Banhammer": "2370",
    "The Golden Throne": "2369",
    "lepik le prick": "2368",
    "Niko's Transformation": "2367",
    "Neo's Ratio Cheats": "2366",
    "Stump's Banhammer": "2365",
    "thewhale's Kiss": "2364",
    "Alpaca Out of Nowhere!": "2361",
    "A Red Hot Flamed": "2359",
    "A Wild Artifaxx": "2358",
    "The Golden Daedy": "2357",
    "Random Staff Card": "2424", 
    "Three Random Staff Cards": "2427", 
    "Random Mario Card": "2426", 
    "Random Lvl2 Staff Card": "2438", 
    "Random Christmas Card": "2707", 
    "Random Birthday Card": "2838", 
    "3 Random Birthday Cards": "2870",
    "Pumpkin Patch": "2596",
};

var idToNameMap = {}
Object.keys(cards).forEach( function(cardName){
    idToNameMap[cards[cardName]] = cardName;
});

    var cardCategories = {
    "Original" : {
        "Mario": {
            "L1" : [
                "Mario", "Luigi", "Princess Peach", "Toad", "Yoshi", "Bowser", "Goomba", "Koopa Troopa", "Wario",
            ],
            "L2" : [
                "Super Mushroom", "Fire Flower", "Penguin Suit",
            ],
            "L3": [
                "Goal Pole",
            ],
            "Other": [],
            "Random" : [
                "Random Mario Card",
            ]
        },
        "Portal": {
            "L1" : [
                "Cake", "GLaDOS", "Companion Cube", "Portal Gun", "A Scared Morty", "Rick Sanchez",
                "Mr. Poopy Butthole", "Nyx class Supercarrier", "Chimera Schematic", "Covetor Mining Ship",
            ],
            "L2" : [
                "Rick's Portal Gun", "Space Wormhole", "Portal Gun",
            ],
            "L3": [
                "Interdimensional Portal",
            ],
            "Other": [],
            "Random" : [
                "Random Portal Card",
            ]
        },
        "Staff": {
            "L1" : [
                "The Golden Daedy", "A Wild Artifaxx", "A Red Hot Flamed", "Alpaca Out of Nowhere!",
                "thewhale's Kiss", "Stump's Banhammer", "Neo's Ratio Cheats", "Niko's Transformation", "lepik le prick"
            ],
            "L2" : [
                "The Golden Throne", "The Biggest Banhammer", "The Staff Beauty Parlor",
            ],
            "L3": [
                "The Realm of Staff",
            ],
            "Other": [
                "Zé do Caixão Coffin Joe Card", "LinkinsRepeater Bone Hard Card", "MuffledSilence's Headphones",
            ],
            "Random" : [
                "Random Staff Card", "Random Lvl2 Staff Card", "Three Random Staff Cards",
            ]
        },
    },
    "Christmas": {
        "Classic Cheer" : {
            "L1" : [
                "Perfect Snowball", "Mistletoe", "Santa Suit",
            ],
            "L2" : [
                 "Abominable Santa", "Icy Kisses", "Sexy Santa",
            ],
            "L3": [
               "Christmas Cheer",
            ],
            "Other": [ ],
            "Random" : [
                "Random Christmas Card",
            ]
        },
        "Green Movie": {
            "L1" : [
                 "Santa Claus Is Out There", "Back to the Future", "Big Lebowski",
                 "Picard", "Braveheart", "Indy", "Gremlins", "Die Hard", "Jurassic Park",
            ],
            "L2" : [
                "Mando", "Doomguy", "Grievous",
            ],
            "L3": [
                "Have a Breathtaking Christmas",
            ],
            "Other": [ ],
            "Random" : [ ]
        },
        "Pink Gingerbread": {
            "L1" : [
                "Gingerbread Kitana", "Gingerbread Marston", "Millenium Falcon Gingerbread", "Gingerbread AT Walker",
            ],
            "L2" : [
                "Gingerbread Doomslayer", "Mario Christmas",
            ],
            "L3": [
                "Baby Yoda with Gingerbread",
            ],
            "Other": [ ],
            "Random" : [ ]
        },
        "Red Mafia": {
            "L1" : [
                "Cyberpunk 2077", "Watch Dogs Legion", "Genshin Impact", "Animal Crossing",
            ],
            "L2" : [
               "Dirt 5", "Gazelle",
            ],
            "L3": [
                "Mafia",
            ],
            "Other": [ ],
            "Random" : [ ]
        },
    },
    "Valentines": {
        "Brown Vday": {
            "L1" : [
                "Chainsaw Chess", "Chainsaw Wizard", "Ivy Valentine", "Jill Valentine",
            ],
            "L2" : [
                "Angelise Reiter", "Sophitia",
            ],
            "L3": [
                "Yennefer",
            ],
            "Other": [ ],
            "Random" : [ ]
        },
        "Pink Vday": {
            "L1" : [
                "Sonic and Amy", "Yoshi and Birdo", "Aerith and Cloud", "Master Chief and Cortana",
            ],
            "L2" : [
                 "Kirlia and Meloetta", "Dom and Maria",
            ],
            "L3": [
                "Mr. and Mrs. Pac Man",
            ],
            "Other": [ ],
            "Random" : [ ]
        },
    },
    "Birthday": {
        "Blue After Party": {
            "L1" : [
                "Exodus Truce", "Gazelle Breaking Bad", "Home Sweet Home", "Birthday Battle Kart",
            ],
            "L2" : [
                "A Fair Fight", "What an Adventure",
            ],
            "L3": [
                "After Party",
            ],
            "Other": [ ],
            "Random" : [ ]
        },
        "NES Retro": {
            "L1" : [
                 "Bill Rizer", "Donkey Kong", "Duck Hunt Dog", "Pit", "Little Mac",
                 "Mega Man", "Pac-Man", "Samus Aran", "Simon Belmont",
            ],
            "L2" : [
                "Dr. Mario", "Link", "Kirby",
            ],
            "L3": [
                "Black Mage",
            ],
            "Other": [ ],
            "Random" : [ ]
        },
        "Tan Gazelles": {
            "L1" : [
                "Ripped Gazelle", "Gamer Gazelle", "Fancy Gazelle",
            ],
            "L2" : [
                "Future Gazelle", "Alien Gazelle", "Lucky Gazelle",
            ],
            "L3": [
               "Supreme Gazelle",
            ],
            "Other": [ ],
            "Random" : [
                "Random Birthday Card", "Three Random Birthday Cards",
             ]
        },
    },
    "Halloween": {
        "Cupcakes": {
            "L1" : [
                "Bloody Mario", "Mommy's Recipe", "Link was here!", "Gohma Sees You",
            ],
            "L2" : [
                "Memory Boost", "Skultilla the Cake Guard",
            ],
            "L3": [
                "Who eats whom?",
            ],
            "Other": [ ],
            "Random" : [ ]
        },
        "Ghosts": {
            "L1" : [
                "Blinky", "Clyde", "Pinky", "Inky",
            ],
            "L2" : [
                 "Ghostbusters", "Boo",
            ],
            "L3": [
                "King Boo",
            ],
            "Other": [ ],
            "Random" : [ ]
        },
        "Pumpkins": {
            "L1" : [
                 "Rotting Pumpkin", "Carved Pumpkin", "Ripe Pumpkin",
            ],
            "L2" : [
                "Stormrage Pumpkin", "Russian Pumpkin", "Green Mario Pumpkin",
            ],
            "L3": [
                 "Lame Pumpkin Trio",
            ],
            "Other": [ ],
            "Random" : [ "Pumpkin Patch", ]
        },
    }
};

var cardIdToParentMap = {}

Object.keys(cardCategories).forEach( function(categoryName) {
    Object.keys(cardCategories[categoryName]).forEach( function(subCat) {
        var x = 0;
        Object.keys(cardCategories[categoryName][subCat]).forEach( function(level) {
            cardCategories[categoryName][subCat][level].forEach( function(card) {
                var cardId = cards[card];
                var newObj = {
                    "Category": categoryName,
                    "SubCat": subCat,
                    "Level": level,
                    "Name": card
                };
                cardIdToParentMap[cardId] = newObj;
            });
        });
    });
});


var onHand = (function buildOnHand() {
    var onHand = {}
    // Cards
    function doProcessCard(cardName) {
        onHand[cardName] = $("#main-items-wrapper .item[data-item=" + cards[cardName] + "] .item_count").text();
        if (onHand[cardName] === "") { onHand[cardName] = $("#main-items-wrapper .item[data-item=" + cards[cardName] + "]").length}
    }
    Object.keys(cards).forEach( cardName => doProcessCard(cardName) );
    return onHand
}());

// TODO: refactor this mess!
 var categoriesOnHand = (function buildCatOnHand() {
     var catsOnHand = {};
     Object.keys(onHand).forEach( function(cardName) {
        if (onHand[cardName] == 0) {
             return;
         }
         Object.keys(cardCategories).forEach( function(categoryName) {
             Object.keys(cardCategories[categoryName]).forEach( function(subCat) {
                 Object.keys(cardCategories[categoryName][subCat]).forEach( function(level) {
                     if (cardCategories[categoryName][subCat][level].includes(cardName)) {
                         if(!(categoryName in catsOnHand)) {
                             catsOnHand[categoryName] = {};
                         }
                         if (!(subCat in catsOnHand[categoryName])) {
                              catsOnHand[categoryName][subCat] = {};

                         }
                         if (!(level in catsOnHand[categoryName][subCat])) {
                             catsOnHand[categoryName][subCat][level] = {};
                         }
                     }

                 });

             });

         });
     });
     return catsOnHand;
 }());

// sort all items
var itemsList = $('#main-items-wrapper').children("li").detach();
var nonCards = [];
var tradingCards = [];
itemsList.each( function(i, li) {
    var itemId = $(li).attr('data-item');
    var isCard = (typeof idToNameMap[itemId] == "string");
    if (isCard) {
        tradingCards.push( li );
    } else {
        nonCards.push(li)
    }
});
tradingCards.sort(function(a,b) {
    var aId = $(a).attr("data-item");
    var bId = $(b).attr("data-item");
    var aCardInfo = cardIdToParentMap[aId];
    var bCardInfo = cardIdToParentMap[bId];
    return ( aCardInfo['Category'].localeCompare(bCardInfo['Category']) ||
             aCardInfo['SubCat'].localeCompare(bCardInfo['SubCat']) ||
             aCardInfo['Level'].localeCompare(bCardInfo['Level']) ||
             aCardInfo['Name'].localeCompare(bCardInfo['Name'])
    );
});

var allItems = nonCards.concat(tradingCards);
$('#main-items-wrapper').append(allItems);

// MAIN BEGIN!!

$("#cancel_trade").remove();
$("#items").before( '<div id="trading-cards" "></div>');
$('#trading-cards').css({
    "width": "210px",
    "height": "130px",
    "border": "1px solid #fff",
    "margin-bottom": "20px",
    "margin-top": "5px",
    "display": "block",
    "clear": "both",
    "float": "left",
    "background-color": "rgba(0,0,0,.7)",
    "padding": "5px",
    "position": "relative",
});

$('#trading-cards').append('<div id="controls"></div>');
$('#controls').append('<div><input id="reset" class="ui-button ui-widget ui-corner-all" type="submit" value="reset"></div>');
$('#reset').on( "click", function() {
    $('#main-items-wrapper li').each( function(i, li) {
        $(li).show();
        $(".topCatTitle").parent(".expandableCollapsibleDiv").children("ul").each( function(i, ul) {
            $(ul).hide();
        })
    });
});

$('#trading-cards').append('<div id="card-list-wrapper" class="my-list ps-child ps-theme-default">' +
                           '<ul data-item="Original" id="main-card-list"></ul></div>');

function doAddListForCategory( category, onHand, catsOnHand ) {
    var onHandOnly = true;
    if (onHandOnly && (!(category in catsOnHand))){
        return;
    }
    $('#main-card-list').append('<li style="{margin: 0; padding: 0;}"' + ' class="topCat">' + //class="my-list-2 ps-child ps-theme-default ps-active expandableCollapsibleDiv">' +
        '<div class="expandableCollapsibleDiv"><a style="{color: black;margin: 0px;padding: 0px;font-size: 100px;}" class="topCatTitle">' + category + '</a>' + 
        '<ul style="{display: none;}" id="' + category + 'Ul"></ul></div></li>');// +
    var noCardsOnHandForCat = 0;
    Object.keys(cardCategories[ category ]).forEach( function(subCat) {
        if (onHandOnly && (!(subCat in catsOnHand[category]))){
            return;
        }
        var noCardsOnHandForSubCat = 0;
        $('#' + category + 'Ul').append('<li class="subCat" id="li' + subCat.split(" ")[0] + '"><a style="{font-size: smaller;}"class="subCatTitle">--   ' + subCat + '</a></li>');
  });
}

(function doRenderCardTable(onHand, catsOnHand) {
Object.keys(cardCategories).forEach( categoryName => doAddListForCategory( categoryName, onHand, catsOnHand ));
})(onHand, categoriesOnHand);

$(".my-list").css({
            "position": "absolute",
            "float":"left",
            "top": "0",
            "left": "60px",
            "width": "160px",
            "height": "100%",
            "overflow": "scroll",
            "background-color": "rgba(255,255,255,0.6)",
            //"left": "140px",
        });
$('.my-list-two').css({
    "overflow": "scroll",
    "height": "100%",
    "left": "140px",
});
$('.my-list-three').css({
    "width": "400px",
    "overflow": "scroll",
    "left": "280px",
});
$('.topCat').css({
    "background-color": "blue",
})
$('.subCat').css({
    "background-color": "red",
})
$("ul").css( {
    "margin": "0",
    "padding": "0",
});
$("li").css( {
    "box-sizing": "border-box",
    "padding": "5px 2px",
    "border-width": "0 0 1px 0",
    "list-style-type": "none",
    "margin": "0",
    "border-style": "solid",
    "border-color": "black",
});
$("textarea").css( {
    "font-size": "120%",
});

function toggleCollapse (category) {
    $(".topCatTitle").parent(".expandableCollapsibleDiv").children("ul").each( function(i, ul) {
        if ($(ul).attr("id") == (category + "Ul")) {
            if ($(ul).is(":visible")) {
            $(ul).hide("fast", "swing");
            } else {
            $(ul).show("fast", "swing");
            }
        } else {
            $(ul).hide();
        }
    });
}

$(".topCatTitle").click(function (e) {
    var category = $(this).html()
    toggleCollapse(category);
    var x = 0;
    $('#main-items-wrapper li').each( function(i, li) {
        var itemId = $(li).attr('data-item');
        var isCard = (typeof idToNameMap[itemId] == "string");
        if (!isCard) {
            $(li).hide();
            return;
        }
        var cardInfo = cardIdToParentMap[itemId];
        if (cardInfo["Category"] != category) {
            $(li).hide();
            return;
        }
        $(li).show();

    });
});

$(".subCatTitle").click(function (e) {
    var subCat = $(this).html()
    var x = 0;
    $('#main-items-wrapper li').each( function(i, li) {
        var itemId = $(li).attr('data-item');
        var isCard = (typeof idToNameMap[itemId] == "string");
        if (!isCard) {
            $(li).hide();
            return;
        }
        var cardInfo = cardIdToParentMap[itemId];
        if (cardInfo["SubCat"] != subCat.slice(5)) {
            $(li).hide();
            return;
        }
        $(li).show();
    });
});

Ps.initialize( document.getElementById("trading-cards"));
$('#trading-cards').perfectScrollbar({
    "useBothWheelAxes": false,
    "suppressScrollX": true,
});

$(".topCatTitle").parent(".expandableCollapsibleDiv").children("ul").each( function(i, ul) {
    $(ul).hide();
})
})();
