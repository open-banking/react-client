import React, { useState, useContext } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Hidden from '@material-ui/core/Hidden';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import listItems from '../data/ListItems';
import MuiTreeList from './MuiTreeList';
import { AppContext } from '../hooks/reducer';
import { LOGOUT } from '../hooks/action';

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
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



function ResponsiveDrawer(props) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [listItmes, setListItems] = useState([]);

    const { state, dispatch } = useContext(AppContext);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const findActiveItemIndex = (listItems, location) => {
        if (location){
            let path = location.pathname;
            let activeItemIndex = listItems.findIndex(item => item.link === path);

            return activeItemIndex >=0 ? activeItemIndex : null;
        }
        return null;
    }

    const login = () => {
        window.location = "https://obsignin.lightapi.net?client_id=f7d42348-c647-4efb-a52d-4c5787421e75&user_type=customer&state=1222";
    }

    const { children, theme, location } = props;

    const classes = useStyles();

    const activeItemIndex = findActiveItemIndex(listItems, location);
    const treeList = (
        <MuiTreeList
            listItems={listItems}
            contentKey={'title'}
            useFolderIcons={true}
            activeListItem={activeItemIndex}
        />
    );
    
    const drawer = (
        <div>
            <div className={classes.toolbar} />
            {treeList}
        </div>
    );

    function UserButton() {
        const [anchorEl, setAnchorEl] = React.useState(null);
        
        const handleOpen = event => {
            setAnchorEl(event.currentTarget);
        };
        
        const handleClose = () => {
            setAnchorEl(null);
        };

        const handleLogout = () => {
            setAnchorEl(null);
            fetch("/logout", { credentials: 'include'})
            .then(response => {
              if(response.ok) {
                window.location.href = "/";
              } else {
                throw Error(response.statusText);
              }
            })
            .catch(error => {
                console.log("error=", error);
            });

            dispatch ({
                type: LOGOUT,
                userId: null,
                isLoggedIn: false
            })
        };
        
        if(state.isLoggedIn) {
            return (
                <div>
                    <IconButton color="inherit" aria-haspopup="true" onClick={handleOpen}>
                        <AccountCircle/>
                    </IconButton>
                    <Menu
                        id="user-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>{state.userId}</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    </Menu>                    
                </div>
            )
        }

        return (
            <div>
                <Button color="inherit" onClick={login}>
                    Login
                </Button>
            </div>
        )
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" style={{ flex: 1 }}>
                        API Portal
                    </Typography>
                    <UserButton/>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer}>
                {/* The implementation can be swap with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={props.container}
                        variant="temporary"
                        anchor="left"
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
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {children}
            </main>
        </div>
    );
}

export default ResponsiveDrawer;
