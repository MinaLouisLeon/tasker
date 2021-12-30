import { updateTasksFirestore } from "../api/firestoreFun"
const initialState = {
    tasks : {},
    index : 0,
}
const tasksReducer = (state=initialState,action) => {
    switch(action.type){
        case 'setTasksReducer' :
            return{
                ...state,
                tasks : action.tasks,
                index : action.index
            }
        case 'addTask' :
            updateTasksFirestore(action.uid,{
                ...state,
                tasks : {
                    ...state.tasks,
                    [state.index] : action.payload,
                },
                index : state.index + 1
            })
            return {
                ...state,
                tasks : {
                    ...state.tasks,
                    [state.index] : action.payload,
                },
                index : state.index + 1
            }
        case 'setDelTask' :
            updateTasksFirestore(action.uid,{
                ...state,
                tasks : {
                    ...state.tasks,
                    [action.taskIndex] : {
                        ...state.tasks[action.taskIndex],
                        taskStatus : "deleted"
                    }
                }
            })
            return{
                ...state,
                tasks : {
                    ...state.tasks,
                    [action.taskIndex] : {
                        ...state.tasks[action.taskIndex],
                        taskStatus : "deleted"
                    }
                }
            }
        case 'addNote' :
            updateTasksFirestore(action.uid,{
                ...state,
               tasks : {
                   ...state.tasks,
                   [action.taskIndex] : {
                       ...state.tasks[action.taskIndex],
                       noteIndex : state.tasks[action.taskIndex].noteIndex + 1 ,
                       taskNote : {
                           ...state.tasks[action.taskIndex].taskNote,
                           [state.tasks[action.taskIndex].noteIndex] : action.payload
                       }
                   }
               }
            })
            return {
               ...state,
               tasks : {
                   ...state.tasks,
                   [action.taskIndex] : {
                       ...state.tasks[action.taskIndex],
                       noteIndex : state.tasks[action.taskIndex].noteIndex + 1 ,
                       taskNote : {
                           ...state.tasks[action.taskIndex].taskNote,
                           [state.tasks[action.taskIndex].noteIndex] : action.payload
                       }
                   }
               }
            }
        case 'setDelNote' :
            updateTasksFirestore(action.uid,{
                ...state,
                tasks : {
                    ...state.tasks,
                    [action.taskIndex] : {
                        ...state.tasks[action.taskIndex],
                        taskNote : {
                            ...state.tasks[action.taskIndex].taskNote,
                            [action.noteIndex] : {
                                ...state.tasks[action.taskIndex].taskNote[action.noteIndex],
                                noteStatus : "deleted"
                            }
                        }
                    }
                }
            })
            return {
                ...state,
                tasks : {
                    ...state.tasks,
                    [action.taskIndex] : {
                        ...state.tasks[action.taskIndex],
                        taskNote : {
                            ...state.tasks[action.taskIndex].taskNote,
                            [action.noteIndex] : {
                                ...state.tasks[action.taskIndex].taskNote[action.noteIndex],
                                noteStatus : "deleted"
                            }
                        }
                    }
                }
            }
        default :
            return state
    }
}

export default tasksReducer;