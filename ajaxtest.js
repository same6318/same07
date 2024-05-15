
let number = 0;
let data = [];
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");
const button = document.getElementById("btn");

/**
 * @function jsonデータにアクセスしてdata変数に格納
 */
function getData() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status === 200){
      data = request.response;  //JSONデータを直接data配列に代入
    }
  }


  request.open("GET", "/ajax/ajax.json");
  request.responseType = "json"; // 忘れずにresponseTypeをjsonに設定
  request.send(null);

};

//getData(); これでイベントリスナーをする前にファンクション起動できる。
console.log(window.location.origin);

button.addEventListener("click", event => {
  if (data.length > 0) {
    titleArea.innerHTML = data[number].title;
    contentArea.innerHTML = data[number].content;
    videoArea.setAttribute("src", data[number].url);

    number == 2 ? number = 0 : number++;
  } else {
    //console.error("データが読み込まれていません。");
    getData();
  }
});

// 初回にデータを取得
window.onload = getData;
