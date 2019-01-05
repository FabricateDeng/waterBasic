$(document).ready(function(){
    $("#show").click(function(){
        $('#list').animate({
            top:'30%'
        });
    })
    $("#back").click(function(){
        $('#list').animate({
            top:'-100%'
        });
    })
    var waterBasic=(function(){
        function init(){
            var nodeWidth=$('.item').outerWidth(true);
            var colNum=parseInt($(window).width()/nodeWidth);
            var colNumHeight=[];
            
            $('.waterBasic').css('width',nodeWidth*colNum+'px');
            for(var i=0;i<colNum;i++){
                colNumHeight.push(0);
            }

            $('.item').each(function(){
                var cur=$(this);
                var idx=0;
                var mincolNumHeight=colNumHeight[0];
                for(var i=0;i<colNumHeight.length;i++){
                    if(mincolNumHeight>colNumHeight[i]){
                        mincolNumHeight=colNumHeight[i];
                        idx=i;
                    }
                }
                cur.css({
                    left:idx*nodeWidth+'px',
                    top:mincolNumHeight+'px'
                })
                colNumHeight[idx]+=cur.outerHeight(true);

            })
        }
        $(window).on('resize',function(){
            init();
        })
        return {
            init:init
        }
    })();
    waterBasic.init();
    $(window).scroll(function(){
        var scrollTop=$(this).scrollTop();
        var scrollHeight=$(document).height();
        var windowHeight=$(this).height();
        if(scrollTop+windowHeight==scrollHeight){
            //从后台获得数据并添加到底部
            waterBasic.init();
        }
    })
})

