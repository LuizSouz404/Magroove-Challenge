class ToDoItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = { is_done: false };
	}

	render() {
		return (
			<li style={this.state.is_done ? styles.liElementChecked : styles.liElement} onClick={() => this.setState({ is_done: !this.state.is_done })}>
				{this.props.task}

				<div style={this.state.is_done ? styles.divChecked : styles.divCheck}>
					<img style={this.state.is_done ? styles.checkedImg : styles.checkImg} src="./assets/check.svg" />
				</div>
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

		if (this.state.input_value === "") {
			return
		}

		newArray.push(this.state.input_value);

		this.setState(newArray);

		this.state.input_value = ""
	}

	handleChange(event) {
		this.setState({ input_value: event.target.value });
	}

	render() {
		return (
			<main style={styles.container}>

				<div style={styles.content}>
					<header style={styles.headerContainer}>
						<img src="./assets/Logo.svg" />

						<label style={styles.inputContainer}>
							<input style={styles.inputElement} onChange={this.handleChange} value={this.state.input_value} type="text" />
							<button style={styles.btnElement} onClick={() => this.handleClick()}>Add</button>
						</label>

					</header>
					<h2 style={styles.titleText}>Add a new task to your to-do list</h2>
					<ul style={{ listStyle: 'none' }}>
						{this.state.to_do_list.map((task_text, index) =>
							<ToDoItem key={index} task={task_text} />
						)}
					</ul>
				</div>

			</main>
		);
	}
}

const styles = {
	container: {
		background: '#1d1b1b',
		height: '100vh',
		padding: '1.5rem 0',
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'column'
	},
	content: {
		maxWidth: '1024px',
		padding: '0 1rem',
		width: '100%'
	},
	headerContainer: {
		display: 'flex',
		alignItems: 'center'
	},
	titleText: {
		color: '#fff',
		margin: '1rem 0',
	},
	inputContainer: {
		display: 'flex',
		alignItems: 'center',
		marginLeft: '1rem',
		width: '100%',
		height: '2.5rem',
		background: '#312C2A3D',
		borderRadius: '2rem',
		overflow: 'hidden'
	},
	inputElement: {
		width: '90%',
		flex: 1,
		height: '100%',
		padding: '.5rem 1rem',
		background: 'transparent',
		border: 0,
		outline: 0,
		color: '#fff'
	},
	btnElement: {
		width: '10%',
		minWidth: '90px',
		height: '100%',
		background: '#3D3D3D',
		color: '#fff',
		border: 0,
		outline: 0,
		cursor: 'pointer'
	},
	liElement: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '.75rem 1rem',
		background: '#fff',
		borderRadius: '1rem',
		margin: '.5rem 0 0',
		cursor: 'pointer'
	},
	liElementChecked: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: '.75rem 1rem',
		background: '#fff',
		borderRadius: '1rem',
		margin: '.5rem 0 0',
		textDecoration: "line-through",
		opacity: .5
	},
	divCheck: {
		border: '2px solid #1d1b1b',
		width: '20px',
		height: '20px',
		borderRadius: '5px'
	},
	divChecked: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		border: '2px solid #EC6B43',
		background: '#EC6B43',
		width: '20px',
		height: '20px',
		borderRadius: '5px'
	},
	checkImg: {
		visibility: 'hidden',
		width: '16px',
		height: '16px'
	},
	checkedImg: {
		visibility: 'visible',
		width: '16px',
		height: '16px',
	}
}

ReactDOM.render(
	<ToDoList />,
	document.getElementById('root')
);