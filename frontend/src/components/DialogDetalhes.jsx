import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import YouTubeIcon from '@material-ui/icons/YouTube';
const styles = (theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(2),
	},
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
	chip: {
		margin: theme.spacing(1),
	}
});
const DialogContent = withStyles((theme) => ({
	root: {
		padding: theme.spacing(2),
	},
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
	root: {
		margin: 0,
		padding: theme.spacing(1),
	},
}))(MuiDialogActions);
const DialogTitle = withStyles(styles)((props) => {
	const { children, classes, onClose, ...other } = props;
	return (
		<MuiDialogTitle disableTypography className={classes.root} {...other}>
			<Typography variant="h6">{children}</Typography>
			{onClose ? (
				<IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
});

function DialogDetalhes(props) {
	console.log(props)

	return (
		<div id="dialogDetalhes">


			<DialogTitle id="customized-dialog-title" onClose={() => props.handleClose()}>
				Detalhes da receita
       			</DialogTitle>
			<DialogContent dividers>
				<Typography variant="h4" gutterBottom>
					Vídeo
          		</Typography>
				<div>
					<Chip
						href={props.detalhesReceita.strYoutube}
						icon={<YouTubeIcon />}
						label="Link Vídeo"
						component="a"
						color="secondary"
						clickable
					/>
				</div>
				<Typography variant="h4" gutterBottom>
					Ingredients
          		</Typography>
				<div>
					{props.detalhesReceita.strIngredient1  ? <Chip style={{ margin: "5px" }} label={props.detalhesReceita.strMeasure1 + ' - ' + props.detalhesReceita.strIngredient1} /> : ""}
					{props.detalhesReceita.strIngredient2  ? <Chip style={{ margin: "5px" }} label={props.detalhesReceita.strMeasure2 + ' - ' + props.detalhesReceita.strIngredient2} /> : ""}
					{props.detalhesReceita.strIngredient3  ? <Chip style={{ margin: "5px" }} label={props.detalhesReceita.strMeasure3 + ' - ' + props.detalhesReceita.strIngredient3} /> : ""}
					{props.detalhesReceita.strIngredient4  ? <Chip style={{ margin: "5px" }} label={props.detalhesReceita.strMeasure4 + ' - ' + props.detalhesReceita.strIngredient4} /> : ""}
					{props.detalhesReceita.strIngredient5  ? <Chip style={{ margin: "5px" }} label={props.detalhesReceita.strMeasure5 + ' - ' + props.detalhesReceita.strIngredient5} /> : ""}
					{props.detalhesReceita.strIngredient6  ? <Chip style={{ margin: "5px" }} label={props.detalhesReceita.strMeasure6 + ' - ' + props.detalhesReceita.strIngredient6} /> : ""}
					{props.detalhesReceita.strIngredient7  ? <Chip style={{ margin: "5px" }} label={props.detalhesReceita.strMeasure7 + ' - ' + props.detalhesReceita.strIngredient7} /> : ""}
					{props.detalhesReceita.strIngredient8  ? <Chip style={{ margin: "5px" }} label={props.detalhesReceita.strMeasure8 + ' - ' + props.detalhesReceita.strIngredient8} /> : ""}
					{props.detalhesReceita.strIngredient9  ? <Chip style={{ margin: "5px" }} label={props.detalhesReceita.strMeasure9 + ' - ' + props.detalhesReceita.strIngredient9} /> : ""}
					{props.detalhesReceita.strIngredient10  ? <Chip style={{ margin: "5px" }} label={props.detalhesReceita.strMeasure10 + ' - ' + props.detalhesReceita.strIngredient10} /> : ""}
					{props.detalhesReceita.strIngredient11  ? <Chip style={{ margin: "5px" }} label={props.detalhesReceita.strMeasure11 + ' - ' + props.detalhesReceita.strIngredient11} /> : ""}
					{props.detalhesReceita.strIngredient12  ? <Chip style={{ margin: "5px" }} label={props.detalhesReceita.strMeasure12 + ' - ' + props.detalhesReceita.strIngredient12} /> : ""}
					{props.detalhesReceita.strIngredient13  ? <Chip style={{ margin: "5px" }} label={props.detalhesReceita.strMeasure13 + ' - ' + props.detalhesReceita.strIngredient13} /> : ""}
					{props.detalhesReceita.strIngredient14  ? <Chip style={{ margin: "5px" }} label={props.detalhesReceita.strMeasure14 + ' - ' + props.detalhesReceita.strIngredient14} /> : ""}
					{props.detalhesReceita.strIngredient15  ? <Chip style={{ margin: "5px" }} label={props.detalhesReceita.strMeasure15 + ' - ' + props.detalhesReceita.strIngredient15} /> : ""}
					{props.detalhesReceita.strIngredient16  ? <Chip style={{ margin: "5px" }} label={props.detalhesReceita.strMeasure16 + ' - ' + props.detalhesReceita.strIngredient16} /> : ""}
					{props.detalhesReceita.strIngredient17  ? <Chip style={{ margin: "5px" }} label={props.detalhesReceita.strMeasure17 + ' - ' + props.detalhesReceita.strIngredient17} /> : ""}
					{props.detalhesReceita.strIngredient18  ? <Chip style={{ margin: "5px" }} label={props.detalhesReceita.strMeasure18 + ' - ' + props.detalhesReceita.strIngredient18} /> : ""}
					{props.detalhesReceita.strIngredient19  ? <Chip style={{ margin: "5px" }} label={props.detalhesReceita.strMeasure19 + ' - ' + props.detalhesReceita.strIngredient19} /> : ""}
					{props.detalhesReceita.strIngredient20 ? <Chip style={{ margin: "5px" }} label={props.detalhesReceita.strMeasure20 + ' - ' + props.detalhesReceita.strIngredient20} /> : ""}

				</div>
				<Typography variant="h4" gutterBottom>
					Instructions
          			</Typography>
				<Typography gutterBottom>
					{props.detalhesReceita.strInstructions}
				</Typography>

			</DialogContent>
			<DialogActions>
				<Button autoFocus onClick={() => props.handleClose()} color="primary">
					Fechar
        		  </Button>
			</DialogActions>
		</div>
	)
}
export default DialogDetalhes;