import React from "react";
import { AppBar,Toolbar,Typography,Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import { spacing } from '@material-ui/system';

const Navbar =()=>{


	const useStyles = makeStyles(theme => ({ 

		offset: theme.mixins.toolbar,
		
	
	}
		

	))



	const classes = useStyles();




	return(


		<React.Fragment> 

			<AppBar position="fixed"> 

				<Toolbar>

		<Grid container spacing={1}>

					{/* content */}
				<Grid item>	
					<Typography variant="h6">

						Veterinary Web
					</Typography>
				</Grid>
				<Grid item>
					<FavoriteOutlinedIcon/>	
				</Grid>
		</Grid>

				</Toolbar>

			</AppBar> 

			<Toolbar /> 
		
			<div className={classes.offset} />
		</React.Fragment>


	);


};

export default Navbar;
