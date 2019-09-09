 

  let gitBtn=document.getElementsByClassName("git");
  let tcpipBtn=document.getElementsByClassName("tcpip");
  let socketBtn=document.getElementsByClassName("socket_programing");

  function homeClick()
  {
       let url = "home.html"

       let homeBtn=document.getElementsByClassName("home");
      ajax_request(url);
  }

  function webClick()
  {
    let url = "web.html"
   
    let webBtn=document.getElementsByClassName("article");
    ajax_request(url);
  }
  function gitClick()
  {
    let url = "git.html"
    ajax_request(url);
  }
  function tcpipClick()
  {
    let url = "tcpip.html"
    ajax_request(url);
  }
  function socketProgramingClick()
  {
    let url = "socket.html"
    ajax_request(url);
  }

  function success(text) {
  
    let w=document.getElementById("article");
    w.innerHTML=text;

  }

  function ajax_request(url)
{
    var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象

    request.onreadystatechange = function () { // 状态发生变化时，函数被回调
        if (request.readyState === 4) { // 成功完成
            // 判断响应结果:
            if (request.status === 200) {
                // 成功，通过responseText拿到响应的文本:
                return success(request.responseText);
            } else {
                // 失败，根据响应码判断失败原因:
                 alert("请求失败！错误码"+text);
            }
        } else {
            // HTTP请求还在继续...
        }
    }
    
    // 发送请求:
    request.open('GET', url);
    request.send();
}

