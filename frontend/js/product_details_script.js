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

    // like heart icon
    $(".productLikeHeart").on("click", function (event) {
        $(".productLikeHeart").css("display", "none");
        $(".productLikeHeartViolet").css("display", "block");
    });
    $(".productLikeHeartViolet").on("click", function (event) {
        $(".productLikeHeart").css("display", "block");
        $(".productLikeHeartViolet").css("display", "none");
    });

    // option select dropdown
    $(".dropdownSelect").on("click", function (event) {
        $(".dropdownBox").css("display", "flex");
    });
    $(".dropdownBox p").on("click", function (event) {
        $(".dropdownBox").css("display", "none");
    });

    // adding selected option box
    $(".dropdownOption").on("click", function (event) {
        // get selected option name
        var select_name = $(this).text();
        var name_exist = false;

        // check existing boxes
        $(".optionName").each(function () {
            if ($(this).text() == select_name) {
                name_exist = true;
            }
        });

        // HTML content
        if (name_exist == false) {
            var newOptionItem = $(
                "<li class='selectedOptionItem'>" +
                    "<div class='optionBoxTop'>" +
                    "<div class='optionName'>" +
                    select_name +
                    "</div>" +
                    "<img class='deleteOptionBtn' src='./product_details_images/delete_btn.png' alt='X icon' />" +
                    "</div>" +
                    "<div class='productOptionQuantity'>" +
                    "<div class='countWrap'>" +
                    "<img class='countDecrease' src='./product_details_images/product_quantity_minus_round_btn.png' alt='minus icon' />" +
                    "<div class='count'>1</div>" +
                    "<img class='countIncrease' src='./product_details_images/product_quantity_plus_round_btn.png' alt='plus icon' />" +
                    "</div>" +
                    "<span class='amountWrap'>" +
                    "<span class='amount'>49,640</span>" +
                    "<span class='unit'>원</span>" +
                    "</span></div></li>"
            );

            // append new option box
            $("ul.selectedProductOptionList").append(newOptionItem);
        }
    });

    // count btns
    var option_amount = 49640;
    // price formatter
    function addComma(num) {
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        return num.toString().replace(regexp, ",");
    }

    // - button
    $("ul.selectedProductOptionList").on(
        "click",
        ".countDecrease",
        function (event) {
            const $countClass = $(this).siblings(".count");
            let quantity = parseInt($countClass.text());

            $countClass.text(--quantity);
            $(this)
                .parents(".productOptionQuantity")
                .find(".amount")
                .text(addComma(quantity * option_amount));
        }
    );
    // + button
    $("ul.selectedProductOptionList").on(
        "click",
        ".countIncrease",
        function (event) {
            const $countClass = $(this).siblings(".count");
            let quantity = parseInt($countClass.text());

            $countClass.text(++quantity);
            $(this)
                .parents(".productOptionQuantity")
                .find(".amount")
                .text(addComma(quantity * option_amount));
        }
    );

    // option box delete btn
    $("ul.selectedProductOptionList").on(
        "click",
        ".deleteOptionBtn",
        function (event) {
            $(this).parents(".selectedOptionItem").remove();
        }
    );
});
