import {Info, Book, Dashboard, Add} from '@material-ui/icons';
export function getItemsMenu(){
	const text = {
		actionItems: [
			{
				label: "Adicionar Receita",
				icon: <Add/>,
				action: "/add"
			}
		],
		menuItems: [
			{
				label: "Suas Receitas",
				icon: <Book />,
				action: "/"

			},
			{
				label: "Sugestões de Receitas",
				icon: <Dashboard/>,
				action: "/sugestoes-receitas"

			},
			{
				label: "Sobre",
				icon: <Info />,
				action: "/sobre"
			}
		]
	};
	return text
}