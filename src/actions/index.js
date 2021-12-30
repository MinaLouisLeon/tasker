export const actionSetTasksReducer = (tasks,index) => {
    return{
        type : 'setTasksReducer',
        tasks : tasks,
        index : index
    }
}

export const actionAddTask = (args,uid) => {
    return{
        type : 'addTask',
        payload : args,
        uid : uid,
    }
}

export const actionSetDelTask = (taskIndex,uid) => {
    return{
        type : 'setDelTask',
        taskIndex : taskIndex,
        uid : uid
    }
}

export const actionAddNote = (taskIndex,noteData,uid) => {
    return{
        type : 'addNote',
        taskIndex : taskIndex,
        payload : noteData,
        uid : uid
    }
}

export const actionSetDelNote = (taskIndex,noteIndex,uid) => {
    return{
        type : 'setDelNote',
        taskIndex : taskIndex,
        noteIndex : noteIndex,
        uid : uid,
    }
}

//user Reducer set user

export const actionSetUser = (userInfo) => {
    return{
        type : 'setUser',
        payload : userInfo
    }
}