
function addActiveToClassName(node) {
    node.className = `${node.className} active`;
}

function removeActiveFromeClassName(node, nodeClassName = 'leftContainer') {
    node.className = `${nodeClassName}`;
}

export { addActiveToClassName, removeActiveFromeClassName }