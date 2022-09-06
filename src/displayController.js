import * as Html from './htmlGenerator.js';
import Icons from './icons.js';

//   Shedules Dashboard Part 
const sheduleContainersNodes = [];
const sheduleLogosNodes = [];
const sheduleHeaderTitlesNodes = [];
const sheduleReducedIconNode = [];

const todayTasksIconSrc = Icons.todayTasksIcon;
const importantTasksIconSrc = Icons.alertCercle;
const nextWeekIconSrc = Icons.nextIcon;


const sheduleImgsClassNames = [
    'today-tasks header-logo', 'important-tasks header-logo',
    'next-week-tasks header-logo'
];
const sheduleImgAlts = [
    'sunset', 'red cercle', 'arrow right cercle'
];

const sheduleImgSrcs = [
    todayTasksIconSrc, importantTasksIconSrc, nextWeekIconSrc
];

for (let i = 0; i < sheduleImgsClassNames.length; i += 1) {
    const imgNode = Html.createNewImgTagWithClassName(sheduleImgsClassNames[i]);
    Html.addSrcToImgNode(sheduleImgSrcs[i], imgNode);
    Html.addAltToImgNode(sheduleImgAlts[i], imgNode);
    sheduleLogosNodes.push(imgNode);

}



const sheduleContainersClassNames = ['today tasks-header',
    'today tasks-container', 'important tasks-header',
    'important tasks-container', 'next-week tasks-header',
    'next-week tasks-container'
];

sheduleContainersClassNames.forEach((className) => {
    const sheduleNode = Html.createNewDivWithClassName(className);
    sheduleContainersNodes.push(sheduleNode);
})



const sheduleHeadersTitlesContainersClassNames = [
    'today-tasks header-title', 'important-tasks header-title',
    'next-week-tasks header-title'
];
sheduleHeadersTitlesContainersClassNames.forEach((titleClassName) => {
    const titleNode = Html.createNewDivWithClassName(titleClassName);
    sheduleHeaderTitlesNodes.push(titleNode);
})



const reducedIconSrc = Icons.chevronRightIcon;
const REDUCED_ICON_CLASSNAME = 'reduced icon';
const REDUCED_ICON_ALT = 'reduced';
const reduceIconContainer = Html.createNewImgTagWithClassName(REDUCED_ICON_CLASSNAME);
Html.addSrcToImgNode(reducedIconSrc, reduceIconContainer);
Html.addAltToImgNode(REDUCED_ICON_ALT, reduceIconContainer);
sheduleReducedIconNode.push(reduceIconContainer);


// Project Dashboard part 

const NEW_PROJECT_LINE_CLASSNAME = 'new-project-line';
const NEW_PROJECT_LINE_LEFT_ICON_CLASSNAME = 'project-line-left-icon';
const NEW_PROJECT_LINE_RIGHT_ICON_CLASSNAME = 'project-line-right-icon';
const NEW_PROJECT_LEFT_ICON_ALT = 'add cercle icon';
const NEW_PROJECT_RIGHT_ICON_ALT = 'add folder icon';
const NEW_PROJECT_LINE_TITLE_CLASSNAME = 'new-project-line-title';


const newProjectLine = Html.createNewDivWithClassName(NEW_PROJECT_LINE_CLASSNAME);
const newProjectLineTitleContainer = Html.createNewDivWithClassName()
const newProjectLeftIconContainer = Html.createNewImgTagWithClassName(NEW_PROJECT_LINE_LEFT_ICON_CLASSNAME);
Html.addSrcToImgNode(Icons.addCircleIcon, newProjectLeftIconContainer);
Html.addAltToImgNode(NEW_PROJECT_LEFT_ICON_ALT, newProjectLeftIconContainer);
NEW_PROJECT_LINE_TITLE_CLASSNAME
const newProjectLineRightIconContainer = Html.createNewImgTagWithClassName(NEW_PROJECT_LINE_RIGHT_ICON_CLASSNAME);
Html.addSrcToImgNode(Icons.addFolderIcon, newProjectLineRightIconContainer);
Html.addAltToImgNode(NEW_PROJECT_RIGHT_ICON_ALT, newProjectLineRightIconContainer);



export {
    sheduleContainersNodes, sheduleHeaderTitlesNodes, sheduleLogosNodes,
    sheduleReducedIconNode, newProjectLine, newProjectLeftIconContainer,
    newProjectLineRightIconContainer, newProjectLineTitleContainer
};


