var hello = "Hello World!";
alert(hello);

var int1 = 1;
var int2 = -10
var float1 = 3.14
var str1 = "JavaScriptを覚えよう"

alert(int1);
alert(int2);
alert(float1);
alert(str1);

alert("四則演算");
alert(4 + 3);
alert(8 - 5);
alert(2 * 6);
alert(10 / 2)

alert("文字列の結合");
alert("Hello" + "Wolrd");

alert("変数を用いて文字列の結合");
var str2 = "Hello";
var str3 = "Wolrd";
var str4 = "!!";
alert(str2 + str3);
alert("!!を変数で追加");
alert(str2 + str3 + str4);

alert("条件分岐");
var orange = 100;
var apple = 120;

if(orange < apple){
	alert("みかんはリンゴより安い");
}
else if(orange = apple){
	alert("みかんとリンゴは同じ値段");
}
else{
	alert("みかんはリンゴより高い");
}

alert("繰り返し処理(while)");
alert("条件式の中の変数を処理に代入させることをしっかり意識！")
var max = 100;
var num = 1;
var count = 0;

while(num < max){
	num = num * 2;
	count = count + 1;
}

alert("2を掛け続けて" + max + "を超えるのに必要だった回数は" + count + "回です。" + "(" + num + ")");

alert("繰り返し処理(for)");
var i;
var num = 0;

for(i = 1; i < 11; i++){
	num = num + i;
}

alert("1から10まで足し算した結果は" + num + "です");