import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from "@material-ui/core/styles";
import api from '../services/Api'
import React, { useState, useEffect } from 'react'
import ReactLoading from "react-loading";
import Dialog from '@material-ui/core/Dialog';
import DialogEdit from './DialogEdit'

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexWrap: 'wrap',
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

					<GridList cellHeight={250} spacing={8} cols={4} className={classes.gridList}>

						<GridListTile key="Subheader" cols={4} style={{ height: 'auto', width: '100%' }}>
						</GridListTile>
						{tileData.map((tile, index) => (
							<GridListTile className={classes.gridTile} key={index}>
								<img src={tile.enderecoImg} alt={tile.titulo} />
								<GridListTileBar
									title={tile.titulo}
									subtitle={<span>{tile.categoria}</span>}
									actionIcon={
										<IconButton
											onClick={() => {
												setDetalhesRecipe(tile);
												setOpen(true)
											}}
											aria-label={`info about ${tile.titulo}`} className={classes.icon}  >
											<InfoIcon />
										</IconButton>
									}
								/>
							</GridListTile>
						))};
			</GridList>
				</div>
			}
		</div>
	)
}
export default CardSuasReceitas;