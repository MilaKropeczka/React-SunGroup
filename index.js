const Post = (props) => {
	const [showContent, setShowContent] = React.useState(false);

	const showMoreContent = () => {
		setShowContent(true);
	};
	const showLessContent = () => {
		setShowContent(false);
	};

	return (
		<div>
			<h3>{props.title}</h3>
			{showContent ? (
				<>
					<p>{props.content}</p>
					<button onClick={showLessContent}>X</button>
				</>
			) : (
				<>
					<p>{props.shortContent}</p>
					<button onClick={showMoreContent}>Czytaj więcej</button>
				</>
			)}
		</div>
	);
};

const Blog = () => {
	const data = [
		{
			id: 1,
			title: `Naleśniki z dzemem`,
			content: `Do miski wsyp pełną szklankę mąki pszennej + jeszcze dwie łyżki mąki. Będzie to około 230 gramów mąki. Używam zazwyczaj mąki pszennej tortowej lub mąki uniwersalnej. Wbij trzy średniej wielkości jajka i wlej szklankę mleka oraz szklankę wody. Dodaj szczyptę soli i wlej cztery łyżki oleju roślinnego`,
			shortContent: `Na słodko...`,
			showContent: false,
		},
		{
			id: 2,
			title: `Kurczak w piekarniku`,
			content: `Piekarnik nagrzać do 190 stopni. Kurczaka wysmarować solą i pieprzem, estragonem oraz czerwoną papryką. Do środka włożyć ćwiartki cytryny z ponacinaną skórką lub podziurawioną widelcem oraz cebulę, gałązki natki, rozmarynu i tymianku. Nogi kurczaka związać sznurkiem, całość polać i wysmarować roztopionym masłem.`,
			shortContent: `Na słono...`,
			showContent: true,
		},
	];
	const listPost = data.map((el) => <Post key={el.id} {...el} />);
	return (
		<div>
			<h1>Przepisy</h1>
			<hr />
			{listPost}
		</div>
	);
};

ReactDOM.render(<Blog />, document.getElementById(`root`));
