$(document).ready(function () {
    // ---------------------------------------------------
    //                    thumbnail
    // ---------------------------------------------------
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

    // ---------------------------------------------------
    //                  Like heart
    // ---------------------------------------------------
    // like heart icon
    $(".productLikeHeart").on("click", function (event) {
        $(".productLikeHeart").css("display", "none");
        $(".productLikeHeartViolet").css("display", "block");
    });
    $(".productLikeHeartViolet").on("click", function (event) {
        $(".productLikeHeart").css("display", "block");
        $(".productLikeHeartViolet").css("display", "none");
    });

    // ---------------------------------------------------
    //                     option
    // ---------------------------------------------------
    // option select dropdown
    $(".dropdownSelect").on("click", function (event) {
        $(".dropdownBox").css("display", "flex");
    });
    $(".dropdownBox p").on("click", function (event) {
        $(".dropdownBox").css("display", "none");
    });

    // price formatter
    function addComma(num) {
        var regexp = /\B(?=(\d{3})+(?!\d))/g;
        return num.toString().replace(regexp, ",");
    }

    // add all option box HTML
    $(".dropdownBox p").each(function () {
        let original_amount = 100;

        let optionItem = $(
            "<li class='selectedOptionItem'>" +
                "<div class='optionBoxTop'>" +
                "<div class='optionName'>" +
                $(this).text() +
                "</div>" +
                "<img class='deleteOptionBtn' src='./product_details_images/delete_btn.png' alt='X icon' />" +
                "</div>" +
                "<div class='productOptionQuantity'>" +
                "<div class='countWrap'>" +
                "<img class='countDecrease' src='./product_details_images/product_quantity_minus_round_btn.png' alt='minus icon' />" +
                "<div class='count'>0</div>" +
                "<img class='countIncrease' src='./product_details_images/product_quantity_plus_round_btn.png' alt='plus icon' />" +
                "</div>" +
                "<span class='amountWrap'>" +
                "<span class='amount'>" +
                addComma(original_amount) +
                "</span>" +
                "<div class='originalAmount'> " +
                original_amount +
                "</div>" +
                "<span class='unit'>원</span>" +
                "</span></div></li>"
        );

        // append new option box
        $("ul.selectedProductOptionList").append(optionItem);
    });

    // total price calc function
    function totalUpdate() {
        let total_price = 0;

        $(".selectedOptionItem").each(function () {
            let current_amount = parseInt(
                $(this).find(".amount").text().replace(",", "")
            );

            total_price += current_amount;
        });
        $(".productTotalPrice .amount").text(addComma(total_price));
    }

    // display selected option box
    $(".dropdownOption").on("click", function (event) {
        // get selected option name
        var select_name = $(this).text();

        // check existing boxes
        $(".selectedOptionItem").each(function () {
            if ($(this).find(".optionName").text() == select_name) {
                $(this).find(".countIncrease").click();
                $(this).css("display", "block");
            }
        });
        totalUpdate();
    });

    // count btns
    // - button
    $("ul.selectedProductOptionList").on(
        "click",
        ".countDecrease",
        function (event) {
            const $count_class = $(this).siblings(".count");
            const $amount_class = $(this)
                .parents(".productOptionQuantity")
                .find(".amount");
            const $original_amount_class =
                $amount_class.siblings(".originalAmount");
            let option_count = parseInt($count_class.text());
            let original_amount = parseInt($original_amount_class.text());

            if (option_count > 0) {
                $count_class.text(--option_count);
                $amount_class.text(addComma(option_count * original_amount));
            }
            totalUpdate();
        }
    );
    // + button
    $("ul.selectedProductOptionList").on(
        "click",
        ".countIncrease",
        function (event) {
            const $count_class = $(this).siblings(".count");
            const $amount_class = $(this)
                .parents(".productOptionQuantity")
                .find(".amount");
            const $original_amount_class = $(this)
                .parents(".productOptionQuantity")
                .find(".originalAmount");
            let option_count = parseInt($count_class.text());
            let original_amount = parseInt($original_amount_class.text());

            $count_class.text(++option_count);
            $amount_class.text(addComma(option_count * original_amount));

            totalUpdate();
        }
    );

    // option box delete btn
    $("ul.selectedProductOptionList").on(
        "click",
        ".deleteOptionBtn",
        function (event) {
            const $parentLi = $(this).parents("li.selectedOptionItem");

            // count, amount 초기화
            $parentLi.find(".count").text("0");
            $parentLi.find(".amount").text("0");
            $parentLi.css("display", "none");
            totalUpdate();
        }
    );
});

// ---------------------------------------------------
//                   store notice
// ---------------------------------------------------
// 더보기
$(".storeNoticeOpenBtn").on("click", function (event) {
    $(".storeNoticeContents").css("max-height", "1000px");
    $(".storeNoticeOpenBtn").css("display", "none");
    $(".storeNoticeCloseBtn").css("display", "block");
});
// 접기
$(".storeNoticeCloseBtn").on("click", function (event) {
    $(".storeNoticeContents").css("max-height", "60px");
    $(".storeNoticeOpenBtn").css("display", "block");
    $(".storeNoticeCloseBtn").css("display", "none");
});
