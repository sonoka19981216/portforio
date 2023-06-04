
//フォーカスが外れた時に（blur）にフォームの入力チェックをする
$('#name-textbox-js').blur(function () {
    inputCheck();
});
$('#mail-textbox-js').blur(function () {
    inputCheck();
});

$('#textarea').blur(function () {
    inputCheck();
});

//お問い合わせフォームの入力チェック
function inputCheck() {
//エラーチェック結果
let result;

//エラーメッセージのテキスト
let message= '';

//エラーがなければfalse、エラーがあればtrue
let error= false;

//名前のチェック
if($('#name-textbox-js').val() == '') {
    //エラーあり
    $('#name-textbox-js').css('background-color','#f79999');
    error = true;
    message +='お名前を入力してください。\n';
} else {
    //エラーなし
    $('#name-textbox-js').css('background-color', 'rgba(111, 218, 252, 0.55)');
}

//メールのチェック
if($('#mail-textbox-js').val() == '' || $('#mail-textbox-js').val().indexOf('@')== -1 || $('#mail-textbox-js').val().indexOf('.') == -1) {
    //エラーあり
    $('#mail-textbox-js').css('background-color','#f79999');
    error = true;
    message +='メールアドレスが未記入、または「@」「.」が含まれていません。\n';
} else {
    //エラーなし
    $('#mail-textbox-js').css('background-color', 'rgba(111, 218, 252, 0.55)');
}

//お問い合わせフォームの入力チェック
if($('#textarea').val() == '') {
    //エラーあり
    $('#textarea').css('background-color','#f79999');
    error = true;
    message +='内容を入力してください。\n';
} else {
    //エラーなし
    $('#textarea').css('background-color', 'rgba(111, 218, 252, 0.55)');
}

//エラーの有無で送信ボタンの色を切り替え
if (error == true) {
    $('#send-button').css('background-color','lightgray');
} else {
    $('#send-button').css('background-color','rgba(111, 218, 252, 0.55)');
    $('#send-button').css('color','black');
}
}