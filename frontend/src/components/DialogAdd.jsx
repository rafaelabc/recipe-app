import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Api from '../services/Api'
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import green from '@material-ui/core/colors/green';

const colorGreen = green['A700'];

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

function DialogAdd(props) {

	const [titulo, setTitulo] = useState("")
	const [categoria, setCategoria] = useState("")
	const [tipoRefeicao, setTipoRefeicao] = useState("")
	const [enderecoImg, setEnderecoImg] = useState("")
	const [ingredientes, setIngredientes] = useState("")
	const [instrucoes, setInstrucoes] = useState("")
	const [linkVideo, setLinkVideo] = useState("")
	const [nivelDificuldade, setNivelDificuldade] = useState(0)
	const [qtdPessoasServidas, setQtdPessoasServidas] = useState(0)

	async function salvar() {
		// if (titulo.length === 0 || categoria.length === 0 || tipoRefeicao.length === 0 || enderecoImg.length === 0 || ingredientes.length === 0 || instrucoes.length === 0 || linkVideo.length === 0 || nivelDificuldade === 0 || qtdPessoasServidas === 0) {
		// 	return null;
		// }
			const data = {
				titulo,
				categoria,
				tipoRefeicao,
				enderecoImg,
				ingredientes,
				instrucoes,
				linkVideo,
				nivelDificuldade,
				qtdPessoasServidas
			}
			await Api.post('receitas', data)
			props.handleClose();
	}
	return (
		<div id="dialogAdd">


			<DialogTitle id="customized-dialog-title" onClose={() => props.handleClose()}>
				Adicionar receita


			</DialogTitle>
			<DialogContent dividers>

				<form style={{ margin: "5px" }} noValidate autoComplete="off">
					<div>
						<Grid container spacing={3}>

							<Grid item xs={12}>
								<TextField
									fullWidth
									required
									id="outlined-read-only-input"
									label="Título"
									onChange={(e) => setTitulo(e.target.value)}
									defaultValue=""

									variant="outlined"
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									fullWidth
									required
									id="outlined-read-only-input"
									label="Categoria"
									onChange={(e) => setCategoria(e.target.value)}
									defaultValue=""

									variant="outlined"
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									fullWidth
									required
									id="outlined-read-only-input"
									label="Tipo de Refeição"
									onChange={(e) => setTipoRefeicao(e.target.value)}
									defaultValue=""

									variant="outlined"
								/>
							</Grid>
							<Grid item xs={2}>

								<TextField
									fullWidth
									required
									id="outlined-read-only-input"
									label="Pessoas Servidas"
									onChange={(e) => setQtdPessoasServidas(e.target.value)}
									defaultValue=""

									variant="outlined"
								/>
							</Grid>
							<Grid item xs={2}>
								<TextField
									fullWidth
									required
									id="outlined-read-only-input"
									label="Nível de dificuldade"
									defaultValue=""
									onChange={(e) => setNivelDificuldade(e.target.value)}

									variant="outlined"
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									fullWidth
									required
									id="outlined-read-only-input"
									label="Link vídeo"
									onChange={(e) => setLinkVideo(e.target.value)}
									defaultValue=""

									variant="outlined"
								/>
							</Grid>
							<Grid item xs={4}>
								<TextField
									fullWidth
									required
									id="outlined-read-only-input"
									label="Endereço da imagem"
									onChange={(e) => setEnderecoImg(e.target.value)}
									defaultValue=""

									variant="outlined"
								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									fullWidth
									required
									id="outlined-multiline-static"
									label="Instruções"
									multiline
									onChange={(e) => setInstrucoes(e.target.value)}
									rows={10}
									defaultValue=""
									variant="outlined"

								/>
							</Grid>
							<Grid item xs={6}>
								<TextField
									fullWidth
									required
									id="outlined-multiline-static"
									label="Ingredientes"
									onChange={(e) => setIngredientes(e.target.value)}
									multiline
									rows={6}
									defaultValue=""
									variant="outlined"

								/>
							</Grid>

						</Grid>






					</div>


				</form>

			</DialogContent>
			<DialogActions>


				<Button variant="contained" color="primary" autoFocus  onClick={() => salvar()}    >
					Salvar
        		  </Button>

			</DialogActions>
		</div>
	)
}
export default DialogAdd;