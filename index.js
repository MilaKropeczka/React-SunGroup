const Post = (props) => {
	const [showContent, setShowContent] = React.useState(true);
	const showMoreContent = () => {
		setShowContent(false);
	};
	const showLessContent = () => {
		setShowContent(true);
	};
	return (
		<>
			<h2>{props.title}</h2>
			{showContent ? (
				<>
					<p>{props.shortContent}</p>
					<button onClick={showMoreContent}>Pokaż więcej</button>
				</>
			) : (
				<>
					<p>{props.content}</p>
					<button onClick={showLessContent}>X</button>
				</>
			)}
		</>
	);
};

const Blog = () => {
	const data = [
		{
			title: `Przepis na naleśniki`,
			shortContent: `Na słodko...`,
			id: 1,
			content: `dlugi tekst lorem ipsum ador lorem ipsum ador lorem ipsum ador lorem ipsum ador `,
		},
		{
			title: `Przepis na kurczaka w piekarniku`,
			shortContent: `Na ostro...`,
			id: 2,
			content: `dlugi tekst lorem ipsum ador lorem ipsum ador lorem ipsum ador lorem ipsum ador `,
		},
	];

	const listPost = data.map((el) => <Post key={el.id} {...el} />);

	return (
		<>
			<h1>Lista Przepisów</h1>
			<hr />
			{listPost}
		</>
	);
};

ReactDOM.render(<Blog />, document.getElementById(`root`));
