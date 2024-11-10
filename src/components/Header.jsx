export function Header(props) {
    const {todos} = props
    const todosLength = todos.length
    const isTaskPlural = todos.length != 1
    const taskOrTasks = isTaskPlural ? 'Tasks' : 'Task'

    return (
        <>
            <header>
                <h1>
                    Tou have {todosLength} open {taskOrTasks}
                </h1>
            </header>
        </>
    )
}