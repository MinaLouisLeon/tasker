const initialState = {
    tasks : null,
    index : 0,
}
const tasksReducer = (state=initialState,action) => {
    switch(action.type){
        case 'addTask' :
            return {
                ...state,
                tasks : {
                    ...state.tasks,
                    [state.index] : action.payload,
                },
                index : state.index + 1
            }
        case 'addNote' :
            return {
               ...state,
               tasks : {
                   ...state.tasks,
                   [action.taskIndex] : {
                       ...state.tasks[action.taskIndex],
                       noteIndex : state.tasks[action.taskIndex] + 1 ,
                       taskNote : {
                           ...state.tasks[action.taskIndex].taskNote,
                           [state.tasks[action.taskIndex].noteIndex] : action.payload
                       }
                   }
               }
            }
        default :
            return state
    }
}

export default tasksReducer;