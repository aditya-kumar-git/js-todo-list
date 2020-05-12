var items,newNumber,html,newHtml,itemInput,listOfTodos;
items=[0];
html='<div class="list" id="item-%id%"><div class="listText" id="text-%id%">%data%</div><button class="listBtn" id="btn-%id%">X</button></div>';


//Pressing Enter

function pressingEnter()
    {
        if(event.keyCode==13)
        {
            addItems();
        }
    }


//When Go is pressed

function addItems()
    {
        itemInput = document.querySelector("#inputFeild").value;

        if(itemInput == "")
            {
                console.log("Type something nigga");
                
            }
        else
            {
                newNumber=items[items.length-1]+1;
                items.push(newNumber);
                console.log(items);
                
                //Editing the html code

                newHtml=html.replace("%data%",itemInput);
                newHtml=newHtml.replace("%id%",items.length-1);
                newHtml=newHtml.replace("%id%",items.length-1);
                newHtml=newHtml.replace("%id%",items.length-1);
                
                document.querySelector("#listItems").insertAdjacentHTML("beforeend",newHtml);
                document.querySelector("#inputFeild").value="";
                

                
            }
    }
    
function removeItem(event)
    {
        var btnId,idArr;
        btnId = event.target.id;
        idArr = btnId.split("-");
        console.log(idArr); 
        if(idArr[0]=="btn")
            {
                document.querySelector("#listItems").removeChild(document.querySelector("#item-"+idArr[1]));
            }
    }

document.querySelector("#submit").addEventListener("click",addItems);
document.addEventListener("keyup",pressingEnter);
document.querySelector("#listItems").addEventListener("click",removeItem);