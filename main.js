$(document).ready(function () {

    // menu-toggle-btn 클릭하면 #gnb-mo 모바일 메뉴 나오게 함
    $(function () {
        $('.menu-toggle-btn').on('click', function (event) {
            event.preventDefault();

            $(this).toggleClass('active'); //햄버거메뉴에 class .active가 붙으면서 모양이 바뀜
            $('.overlay').toggleClass('visible');
            //모바일 메뉴에 .visible class를 붙여줌으로써 visibility: hidden;에서 visible이 되어 등장하게 됨
        });
    });
    //li 클릭하면 #gnb-mo 모바일 메뉴 닫히게 함
    //mobile 메뉴의 ul li 클릭 시 해당 section으로 이동하며, 메뉴를 노출 시켰던 .overlay class가 remove되면서 숨겨지게 됨
    $('.hover-line').click(function () {
        $('.overlay').removeClass('visible');
    });

})