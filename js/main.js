"use strict";

window.addEventListener("load",function(){
    // console.log("OK");
    document.querySelector("#runbtn").addEventListener("click",function(){
        PG_Run();
    })
})

function PG_Run() {
    // console.log(document.querySelector("#js_edit").value);
    let script_ele=document.createElement("script");
    script_ele.innerHTML=document.querySelector("#js_edit").value;
    document.body.appendChild(script_ele);
}