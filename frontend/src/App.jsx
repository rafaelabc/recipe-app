import SuasReceitas from './views/SuasReceitas';
import DrawerMenu from "./components/Drawer";
import SugestoesReceitas from './views/SugestoesReceitas'
import Sobre from './views/Sobre'
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Adicionar from './views/Adicionar'

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},

}));
function App() {
	const classes = useStyles();

	return (
		<div id="App" className={classes.root}>

				<DrawerMenu />

				<BrowserRouter >
					<Switch>
						<Route path="/" exact={true} component={SuasReceitas} />
						<Route path="/sugestoes-receitas" exact={true} component={SugestoesReceitas} />
						<Route path="/sobre" exact={true} component={Sobre} />
						<Route path="/add" exact={true} component={Adicionar} />
						<Redirect from='*' to='/' />

					</Switch>
			</BrowserRouter>

		</div>
	)
}
export default App;