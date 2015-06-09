/*----------------------------------メンバー画像(wanted?)-----------------*/
var inko=["matsubara","misawa","nishi","nizato","okada","sone","toyota"];    
    var img = new Image();    //画像オブジェクト作成
    img.src = "images/skin/wanted.png";  //写真のパスを指定する

    member=[];
    for(var jb=0;jb<inko.length;jb++){
    member[jb]= new Image();  
    member[jb].src=("images/profile/"+inko[jb]+".jpg");
    }
 



/*----------------------------------ドア-----------------*/
    var m1=0;
    function test(m){
        //alert("01");
    var move = document.getElementById("move");    

    m1=m1+3;
    move.style.transform= "skewY("+m1+"deg)";
    move.style.left= m1*10+"px";
    move.style.top= m1*-10+"px";
    if(m1>80){
        move.style.display="none";
        clearInterval(g);

        }
    }
        
    function move(){
        var move = document.getElementById("move");
        //alert("1");
        var url = "images/door.mp3";	//urlにサウンドファイルの場所を入れる
        audioObj = new Audio(url);		//audioObjにaudio要素を入れる
        audioObj.play();			//音の再生
        g=setInterval("test(move)",100);//1234ミリ秒に一回aaと言う関数を実行する

    }



/*----------------------------------ページ間自動スクロール（jquery使用）-----------------*/
$(function(){
        $('a[href^=#]').click(function(){
            var speed = 800;
            var href= $(this).attr("href");
            var target = $(href == "#" || href == "" ? 'html' : href);
            var position = target.offset().top;
            $("html, body").animate({scrollTop:position}, speed, "swing");
            return false;
        });
    });















