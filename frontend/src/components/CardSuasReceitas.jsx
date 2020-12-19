
import { makeStyles } from "@material-ui/core/styles";
import api from '../services/Api'
import React, { useState, useEffect } from 'react'
import ReactLoading from "react-loading";
import Dialog from '@material-ui/core/Dialog';
import DialogEdit from './DialogEdit'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import InfoIcon from '@material-ui/icons/Info';
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
		flexDirection: 'row',
		justifyContent: 'space-around',
		overflow: 'hidden',
		backgroundColor: theme.palette.background.paper,
	},
	gridList: {
		width: "100%",
		height: "100%",
	},
	gridTile: {
		width: "100%",
		height: "100%",
	},
	icon: {
		color: 'rgba(255, 255, 255, 0.54)',
	},
	card: {
		maxWidth: 345,
		margin: 10
	},
	contentCard: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	media: {
		height: 140,
	},
}));
function CardSuasReceitas() {
	const [tileData, setTileData] = useState([])
	const [detalhesRecipe, setDetalhesRecipe] = useState({})
	const [loading, setLoading] = useState(false)
	const classes = useStyles();
	const [open, setOpen] = useState(false);
	const handleClose = () => {
		setOpen(false);
	};
	async function loadMeal() {
		setLoading(true)

		var responseApi = [];
		await api.get('receitas').then((response) => {
			responseApi = response.data;
		})
		setTileData(responseApi)
		setLoading(false)
	}
	useEffect(() => {

		loadMeal()
	}, [])
	return (
		<div id="CardSuasReceitas" className={classes.root}>
			{loading ? <ReactLoading type="bars" color="#3f51b5" /> :
				<div>
					<Dialog onClose={(_) => setOpen(false)} aria-labelledby="customized-dialog-title" maxWidth="lg" open={open}>
						<DialogEdit loadMeal={loadMeal} detalhesReceita={detalhesRecipe} handleClose={handleClose} />
					</Dialog>
					<div className={classes.contentCard}>
						{tileData.map((tile, index) => {
							return (
								<Card className={classes.card}>
									<CardActionArea>
										<CardMedia
											className={classes.media}
											image={tile.enderecoImg}
											title="Contemplative Reptile"
										/>
										<CardContent>
											<Typography gutterBottom variant="h5" component="h2">
												{tile.titulo}
											</Typography>
											<Typography variant="body2" color="textSecondary" component="p">
												{tile.categoria}
											</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<Button size="large" startIcon={<InfoIcon />}
											variant="contained" color="primary" autoFocus onClick={() => {
												setDetalhesRecipe(tile);
												setOpen(true)
											}} >
											Ver Detalhes
										</Button>
									</CardActions>
								</Card>
							)
						})}

					</div>

				</div>
			}
		</div>
	)
}
export default CardSuasReceitas;