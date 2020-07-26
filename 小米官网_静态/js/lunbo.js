$(function(){
    //自动播放
    var f;
    var index = 0;
    dingshiqi();

    function dingshiqi(){
        f = setInterval(function(){
        if(index == $(".box-img").length-1){
            index = 0;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");
        }else{
            index++;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");
        } 
        }, 3000)
    }
    

    //点击左右切换
    $(".box-left").click(function(){
        clearInterval(f);
        if(index == 0){
            index = $(".box-img").length-1;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");
            dingshiqi();
        }else{
            index--;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");
            dingshiqi();
        }
    })
    $(".box-right").click(function(){
        clearInterval(f);
        if(index == $(".box-img").length-1){
            index = 0;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");
            dingshiqi();
        }else{
            index++;
            $(".box-img").css("opacity","0");
            $(".box-img").eq(index).css("opacity","1");
            dingshiqi();
        }
    })


    //按照图片切换
     $(".btn").click(function(){
        clearInterval(f);
        var count = $(this).index();
        index = count;
        $(".box-img").css("opacity","0");
        $(".box-img").eq(index).css("opacity","1");
        dingshiqi();
    })

})