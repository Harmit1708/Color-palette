function generate(event){
    var y = document.getElementById('textbox_id').value; 
    if(y){
        for(let i=0;i<y;i++){
            var box = document.getElementById("box");
            document.body.appendChild(box);
            var div = document.createElement('div');
            div.setAttribute("class","square")
            div.style.backgroundColor = "rgb("+(255-i*15)+",0,0)"
            box.appendChild(div)  
        }
        var y = document.getElementById('textbox_id').value = "";        
    } 
    else
    {
        alert("Number Is Required")
    } 
}