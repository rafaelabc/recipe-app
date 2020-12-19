import React, { useState } from "react";
import {
	AppBar,
	CssBaseline,
	Divider,
	Drawer,
	Hidden,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
	Link
} from "@material-ui/core";
import { Menu } from '@material-ui/icons';

import { makeStyles, useTheme } from "@material-ui/core/styles";
import { getItemsMenu } from "../utils/textUtils";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	drawer: {
		[theme.breakpoints.up("sm")]: {
			width: drawerWidth,
			flexShrink: 0,
		},
	},
	appBar: {
		[theme.breakpoints.up("sm")]: {
			width: `calc(100% - ${drawerWidth}px)`,
			marginLeft: drawerWidth,
		},
	},
	menuButton: {
		marginRight: theme.spacing(2),
		[theme.breakpoints.up("sm")]: {
			display: "none",
		},
	},
	toolbar: theme.mixins.toolbar,
	drawerPaper: {
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));
const myPathName = window.location.pathname;

function DrawerMenu(props) {
	const text = getItemsMenu();
	const menuItems = text.menuItems;
	const actionItems = text.actionItems;
	const { window } = props;
	const classes = useStyles();
	const theme = useTheme();
	const [mobileOpen, setMobileOpen] = useState(false);

	var ativo = false;
	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const drawer = (
		<div>
			<Divider />
			<List>
				{actionItems.map((items, index) => (
					<Link key={index} href={items.action}>
						<ListItem button key={index}>
							<ListItemIcon>{items.icon}</ListItemIcon>
							<ListItemText primary={items.label} />
						</ListItem>
					</Link>

				))}
			</List>
			<Divider />
			<List>
				{menuItems.map((items, index) => {

					if (myPathName === items.action) {
						ativo = true;
					} else {
						ativo = false;
					}
					return (

						<Link key={index} href={items.action}>
							<ListItem selected={ativo} button >
								<ListItemIcon>{items.icon}</ListItemIcon>
								<ListItemText primary={items.label} />
							</ListItem>
						</Link>
					)
				})}
			</List>
		</div>
	);

	const container =
		window !== undefined ? () => window().document.body : undefined;
	return (
		<div className={classes.root}>

			<CssBaseline />
			<AppBar position="fixed" className={classes.appBar}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						edge="start"
						onClick={handleDrawerToggle}
						className={classes.menuButton}
					>
						<Menu open />
					</IconButton>
					<Typography variant="h6" noWrap>
						ReceitasApps
          			</Typography>
				</Toolbar>
			</AppBar>
			<nav className={classes.drawer} aria-label="mailbox folders">
				<Hidden smUp implementation="css">
					<Drawer
						container={container}
						variant="temporary"
						anchor={theme.direction === "rtl" ? "right" : "left"}
						open={mobileOpen}
						onClose={handleDrawerToggle}
						classes={{
							paper: classes.drawerPaper,
						}}
						ModalProps={{
							keepMounted: true, // Better open performance on mobile.
						}}
					>
						{drawer}
					</Drawer>
				</Hidden>
				<Hidden xsDown implementation="css">
					<Drawer
						classes={{
							paper: classes.drawerPaper,
						}}
						variant="permanent"
						open
					>
						{drawer}
					</Drawer>
				</Hidden>
			</nav>
		</div>
	);
}
export default DrawerMenu;
