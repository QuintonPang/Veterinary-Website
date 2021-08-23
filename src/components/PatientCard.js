import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
	  root: {
		 
		maxWidth:345,		
		    },
	 mobile:{


		width:"100vw",

	 },

	  media: {
		      height: 0,
		      paddingTop: '56.25%', // 16:9
		    },
	  expand: {
		      transform: 'rotate(0deg)',
		      marginLeft: 'auto',
		      transition: theme.transitions.create('transform', {
			            duration: theme.transitions.duration.shortest,
			          }),
		    },
	  expandOpen: {
		      transform: 'rotate(180deg)',
		    },
	  avatar: {

		      backgroundColor: red[500],
		    },
}));

const PatientCard= (props) =>{


	  const { owner,date,commonName,scientificName,description,image } = props;	  
	 
	  const classes = useStyles();
	  const [expanded, setExpanded] = React.useState(false);

	  const handleExpandClick = () => {
		      setExpanded(!expanded);
		    };

	  return (

		  <Grid item xs={12} sm={4}> 
	
		<Card className={window.innerWidth<=960?(classes.mobile):(classes.root)}>
			<CardHeader avatar={
				            <Avatar aria-label="animal" className={classes.avatar}>
				{owner.charAt(0)}
				            </Avatar>
				          }
		          action={
				            <IconButton aria-label="settings">
				              <MoreVertIcon />
				            </IconButton>
				          }
		          title={owner}
		          subheader={date}
		        />
		        <CardMedia

		  	
		         className={classes.media}
			//image="https://images.unsplash.com/photo-1484406566174-9da000fda645?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1235&q=80"
		  image={image}
		          title={owner}
		        >
		

		  	</CardMedia>
		        <CardContent>
		          <Typography variant="body2" color="textSecondary" component="p">
		  {commonName}
		          </Typography>
		        </CardContent>
		        <CardActions disableSpacing>
		          <IconButton aria-label="add to favorites">
		            <FavoriteIcon />
		          </IconButton>
		          <IconButton aria-label="share">
		            <ShareIcon />
		          </IconButton>
		          <IconButton
		            className={clsx(classes.expand, {
				                [classes.expandOpen]: expanded,
				              })}
		            onClick={handleExpandClick}
		            aria-expanded={expanded}
		            aria-label="show more"
		          >
		            <ExpandMoreIcon />
		          </IconButton>
		        </CardActions>
		        <Collapse in={expanded} timeout="auto" unmountOnExit>
		          <CardContent>

		  <Typography paragraph>
		                                  Scientific Name:                                                          </Typography>
		  <Typography paragraph>
		                                  {scientificName}                                                           </Typography>
		            <Typography paragraph>Description:</Typography>
		            <Typography paragraph>
		       		{description} 
		            </Typography>
		            <Typography paragraph>

			    </Typography>
		            </CardContent>
		        </Collapse>
		      </Card>

		  </Grid>
		    );
};


export default PatientCard;

