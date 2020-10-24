function displayDate() {
    document.getElementById("demo2").innerHTML = Date();
}

function addPTag(){
    let pTag = document.createElement("P");   // Create a <p> element
    pTag.innerHTML = "Added paragraph";       // Insert text
    document.body.appendChild(pTag);          // Append <p> to <body>
}

function removeLastPElement(){
    let pTags = document.getElementsByTagName("P");   // Get all <p> elements
    let removePTag = pTags[pTags.length-1];         // Get last <p> element
    document.body.removeChild(removePTag);          // Append <p> to <body>
}

function randomColorChange() {
    let bgcolors = ['blue','red','green','yellow','lightblue','white','pink','maroon','black'];
    let bgColor = bgcolors[Math.floor(Math.random() * bgcolors.length)];
    let fontColor = bgcolors[Math.floor(Math.random() * bgcolors.length)];
    document.getElementById("demo2").style.backgroundColor = bgColor;
    document.getElementById("demo2").style.color = fontColor;
}

document.getElementById("myTestButton").addEventListener("click", function(){ alert("Hello World!"); });
