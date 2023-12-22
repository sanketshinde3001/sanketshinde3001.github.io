function updateSliderValue() {
    var slider = document.getElementById("qrsize");
  
    var passlength = slider.value;
  
    document.getElementById("sizeupdate").textContent =
    passlength + " px";
  }
function updatemarginValue() {
    var slider = document.getElementById("Margin");
  
    var passlength = slider.value;
  
    document.getElementById("marginupdate").textContent =
    passlength + " px";
}


    var data = document.getElementById("qrdata");
    var imgqr = document.getElementById("qroutput");
    var imgdw = document.getElementById("dwbut");
    var size = document.getElementById("qrsize");
    var margin1 = document.getElementById("Margin");



async function generateqr(){
    if(data.value.length > 0){
        var color = document.getElementById("qrcolor").value.slice(1);
        var bcolor = document.getElementById("bgcolor").value.slice(1);
        var ftype = document.getElementById("type").value;
        imgqr.src = "http://api.qrserver.com/v1/create-qr-code/?data="+data.value+"&size="+size.value+"x"+size.value+"&margin="+margin1.value+"&color="+color+"&bgcolor="+bcolor+"&format="+ftype;
        imgdw.hidden = false;
        qroutputbox.classList.add("show-img");    
        const image = await fetch(imgqr.src)
        const imageBlog = await image.blob()
        const imageURL = URL.createObjectURL(imageBlog)
        imgdw.href=imageURL;
    }
    else{
        qrdata.classList.add('error');
        setTimeout(()=>{
            qrdata.classList.remove('error'); 
        },500)
    }



}


