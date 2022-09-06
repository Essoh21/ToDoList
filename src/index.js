import style from "./style.css";
import appLogo from "./appLogo.js";
import * as Shedule from "./displayController";
import * as Html from "./htmlGenerator";

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


const ProjectsContainer = document.querySelector('.projectsContainer');

const newProjectLineItems = [Shedule.newProjectLeftIconContainer,
Shedule.newProjectLineTitleContainer,
Shedule.newProjectLineRightIconContainer

];

newProjectLineItems.forEach((item) => {
    Html.appendHtmlChildNodeToParentNode(item, Shedule.newProjectLine);
})

Html.useTextAsInnerHtmlOfNode(NEW_PROJECT_LINE_TITLE, Shedule.newProjectLineTitleContainer);
Html.appendHtmlChildNodeToParentNode(Shedule.newProjectLine, ProjectsContainer);




















