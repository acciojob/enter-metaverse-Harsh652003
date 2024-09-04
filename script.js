function enterBtn() {
    // Get the paragraph element with the id "status"
    const para = document.getElementById("status");
    
    // Create a new <h1> element
    const head = document.createElement("h1");
    
    // Set the text content of the new <h1> element
    head.innerText = "Entered Metaverse";
    
    // Clear the content of the <p> element
    para.innerHTML = '';
    
    // Append the new <h1> element to the <p> element
    para.appendChild(head);
}