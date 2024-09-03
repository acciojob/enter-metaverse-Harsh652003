//your JS code here. If required.

function enterBtn() {
    
  const para=document.getElementById("status")

const head=document.createElement("h1")
 head.innerText="Entered Metaverse"
 para.parentNode.replaceChild(head, para);
}