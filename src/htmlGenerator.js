

function createNewCheckboxInputWithid(checkboxId) {
    const newCheckboxInput = createNewCheckboxInput();
    newCheckboxInput.id = checkboxId;
    return newCheckboxInput;
}

function createNewCheckboxInput() {
    const newCheckboxInput = document.createElement('input');
    newCheckboxInput.type = 'checkbox';
    return newCheckboxInput;
}


function createDateInputWithId(inputId) {
    const newDateInput = createNewDateInput();
    newDateInput.id = inputId;
    return newDateInput;
}

function createNewDateInput() {
    const newDateInput = document.createElement('input');
    newDateInput.type = 'date';
    return newDateInput;
}


function createNewTextAreaWithId(textAreaId) {
    const newTextArea = createNewTextArea();
    newTextArea.id = textAreaId;
    return newTextArea;
}

function createNewTextArea() {
    const newTextArea = document.createElement('textarea');
    return newTextArea;
}


function createNewLabelFor(labelFor) {
    const label = createNewLabel();
    addlabelForToLabel(labelFor, label);
    return label
}

function createNewLabel() {
    const newLabel = document.createElement('label');
    return newLabel;
}

function addlabelForToLabel(labelFor, targetlabel) {
    targetlabel.htmlFor = `${labelFor}`;
}


function createNewTextInputWithId(inputId) {
    const newInput = createNewTextInput();
    addIdToNode(inputId, newInput);
    return newInput;

}
function addIdToNode(nodeId, targetNode) {
    targetNode.id = nodeId;
}

function createNewFormWithClassName(className) {
    const newForm = createNewForm();
    addClassNameToNode(className, newForm);
    return newForm;
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

function displayNodeAsBlock(blockNode) {
    blockNode.style.display = 'block';
}

function displayNodeAsGrid(node) {
    node.style.display = 'grid';
}

function removeNode(node) {
    node.style.display = 'none';
}


function cleanNodeInnerHtml(nodeToClean) {
    nodeToClean.innerHTML = '';
}

function cleanInputValueOfNode(inputNode) {
    inputNode.value = '';
}


export {
    createNewDivWithClassName, createNewImgTagWithClassName, createNewTextInputWithId,
    createNewTextInputWithClassName, createNewFormWithClassName, createNewLabelFor,
    addSrcToImgNode, addAltToImgNode, useTextAsInnerHtmlOfNode, createNewTextAreaWithId,
    appendHtmlChildNodeToParentNode, displayFlexNode, removeFlexNode, cleanNodeInnerHtml,
    cleanInputValueOfNode, createDateInputWithId, createNewCheckboxInputWithid, displayNodeAsBlock, removeNode,
    displayNodeAsGrid
}













