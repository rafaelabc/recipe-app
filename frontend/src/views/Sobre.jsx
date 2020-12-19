import { makeStyles } from "@material-ui/core/styles";
import {

	Typography,

} from "@material-ui/core";
import green from '@material-ui/core/colors/green';

const colorGreen = green['A700'];
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
function Sobre() {
	const classes = useStyles();

	return (
		<div id="Sobre" className={classes.root}>
			<main className={classes.content}>
				<div className={classes.toolbar} />

				<Typography variant="h2" gutterBottom color="inherit" style={{color: colorGreen}} component="h2">
					Universidade Federal de Lavras
				</Typography>
				<Typography variant="h3" gutterBottom color="primary" component="h3">
					GCC209 - Programação Web
				</Typography>
				<Typography variant="h4" gutterBottom  component="h4">
					Projeto Prático
				</Typography>
				<Typography variant="h5" gutterBottom component="h5">
					Professora: Ana Paula Piovesan Melchiori
				</Typography>
				<Typography variant="h5" gutterBottom component="h5">
					Aluna: Rafaela Bárbara Custódio
				</Typography>
			</main>
		</div>
	)
}
export default Sobre;