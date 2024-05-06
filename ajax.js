
let number = 0;
let jsonData = [];

const titleArea = document.getElementById("title");
const button = document.getElementById("btn");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

window.onload = getData;

function getData() {
  fetchData();
  button.addEventListener("click", displayData);
  }

function fetchData(){
    // 1.XMLHttpRequestオブジェクトを生成する
  const request = new XMLHttpRequest(); //-- 1
    // 2. XMLHttpRequestオブジェクトにイベントハンドラを設定して、通信時の処理を設定する
  request.onreadystatechange = function() { //-- 2-1
    if (request.readyState == 4) 
      { //-- 2-2
        if(request.status == 200) 
        { //-- 2-3
        jsonData = JSON.parse(request.responseText);
        }
      }
    }
        // 3. リクエストを送信
        request.open("GET", "./ajax.json"); //-- 3-1
        request.responseType = "text"; //-- jsonファイルのレスポンスタイプを指定？
        request.send(null); //-- 3-3 //
    } 

function displayData(){
  titleArea.innerHTML = jsonData[number].title;
  contentArea.innerHTML = jsonData[number].content;
  videoArea.setAttribute("src", jsonData[number].url);
  number == 2 ? number = 0 : number++ ;
}
          
    



