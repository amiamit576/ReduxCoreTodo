//{}
// 
// //function that return an action   object are called action creator
export function addTodoActionCreator(todo){
    return {
        type: 'ADD_TODO',
        payload:todo
    }
};


export function removeTodoActionCreator(todo){
    // console.log("in remove todo action creator",todo);
    return {
        type: 'REMOVE_TODO',
        payload:todo
    }
} 
export function toggleTodoActionCreator(todo){
    return {
        type: "TOGGLE_TODO",
        payload:todo
    }
}


export function addUserActionCreator(user){
    return {
        type: 'ADD_USER',
        payload:user
    }
}
