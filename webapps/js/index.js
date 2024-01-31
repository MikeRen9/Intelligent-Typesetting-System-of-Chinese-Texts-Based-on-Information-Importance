// 根据值找键
function findKey(obj, value, compare = (a, b) => a === b) {
  return Object.keys(obj).find(k => compare(obj[k], value));
}

// 按照重要性值从大到小排序并返回
function sortKeyWords(jsonObj){
    for(var key in jsonObj){
        console.log(key + ":" + jsonObj[key])
	}
}

// 根据关键词重要性修改原来的文本字体大小，返回修改结果
function adjustText(originText, keywordsRank){
    if(keywordsRank.length == 0){
        return;
    }
    temp_text = originText;
    max = -99999999999999999;
    font_size = 24;
    var sourceStr;
    var targetStr;
    for(var keyword in keywordsRank){
        if(keywordsRank[keyword] != max){
            if(font_size > 14){
                font_size = font_size - 1;
            }
            max = keywordsRank[keyword]
        }
        if(!temp_text.includes(keyword)){
            continue;
        }

        //待替换的串
        sourceStr = keyword;
        //替换的串
        targetStr = "<span style='font-size:" + font_size + "px'>" + sourceStr + "</span>";

        //用代替换的串组成正则表达式
        var re = new RegExp(sourceStr, 'g');

        console.log(re);

        //关键词每全部替换
        var replaceCount = 0;
        temp_text = temp_text.replace(re, (match) => {
            return targetStr;
        });
	}

	return temp_text;
}

// 根据关键词重要性修改原来的文本的颜色，返回修改结果
function adjustTextColorFunOne(originText, keywordsRank){
    if(keywordsRank.length == 0){
        return;
    }
    temp_text = originText;
    max = -99999999999999999;
    R = -7;
    G = -7;
    B = -7;
    var sourceStr;
    var targetStr;
    for(var keyword in keywordsRank){
        if(keywordsRank[keyword] != max){
            if(R < 150 && G < 150 && B < 150){
                R = R + 7;
                G = G + 7;
                B = B + 7;
            }
            max = keywordsRank[keyword]
        }
        if(!temp_text.includes(keyword)){
            continue;
        }

        //待替换的串
        sourceStr = keyword;
        //替换的串
        targetStr = "<span style='color:rgb(" + R + ", " + G + ", " + B + ")'>" + sourceStr + "</span>";

        //用代替换的串组成正则表达式
        var re = new RegExp(sourceStr, 'g');

        console.log(re);

        //关键词每全部替换
        var replaceCount = 0;
        temp_text = temp_text.replace(re, (match) => {
            return targetStr;
        });
	}

	return temp_text;
}

// 根据关键词重要性修改原来的文本的颜色，返回修改结果
function adjustTextColorFunTwo(originText, keywordsRank){
    if(keywordsRank.length == 0){
        return;
    }
    temp_text = originText;
    max = -99999999999999999;
    R = 210;
    G = 0;
    B = 0;
    var sourceStr;
    var targetStr;
    for(var keyword in keywordsRank){
        if(keywordsRank[keyword] != max){
            if(R > 0){
                R = R - 10;
            }
            max = keywordsRank[keyword]
        }
        if(!temp_text.includes(keyword)){
            continue;
        }

        //待替换的串
        sourceStr = keyword;
        //替换的串
        targetStr = "<span style='color:rgb(" + R + ", " + G + ", " + B + ")'>" + sourceStr + "</span>";

        //用代替换的串组成正则表达式
        var re = new RegExp(sourceStr, 'g');

        console.log(re);

        //关键词每全部替换
        var replaceCount = 0;
        temp_text = temp_text.replace(re, (match) => {
            return targetStr;
        });
	}

	return temp_text;
}

// 根据关键词重要性修改原来的文本的颜色，返回修改结果
function adjustTextColorFunThree(originText, keywordsRank){
    if(keywordsRank.length == 0){
        return;
    }
    temp_text = originText;
    max = -99999999999999999;
    R = 210;
    G = -6;
    B = -9;
    var sourceStr;
    var targetStr;
    for(var keyword in keywordsRank){
        if(keywordsRank[keyword] != max){
            if(R > 0 && G < 120 && B < 180){
                R = R - 10;
                G = G + 6;
                B = B + 9;
            }
            max = keywordsRank[keyword]
        }
        if(!temp_text.includes(keyword)){
            continue;
        }

        //待替换的串
        sourceStr = keyword;
        //替换的串
        targetStr = "<span style='color:rgb(" + R + ", " + G + ", " + B + ")'>" + sourceStr + "</span>";

        //用代替换的串组成正则表达式
        var re = new RegExp(sourceStr, 'g');

        console.log(re);

        //关键词每全部替换
        var replaceCount = 0;
        temp_text = temp_text.replace(re, (match) => {
            return targetStr;
        });
	}

	return temp_text;
}

// 根据关键词重要性修改原来的文本的颜色以及字体大小，返回修改结果
function adjustTextColorAndFontSizeFun(originText, keywordsRank){
    if(keywordsRank.length == 0){
        return;
    }
    temp_text = originText;
    max = -99999999999999999;
    R = 210;
    G = -6;
    B = -9;
    font_size = 24;
    var sourceStr;
    var targetStr;
    for(var keyword in keywordsRank){
        if(keywordsRank[keyword] != max){
            if(R > 0 && G < 120 && B < 180){
                R = R - 10;
                G = G + 6;
                B = B + 9;
            }
            if(font_size > 14){
                font_size = font_size - 1;
            }
            max = keywordsRank[keyword]
        }
        if(!temp_text.includes(keyword)){
            continue;
        }

        //待替换的串
        sourceStr = keyword;
        //替换的串
        targetStr = "<span style='color:rgb(" + R + ", " + G + ", " + B + ");font-size:" + font_size +"px'>" + sourceStr + "</span>";

        //用代替换的串组成正则表达式
        var re = new RegExp(sourceStr, 'g');

        console.log(re);

        //关键词每全部替换
        var replaceCount = 0;
        temp_text = temp_text.replace(re, (match) => {
            return targetStr;
        });
	}

	return temp_text;
}

$("#startButtonId").click(function(){
    var text = $("#textareaId").val();
    if (text.length == 0){
        alert("请输入文本！");
        return;
    }

    /*
    调整文本大小
    */
    $.ajax({
        headers: {
            Accept: "application/json; charset=utf-8"
        },
        url: 'http://127.0.0.1:5000/extractor_v2_1',
        type: 'get',
        // 设置的是请求参数
        data: {
            text: text
        },
        dataType: 'json', // 用于设置响应体的类型 注意 跟 data 参数没关系！！！
        success: function (res) {
            // 一旦设置的 dataType 选项，就不再关心 服务端 响应的 Content-Type 了
            // 客户端会主观认为服务端返回的就是 JSON 格式的字符串
            console.log(res);

            var str = new String();
            var arr = new Array();
            str = text;
            //可以用字符或字符串分割
            arr = str.split('\n');
            var temp_new_text;
            var count = 1;
            var total_new_text = "";
            for(var j = 0; j < arr.length; j++){
                if(arr[j].length != 0){
                    temp_new_text = adjustText(arr[j], res["TextRankResult"]["text_" + (count++)]);
                    total_new_text = total_new_text + temp_new_text + "\n";
                }
            }
            //TextRankShowId
            $("#TextRankFontSize").html("<pre style='white-space: pre-wrap;' class=fontFamilyClass>" + total_new_text + "</pre>");
        }
    });

    /*
    每一段单独提取关键词，然后着色（黑色—灰色）
    */
    $.ajax({
        headers: {
            Accept: "application/json; charset=utf-8"
        },
        url: 'http://127.0.0.1:5000/extractor_v2_1',
        type: 'get',
        // 设置的是请求参数
        data: {
            text: text
        },
        dataType: 'json', // 用于设置响应体的类型 注意 跟 data 参数没关系！！！
        success: function (res) {
            // 一旦设置的 dataType 选项，就不再关心 服务端 响应的 Content-Type 了
            // 客户端会主观认为服务端返回的就是 JSON 格式的字符串
            console.log(res);

            var str = new String();
            var arr = new Array();
            str = text;
            //可以用字符或字符串分割
            arr = str.split('\n');
            var temp_new_text;
            var count = 1;
            var total_new_text = "";
            for(var j = 0; j < arr.length; j++){
                if(arr[j].length != 0){
                    temp_new_text = adjustTextColorFunOne(arr[j], res["TextRankResult"]["text_" + (count++)]);
                    total_new_text = total_new_text + temp_new_text + "\n";
                }
            }
            //TextRankShowId
            $("#TextRankFontLightness").html("<pre style='white-space: pre-wrap;color: rgb(150, 150, 150);font-size: 18px;' class=fontFamilyClass>" + total_new_text + "</pre>");
        }
    });


    /*
    每一段单独提取关键词，然后着色（红色—蓝色）
    */
    $.ajax({
        headers: {
            Accept: "application/json; charset=utf-8"
        },
        url: 'http://127.0.0.1:5000/extractor_v2_1',
        type: 'get',
        // 设置的是请求参数
        data: {
            text: text
        },
        dataType: 'json', // 用于设置响应体的类型 注意 跟 data 参数没关系！！！
        success: function (res) {
            // 一旦设置的 dataType 选项，就不再关心 服务端 响应的 Content-Type 了
            // 客户端会主观认为服务端返回的就是 JSON 格式的字符串
            console.log(res);

            var str = new String();
            var arr = new Array();
            str = text;
            //可以用字符或字符串分割
            arr = str.split('\n');
            var temp_new_text;
            var count = 1;
            var total_new_text = "";
            for(var j = 0; j < arr.length; j++){
                if(arr[j].length != 0){
                    temp_new_text = adjustTextColorFunThree(arr[j], res["TextRankResult"]["text_" + (count++)]);
                    total_new_text = total_new_text + temp_new_text + "\n";
                }
            }

            //TextRankShowId
            $("#TextRankFontColorWarmthColdness").html("<pre style='white-space: pre-wrap;color: rgb(0, 120, 180);font-size: 18px;' class=fontFamilyClass>" + total_new_text + "</pre>");
        }
    });

    /*
    每一段单独提取关键词，然后着色（高纯度红色—低纯度红色）
    */
    $.ajax({
        headers: {
            Accept: "application/json; charset=utf-8"
        },
        url: 'http://127.0.0.1:5000/extractor_v2_1',
        type: 'get',
        // 设置的是请求参数
        data: {
            text: text
        },
        dataType: 'json', // 用于设置响应体的类型 注意 跟 data 参数没关系！！！
        success: function (res) {
            // 一旦设置的 dataType 选项，就不再关心 服务端 响应的 Content-Type 了
            // 客户端会主观认为服务端返回的就是 JSON 格式的字符串
            console.log(res);

            var str = new String();
            var arr = new Array();
            str = text;
            //可以用字符或字符串分割
            arr = str.split('\n');
            var temp_new_text;
            var count = 1;
            var total_new_text = "";
            for(var j = 0; j < arr.length; j++){
                if(arr[j].length != 0){
                    temp_new_text = adjustTextColorFunTwo(arr[j], res["TextRankResult"]["text_" + (count++)]);
                    total_new_text = total_new_text + temp_new_text + "\n";
                }
            }

            //TextRankShowId
            $("#TextRankFontColorBrightness").html("<pre style='white-space: pre-wrap;color: rgb(0, 0, 0);font-size: 18px;' class=fontFamilyClass>" + total_new_text + "</pre>");
        }
    });
});