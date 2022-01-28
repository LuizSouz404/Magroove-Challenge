class ToDoItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = { is_done: false };
	}

	render() {
		return (
			<li style={this.state.is_done ? { textDecoration: "line-through" } : {}} onClick={() => this.setState({ is_done: !this.state.is_done })}>
				{this.props.task}
			</li>
		);
	}
}

class ToDoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			to_do_list: ['Finish this test', 'Get hired', 'Change the world'],
			input_value: ""
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleClick() {
		const newArray = this.state.to_do_list;

		newArray.push(this.state.input_value);

		this.setState(newArray);

		this.state.input_value = ""
	}

	handleChange(event) {
		this.setState({ input_value: event.target.value });
	}

	render() {
		return (
			<div>
				<h2>Add a new task to your to-do list</h2>
				<input onChange={this.handleChange} value={this.state.input_value} type="text" />
				<button onClick={() => this.handleClick()}>Add</button>
				<ul>
					{this.state.to_do_list.map((task_text, index) =>
						<ToDoItem key={index} task={task_text} />
					)}
				</ul>
			</div>
		);
	}
}

ReactDOM.render(
	<ToDoList />,
	document.getElementById('root')
);