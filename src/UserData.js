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

    let allProjectsToStore = JSON.stringify(userAllProjects);
    localStorage.setItem("allStoredProjects", allProjectsToStore)

}


function storeAllTasksNodesContainersContainerToLocalStorage(userAllTasksNodesContainerContainer) {
    const allTasksNodesContainersContainerToStore = JSON.stringify(userAllTasksNodesContainerContainer);
    localStorage.setItem("allStoredTasksNodesContainersContainer", allTasksNodesContainersContainerToStore);
}

export {
    getUserStoredDataFromHisLocalStorageAsObject, storeAllTasksNodesContainersContainerToLocalStorage,
    storeUserAllProjectsToHisLocalStorage
}