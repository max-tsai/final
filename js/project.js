$(() => {
    // 這裡就是程式的開始
    console.log('JS 正常執行')
})

//玩家一的結果
$('#P2start').on('click', () => {
    console.log('按到了喔');
    $('#winning2').empty();
    var x = [];
    for (i = 0; i < 4; i++) {
        x[i] = Math.floor(Math.random() * 6) + 1;
    }

    console.log(x);
    $('#dice2').val(x);
    x.sort();
    var b0 = x[0] == x[1];
    var b1 = x[1] == x[2];
    var b2 = x[2] == x[3];
    var bb = 0;
    var bb = b0 + 2 * b1 + 4 * b2;

    if (bb == 1) {
        score = x[2] + x[3];
        console.log(score);
        $('#output2').val(score)

    }
    if (bb == 2) {
        score = x[0] + x[3]
        console.log(score);
        $('#output2').val(score)
    }

    if (bb == 4) {
        score = x[0] + x[1]
        console.log(score);
        $('#output2').val(score)
    }
    if (bb == 5) {
        score = x[2] + x[3]
        console.log(score);
        $('#output2').val(score)
    }
    if (bb == 7) {
        var str = "一色" + " " + x[0];
        score = Number(x.join());
        console.log(score);
        $('#output2').val(str)
    }
    if (bb == 0) {
        var restart = "再試一次！";
        console.log(restart);
        $('#output2').val(restart)
    }

    if (bb == 3) {
        var restart = "再試一次！";
        console.log(restart);
        $('#output2').val(restart)
    }

    if (bb == 6) {
        var restart = "再試一次！";
        console.log(restart);
        $('#output2').val(restart)
    }
    var host = $('#output1').val();
    var guset1 = $('#output2').val();
    var diff = host - guset1
    if (guset1.startsWith('一色') == 1 & host.startsWith('一色') == 0) {
        var winning = "你贏了";
        $('#winning2').val(winning);
    }
    if (guset1.startsWith('一色') == 0 & host.startsWith('一色') == 1) {
        var losing = "你輸了";
        $('#winning2').val(losing);
    }
    if (guset1.startsWith('一色') == 1 & host.startsWith('一色') == 1) {
        var shost = parseInt(host.substr(3, 1))
        var sguest = parseInt(guset1.substr(3, 1))
        var sdiff = shost - sguest

        if (sdiff > 0) {
            var losing = "你輸了";
            $('#winning2').val(losing);
        }
        if (sdiff < 0) {
            var winning = "你贏了";
            $('#winning2').val(winning);
        }
        if (sdiff == 0) {
            var draw = "平手";
            $('#winning2').val(draw);
        }
    }
    if (diff > 0) {
        var losing = "你輸了";
        $('#winning2').val(losing);
    }
    if (diff < 0) {
        var winning = "你贏了";
        $('#winning2').val(winning);
    }
    if (diff == 0) {
        var draw = "平手";
        $('#winning2').val(draw);
    }

})



$('#P1start').on('click', () => {
    console.log('按到了喔');
    $('#winning2').empty();
    $('#output2').empty();
    $('#dice2').empty();
    
    var x = [];
    for (i = 0; i < 4; i++) {
        x[i] = Math.floor(Math.random() * 6) + 1;
    };

    console.log(x);
    $('#dice1').val(x);
    x.sort();
    var b0 = x[0] == x[1];
    var b1 = x[1] == x[2];
    var b2 = x[2] == x[3];
    var bb = 0;
    var bb = b0 + 2 * b1 + 4 * b2;

    if (bb == 1) {
        score = x[2] + x[3];
        console.log(score);
        $('#output1').val(score);
        $('#fixed').val(score);

    }
    if (bb == 2) {
        score = x[0] + x[3]
        console.log(score);
        $('#output1').val(score);
        $('#fixed').val(score);

    }

    if (bb == 4) {
        score = x[0] + x[1]
        console.log(score);
        $('#output1').val(score);
        $('#fixed').val(score);


    }
    if (bb == 5) {
        score = x[2] + x[3]
        console.log(score);
        $('#output1').val(score);
        $('#fixed').val(score);

    }
    if (bb == 7) {
        var str = "一色" + " " + x[0];
        score = x.join("");
        console.log(score);
        $('#output1').val(str)

    }
    if (bb == 0) {
        var restart = "再試一次！";
        console.log(restart);
        $('#output1').val(restart)

    }

    if (bb == 3) {
        var restart = "再試一次！";
        console.log(restart);
        $('#output1').val(restart)

    }
    if (bb == 6) {
        var restart = "再試一次！";
        console.log(restart);
        $('#output1').val(restart)
    }



})
