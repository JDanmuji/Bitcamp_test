// header search modal
$(function () {
    $(".search").on("click", function (event) {
        $(".searchModal").css("display", "block");
    });
    $(".closeBtn").on("click", function (event) {
        $(".searchModal").css("display", "none");
    });
});

// search modal open & close
$(function () {
    $(".search").on("click", function (event) {
        $(".searchModal").css("display", "block");
        $(".searchForm input").focus();
    });
    $(".closeBtn").on("click", function (event) {
        $(".searchModal").css("display", "none");

        // input value 초기화
        $("header .searchModal .searchForm input").val(
            "궁금한 주얼리를 검색해보세요!"
        );
    });
});

// search modal input
$("header .searchModal .searchForm input").on("focus", function (event) {
    $(".searchForm form").css("border-bottom", "1px solid #000");
    if ($(this).val() == "궁금한 주얼리를 검색해보세요!") {
        $(this).val("");
    }
});
$("header .searchModal .searchForm input").on("blur", function (event) {
    $(".searchForm form").css("border-bottom", "1px solid rgb(237, 237, 237)");
    if ($(this).val() == "") {
        $(this).val("궁금한 주얼리를 검색해보세요!");
    }
});
