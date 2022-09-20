

function createNewFormWithClassName(className) {
    const newForm = createNewForm();
    addClassNameToNode(className, newForm);
}
function createNewForm() {
    const newForm = document.createElement('form');
    return newForm;
}

function createNewDivWithClassName(className) {
    const newDiv = createNewDiv();
    addClassNameToNode(className, newDiv);
    return newDiv;
}

function createNewDiv() {
    const newDiv = document.createElement('div');
    return newDiv;
}
function addClassNameToNode(className, targetNode) {
    targetNode.className = `${className}`;
}



function createNewImgTagWithClassName(className) {
    const newImgTag = new Image();
    addClassNameToNode(className, newImgTag);
    return newImgTag;
}


function addSrcToImgNode(imgSrc, imgNode) {
    imgNode.src = `${imgSrc}`;

}
function addAltToImgNode(imgAlt, imgNode) {
    imgNode.alt = `${imgAlt}`;
}

function useTextAsInnerHtmlOfNode(textToUse, targetNode) {
    targetNode.innerHTML = `${textToUse}`;
}



function appendHtmlChildNodeToParentNode(childNode, parentNode) {
    parentNode.appendChild(childNode);
}


function createNewTextInputWithClassName(className) {
    const newInput = createNewTextInput();
    addClassNameToNode(className, newInput);
    return newInput;
}

function createNewTextInput() {
    const newInput = document.createElement('input');
    return newInput;
}

function displayFlexNode(flexNode) {
    flexNode.style.display = 'flex';
}
function removeFlexNode(flexNode) {
    flexNode.style.display = 'none';
}


function cleanNodeInnerHtml(nodeToClean) {
    nodeToClean.innerHTML = '';
}

function cleanInputValueOfNode(inputNode) {
    inputNode.value = '';
}


export {
    createNewDivWithClassName, createNewImgTagWithClassName,
    createNewTextInputWithClassName, createNewFormWithClassName,
    addSrcToImgNode, addAltToImgNode, useTextAsInnerHtmlOfNode,
    appendHtmlChildNodeToParentNode, displayFlexNode, removeFlexNode, cleanNodeInnerHtml,
    cleanInputValueOfNode
}













