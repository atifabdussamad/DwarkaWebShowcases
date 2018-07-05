let ToDoList = [];
let ToDoValue=[];
let update_clik = 0;
window.onload = function () {

    let input = document.getElementById("inp");
    let button = document.getElementById("btn");
    let output = document.getElementById("result");
    let cls=document.getElementById("cls");
    let completed=document.getElementsByClassName("completed");

    cls.onclick=function () {
        ToDoList=[];
        display()
    }


    let value = "";
    let i=-1


    button.onclick = function () {

        ++i;
        // value= `<li>${input.value}</li>`
        value = '<tr><td><button class="completed" onclick="completed(this)"><i class="fas fa-check-circle"></i></button>' + input.value + '<input class="texttobeupdated" type="hidden"></td><td align="right"><button class="updateit"  onclick="update_ele(this,++update_clik)"><i class="fas fa-edit"></i>Update</button> <button class="closeit"  onclick="del(this)">Delete<i  class="fas fa-backspace"></button></td></tr>'
        ToDoList.push(value);
        ToDoValue.push(input.value)
        display()
        // console.log(ToDoList.length);
        // close = document.getElementsByClassName("cls");


    }


    function display() {

        let list = "";
        for (let i = 0; i < ToDoList.length; i++) {
            list += ToDoList[i];

        }

        output.innerHTML = list

    }

   function completed(ele) {

        document.getElementById()

   }
}

function del(id) {


    var del=document.getElementsByClassName("closeit")
    let k;
    for(k=0;k<del.length;k++) {

        if(id==del[k])
        {
            console.log("to be deleted "+k)
            id.parentNode.parentNode.remove();
            ToDoList.splice(k , 1)
        }

    }



    // for(k=0;k<ToDoValue.length;k++){
    //     console.log("todo val="+ToDoValue[k])
    //     console.log(id.parentNode.previousSibling.childNodes[1])
    //
    //     if(ToDoValue[k].toString()==(id.parentNode.previousSibling.childNodes[1])){
    //         console.log("k="+k)
    //
    //     }
    //
    // }


    //
    // var k
    // for (k=0;k<ToDoList.length;k++){
    //     console.log("todo value="+ToDoValue[k])
    //     console.log("k="+k)
    //     console.log(ToDoList[k].childNodes)
    //     ToDoList.indexOf(id)
    //     console.log(ToDoList[k])
    //     // console.log(id.parentNode.previousSibling.childNodes[1])
    //     if(ToDoValue[k]==id.parentNode.previousSibling.childNodes[1].value)
    //     {
    //         console.log("hello"+k)
    //     }
    // }
    //
    //
    // console.log(id.parentNode)
    // id.parentNode.parentNode.remove();
    // ToDoList.splice(pos - 2, 1)
    //



}

function update_ele(ele, update_click) {

    // console.log(ele.parentNode.previousSibling.lastChild.type = "text")
    if (update_click == 1) {
        ele.parentNode.previousSibling.lastChild.type = "text"
        // console.log(ele.parentNode.previousSibling.replaceChild(ele.parentNode.previousSibling.lastChild.value,ele.parentNode.previousSibling.childNodes[1]))
    }
    else if (update_click == 2) {
        update_clik = 0;
        var textnode = document.createTextNode(ele.parentNode.previousSibling.lastChild.value);
        console.log(textnode)
        console.log(ele.parentNode.parentNode.firstChild.childNodes[1])
        ele.parentNode.parentNode.firstChild.replaceChild(textnode, ele.parentNode.parentNode.firstChild.childNodes[1])
        ele.parentNode.previousSibling.lastChild.type = "hidden"

        var update_ele = document.getElementsByClassName("updateit")
        let k;
        for (k = 0; k < update_ele.length; k++) {
            if (ele == update_ele[k]) {
                console.log("to be updated " + k)
                var str='<tr><td><button class="completed"><i class="fas fa-check-circle"></i></button>' + ele.parentNode.previousSibling.lastChild.value + '<input class="texttobeupdated" type="hidden"></td><td align="right"><button class="updateit"  onclick="update_ele(this,++update_clik)"><i class="fas fa-edit"></i>Update</button> <button class="closeit"  onclick="del(this)">Delete<i  class="fas fa-backspace"></button></td></tr>'
                ToDoList.splice(k, 1,str)
                console.log(ToDoList)

            }
        }
    }


}