
import './App.css';
import { Grid } from "@material-ui/core";
import Navbar from "./components/Navbar.js";
import PatientCard from "./components/PatientCard.js";
const patientList= require("./components/patientList.json");

function App() {
  return (
    <div>

	<Grid direction="column">

	  

	   

	  	<Grid item>

			<Navbar/>

	  	</Grid>
		<Grid container item>
			<Grid item xs={0} sm={1}/>


	  		

	  		
	  		
	  		<Grid container item  spacing={3} xs={12} sm={10}>
			
	  		{Object.values(patientList).map(patient=>{

				




				return ( 



					<PatientCard {...patient} image={"https://picsum.photos/id/"+Math.floor(Math.random()*1010)+"/5000"} />
					
			);
			})}

	  		</Grid>

	  		<Grid item xs={0} sm={1}/>
	  	</Grid>
	  	

	  </Grid>
    </div>
  );
}

export default App;
