//your JS code here. If required.
function enterBtn() {
    // Get the paragraph element with the id "status"
    const para = document.getElementById("status");
    
    // Create a new <h1> element
    const head = document.createElement("h1");
    
    // Set the text content of the new <h1> element
    head.innerText = "Entered Metaverse";
    
    // Replace the <p> element with the new <h1> element
    para.parentNode.replaceChild(head, para);
}
