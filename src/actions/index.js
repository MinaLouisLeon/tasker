export const actionAddTask = (args) => {
    return{
        type : 'addTask',
        payload : args
    }
}

export const actionAddNote = (taskIndex,noteData) => {
    return{
        type : 'addNote',
        taskIndex : taskIndex,
        payload : noteData
    }
}