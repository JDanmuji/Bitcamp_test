// header search modal
$(function () {
    $(".search").on("click", function (event) {
        $(".searchModal").css("display", "block");
    });
    $(".closeBtn").on("click", function (event) {
        $(".searchModal").css("display", "none");
    });
});

// search modal close button
$(function () {
    $(".search").on("click", function (event) {
        $(".searchModal").css("display", "block");
    });
    $(".closeBtn").on("click", function (event) {
        $(".searchModal").css("display", "none");
    });
});

// search modal input
$("header .searchModal .searchForm input").on("focus", function (event) {
    $(this).attr("value", "");
});
$("header .searchModal .searchForm input").on("blur", function (event) {
    $(this).attr("value", "궁금한 주얼리를 검색해보세요!");
});
