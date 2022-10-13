import style from "./style.css";
import appLogo from "./appLogo.js";
import * as Shedule from "./itemsToDisplay.js";
import * as Html from "./htmlGenerator.js";
import Icons from "./icons";


const TODAY_TASKS_TITLE = 'Today tasks';
const IMPORTANT_TASKS_TITLE = 'Important tasks';
const NEWT_WEEK_TASKS_TITLE = 'Next Week tasks';
const NEW_PROJECT_LINE_TITLE = 'Add new project';

// Application Header 
const appheader = document.querySelector('.header');
appheader.appendChild(appLogo);


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
    nextWeekTasksHeaderContainer
];

for (let i = 0; i < headersContainers.length; i += 1) {
    Html.appendHtmlChildNodeToParentNode(Shedule.sheduleLogosNodes[i],
        headersContainers[i]);
    Html.appendHtmlChildNodeToParentNode(Shedule.sheduleHeaderTitlesNodes[i],
        headersContainers[i]);
    Html.appendHtmlChildNodeToParentNode(Shedule.sheduleReducedIconNode[0].cloneNode(true),
        headersContainers[i]);
}


const todayTasksHeaderTitleContainer = document.querySelector('.today-tasks.header-title');
const importantTasksHeaderTitleContainer = document.querySelector('.important-tasks.header-title');
const nextWeekTasksHeaderTitleContainer = document.querySelector('.next-week-tasks.header-title');


Html.useTextAsInnerHtmlOfNode(TODAY_TASKS_TITLE, todayTasksHeaderTitleContainer);
Html.useTextAsInnerHtmlOfNode(IMPORTANT_TASKS_TITLE, importantTasksHeaderTitleContainer);
Html.useTextAsInnerHtmlOfNode(NEWT_WEEK_TASKS_TITLE, nextWeekTasksHeaderTitleContainer);


// dashboard Project part 


const projectsContainer = document.querySelector('.projectsContainer');
Html.appendHtmlChildNodeToParentNode(Shedule.newProjectPopup, projectsContainer);

// all projects collecter 

const allProjects = [];
allProjects.push(createNewProjectWithTitle('Home Project'));




// The line to click to  display popup to add a new project Title
const newProjectLineItems = [Shedule.newProjectLeftIconContainer,
Shedule.newProjectLineTitleContainer,
Shedule.newProjectLineRightIconContainer

];

newProjectLineItems.forEach((item) => {
    Html.appendHtmlChildNodeToParentNode(item, Shedule.newProjectLine);
})

Html.useTextAsInnerHtmlOfNode(NEW_PROJECT_LINE_TITLE, Shedule.newProjectLineTitleContainer);
Html.appendHtmlChildNodeToParentNode(Shedule.newProjectLine, projectsContainer);
dispalayAllProjects();




//  application body 

const tasksBodyContainer = document.querySelector('.tasksBodyContainer');

const tasksBodyContainerItems = [Shedule.tasksContainerHeader,
Shedule.tasksTable
]

tasksBodyContainerItems.forEach((item) => {
    Html.appendHtmlChildNodeToParentNode(item, tasksBodyContainer);
})


// Handling Events

// nodes to look 
const newProjectPopupNode = document.querySelector('.new-project-popup');
const newProjectLine = document.querySelector('.new-project-line');
const newProjectAddButton = document.querySelector('.new-project.add-button');
const newProjectCancelButton = document.querySelector('.new-project.cancel-button');
const newProjectTitleCollecter = document.querySelector('.new-project-title-collecter');

// variable that collect newProject Title 

let newProjectTitle = '';

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

function dispalayAllProjects() {
    allProjects.slice().reverse().forEach((project) => {
        Html.appendHtmlChildNodeToParentNode(project, projectsContainer);
    })
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
        allProjects.push(createNewProjectWithTitle(newProjectTitle))
    }
    removeNewProjectLine();
    removeNewProjectPopup();
    dispalayAllProjects();
    Html.cleanInputValueOfNode(newProjectTitleCollecter);
    displayNewProjectLine();


})


// adding Tasks popup

Html.appendHtmlChildNodeToParentNode(Shedule.taskPopupContainer, tasksBodyContainer);

//  collecting a new task information 

const activeProjectTasks = [];


let newTaskTitle = '';

//usefull functions 
function addNewTaskToActiveProjectTasks() {
    activeProjectTasks.push(createNewTaskWithTitle(newTaskTitle))
}

function displayActiveProjectTasks() {
    activeProjectTasks.slice().reverse().forEach((task) => {
        Html.appendHtmlChildNodeToParentNode(task, tableTasksContainer);
    })
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

function createNewTaskWithTitle(currentTaskTitle) {
    const newTaskElement = new Shedule.Task();
    newTaskElement.taskTitle = currentTaskTitle;
    const newTask = newTaskElement.createNewTask();
    return newTask;
}

function getNewTaskTitle() {
    const taskTitleCollecter = document.querySelector('#task-title-collecter');
    newTaskTitle = taskTitleCollecter.value;
}

//Nodes to look 

const newTaskLine = document.querySelector('.new-task-line');
const newTaskPopup = document.querySelector('.task-popup-container');
const tableTasksContainer = document.querySelector('.table-tasks-container');

const taskDescriptionCollecter = document.querySelector('#task-description-collecter');
const dueDate = document.querySelector('#due-date');
const importanceCheck = document.querySelector('#importance-check');




// new task Popup EventListeners


newTaskLine.addEventListener('click', () => {
    removeNewTaskLine();
    displayNewTaskPopup();
})


// delegating click events 
document.addEventListener('click', (element) => {
    if (element.target.matches('.delete-icon')) {
        const confirmation = confirm('Do you really want to delete that task?');
        if (confirmation) {
            deleteParentOfTrashIconNodeFromTableTaskscontainer(element.target);
            removeParentOfTrashIconNodeFromActiveProjectTasks(element.target);
        }

    }

    if (element.target.matches('.close-icon')) {
        removeNewTaskPopup();
        displayNewTaskLine();
    }

    if (element.target.matches('.add-task')) {

        displayNewTaskLine();

        getNewTaskTitle();
        Html.cleanInputValueOfNode(taskTitleCollecter)
        removeNewTaskPopup();
        addNewTaskToActiveProjectTasks();
        clearTableTasksContainer
        displayActiveProjectTasks();
        ;

    }

})



// ******************* deleting a task from active Projec

// useful functions 

function deleteParentOfTrashIconNodeFromTableTaskscontainer(trashIconNode) {
    trashIconNode.parentNode.parentNode.removeChild(trashIconNode.parentNode);
}

function clearTableTasksContainer() {
    tableTasksContainer.innerHTML = '';
}


function removeItemOfIndexFromArray(itemIndex, arrayToUse) {
    arrayToUse.splice(itemIndex, 1);
}

function removeParentOfTrashIconNodeFromActiveProjectTasks(trashIconNode) {
    const trashIconParentNode = trashIconNode.parentNode.parentNode;
    const trashIconParentNodeIndex = activeProjectTasks.indexOf(trashIconParentNode);
    activeProjectTasks.splice(trashIconParentNodeIndex, 1);

}























