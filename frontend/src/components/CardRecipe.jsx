import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { makeStyles } from "@material-ui/core/styles";
import apiMealDB from '../services/TheMealDB'
import React, { useState, useEffect } from 'react'
import ReactLoading from "react-loading";
import DialogDetalhes from './DialogDetalhes'
import Dialog from '@material-ui/core/Dialog';

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
	icon: {
		color: 'rgba(255, 255, 255, 0.54)',
	},
}));

function CardRecipe() {
	const [tileData, setTileData] = useState([])
	const [detalhesRecipe, setDetalhesRecipe] = useState({})
	const [loading, setLoading] = useState(false)
	const classes = useStyles();
	const [open, setOpen] = useState(false);


	const handleClose = () => {
		setOpen(false);
	};
	useEffect(() => {
		async function loadMeal() {
			setLoading(true)
			var meals = []
			for (let index = 0; index < 12; index++) {
				await apiMealDB.get('random.php').then((reponse) => {
					meals.push(reponse.data.meals[0])
				})

			}
			setTileData(meals)
			setLoading(false)
		}
		loadMeal()
	}, [])
	return (
		<div className={classes.root}>
			{loading ? <ReactLoading type="bars" color="#3f51b5" /> :
				<div>
					<Dialog onClose={(_) => setOpen(false)} aria-labelledby="customized-dialog-title" open={open}>
						<DialogDetalhes detalhesReceita={detalhesRecipe} handleClose={handleClose} openDialog={open} />

					</Dialog>

					<GridList cellHeight={250} spacing={8} cols={4} className={classes.gridList}>

						<GridListTile key="Subheader" cols={4} style={{ height: 'auto' }}>
						</GridListTile>
						{tileData.map((tile, index) => (
							<GridListTile key={index}>
								<img src={tile.strMealThumb} alt={tile.strMeal} />
								<GridListTileBar
									title={tile.strMeal}
									subtitle={<span>{tile.strCategory}</span>}
									actionIcon={
										<IconButton
										onClick={() => {
											setDetalhesRecipe(tile);
											setOpen(true)
										}}
										aria-label={`info about ${tile.title}`} className={classes.icon}  >
											<InfoIcon />
										</IconButton>
									}
								/>
							</GridListTile>
						))};
			</GridList>
				</div>
			}


		</div >
	)
}
export default CardRecipe;