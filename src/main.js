let html = document.querySelector('#html');
let style = document.querySelector('#style');
let div1 = document.querySelector('#div1')
let div1Wrapper = document.querySelector('#div1wrapper')
let height = document.documentElement.clientHeight
let string = `/*你好，我叫赵钰蝶
*接下来我要演示我的前端功底
*首先我要准备一个 div
*/
#div1{
    border: 1px solid red;
    width:200px;
    height:200px;
}
/*接下来我把 div 变成一个八卦图
*注意看好了
*首先，把 div 变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*八卦是阴阳形成的
*一黑一白
*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*加两个神秘的小球*/
#div1::before{
    width:100px;
    height:100px;
   top:0;
   left:50%;
   transform:translateX(-50%);
   background:black;
   border-radius:50%;
   background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width:100px;
    height:100px;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:white;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let string2 = "";
let n = 0;
let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 += "</br>"
        } else if (string[n] === " ") {
            string2 += "&nbsp"
        } else {
            string2 += string[n]
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0, height);
        html.scrollTo(0, height);
        if (n < string.length - 1) {
            n = n + 1;
            step();
        }
    }, 10);
}
step();
if ("ontouchstart" in window) {
    html.style.height = "70vh"
    html.style.overflow = "auto"
    div1Wrapper.style.height = "30vh"
    div1.style.position = 'relative'
    div1.style.bottom = '100%'
    document.body.style.overflow = 'hidden'
}