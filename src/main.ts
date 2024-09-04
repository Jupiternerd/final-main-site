// author = shokkunn

import $ from "jquery";
import randSong from "./components/randomSong";

let currentPage = 0;

function getPage(n: number = currentPage): string {
    switch(n) {
        case 0:
            return "pages/content-main.html";
        case 1:
            return "pages/content-homeworks.html";
        default:
            return "pages/content-main.html";
    }
}

function clickIcon() {
    $(document).on("click", ".icon", function() {
        const clickedElement = $(this);
        
        if (clickedElement.hasClass("loadInPage")) {
            console.log("loadInPage");
            $('#content').load("homeworks/" + clickedElement.attr("id") + ".html");
        }
    });
}

function navigator() {
    $(document).on("click", "#home-butt", function() {
        currentPage = 0;
        $('#content').load("pages/content-main.html")
        initPage();
    });
    $(document).on("click", "#folder-butt", function() {
        currentPage = 1;
        $('#content').load("pages/content-homeworks.html")
    });
}

function initPage() {
    $('#songFrame').replaceWith(randSong());
    $('#content').load(getPage());
}

$(window).on('load', function() {
    $('#header').load("pages/header.html")
    initPage();
    navigator();
    clickIcon();
});
