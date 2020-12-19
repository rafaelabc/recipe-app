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
import Chip from '@material-ui/core/Chip';
import Api from '../services/Api'
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
import VisibilityIcon from '@material-ui/icons/Visibility';
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

function DialogDetalhes(props) {

	const [readonly, setReadonly] = useState(true)
	const [titulo, setTitulo] = useState(props.detalhesReceita.titulo)
	const [categoria, setCategoria] = useState(props.detalhesReceita.categoria)
	const [tipoRefeicao, setTipoRefeicao] = useState(props.detalhesReceita.tipoRefeicao)
	const [enderecoImg, setEnderecoImg] = useState(props.detalhesReceita.enderecoImg)
	const [ingredientes, setIngredientes] = useState(props.detalhesReceita.ingredientes)
	const [instrucoes, setInstrucoes] = useState(props.detalhesReceita.instrucoes)
	const [linkVideo, setLinkVideo] = useState(props.detalhesReceita.linkVideo)
	const [nivelDificuldade, setNivelDificuldade] = useState(props.detalhesReceita.nivelDificuldade)
	const [qtdPessoasServidas, setQtdPessoasServidas] = useState(props.detalhesReceita.qtdPessoasServidas)
	function handleEdicao() {
		setReadonly(!readonly)
	}

	async function deleteRecipe() {
		await Api.delete('receitas/' + props.detalhesReceita.id);
		props.loadMeal();

		props.handleClose();
	}
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
			await Api.put('receitas/' + props.detalhesReceita.id, data)
			props.loadMeal();

			props.handleClose();


	}
	return (
		<div id="dialogDetalhes">


			<DialogTitle id="customized-dialog-title" onClose={() => props.handleClose()}>
				Sua Receita

				  <Button variant="contained" style={{ marginLeft: "20px" }} autoFocus onClick={() => handleEdicao()} color="primary">
					{readonly ? "Habilitar Edição" : "Apenas Visualizar"}
				</Button>
			</DialogTitle>
			<DialogContent dividers>

				<form style={{ margin: "5px" }} noValidate autoComplete="off">
					<div>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								{readonly ? <Chip
									icon={<VisibilityIcon />}
									label="Edição desabilitada(Apenas Visualização)"
									color="primary"
									deleteIcon={<DoneIcon />}
								/> : <Chip
										icon={<EditIcon />}
										label="Edição Habilitada"
										style={{ backgroundColor: colorGreen }}
										color="primary"
										deleteIcon={<DoneIcon />}
									/>}


							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									required
									id="outlined-read-only-input"
									label="Título"
									onChange={(e) => setTitulo(e.target.value)}
									defaultValue={props.detalhesReceita.titulo}
									InputProps={{
										readOnly: readonly,
									}}
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
									defaultValue={props.detalhesReceita.categoria}
									InputProps={{
										readOnly: readonly,
									}}
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
									defaultValue={props.detalhesReceita.tipoRefeicao}
									InputProps={{
										readOnly: readonly,
									}}
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
									defaultValue={props.detalhesReceita.qtdPessoasServidas}
									InputProps={{
										readOnly: readonly,
									}}
									variant="outlined"
								/>
							</Grid>
							<Grid item xs={2}>
								<TextField
									fullWidth
									required
									id="outlined-read-only-input"
									label="Nível de dificuldade"
									defaultValue={props.detalhesReceita.nivelDificuldade}
									onChange={(e) => setNivelDificuldade(e.target.value)}
									InputProps={{
										readOnly: readonly,
									}}
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
									defaultValue={props.detalhesReceita.linkVideo}
									InputProps={{
										readOnly: readonly,
									}}
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
									defaultValue={props.detalhesReceita.enderecoImg}
									InputProps={{
										readOnly: readonly,
									}}
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
									defaultValue={props.detalhesReceita.instrucoes}
									variant="outlined"
									InputProps={{
										readOnly: readonly,
									}}
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
									defaultValue={props.detalhesReceita.ingredientes}
									variant="outlined"
									InputProps={{
										readOnly: readonly,
									}}
								/>
							</Grid>

						</Grid>






					</div>


				</form>

			</DialogContent>
			<DialogActions>

				<Button autoFocus variant="contained" onClick={() => deleteRecipe()} color="secondary">
					Excluir
        		  </Button>
				<Button variant="contained" color="primary" autoFocus disabled={readonly} onClick={() => salvar()}    >
					Salvar
        		  </Button>

			</DialogActions>
		</div>
	)
}
export default DialogDetalhes;