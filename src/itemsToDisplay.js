import * as Html from './htmlGenerator.js';
import Icons from './icons.js';

//   Shedules Dashboard Part  (left container shedules part )
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


// 

// Popup that collect project title

const NEW_PROJECT_POPUP_CLASSNAME = 'new-project-popup';
const NEW_PROJECT_POPUP_BUTTONS_CLASSNAME = 'new-project-popup-buttons';
const NEW_PROJECT_ADD_BUTTON_CLASSNAME = 'new-project add-button';
const NEW_PROJECT_CANCEL_BUTTON_CLASSNAME = 'new-project cancel-button';
const NEW_PROJECT_TITLE_COLLECTER_CLASSNAME = 'new-project-title-collecter';
const ADD_BUTTON_TEXT = 'ADD';
const CANCEL_BUTTON_TEXT = 'CANCEL';

const newProjectPopup = Html.createNewDivWithClassName(NEW_PROJECT_POPUP_CLASSNAME);
const projetTitleCollecter = Html.createNewTextInputWithClassName(NEW_PROJECT_TITLE_COLLECTER_CLASSNAME);
const newProjectPopupButtons = Html.createNewDivWithClassName(NEW_PROJECT_POPUP_BUTTONS_CLASSNAME);
const newProjectAddButton = Html.createNewDivWithClassName(NEW_PROJECT_ADD_BUTTON_CLASSNAME);
Html.useTextAsInnerHtmlOfNode(ADD_BUTTON_TEXT, newProjectAddButton);
const newProjectCancelButton = Html.createNewDivWithClassName(NEW_PROJECT_CANCEL_BUTTON_CLASSNAME);
Html.useTextAsInnerHtmlOfNode(CANCEL_BUTTON_TEXT, newProjectCancelButton);
const popupButtonsArray = [newProjectAddButton, newProjectCancelButton];
popupButtonsArray.forEach((button) => {
    Html.appendHtmlChildNodeToParentNode(button, newProjectPopupButtons);
})

const newProjectPopupItems = [projetTitleCollecter, newProjectPopupButtons];
newProjectPopupItems.forEach((item) => {
    Html.appendHtmlChildNodeToParentNode(item, newProjectPopup);
})



const NEW_PROJECT_LINE_CLASSNAME = 'new-project-line';
const NEW_PROJECT_LINE_LEFT_ICON_CLASSNAME = 'project-line-left-icon';
const NEW_PROJECT_LINE_RIGHT_ICON_CLASSNAME = 'project-line-right-icon';
const NEW_PROJECT_LEFT_ICON_ALT = 'add cercle icon';
const NEW_PROJECT_RIGHT_ICON_ALT = 'add folder icon';
const NEW_PROJECT_LINE_TITLE_CLASSNAME = 'new-project-line-title';


const newProjectLine = Html.createNewDivWithClassName(NEW_PROJECT_LINE_CLASSNAME);
const newProjectLineTitleContainer = Html.createNewDivWithClassName(NEW_PROJECT_LINE_TITLE_CLASSNAME);
const newProjectLeftIconContainer = Html.createNewImgTagWithClassName(NEW_PROJECT_LINE_LEFT_ICON_CLASSNAME);
Html.addSrcToImgNode(Icons.addCircleIcon, newProjectLeftIconContainer);
Html.addAltToImgNode(NEW_PROJECT_LEFT_ICON_ALT, newProjectLeftIconContainer);

const newProjectLineRightIconContainer = Html.createNewImgTagWithClassName(NEW_PROJECT_LINE_RIGHT_ICON_CLASSNAME);
Html.addSrcToImgNode(Icons.addFolderIcon, newProjectLineRightIconContainer);
Html.addAltToImgNode(NEW_PROJECT_RIGHT_ICON_ALT, newProjectLineRightIconContainer);


// what is going to be displayed as project

class Project {
    constructor(projectName, projectIconContainerClassName = 'new-project-icon',
        projectNameContainerClassName = 'new-project-name-container',
        projectReducedIconContainerClassName = 'new-project-reduced-icon',
        newProjectContainerClassName = 'new-project-container') {
        this.projectName = projectName;
        this.projectIconContainerClasseName = projectIconContainerClassName;
        this.projectNameContainerClassName = projectNameContainerClassName;
        this.projectReducedIconContainerClassName = projectReducedIconContainerClassName;
        this.newProjectContainerClassName = newProjectContainerClassName
    }
    createNewProjectHtml() {
        const projectContainer = Html.createNewDivWithClassName(this.newProjectContainerClassName);
        const projectIconContainer = Html.createNewImgTagWithClassName(this.projectIconContainerClasseName);
        const projectNameContainer = Html.createNewDivWithClassName(this.projectNameContainerClassName);

    }
    createProjectContainerWithClassName(classeName = 'new-project-Container') {
        const projectContainer = Html.createNewDivWithClassName(classeName);
        return projectContainer;
    }
    createIconContainerWithClassName(classeName = 'new-project-icon-container') {
        const iconContainer = Html.createNewImgTagWithClassName(classeName)
        return iconContainer;
    }



}

// right Container 

const NEW_TASK_LINE_CLASSNAME = 'new-task-line';
const NEW_TASK_LINE_ICON_CLASSNAME = 'new-task-line-icon';
const NEW_TASK_LINE_ICON_ALT = 'plus icon';
const NEW_TASK_LINE_TITLE_CLASSNAME = 'new-task-line-title';

const newTaskLine = Html.createNewDivWithClassName(NEW_TASK_LINE_CLASSNAME);
const newTaskLineTitleContainer = Html.createNewDivWithClassName(NEW_TASK_LINE_TITLE_CLASSNAME);
const newTaskLineIcon = Html.createNewImgTagWithClassName(NEW_TASK_LINE_ICON_CLASSNAME);
Html.addSrcToImgNode(Icons.addPlusIcon, newTaskLineIcon);
Html.addAltToImgNode(NEW_TASK_LINE_ICON_ALT, newTaskLine);




export {
    sheduleContainersNodes, sheduleHeaderTitlesNodes, sheduleLogosNodes,
    sheduleReducedIconNode, newProjectLine, newProjectLeftIconContainer,
    newProjectLineRightIconContainer, newProjectLineTitleContainer,
    newTaskLine, newTaskLineIcon, newTaskLineTitleContainer, newProjectPopup
};


