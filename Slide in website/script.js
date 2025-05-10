var index =0;
function crousel(){
    var i;
    var x = document.getElementsByClassName("myslides");
    for i=0;i < x.length;i++{
        x[i].style.display = "none";
    }
    index++
    if(index > x.lenght){
        index=1;
    }

    x[index-1].style.display = "block";
    setTimeout(carousel,2000)
}
carousel(); //Start the carousel when the page loads