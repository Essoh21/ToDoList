function getUserStoredDataFromHisLocalStorageAsObject() {
    if (localStorage.getItem('allStoredProjects')) {
        const ProjectsStored = JSON.parse(localStorage.getItem('allStoredProjects'));
        const tasksNodesContainerscontainerStored = JSON.parse(localStorage.getItem('allStoredTasksNodesContainersContainer'));
        return { ProjectsStored, tasksNodesContainerscontainerStored };
    } else {
        return
    }
}


function storeUserAllProjectsToHisLocalStorage(userAllProjects) {

    const allStoredProjects = userAllProjects;
    localStorage.setItem("allStoredProjects", `${allStoredProjects}`)

}


function storeAllTasksNodesContainerContainerToLocalStorage(userAllTasksNodesContainerContainer) {
    const allStoredTasksNodesContainersContainer = userAllTasksNodesContainerContainer;
    localStorage.setItem("allStoredTasksNodesContainersContainer", `${allStoredTasksNodesContainersContainer}`);
}

export {
    getUserStoredDataFromHisLocalStorageAsObject, storeAllTasksNodesContainerContainerToLocalStorage,
    storeUserAllProjectsToHisLocalStorage
}