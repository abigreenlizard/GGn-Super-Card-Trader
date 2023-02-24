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
console.log("beginning script");

function editTradingTableCard(card, action) {
    var fromContainer;
    var toContainer;
    if (action == "add") {
        fromContainer = "#main-items-wrapper";
        toContainer = "#my-items-wrapper-table";
    } else {
        fromContainer = "#my-items-wrapper-table";
        toContainer = "#main-items-wrapper";
    }
   // var container = action == "add" ? "#main-items-wrapper" : "my-items-wrapper-table;
    var cardToMove = $(fromContainer + ' li[data-item="' + cards[card] + '"]').detach();
    $(toContainer).append(cardToMove);
    calcValue();
}

function addCardToTradingTable(card){
    editTradingTableCard(card, "add");
}
function removeCardFromTradingTable(card) {
    editTradingTableCard(card, "remove");
}

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
    },
    "Valentines": {
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
    },
    "Birthday": {
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
    },
    "Halloween": {
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
    }
};

var cardIdToParentMap = {}

Object.keys(cardCategories).forEach( function(categoryName) {
    Object.keys(cardCategories[categoryName]).forEach( function(subCat) {
        var x = 0;
        Object.keys(cardCategories[categoryName][subCat]).forEach( function(level) {
            cardCategories[categoryName][subCat][level].forEach( function(card) {
                console.log(card);
                var cardId = cards[card];
                var newObj = {
                    "Category": categoryName,
                    "SubCat": subCat,
                    "Level": level,
                    "Name": card
                };
                console.log(cardId);
                console.log(newObj);
                cardIdToParentMap[cardId] = newObj;
            });
        //  console.log(level);
        });
    });
});
console.log( cardCategories["Original"]["Mario"]["L1"][0]);

//var itemsList = $('#main-items-wrapper').children("li").detach();
//$('#main-items-wrapper').append(itemsList);
var nonCards = [];
var vCards = [];
$('#main-items-wrapper').children("li").each( function(i, li) {
    var itemId = $(li).attr('data-item');
    console.log(itemId);
    var isCard = (typeof idToNameMap[itemId] == "string");
    if (isCard) {
        vCards.push( li );
    } else {
        nonCards.push(li)
    }
});
console.log("NON CARDS!!!");
console.log(nonCards);
console.log(vCards);
vCards.sort(function(a,b) {
    console.log(a + '   ' + b );
    var aId = $(a).attr("data-item");
    var bId = $(a).attr("data-item");
    var aCardInfo = cardIdToParentMap[aId];
    var bCardInfo = cardIdToParentMap[bId];
    if (aCardInfo['Category'] == bCardInfo['Category']) {
        if (aCardInfo['SubCat'] == bCardInfo['SubCat']) {
            if (aCardInfo['Level'] == bCardInfo['Level']) {
                return aCardInfo['Name'] > bCardInfo['Name'] ? 1 : -1;
            } else {
                return aCardInfo['Level'] > bCardInfo['Level'] ? 1 : -1;
            }
        } else {
            return aCardInfo['SubCat'] > bCardInfo['SubCat'] ? 1 : -1;
        }
    } else {
        return aCardInfo['Category'] > bCardInfo['Category'] ? 1 : -1;
    }
});

//console.log(vCards);
nonCards = nonCards.concat(vCards.reverse());
$('#main-items-wrapper').append(nonCards);


//itemsList.find("li").forEach( function(i, li) {
//    var isCard = (typeof idToNameMap[itemId] == "string");
//
//});

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
console.log("On HAND");
console.log(onHand);
 var categoriesOnHand = (function buildCatOnHand() {
     var catsOnHand = {};
     Object.keys(onHand).forEach( function(cardName) {
        if (onHand[cardName] == 0) {
             return;
         }
         //console.log(cardName);
         Object.keys(cardCategories).forEach( function(categoryName) {
             Object.keys(cardCategories[categoryName]).forEach( function(subCat) {
                 Object.keys(cardCategories[categoryName][subCat]).forEach( function(level) {
                   //  console.log(level);
                     if (cardCategories[categoryName][subCat][level].includes(cardName)) {
                         console.log("Found");
                         console.log(cardName);
                         console.log(categoryName);
                         if(!(categoryName in catsOnHand)) {
                             catsOnHand[categoryName] = {};
                          //   catsOnHand[categoryName][subCat] = {}
                          //   catsOnHand[categoryName][subCat][level] = {}
                             console.log(catsOnHand[categoryName]);
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
console.log("BUILT CATS ON HAND");
 console.log(categoriesOnHand);




 class Book_button {
        constructor(book_name, bgcolor, tcolor) {
            this.enabled = DEFAULT[book_name] ;
            $("#trading-cards").append('<button style="margin-top:3px;margin-right:5px;background-color: green;" id="' + book_name + '" class="quick_craft_button">'+ book_name.replace(/_/g," ") +'</button>');
            document.getElementById(book_name).style.backgroundColor=button_color[this.enabled];
            document.getElementById(book_name).bgcolor = bgcolor;
            document.getElementById(book_name).tcolor = tcolor;
            $("#"+ book_name).click(() => {
                this.enabled = 1 - this.enabled;
                console.log(document.getElementById(book_name));
                document.getElementById(book_name).style.backgroundColor=button_color[this.enabled];
                var buttons = document.getElementsByClassName("qcbutton_" + book_name);
                for (var i = 0; i < buttons.length; i++) {buttons[i].style.display = button_display[this.enabled]};
            });
        }
    }

// MAIN BEGIN!!

    //$("#propose_trade").before(
    $("#cancel_trade").remove();
    $("#items").before( '<div id="trading-cards" "></div>');
    //$("#accept_trade").after( '<div id="trading-cards" "></div>');
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
        //"overFlow": "hidden",
        //"overFlow": "scroll",
    });
//    $('#trading-cards').css({
//    "width": "100px",
//    "float": "left",
//    "clear": "both",
//    "position": "relative",
//    "padding": "3px 0px 3px 3px",
//    "height": "650px",
//    "margin-top": "25px",
//    "background-color": "rgba(0, 0, 0, .7)",
//    "text-align": "center",
//    "overflow": "hidden",
//});
    //('#trading-cards').addClass("scroll-text");
    //$("#trading-cards").append('<div id="current_craft_box"></div>');
//$('#trading-cards').append('<div><h3>Trading Cards</h3></div>');
//$("#trading-cards").addClass("my-list");
$('#trading-cards').append('<div id="controls"></div>');
//$('#controls').append('<div><button style="{width: 10px;height: 5px;}" id="expand-all">reset</button></div>');
$('#controls').append('<div><input id="reset" class="ui-button ui-widget ui-corner-all" type="submit" value="reset"></div>');
$('#reset').on( "click", function() {
    $('#main-items-wrapper li').each( function(i, li) {
        $(li).show();
        $(".topCatTitle").parent(".expandableCollapsibleDiv").children("ul").each( function(i, ul) {
            $(ul).hide();
        })
    });
});
////$('#trading-cards').append('<div><h3>Trading Cards</h3></div>');
//$('#controls').append('<div><p>hide cards from items window<input id="hide-cards" style="{display: block;}" type="checkbox"></p></div>');

function hideCardsFromMainWindow() {
        var checked = this.checked;
        Object.keys(cards).forEach( function(cardName) {
            if (onHand[cardName] > 0) {
                var cardId = cards[cardName];
                if (checked) {
                    $('#main-items-wrapper li[data-item=' + cardId + ']').hide();
                } else {
                    $('#main-items-wrapper li[data-item=' + cardId + ']').show();
                }
            }
        });
}

$('#hide-cards').on( "change", hideCardsFromMainWindow );
//$('#trading-cards').append('<div id="card-list-wrapper" class="my-list ps-child ps-theme-default">' +
//                           '<ul data-item="Original" id="main-card-list"></ul></div>');
$('#trading-cards').append('<div id="card-list-wrapper" class="my-list ps-child ps-theme-default">' +
                           '<ul data-item="Original" id="main-card-list"></ul></div>');
//Ps.initialize( document.getElementById('card-list-wrapper'));
//$('#card-list-wrapper').perfectScrollbar();
//$('#trading-cards').append('<div id="sub-cat-wrapper"></div>');
////$('#trading-cards').append('<div class="my-list my-list-three ps-child ps-theme-default" id="cards-wrapper"></div>');
//$('#trading-cards').append('<div  id="cards-wrapper"></div>');
//$("#main-card-list").parent().addClass("my-list ps-child ps-theme-default ps-active");
//$('#main-card-list').css({
//
//});
//$('#main-card-list').addClass("ps-container ps-theme-default ps-active-y ui-droppable");
  //$("#trading-cards").append('<p>Having trouble? Try refreshing if it seems stuck. Turn off this script before manual crafting for a better experience.');
   //  $("#trading-cards").append('<p>');
    //$("trading-cards").append('');
    //$("#trading-cards").append('<button style="margin-top:3px;margin-right:5px;background-color: red;" id="clear_button" class="quick_craft_button">Clear</button>');
    //$("#trading-cards").append('<br /> <br />');
//$('#trading-cards').append('<div id="content"></div>');
//$('#content').css({"height": "800px", });


function doAddListForCategory( category, onHand, catsOnHand ) {
    //var onHandOnly = true;
    var onHandOnly = true;
     console.log("CATS ON HAND");
    console.log(catsOnHand);
    if (onHandOnly && (!(category in catsOnHand))){
        return;
    }
    //$('#trading-cards').append( '<div style="display: none" class="my-list ps-child ps-theme-default"><ul id=' + category +
    //    ' class="cardCategory">' +  //ps-container ps-theme-default ps-active-y ui-droppable">' +
    //    '</ul></div>');
    $('#main-card-list').append('<li style="{margin: 0; padding: 0;}"' + ' class="topCat">' + //class="my-list-2 ps-child ps-theme-default ps-active expandableCollapsibleDiv">' +
        //'<img src="Image/up-arrow.jpg" />' +
        '<div class="expandableCollapsibleDiv"><a style="{color: black;margin: 0px;padding: 0px;font-size: 100px;}" class="topCatTitle">' + category + '</a>' + 
        '<ul style="{display: none;}" id="' + category + 'Ul"></ul></div></li>');// +
    //$('#sub-cat-wrapper').append( '<div style="display: none" class="ps-child my-list my-list-two ps-theme-default"><ul id=' + category +
    //    //' class="cardCategory">' +  //ps-container ps-theme-default ps-active-y ui-droppable">' +
    //    '></ul></div>');
    //Ps.initialize( document.getElementById(category));
    //$('#' + category).perfectScrollbar();
//$('.topCat').addClass("items-wrapper ps-container ps-theme-default ps-active-y ui-droppable");
//});
//var catSeen
    //$("#" + category ).addClass("my-list-2 ps-child ps-theme-default ps-active");
    var noCardsOnHandForCat = 0;
    //var first = false;
    Object.keys(cardCategories[ category ]).forEach( function(subCat) {
    console.log("NEW SUBCAT");
    console.log(subCat);
    if (onHandOnly && (!(subCat in catsOnHand[category]))){
        return;
    }
   //  var subCat = $(this).attr("class");
    var noCardsOnHandForSubCat = 0;
    //$('#' + category).append('<li id="li' + subCat.split(" ")[0] + '" class="' + subCat + '"></li>');
    //$('#' + category).append('<li id="li' + subCat.split(" ")[0] + '"><h3 class="subCatTitle">' + subCat + '</h3></li>');
    $('#' + category + 'Ul').append('<li class="subCat" id="li' + subCat.split(" ")[0] + '"><a style="{font-size: smaller;}"class="subCatTitle">--   ' + subCat + '</a></li>');
    var levels = cardCategories[category][subCat];
    console.log(onHand);
    console.log('#li' + subCat);
    //$('#li' + subCat.split(" ")[0]).append('<div class="expandableCollapsibleDiv"><h3><a>' + subCat + '</a></h3><ul class="subCat" id='+ subCat.split(" ")[0] +'></ul></div>');
    return;
    $('#cards-wrapper').append('<div style="display: none" class="ps-child my-list my-list-three ps-theme-default" id="' + category + subCat.split(" ")[0] + 'cards">' +
                               '<ul id="' + category + subCat.split(" ")[0] +  'cardsul"' +
                               '></ul>></div>');
    
    //Ps.initialize( document.getElementById(category + subCat.split(" ")[0] + 'cards'));
    //$('#' + category).perfectScrollbar('#' + category + subCat.split(" ")[0] + 'cards');

    Object.keys( levels ).forEach( function(l) {
      if (onHandOnly && (!(l in catsOnHand[category][subCat]))){
          return;
      }
      var noCardsOnHandForLevel = 0;
      console.log("IN SUBCAT");
      console.log(onHand);
      console.log(l)

    //  $("#" + subCat).append("<li><a>" + l + "</a></li>");
     // $("#" + subCat).append('<li style="{display: block;float: left; width: 50px;height: 50px;padding: 5px;}"><div><h3>' + l + '</h3><ul id=' + subCat + l + ' class="'+ l +'"></ul></div>');
      //$('#cards-wrapper').append('<div style="{display: inline-block;}">' +
      //                        '<label style="{display: inline;}" for="vehicle1"><p style="{display: inline;}">' + l + ' - add all cards' + //l +
      //                        '<input style="{display: block;}" type="checkbox" id="' + subCat.split(" ")[0] + '-' + l + 'Add" name="vehicle1"' +
      //                        'value="Bike"></p></label><ul id=' + subCat.split(" ")[0] + l + ' class="level"></div>');
      $('#' + category + subCat.split(" ")[0] + 'cards' + ' ul' ).append('<li style="{width: 10px;height: 50px;padding: 5px;}"><div style="{display: inline-block;}">' +
                              '<label style="{display: inline;}" for="vehicle1"><p style="{display: inline;}">' + l + ' - add all cards' + //l +
                              '<input style="{display: block;}" type="checkbox" id="' + subCat.split(" ")[0] + '-' + l + 'Add" name="vehicle1"' +
                              'value="Bike"></p></label><ul id=' + subCat.split(" ")[0] + l + ' class="level"></ul></div>');
     $("#" + subCat.split(" ")[0] + "-" + l + "Add").on( "change", function() {
         console.log("CHECK CHANGE!");
         var isChecked = this.checked;
         $('#' + subCat.split(" ")[0] + l + ' li').each(function(i, li) {
         var card = $(li).find("input").attr("value");
        // var isChecked = $(li).find("input").attr("checked");
         console.log(card);
         console.log(isChecked);
         if (isChecked) {
             $('#' + cards[card] + 'Add' ).prop("checked", true);
             addCardToTradingTable(card);
         } else {
             removeCardFromTradingTable(card);
             $('#' + cards[card] + 'Add' ).prop("checked", false);
         }
         });
     });
        // <li>
     //<label for="checkid"  style="word-wrap:break-word">
      //  <input id="checkid"  type="checkbox" value="test" />testdta
    // </label>
//</li>
      var noOnHand = 0
      //console.log(cardCategories[category][subCat]);
    //  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
 // <label for="vehicle1"> I have a bike</label>
      console.log(l);
      cardCategories[category][subCat][l].forEach( function(card) {
          console.log( card + ' ' + onHand[card] );
          if (onHandOnly && (onHand[card] == 0)) {
            return;
          }
            console.log("ON HAND " + card);
            noCardsOnHandForLevel += 1;
            noCardsOnHandForSubCat += 1;
            noCardsOnHandForCat += 1;
        //$("#" + subCat + l ).append('<li><div><a>' + card + '</a></div></li>');
            $('#' + subCat.split(" ")[0] + l).append('<li class="card"><div><a>' + card + ' x' + onHand[card] +
                                    ' - add card<input style="{display: block;}" type="checkbox" id="' + cards[card] + 'Add"' +
                                    'name="' + card + '" value="' + card + '"></a></div></li>');
            console.log("#" + card + "Add");
            $("#" + cards[card] + "Add").on( "change", function() {
                console.log("ON CHANGE");
                if (this.checked) {
                    addCardToTradingTable(card);
                } else {
                    removeCardFromTradingTable(card);
                }
            });
        // '<input style="{display: block;}" type="checkbox" id="vehicle1" name="vehicle1"' +
                        //    'value="Bike"></p></label>
        noOnHand += 1;
    });
    //if (noOnHand > 0) $("#" + subCat).append(newSubCat);
    //  if (noCardsOnHandForLevel == 0) {
      //    $('#' + subCat + l).parent().hide();
      //}
  });
    //if (noCardsOnHandForSubCat == 0) {
      //    $('#' + subCat).parent().hide();
      //}

  //
});
     //if (noCardsOnHandForSub == 0) {
       //   $('#' + category).parent().hide();
      //}


//newCategory.find("li").each( function() {
 
//});
}

(function doRenderCardTable(onHand, catsOnHand) {
    console.log("RENDER");
    console.log(onHand);
Object.keys(cardCategories).forEach( categoryName => doAddListForCategory( categoryName, onHand, catsOnHand ));
    console.log(onHand);

})(onHand, categoriesOnHand);

   // $(".expandableCollapsibleDiv ul").css(' border-bottom: 1px solid #000;clear: both; list-style: outside none none;margin: 0;padding-bottom: 10px;display: none;');

//container {
//    width: 400px;
//    height: 300px;
//    margin: 50px auto 0 auto;
//    position: relative;
//    overflow: auto;
//  }
//  
//  .content {
//    background: url('https://noraesae.github.io/perfect-scrollbar/azusa.jpg') top left no-repeat;
//    width: 1280px;
//    height: 720px;
//  }

 //$(".expandableCollapsibleDiv").css({"margin-right": "1px",
 //                                    "margin-top": "1px",
 //                                    "padding-left": "1px",
 //                                    "float": "left"});
 //$(".cardCategory").css({"border-bottom": "1px",
 //                                       "clear": "both",
 //                                       //"list-style": "outside none none",
 //                                       "list-style": "none",
 //                                       "margin": "0",
 //                                       "padding-bottom": "1px",
 //                                       "display": "none",
 //                                       "margin-left" : "-10px",
 //                                       "list-style": "none",
 //                                 //      "margin-bottom" : "-20px",
 //                                       "float": "left"});
//$('.topCat').css({
//    //"display" : "inline-block",
//    //"margin-right":"20px",
//   "display": "block",
//   "float":"left",
//   "width":"320", /* adjust */
//   "height":"150px", /* adjust */
//   "padding": "5px", /*adjust*/
//    //"left": "280px",
//    'border-style': 'solid',
//    'border-color': 'white',
//});
//$(".subCat").css({"border-bottom": "1px",
//                "clear": "both",
//                "list-style": "outside none none",
//                "margin": "0",
//                "padding-bottom": "1px",
//                "display": "none",
//                "margin-left" : "-20px",
//                "margin-top": "-20px",
//                "float": "left"});
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
//$(".level").css({"border-bottom": "1px",
//                "clear": "both",
//                "list-style": "outside none none",
//                "margin": "0",
//                "padding-bottom": "1px",
//                "border-style": "solid",
//                "border-color": "blue",
//                //"margin-left" : "-20px",
//                //"margin-top": "-10px",
//                // "display": "none",
//                 "display": "block",});
                //"float": "left"});
   // $(".card div").css("{margin-top: -10px;}");
     //$(".expandableCollapsibleDiv > h3").click(function (e) {
    function toggleCollapse (category) {
    //var showElementDescription =
    //  $(this).parent(".expandableCollapsibleDiv").children("ul");

        $(".topCatTitle").parent(".expandableCollapsibleDiv").children("ul").each( function(i, ul) {
            if ($(ul).attr("id") == (category + "Ul")) {
                if ($(ul).is(":visible")) {
                $(ul).hide("fast", "swing");
                // $(this).attr("src", "Image/up-arrow.jpg");
                } else {
                $(ul).show("fast", "swing");
                }
                //  $(this).attr("src", "Image/down-arrow.jpg");
            } else {
                $(ul).hide();
            }
        });
    //if ($(showElementDescription).is(":visible")) {
    //showElementDescription.hide("fast", "swing");
    //// $(this).attr("src", "Image/up-arrow.jpg");
    //} else {
    //showElementDescription.show("fast", "swing");
    ////  $(this).attr("src", "Image/down-arrow.jpg");
    //}
}
     //$(".topCat > div > h3").click(function (e) {
     $(".topCatTitle").click(function (e) {
        //toggleCollapse($(this).parent(".expandableCollapsibleDiv").children("ul"));
        var category = $(this).html()
        toggleCollapse(category);
        var x = 0;
        $('#main-items-wrapper li').each( function(i, li) {
            var itemId = $(li).attr('data-item');
            //console.log(itemId);
            var isCard = (typeof idToNameMap[itemId] == "string");
            if (!isCard) {
                $(li).hide();
                return;
            }
            console.log(itemId);
            var cardInfo = cardIdToParentMap[itemId];
            console.log(cardInfo);
            if (cardInfo["Category"] != category) {
                $(li).hide();
                return;
            }
            $(li).show();

        //var current = $('#main-card-list').attr('data-item');
        //var newSubCat = $(this).find('a').html();
        //$('#main-card-list').attr('data-item', newSubCat.split(" ")[0]);
        //$('#' + current ).parent().hide();
        //$('#' + newSubCat ).parent().show();
        //console.log("CLICK");
        });
    });

     $(".subCatTitle").click(function (e) {
        var subCat = $(this).html()
        var x = 0;
        $('#main-items-wrapper li').each( function(i, li) {
            var itemId = $(li).attr('data-item');
            //console.log(itemId);
            var isCard = (typeof idToNameMap[itemId] == "string");
            if (!isCard) {
                $(li).hide();
                return;
            }
            console.log(itemId);
            var cardInfo = cardIdToParentMap[itemId];
            console.log(cardInfo["SubCat"]);
            console.log(subCat);
            console.log("IN SUBCAT");
            if (cardInfo["SubCat"] != subCat.slice(5)) {
                $(li).hide();
                return;
            }
            $(li).show();
        //var topCat = $(this).parent().parent().attr("id");
        //var cardsId = topCat + $(this).html() + 'cards';
        //var cards = $('#' + cardsId );
        //if (cards.is(":visible")) {
        //    cards.hide();
        //} else {
        //    cards.show();
        //}
    });
});
    //$(".my-list").css( {
    //});
    //$(".my-list-2").css( {
    //});
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
    //$("li:nth-child(even)").css( {
    //    "background-color": "rgba(0,0,0,0.5)",
    //});
    $("textarea").css( {
        "font-size": "120%",
    });

//const checkbox = document.getElementById('myCheckbox')


   // $(".cardCategory > li").click( function() {
   //     alert($(this).text());
   // });
        //e => console.log($(this).text()));
 // });
    //$("trading-cards").append();
  //  new Book_button("Armor Crafting", red, black);
    // Your code here...
    console.log("From vs code!!");
    //$.getScript("https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/0.6.10/js/perfect-scrollbar.jquery.js");
    //$('#trading-cards').perfectScrollbar();
    //Ps.initialize( $('#trading-cards') );
    Ps.initialize( document.getElementById("trading-cards"));
    $('#trading-cards').perfectScrollbar({
        "useBothWheelAxes": false,
        "suppressScrollX": true,
    });
    //Ps.initialize( document.getElementById("card-list-wrapper"));
    //$('#card-list-wrapper').perfectScrollbar();
    $('#Original').parent().show()
    $('#OriginalStaffcards').show()
    //div {
    //-ms-overflow-style: none; /* for Internet Explorer, Edge */
    //scrollbar-width: none; /* for Firefox */
    //overflow-y: scroll; 
    //}

//div::-webkit-scrollbar {
//  display: none; /* for Chrome, Safari, and Opera */
//}
    //Object.keys(catsOnHand).forEach( function(category) {
    //    Ps.initialize( document.getElementById(category));
    //    $('#' + category).perfectScrollbar();
    //    Object.keys(cardCategories[category]).forEach( function(subCat) {
    //        Ps.initialize( document.getElementById(category + subCat.split(" ")[0] + 'cards'));
    //        $('#' + category + subCat.split(" ")[0] + 'cards').perfectScrollbar();
    //    });
    //});
    //new PerfectScrollbar('trading-cards');
    //const sb = document.querySelector("#trading-cards");
    //const ps = new PerfectScrollbar(sb);
    //items = document.getElementById('#main-card-list');
    ////console.log(items);
    //Array.prototype.forEach.call(items, function (elem) {
    //    console.log(elem);
    //    Ps.initialize(elem);
    //});
    //$.getScript("jquery.scrollbox.js");
    //$("#trading-cards").scrollbox();
    //$('#hide-cards').prop("checked", true);
    //hideCardsFromMainWindow();
    $(".topCatTitle").parent(".expandableCollapsibleDiv").children("ul").each( function(i, ul) {
        $(ul).hide();
    })
})();
