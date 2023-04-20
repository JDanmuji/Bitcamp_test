// ---------------------------------------------------
//                category nav
// ---------------------------------------------------
// Show the first category when the page loads
$(".categoryWrap:not(:first)")
    .find(".categoryToggle")
    .slideToggle(".categoryToggle");

$(function () {
    $(".categoryTitle img").on("click", function (event) {
        $(this)
            .parents(".categoryWrap")
            .find(".categoryToggle")
            .slideToggle(".categoryToggle");
    });
});

// ---------------------------------------------------
//                sorting menu box
// ---------------------------------------------------
$(".sortToggle").toggle(0);
$(function () {
    $(".filterBox > span:first-child").on("click", function (event) {
        $(".sortToggle").toggle(0);
    });
});

// ---------------------------------------------------
//                filter menu box
// ---------------------------------------------------
$(".filterToggle").toggle(0);
$(function () {
    $(".filterBox > span:nth-child(3)").on("click", function (event) {
        $(".filterMenu > p:nth-child(1)").click();
        $(".filterToggle").toggle(0);

        // input value 초기화
        $(".brandFilter > div > input").val("브랜드명을 입력해 주세요");
        $(".priceFilterInput > input:first").val("2,000");
        $(".priceFilterInput > input:last").val("9,999,999");
    });
});

// filter menu buttons
$(".filterMenu > p").click(function (event) {
    $(".filterMenu > p").css("color", "#d9d9d9");
    $(this).css("color", "#000");
});
$(".filterMenu > p:nth-child(1)").click(function (event) {
    $(".filterPage").css("display", "none");
    $(".brandFilter").css("display", "block");
});
$(".filterMenu > p:nth-child(2)").click(function (event) {
    $(".filterPage").css("display", "none");
    $(".colorFilter").css("display", "grid");
});
$(".filterMenu > p:nth-child(3)").click(function (event) {
    $(".filterPage").css("display", "none");
    $(".priceFilter").css("display", "flex");
});

// 닫기
$(".filterMenu > p:nth-child(4)").click(function (event) {
    $(".filterToggle").toggle(0);
    $(this).css("color", "#d9d9d9");
    $(".filterMenu > p:nth-child(1)").click();
});

// brand filter search input
$(".brandFilter > div > input").on("focus", function (event) {
    if ($(this).val() == "브랜드명을 입력해 주세요") {
        $(this).val("");
    }
    $(".brandFilterSearchDiv").css("border-bottom", "1px solid #000");
});
$(".brandFilter > div > input").on("blur", function (event) {
    if ($(this).val() == "") {
        $(this).val("브랜드명을 입력해 주세요");
    }
    $(".brandFilterSearchDiv").css("border-bottom", "1px solid #ededed");
});

// ---------------------------------------------------
//                  Like heart
// ---------------------------------------------------
$(".heartIconWhite").on("click", function (event) {
    $(this).css("display", "none");
    $(this).parent().find(".heartIconViolet").css("display", "block");
});
$(".heartIconViolet").on("click", function (event) {
    $(this).css("display", "none");
    $(this).parent().find(".heartIconWhite").css("display", "block");
});
