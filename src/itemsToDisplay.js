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


//   the line to click in order to load newProject popup
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
        newProjectContainerClassName = 'new-project-container',
        newProjectLogoSrc = Icons.projectIcon,
        projectReducedIconSrc = Icons.chevronRightIcon,
        newProjectLogoAlt = 'project icon',
        projectReducedIconAlt = 'chevron right'
    ) {
        this.projectName = projectName;
        this.projectIconContainerClasseName = projectIconContainerClassName;
        this.projectNameContainerClassName = projectNameContainerClassName;
        this.projectReducedIconContainerClassName = projectReducedIconContainerClassName;
        this.newProjectContainerClassName = newProjectContainerClassName
        this.newProjectLogoSrc = newProjectLogoSrc;
        this.projectReducedIconSrc = projectReducedIconSrc;
        this.newProjectLogoAlt = newProjectLogoAlt;
        this.projectReducedIconAlt = projectReducedIconAlt;
    }

    createProjectLogoHtml() {
        const projectLogo = Html.createNewImgTagWithClassName(this.projectIconContainerClasseName);
        Html.addSrcToImgNode(this.newProjectLogoSrc, projectLogo);
        Html.addAltToImgNode(this.newProjectLogoAlt, projectLogo);
        return projectLogo;
    }

    createProjectReducedIconHtml() {
        const projectReducedIcon = Html.createNewImgTagWithClassName(this.projectReducedIconContainerClassName);
        Html.addSrcToImgNode(this.projectReducedIconSrc, projectReducedIcon);
        Html.addAltToImgNode(this.projectReducedIconAlt, projectReducedIcon);

        return projectReducedIcon;
    }
    createNewProjectHtml() {
        const projectContainer = Html.createNewDivWithClassName(this.newProjectContainerClassName).cloneNode(true);
        const projectIcon = this.createProjectLogoHtml();
        const projectNameContainer = Html.createNewDivWithClassName(this.projectNameContainerClassName);
        Html.useTextAsInnerHtmlOfNode(this.projectName, projectNameContainer);
        const projectReducedIconContainer = this.createProjectReducedIconHtml().cloneNode(true);
        const projectContainerItems = [projectIcon, projectNameContainer, projectReducedIconContainer];

        projectContainerItems.forEach((item) => {
            Html.appendHtmlChildNodeToParentNode(item, projectContainer);
        })


        return projectContainer;
    }






}

// right Container 


// new Task popup

const TASK_POPUP_CONTAINER_CLASSNAME = 'task-popup-container';
const TASK_POPUP_HEADER_CLASSNAME = 'task-popup-header';
const TASK_POPUP_BODY_CLASSNAME = 'task-popup-body';
const TASK_POPUP_BODY_LEFT_CLASSNAME = 'task-popup-body-left';
const TASK_POPUP_BODY_RIGHT_CLASSNAME = 'task-popup-body-right';
const TASK_POPUP_BODY_RIGHT_UP_CLASSNAME = 'task-popup-body-right-up';
const TASK_POPUP_BODY_RIGHT_LOW_CLASSNAME = 'task-popup-body-right-low';
const ADD_TASK_BUTTON_CLASSNAME = 'add-task';
const TASK_TITLE_COLLECTER_ID = 'task-title-collecter';
const TEXT_AREA_ID = 'task-description-collecter';
const TASK_DESCRIPTION_VALUE_HOLDER = 'task-description';
const TEXT_AREA_NUMBER_OF_LINES = 4;
const TEXT_AREA_NUMBER_OF_WORDS_PER_LINE = 50;
const DUE_DATE_COLLECTER_ID = 'due-date';
const CHECKBOX_ID = 'importance-check';
const TASK_TITLE_COLLECTER_CONTAINER_CLASSNAME = 'task-title-collecter-container';
const DESCRIPTION_COLLECTER_CONTAINER_CLASSNAME = 'description-collecter-container';
const DUE_DATE_CONTAINER_CLASSNAME = 'due-date-container';
const IMPORTANCE_CHECKBOX_CONTAINER_CALSSNAME = 'importance-checkbox-container';
const DUE_DATE_LABEL_TEXT = 'Due Date';
const TASK_TITLE = 'Task Title';
const TASK_DESCRIPTION_LABEL_TEXT = 'Task Description';
const ADD_TASK_TEXT = 'ADD';
const CHEBOX_LABEL_TEXT = 'Is it important? Check.';
const CLOSE_ICON_CLASSNAME = 'close-icon';
const CLOSE_TASKPOPUP_ICON_ALT = 'close icon';
const CLOSE_TASKPOPUP_ICON_SRC = Icons.closeIcon;
const CLOSE_ICON_TITLE = 'Click to cancel';








const taskPopupContainer = Html.createNewDivWithClassName(TASK_POPUP_CONTAINER_CLASSNAME);

const taskPopupHeader = Html.createNewDivWithClassName(TASK_POPUP_HEADER_CLASSNAME);
const closeTaskPopupIcon = Html.createNewImgTagWithClassName(CLOSE_ICON_CLASSNAME);
Html.addSrcToImgNode(CLOSE_TASKPOPUP_ICON_SRC, closeTaskPopupIcon);
Html.addAltToImgNode(CLOSE_TASKPOPUP_ICON_ALT, closeTaskPopupIcon);
closeTaskPopupIcon.title = `${CLOSE_ICON_TITLE}`;
Html.appendHtmlChildNodeToParentNode(closeTaskPopupIcon, taskPopupHeader);


const taskPopupBody = Html.createNewDivWithClassName(TASK_POPUP_BODY_CLASSNAME);
const taskPopupBodyLeft = Html.createNewDivWithClassName(TASK_POPUP_BODY_LEFT_CLASSNAME);

const taskPopupBodyRight = Html.createNewDivWithClassName(TASK_POPUP_BODY_RIGHT_CLASSNAME);

const taskPopupBodyRightUp = Html.createNewDivWithClassName(TASK_POPUP_BODY_RIGHT_UP_CLASSNAME);
const taskTitleCollecterContainer = Html.createNewDivWithClassName(TASK_TITLE_COLLECTER_CONTAINER_CLASSNAME);
const descriptionCollecterContainer = Html.createNewDivWithClassName(DESCRIPTION_COLLECTER_CONTAINER_CLASSNAME);
const taskTitleCollecterLabel = Html.createNewLabelFor(TASK_TITLE_COLLECTER_ID);
Html.useTextAsInnerHtmlOfNode(TASK_TITLE, taskTitleCollecterLabel);
const taskTitleCollecter = Html.createNewTextInputWithId(TASK_TITLE_COLLECTER_ID);
const descriptionCollecterLabel = Html.createNewLabelFor(TEXT_AREA_ID);
Html.useTextAsInnerHtmlOfNode(TASK_DESCRIPTION_LABEL_TEXT, descriptionCollecterLabel);
const descriptionCollecter = Html.createNewTextAreaWithId(TEXT_AREA_ID);

descriptionCollecter.name = TASK_DESCRIPTION_VALUE_HOLDER;
descriptionCollecter.rows = TEXT_AREA_NUMBER_OF_LINES;
descriptionCollecter.cols = TEXT_AREA_NUMBER_OF_WORDS_PER_LINE;


const taskPopupBodyRightLow = Html.createNewDivWithClassName(TASK_POPUP_BODY_RIGHT_LOW_CLASSNAME);
const dueDateContainer = Html.createNewDivWithClassName(DUE_DATE_CONTAINER_CLASSNAME);
const dueDateLabel = Html.createNewLabelFor(DUE_DATE_COLLECTER_ID);
Html.useTextAsInnerHtmlOfNode(DUE_DATE_LABEL_TEXT, dueDateLabel);
const dueDateCollecter = Html.createDateInputWithId(DUE_DATE_COLLECTER_ID);

const importanceCheckBoxContainer = Html.createNewDivWithClassName(IMPORTANCE_CHECKBOX_CONTAINER_CALSSNAME);
const checkboxLabel = Html.createNewLabelFor(CHECKBOX_ID);
Html.useTextAsInnerHtmlOfNode(CHEBOX_LABEL_TEXT, checkboxLabel);
const checkbox = Html.createNewCheckboxInputWithid(CHECKBOX_ID);
const taskPopupAddButton = Html.createNewDivWithClassName(ADD_TASK_BUTTON_CLASSNAME);
Html.useTextAsInnerHtmlOfNode(ADD_TASK_TEXT, taskPopupAddButton);


const taskPopupContainerItems = [taskPopupHeader, taskPopupBody];
const taskPopupBodyItems = [taskPopupBodyLeft, taskPopupBodyRight];
const taskPopupBodyRightItems = [taskPopupBodyRightUp, taskPopupBodyRightLow];
const taskTitleCollecterContainerItems = [taskTitleCollecterLabel, taskTitleCollecter];
const descriptionCollecterContainerItems = [descriptionCollecterLabel, descriptionCollecter];
const taskPopupBodyRightUpItems = [taskTitleCollecterContainer, descriptionCollecterContainer];
const dueDateContainerItems = [dueDateLabel, dueDateCollecter];
const importanceCheckBoxContainerItems = [checkboxLabel, checkbox];
const taskPopupBodyRightLowItems = [dueDateContainer, importanceCheckBoxContainer, taskPopupAddButton];




taskTitleCollecterContainerItems.forEach((item) => {
    Html.appendHtmlChildNodeToParentNode(item, taskTitleCollecterContainer);
})

descriptionCollecterContainerItems.forEach((item) => {
    Html.appendHtmlChildNodeToParentNode(item, descriptionCollecterContainer);
})

taskPopupBodyRightUpItems.forEach((item) => {
    Html.appendHtmlChildNodeToParentNode(item, taskPopupBodyRightUp);
})

dueDateContainerItems.forEach((item) => {
    Html.appendHtmlChildNodeToParentNode(item, dueDateContainer);
})

importanceCheckBoxContainerItems.forEach((item) => {
    Html.appendHtmlChildNodeToParentNode(item, importanceCheckBoxContainer);
})

taskPopupBodyRightLowItems.forEach((item) => {
    Html.appendHtmlChildNodeToParentNode(item, taskPopupBodyRightLow);
})

taskPopupBodyRightItems.forEach((item) => {
    Html.appendHtmlChildNodeToParentNode(item, taskPopupBodyRight);
})

taskPopupBodyItems.forEach((item) => {
    Html.appendHtmlChildNodeToParentNode(item, taskPopupBody);
})

taskPopupContainerItems.forEach((item) => {
    Html.appendHtmlChildNodeToParentNode(item, taskPopupContainer);
})










// The line to click in order to load newtask popup
const NEW_TASK_LINE_CLASSNAME = 'new-task-line';
const NEW_TASK_LINE_ICON_CLASSNAME = 'new-task-line-icon';
const NEW_TASK_LINE_ICON_ALT = 'plus icon';
const NEW_TASK_LINE_TITLE_CLASSNAME = 'new-task-line-title';
const TASKS_TABLE_CLASSNAME = 'tasks-table';

const newTaskLine = Html.createNewDivWithClassName(NEW_TASK_LINE_CLASSNAME);
const newTaskLineTitleContainer = Html.createNewDivWithClassName(NEW_TASK_LINE_TITLE_CLASSNAME);
const newTaskLineIcon = Html.createNewImgTagWithClassName(NEW_TASK_LINE_ICON_CLASSNAME);
Html.addSrcToImgNode(Icons.addPlusIcon, newTaskLineIcon);
Html.addAltToImgNode(NEW_TASK_LINE_ICON_ALT, newTaskLine);

const tasksTable = Html.createNewDivWithClassName(TASKS_TABLE_CLASSNAME);




export {
    sheduleContainersNodes, sheduleHeaderTitlesNodes, sheduleLogosNodes,
    sheduleReducedIconNode, newProjectLine, newProjectLeftIconContainer,
    newProjectLineRightIconContainer, newProjectLineTitleContainer,
    newTaskLine, newTaskLineIcon, newTaskLineTitleContainer, newProjectPopup,
    Project, tasksTable, taskPopupContainer
};


