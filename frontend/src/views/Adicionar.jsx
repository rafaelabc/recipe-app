import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Api from '../services/Api'
import SaveIcon from '@material-ui/icons/Save';
import MuiAlert from '@material-ui/lab/Alert';
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

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}
function Adicionar(props) {
	const classes = useStyles();
	const [titulo, setTitulo] = useState("")
	const [categoria, setCategoria] = useState("")
	const [tipoRefeicao, setTipoRefeicao] = useState("")
	const [enderecoImg, setEnderecoImg] = useState("")
	const [ingredientes, setIngredientes] = useState("")
	const [instrucoes, setInstrucoes] = useState("")
	const [linkVideo, setLinkVideo] = useState("")
	const [nivelDificuldade, setNivelDificuldade] = useState("")
	const [qtdPessoasServidas, setQtdPessoasServidas] = useState("")
	const [showOk, setShowOk] = useState(false)
	const [showErro, setShowErro] = useState(false)
	function clearInput(){
		setTitulo("")
		setCategoria("")
		setTipoRefeicao("")
		setEnderecoImg("")
		setIngredientes("")
		setInstrucoes("")
		setLinkVideo("")
		setNivelDificuldade("")
		setQtdPessoasServidas("")
	}
	async function salvar() {
		if (titulo.length === 0 || categoria.length === 0 || tipoRefeicao.length === 0 || enderecoImg.length === 0 || ingredientes.length === 0 || instrucoes.length === 0 || linkVideo.length === 0 || nivelDificuldade === 0 || qtdPessoasServidas === 0) {
			setShowErro(true)
			const timer = setTimeout(() => {
				setShowErro(false);
			}, 4000);
			return () => clearTimeout(timer);
		} else {
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
			setShowOk(true)
			const timer = setTimeout(() => {
				setShowOk(false);
				clearInput();

			}, 3000);
			return () => clearTimeout(timer);
		}
	}
	return (
		<div id="Add" className={classes.root}>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<form style={{ margin: "5px" }} noValidate autoComplete="off">
					<div>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								{showOk ? <Alert severity="success">Adicionado com sucesso</Alert> : "" }
								{showErro ? <Alert severity="error">Existem campos vazios! Verifique se todos campos são válidos</Alert> : "" }



							</Grid>
							<Grid item xs={12}>
								<Typography variant="h4">Adicionar receita</Typography>
							</Grid>
							<Grid item xs={12}>
								<TextField
									fullWidth
									required
									id="outlined-read-only-input"
									label="Título"
									onChange={(e) => setTitulo(e.target.value)}
									defaultValue={titulo}

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
									defaultValue={categoria}

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
									defaultValue={tipoRefeicao}

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
									defaultValue={qtdPessoasServidas}

									variant="outlined"
								/>
							</Grid>
							<Grid item xs={2}>
								<TextField
									fullWidth
									required
									id="outlined-read-only-input"
									label="Nível de dificuldade"
									defaultValue={nivelDificuldade}
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
									defaultValue={linkVideo}

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
									defaultValue={enderecoImg}

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
									defaultValue={instrucoes}
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
									defaultValue={ingredientes}
									variant="outlined"

								/>
							</Grid>
							<Grid item xs={12}>
								<Button size="large" startIcon={<SaveIcon />}
									variant="contained" color="primary" autoFocus onClick={() => salvar()}    >
									Salvar
								</Button>
							</Grid>

						</Grid>

					</div>

				</form>


			</main>
		</div>
	)
}
export default Adicionar;