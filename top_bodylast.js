function draw(){
        var ctx=[] ; 

        for(var i=0;i<inko.length;i++){
            //alert(member[i].src);
            ctx[i] = document.getElementById("cv"+i).getContext("2d");         
            ctx[i].drawImage(img,0,0,220,316);

            ctx[i].drawImage(member[i],25,70,170,170);
            ctx[i].font =" 35px 'Mystery Quest'"; 
            ctx[i].fillText(inko[i], 40, 275);
        }
    }


    var rand=["Great Vibes","Ewert","Ribeye Marrow","Amatic SC","Faster One","Fredericka the Great","Stardos Stencil","Geo","UnifrakturMaguntia","Permanent Marker"];//フォントを配列に格納
    var e = document.getElementById("maintitle");//eがID名maintitleを挿すようにする
    e.textContent="2015 SO.Laboratory";//テキストの変更

    function aa(){//aaと言う関数を作る
        var rnd = Math.floor( Math.random() * 10 );//0-9の乱数の発生
        e.style.fontFamily=rand[rnd];
        /*---------------------------------------------------------
        //IDがmaintitleの物のfontofamilyを書き換える
        //発生させた乱数で配列の中からどのフォントを選ぶか決める
        ---------------------------------------------------------*/
    }

    draw();
    setInterval("aa()",1234);//1234ミリ秒に一回aaと言う関数を実行する