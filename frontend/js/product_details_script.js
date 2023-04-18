$(document).ready(function () {
    $(".storeNoticeOpenBtn").on("click", function (event) {
        $(".storeNoticeContents").css("max-height", "1000px");
        $(".storeNoticeOpenBtn").css("display", "none");
        $(".storeNoticeCloseBtn").css("display", "block");
    });
    $(".storeNoticeCloseBtn").on("click", function (event) {
        $(".storeNoticeContents").css("max-height", "60px");
        $(".storeNoticeOpenBtn").css("display", "block");
        $(".storeNoticeCloseBtn").css("display", "none");
    });

    // main thumbnail slide
    var imgs = $(".mainThumbnailList");
    var img_count = imgs.children().length;
    var img_position = 1; //default position

    // call the function by clicking btn
    $(".swiperButtonPrev").click(function () {
        --img_position;
        imgChange();
    });
    $(".swiperButtonNext").click(function () {
        ++img_position;
        imgChange();
    });
    // mini thumbnail click
    $(".productThumbnailImageList > img").click(function () {
        img_position = $(this).index() + 1;
        console.log(img_position);
        imgChange();
    });

    function imgChange() {
        var img_left = (1 - img_position) * 550 + "px";
        console.log(img_left);
        imgs.animate({
            left: img_left,
        });

        // btns remove & appear
        $(".swiperButtonNext, .swiperButtonPrev").css("display", "block");
        if (img_position == 1) {
            $(".swiperButtonPrev").css("display", "none");
        }
        if (img_position == img_count) {
            $(".swiperButtonNext").css("display", "none");
        }

        // mini thumbnails opacity
        $(".productThumbnailImageList > img").css("opacity", "1");
        $(".productThumbnailImageList > img")
            .eq(img_position - 1)
            .css("opacity", "0.6");
    }

    // option selectBox
    $(".dropdownSelect").on("click", function (event) {
        $(".dropdownBox").css("display", "flex");
    });
    $(".dropdownBox p").on("click", function (event) {
        $(".dropdownBox").css("display", "none");
    });

    // count btns
    var option_quantity = 1;
    var option_amount = 49640;
    // 가격 formatter
    function addComma(num) {
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        return num.toString().replace(regexp, ",");
    }

    $(".countDecrease").on("click", function (event) {
        if (option_quantity > 0) {
            option_quantity--;
            $(this)
                .parents(".productOptionQuantity")
                .find(".countWrap .count")
                .text(option_quantity);
            $(this)
                .parents(".productOptionQuantity")
                .find(".amount")
                .text(addComma(option_quantity * option_amount));
        }
    });
    $(".countIncrease").on("click", function (event) {
        $(".countWrap .count").text(++option_quantity);
        $(this)
            .parents(".productOptionQuantity")
            .find(".amount")
            .text(addComma(option_quantity * option_amount));
    });

    // option box delete btn
    $(".deleteProductOptionBtn").on("click", function (event) {
        $(this).parents(".selectedOptionItem").css("display", "none");
    });
});
