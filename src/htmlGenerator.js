
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


export {
    createNewDivWithClassName, createNewImgTagWithClassName,
    addSrcToImgNode, addAltToImgNode, useTextAsInnerHtmlOfNode,
    appendHtmlChildNodeToParentNode
}













