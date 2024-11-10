import { TodoCard } from "./TodoCard"

export function TodoList(props) {
    const { todos, selectedTab } = props
    const filteredTodos = selectedTab == 'All' ?
        todos :
            selectedTab === 'Completed' ?
                todos.filter(val => val.complete) :
                todos.filter(val => !val.complete)
    return (
        <>
            {filteredTodos.map((todo, todoIndex) => {
                return (
                    <TodoCard
                        key={todoIndex}
                        todoIndex={todos.findIndex(val => val.input == todo.input)}
                        {...props} 
                        todo={todo}/>
                )
            })}
        </>
    )
}