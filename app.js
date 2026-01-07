//  TRAVERSING ELEMENTS

    let textDiv = document.querySelector(".text");
    console.log(textDiv.lastElementChild);

    let paragraphTx = document.getElementById("tx");
    console.log(paragraphTx.parentNode);
    console.log(paragraphTx.previousElementSibling);
    console.log(paragraphTx.nextElementSibling);

    //  ACCESSING CONTENT

    let innerHTMLText = paragraphTx.innerHTML;
    console.log(innerHTMLText);

    console.log(paragraphTx.textContent);
    console.log(paragraphTx.innerText);

    console.log(textDiv.textContent);
    console.log(textDiv.innerText);


    //  CHANGING CONTENT

    let classDiv = document.getElementById("ca");
    classDiv.innerHTML = "<h1>Welcome to our class CA242</h1>";
    classDiv.textContent = "New text saved";

          //  ATTRIBUTES
         

    let inputBox = document.getElementById("input");

    console.log(inputBox.getAttribute("placeholder"));

    inputBox.setAttribute("class", "ca242");
    console.log(inputBox.hasAttribute("placeholder"));

    inputBox.removeAttribute("placeholder");

    //  CREATE NEW ELEMENT

    let newDiv = document.createElement("div");
    newDiv.innerHTML = "<p>This is the new element content</p>";
    document.body.appendChild(newDiv);
    newDiv.style.color = "green";

    console.log(newDiv);

    //  ADD LIST ITEM TO MENUE

    let menu = document.querySelector(".menue");

    let newListItem = document.createElement("li");
    newListItem.textContent = "Calculus";
    menu.appendChild(newListItem);

    menu.insertAdjacentElement("afterbegin", newListItem);

    //  REMOVE ELEMENT

    let removeElement = document.getElementById("txt");
    removeElement.remove();

    //  REPLACE ELEMENT

    let oldPara = document.getElementById("tx");
    let newPara = document.createElement("p");
    newPara.textContent = "This is the new replaced paragraph";

    oldPara.parentNode.replaceChild(newPara, oldPara);

