import { makeStyles } from "@material-ui/core/styles";
import CardRecipe from "../components/CardRecipe"
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
function SugestoesReceitas(){
	const classes = useStyles();

	return(
		<div id="SugestoesReceitas" className={classes.root}>
		<main className={classes.content}>
			<div className={classes.toolbar} />
			<CardRecipe/>
		</main>
	</div>
	)
}
export default SugestoesReceitas;