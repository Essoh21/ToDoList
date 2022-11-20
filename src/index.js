import isToday from 'date-fns/isToday';
import getWeekOfMonth from 'date-fns/getWeekOfMonth';
import style from './style.css';
import appLogo from './appLogo';
import * as Shedule from './itemsToDisplay.js';
import * as Html from './htmlGenerator.js';
import Icons from './icons';
import { addActiveToClassName, removeActiveFromeClassName } from './MQuery';
import * as Storage from './UserData';

const backgroundImage = require('./images/back.jpg');
const TODAY_TASKS_TITLE = 'Today tasks';
const IMPORTANT_TASKS_TITLE = 'Important tasks';
const NEWT_WEEK_TASKS_TITLE = 'Next Week tasks';
const NEW_PROJECT_LINE_TITLE = 'Add project';

let allProjects = [];
let todayTasks = [];
let nextWeekTasks = [];

let projectsTasksNodesContainersContainer = [];
const emptyTasksContainer = [];
const homeProjectTitle = 'Home Project';
const homeProject = createNewProjectWithTitle(homeProjectTitle);
const homeProjectToStore = homeProject.outerHTML;

// a function to load user localStorage Data if any
const opacityValue = 0.5;

function loadUserLocalStorageData() {
    if (!(localStorage.getItem('allStoredProjects') == null)) {
        const storedProjects = Storage.getUserStoredDataFromHisLocalStorageAsObject()
            .ProjectsStored;
        const StoredTasksNodesContainersContainer = Storage
            .getUserStoredDataFromHisLocalStorageAsObject()
            .tasksNodesContainerscontainerStored;
        allProjects = [...storedProjects];
        projectsTasksNodesContainersContainer = [...StoredTasksNodesContainersContainer];
    } else {
        allProjects.push(homeProjectToStore);
        projectsTasksNodesContainersContainer.push(emptyTasksContainer);

    }
}

// necessary  component after load
loadUserLocalStorageData();

let activeProjectIndexFromAllProjects = getActiveProjectIndexFromAllProjects(homeProjectToStore);

let activeProjectTasks = projectsTasksNodesContainersContainer[activeProjectIndexFromAllProjects];
let newTaskTitle = '';
let newTaskDueDate = 'no date';
const projectsContainer = document.querySelector('.projectsContainer');

// Application Header
const appheader = document.querySelector('.header');
appheader.appendChild(appLogo);

// variable that collect newProject Title

let newProjectTitle = '';

// Application dashboard

const scheduleContainer = document.querySelector('.scheduleContainer');

Shedule.sheduleContainersNodes.forEach((scheduleContainerNode) => {
    Html.appendHtmlChildNodeToParentNode(scheduleContainerNode, scheduleContainer);
});

const todayTasksHeaderContainer = document.querySelector('.today.tasks-header');
const importantTasksHeaderContainer = document.querySelector('.important.tasks-header');
const nextWeekTasksHeaderContainer = document.querySelector('.next-week.tasks-header');

const headersContainers = [
    todayTasksHeaderContainer, importantTasksHeaderContainer,
    nextWeekTasksHeaderContainer,
];

for (let i = 0; i < headersContainers.length; i += 1) {
    Html.appendHtmlChildNodeToParentNode(
        Shedule.sheduleLogosNodes[i],
        headersContainers[i],
    );
    Html.appendHtmlChildNodeToParentNode(
        Shedule.sheduleHeaderTitlesNodes[i],
        headersContainers[i],
    );
    Html.appendHtmlChildNodeToParentNode(
        Shedule.sheduleReducedIconNode[0].cloneNode(true),
        headersContainers[i],
    );
}

const todayTasksHeaderTitleContainer = document.querySelector('.today-tasks.header-title');
const importantTasksHeaderTitleContainer = document.querySelector('.important-tasks.header-title');
const nextWeekTasksHeaderTitleContainer = document.querySelector('.next-week-tasks.header-title');

Html.useTextAsInnerHtmlOfNode(TODAY_TASKS_TITLE, todayTasksHeaderTitleContainer);
Html.useTextAsInnerHtmlOfNode(IMPORTANT_TASKS_TITLE, importantTasksHeaderTitleContainer);
Html.useTextAsInnerHtmlOfNode(NEWT_WEEK_TASKS_TITLE, nextWeekTasksHeaderTitleContainer);

// dashboard Project part
// The line to click to  display popup to add a new project Title
const newProjectLineItems = [Shedule.newProjectLeftIconContainer,
Shedule.newProjectLineTitleContainer,
Shedule.newProjectLineRightIconContainer,

];

newProjectLineItems.forEach((item) => {
    Html.appendHtmlChildNodeToParentNode(item, Shedule.newProjectLine);
});

//* ************* handling projects Selection  */

let activeProjectNode = homeProject;
let activeProjectTitle = activeProjectNode.childNodes[1].innerHTML;

function changeActiveProjectNodeTo(newActiveProjectNode) {
    activeProjectNode = newActiveProjectNode;
}

function updateActiveProjectTitle() {
    activeProjectTitle = activeProjectNode.childNodes[1].innerHTML;
}

function updateTitleOfHeader() {
    const tasksBodyContainerHeader = document.querySelector('.tasksBodyContainer>.tasks-header');
    tasksBodyContainerHeader.innerHTML = activeProjectTitle;
}

//* ********************setting projects and tasks bounds */

function getActiveProjectIndexFromAllProjects(activeProject) {
    return allProjects.indexOf(activeProject);
}

//  application body

const tasksBodyContainer = document.querySelector('.tasksBodyContainer');

Shedule.tasksContainerHeader.innerHTML = activeProjectTitle;
const tasksBodyContainerItems = [
    Shedule.humburgerMenuContainer,
    Shedule.tasksContainerHeader,
    Shedule.tasksTable,
];

tasksBodyContainerItems.forEach((item) => {
    Html.appendHtmlChildNodeToParentNode(item, tasksBodyContainer);
});

// puting Projects into the DOM
const popupAndNewProjectLine = Html.createNewDivWithClassName('popup-and-new-project-line');
Html.useTextAsInnerHtmlOfNode(NEW_PROJECT_LINE_TITLE, Shedule.newProjectLineTitleContainer);
const popupAndNewProjectLineItems = [Shedule.newProjectLine, Shedule.newProjectPopup];
popupAndNewProjectLineItems.forEach((item) => {
    Html.appendHtmlChildNodeToParentNode(item, popupAndNewProjectLine);
});

const userProjectsContainer = Html.createNewDivWithClassName('user-projects-container');
const projectsContainerItems = [popupAndNewProjectLine, userProjectsContainer];

projectsContainerItems.forEach((item) => {
    Html.appendHtmlChildNodeToParentNode(item, projectsContainer);
});

// nodes to look
const newProjectPopupNode = document.querySelector('.new-project-popup');
const newProjectLine = document.querySelector('.new-project-line');
const newProjectAddButton = document.querySelector('.new-project.add-button');
const newProjectCancelButton = document.querySelector('.new-project.cancel-button');
const newProjectTitleCollecter = document.querySelector('.new-project-title-collecter');

// useful functions

function replaceNewProjectLIneByNewProjectPopup() {
    removeNewProjectLine();
    displayNewProjectPopup();
}

function replaceNewProjectPopupWithNewProjectLine() {
    removeNewProjectPopup();
    displayNewProjectLine();
}

function removeNewProjectPopup() {
    Html.removeFlexNode(newProjectPopupNode);
}

function displayNewProjectPopup() {
    Html.displayFlexNode(newProjectPopupNode);
}

function displayNewProjectLine() {
    Html.displayFlexNode(newProjectLine);
}

function removeNewProjectLine() {
    Html.removeFlexNode(newProjectLine);
}

// new projects handlers

function displayAllProjects() {
    allProjects.slice().reverse().forEach((project) => {
        userProjectsContainer.innerHTML += project;
    });
}

function clearProjectsFromDisplay() {
    userProjectsContainer.innerHTML = '';
}

function createNewProjectWithTitle(projectTitle) {
    const newProject = new Shedule.Project();
    newProject.projectName = projectTitle;

    return newProject.createNewProjectHtml();
}

function getNewProjectTitle() {
    newProjectTitle = newProjectTitleCollecter.value;
}

// Event listeners

// new project Events
newProjectLine.addEventListener('click', replaceNewProjectLIneByNewProjectPopup);

newProjectCancelButton.addEventListener('click', () => {
    replaceNewProjectPopupWithNewProjectLine();
    Html.cleanInputValueOfNode(newProjectTitleCollecter);
});

newProjectAddButton.addEventListener('click', () => {
    getNewProjectTitle();
    if (!(newProjectTitle == '')) {
        const anotherProject = createNewProjectWithTitle(newProjectTitle);
        removeBackgroundColorOfNode(anotherProject);
        changeOpacityOfNodeTo(1, anotherProject);
        allProjects.push(anotherProject.outerHTML);
        projectsTasksNodesContainersContainer.push([]);
        Storage.storeUserAllProjectsToHisLocalStorage(allProjects);
        Storage.storeAllTasksNodesContainersContainerToLocalStorage(projectsTasksNodesContainersContainer);
    }
    removeNewProjectLine();
    removeNewProjectPopup();
    clearProjectsFromDisplay();
    displayAllProjects();
    Html.cleanInputValueOfNode(newProjectTitleCollecter);
    displayNewProjectLine();
});

// adding Tasks popup

Html.appendHtmlChildNodeToParentNode(Shedule.taskPopupContainer, tasksBodyContainer);



const newTaskLine = document.querySelector('.new-task-line');
const newTaskPopup = document.querySelector('.task-popup-container');
const tableTasksContainer = document.querySelector('.table-tasks-container');

const taskDescriptionCollecter = document.querySelector('#task-description-collecter');
const taskTitleCollecter = document.querySelector('#task-title-collecter');
const dueDate = document.querySelector('#due-date');
const importanceCheck = document.querySelector('#importance-check');

// usefull functions
function addNewTaskToActiveProjectTasks() {
    activeProjectTasks.push(createNewTaskWithTitleAndDueDate(newTaskTitle, newTaskDueDate).outerHTML);
}

function displayActiveProjectTasks() {
    activeProjectTasks.slice().reverse().forEach((task) => {
        tableTasksContainer.innerHTML += task;
    });
}

function removeNewTaskLine() {
    Html.removeFlexNode(newTaskLine);
}

function displayNewTaskLine() {
    Html.displayFlexNode(newTaskLine);
}

function removeNewTaskPopup() {
    Html.removeNode(newTaskPopup);
}

function displayNewTaskPopup() {
    Html.displayNodeAsGrid(newTaskPopup);
}

function createNewTaskWithTitleAndDueDate(currentTaskTitle, currenTaskDueDate) {
    const newTaskElement = new Shedule.Task();
    newTaskElement.taskTitle = currentTaskTitle;
    newTaskElement.dueDate = currenTaskDueDate;
    const newTask = newTaskElement.createNewTask();
    return newTask;
}

function getNewTaskTitle() {
    const taskTitleCollecter = document.querySelector('#task-title-collecter');
    newTaskTitle = taskTitleCollecter.value;
}

function getNewTaskDueDate() {
    const taskDueDateCollecter = document.querySelector('#due-date');
    newTaskDueDate = taskDueDateCollecter.value;
}

function initializeNewTaskDueDateValue() {
    newTaskDueDate = 'no date';
}

function collectTodayTasks() {
    projectsTasksNodesContainersContainer.forEach((tasksNodesContainer) => {
        tasksNodesContainer.forEach((taskNode) => {
            const duedateContainerAndDate = /(duedate-container">).*(<\/div><d)/;
            const taskNodeDate = taskNode.match(duedateContainerAndDate)[0].slice(19, -8);

            if (!(taskNodeDate.includes('no date'))) {
                if (isToday(new Date(`${taskNodeDate}`))) {
                    todayTasks.push(taskNode);
                }
            }
        });
    });
}

function collectNextWeekTasks() {
    projectsTasksNodesContainersContainer.forEach((tasksNodesContainer) => {
        tasksNodesContainer.forEach((taskNode) => {
            const duedateContainerAndDate = /(duedate-container">).*(<\/div><d)/;
            const taskNodeDate = taskNode.match(duedateContainerAndDate)[0].slice(19, -8);
            if (!(taskNodeDate.includes('no date'))) {
                if (getWeekOfMonth(new Date(`${taskNodeDate}`), { weekStartsOn: 1 }) == (getWeekOfMonth(new Date(), { weekStartsOn: 1 }) + 1)) {
                    nextWeekTasks.push(taskNode);
                }
            }
        });
    });
}

function displayTodayTasks() {
    todayTasks.slice().reverse().forEach((task) => {
        tableTasksContainer.innerHTML += task;
    });
}

function displayNextWeekTasks() {
    nextWeekTasks.slice().reverse().forEach((task) => {
        tableTasksContainer.innerHTML += task;
    });
}

function clearTodayTasksContainer() {
    todayTasks = [];
}

function clearNextWeekTasksContainer() {
    nextWeekTasks = [];
}
// styling functions

function changeOpacityOfNodeTo(opacityValue, targetNode) {
    targetNode.style.opacity = opacityValue;
}

function setBackGroundColorToNode(backGroundColor, targetNode) {
    targetNode.style.backgroundColor = `${backGroundColor}`;
}

function removeBackgroundColorOfNode(targetNode) {
    targetNode.style.backgroundColor = '';
}

// new task Popup EventListeners

newTaskLine.addEventListener('click', () => {
    removeNewTaskLine();
    displayNewTaskPopup();
});

// delegating click events
document.addEventListener('click', (element) => {
    if (element.target.matches('.delete-icon')) {
        const confirmation = confirm('Do you really want to delete that task?');
        if (confirmation) {
            deleteParentOfTrashIconNodeFromTableTaskscontainer(element.target);
            removeParentOfTrashIconNodeFromActiveProjectTasks(element.target);

            Storage.storeAllTasksNodesContainersContainerToLocalStorage(projectsTasksNodesContainersContainer);
        }
    }

    if (element.target.matches('.today.tasks-header') || element.target.parentNode.matches('.today.tasks-header')) {
        if (element.target.matches('.today.tasks-header')) {
            collectTodayTasks();

            clearTableTasksContainer();

            removeBackgroundColorOfNode(activeProjectNode);
            changeOpacityOfNodeTo(1, activeProjectNode);

            changeActiveProjectNodeTo(element.target);
            setBackGroundColorToNode('green', activeProjectNode);
            changeOpacityOfNodeTo(opacityValue, activeProjectNode);

            updateActiveProjectTitle();
            updateTitleOfHeader();

            displayTodayTasks();
            removeNewTaskLine();
            clearTodayTasksContainer();
        } else {
            collectTodayTasks();
            clearTableTasksContainer();

            removeBackgroundColorOfNode(activeProjectNode);
            changeOpacityOfNodeTo(1, activeProjectNode);

            changeActiveProjectNodeTo(element.target.parentNode);
            setBackGroundColorToNode('green', activeProjectNode);
            changeOpacityOfNodeTo(opacityValue, activeProjectNode);

            updateActiveProjectTitle();
            updateTitleOfHeader();

            displayTodayTasks();
            removeNewTaskLine();
            clearTodayTasksContainer();
        }
    }

    if (element.target.matches('.next-week.tasks-header') || element.target.parentNode.matches('.next-week.tasks-header')) {
        if (element.target.matches('.next-week.tasks-header')) {
            collectNextWeekTasks();
            clearTableTasksContainer();

            removeBackgroundColorOfNode(activeProjectNode);
            changeOpacityOfNodeTo(1, activeProjectNode);

            changeActiveProjectNodeTo(element.target);
            setBackGroundColorToNode('green', activeProjectNode);
            changeOpacityOfNodeTo(opacityValue, activeProjectNode);

            updateActiveProjectTitle();
            updateTitleOfHeader();

            displayNextWeekTasks();
            removeNewTaskLine();
            clearNextWeekTasksContainer();
        } else {
            collectNextWeekTasks();
            clearTableTasksContainer();

            removeBackgroundColorOfNode(activeProjectNode);
            changeOpacityOfNodeTo(1, activeProjectNode);

            changeActiveProjectNodeTo(element.target.parentNode);
            setBackGroundColorToNode('green', activeProjectNode);
            changeOpacityOfNodeTo(opacityValue, activeProjectNode);

            updateActiveProjectTitle();
            updateTitleOfHeader();

            displayNextWeekTasks();
            removeNewTaskLine();
            clearNextWeekTasksContainer();
        }
    }

    if (element.target.matches('.close-icon')) {
        removeNewTaskPopup();
        displayNewTaskLine();
    }

    if (element.target.matches('.add-task')) {
        getNewTaskTitle();
        if (!(dueDate.value == '')) {
            getNewTaskDueDate();
        }
        if (!(taskTitleCollecter.value == '')) {
            displayNewTaskLine();
            Html.cleanInputValueOfNode(taskTitleCollecter);
            Html.cleanInputValueOfNode(taskDescriptionCollecter);
            Html.cleanInputValueOfNode(dueDate);
            importanceCheck.checked = false;
            removeNewTaskPopup();

            addNewTaskToActiveProjectTasks();

            Storage.storeAllTasksNodesContainersContainerToLocalStorage(projectsTasksNodesContainersContainer);

            clearTableTasksContainer();
            displayActiveProjectTasks();

            initializeNewTaskDueDateValue();
        } else {
            alert('The task\'s title can not be empty');
            return;
        }
    }

    if (element.target.matches('.new-project-container') || element.target.parentNode.matches('.new-project-container')) {
        if (element.target.matches('.new-project-container')) {
            clearTableTasksContainer();

            removeBackgroundColorOfNode(activeProjectNode);
            changeOpacityOfNodeTo(1, activeProjectNode);

            changeActiveProjectNodeTo(element.target);

            if (getActiveProjectIndexFromAllProjects(element.target.outerHTML) == -1) {
                activeProjectIndexFromAllProjects = 0;
            } else {
                activeProjectIndexFromAllProjects = getActiveProjectIndexFromAllProjects(element.target.outerHTML);
            }

            setBackGroundColorToNode('green', activeProjectNode);
            changeOpacityOfNodeTo(opacityValue, activeProjectNode);

            updateActiveProjectTitle();
            updateTitleOfHeader();

            clearTableTasksContainer();
            activeProjectTasks = projectsTasksNodesContainersContainer[activeProjectIndexFromAllProjects];

            displayActiveProjectTasks();
            displayNewTaskLine();
        } else {
            removeBackgroundColorOfNode(activeProjectNode);
            changeOpacityOfNodeTo(1, activeProjectNode);

            changeActiveProjectNodeTo(element.target.parentNode);

            if (getActiveProjectIndexFromAllProjects(element.target.parentNode.outerHTML) == -1) {
                activeProjectIndexFromAllProjects = 0;
            } else {
                activeProjectIndexFromAllProjects = getActiveProjectIndexFromAllProjects(element.target.parentNode.outerHTML);
            }

            setBackGroundColorToNode('green', activeProjectNode);
            changeOpacityOfNodeTo(opacityValue, activeProjectNode);
            updateActiveProjectTitle();
            updateTitleOfHeader();

            clearTableTasksContainer();
            activeProjectTasks = projectsTasksNodesContainersContainer[activeProjectIndexFromAllProjects];
            displayActiveProjectTasks();
            displayNewTaskLine();
        }
    }
});

// ******************* deleting a task from active Projec

// useful functions

function deleteParentOfTrashIconNodeFromTableTaskscontainer(trashIconNode) {
    const trashIconNodeParentOuterHTML = trashIconNode.parentNode.outerHTML;
    if (tableTasksContainer.innerHTML.includes(trashIconNodeParentOuterHTML)) {
        tableTasksContainer.innerHTML = tableTasksContainer.innerHTML.replace(trashIconNodeParentOuterHTML, '');
    } else {

    }

    // trashIconNode.parentNode.parentNode.removeChild(trashIconNode.parentNode);
}

function clearTableTasksContainer() {
    tableTasksContainer.innerHTML = '';
}

function removeParentOfTrashIconNodeFromActiveProjectTasks(trashIconNode) {
    const trashIconParentNode = trashIconNode.parentNode;
    const trashIconParentNodeIndex = activeProjectTasks.indexOf(trashIconParentNode.outerHTML);
    activeProjectTasks.splice(trashIconParentNodeIndex, 1);
}

const leftContainer = document.querySelector('.leftContainer');
const leftContainerIdSelection = document.querySelector('#leftContainer');
const humburgerMenu = document.querySelector('.humburger-menu');
humburgerMenu.addEventListener('click', () => addActiveToClassName(leftContainerIdSelection));

const iconToCloseContainer = document.querySelector('.cross-lines');
Html.addSrcToImgNode(Icons.closeIcon, iconToCloseContainer);
iconToCloseContainer.addEventListener('click', () => removeActiveFromeClassName(leftContainerIdSelection));

// displaying projects on load 
function displayOnLoad() {
    clearProjectsFromDisplay();
    displayAllProjects();
    displayActiveProjectTasks();
}

displayOnLoad();