const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    console.log(props)
    return (
        <p>{props.name} {props.exercises}</p>
    )
}

const Content = (props) => {
    const parts = props.parts
    console.log(parts)

    return (
        <div>
            {parts.map(part => <Part name={part.name} exercises={part.exercises} key={part.name} />)}
        </div>
    )
}

const Total = (props) => {
    return (
        <p>Number of exercises {props.count}</p>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    const sum = course.parts.map(part => part.exercises).reduce((prev, next) => prev + next)

    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total count={sum} />
        </div>
    )
}

export default App;
