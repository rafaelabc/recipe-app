import { makeStyles } from "@material-ui/core/styles";
import CardSuasReceitas from '../components/CardSuasReceitas'

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",

	},
	toolbar: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),

	},

}));


function App(props) {
	const classes = useStyles();

	return (
		<div id="App" className={classes.root}>

			<main className={classes.content}>
				<div className={classes.toolbar} />
				<CardSuasReceitas/>
			</main>
		</div>
	);
}

export default App;
