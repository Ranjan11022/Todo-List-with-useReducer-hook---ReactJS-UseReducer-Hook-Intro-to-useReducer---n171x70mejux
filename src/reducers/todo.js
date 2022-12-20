const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO":
            state = [...state, action.payload]
            return state
            case "DELETE_TODO":
                let data = [...state]
                let index = data.findIndex(d=> d.id==action.payload)
                data.splice(index, 1)
                return data
    }
}

export { todoReducer }