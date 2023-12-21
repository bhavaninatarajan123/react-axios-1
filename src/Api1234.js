import React,{useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import axios from 'axios';
function App123(){
    const [title,settitle]=useState([])

    useEffect(()=>{

        axios.get('https://api.tvmaze.com/shows/1/episodes')
        .then((res)=>{
            settitle(res.data)
			console.log(res.data)
        })

    },[])
    

    return(
		
        <div className='row-1'style={{ width:'100%',display:'flex',flexWrap:'wrap',marginLeft:'30px'}} >
	   
	 

			 {

               title.map((title)=>(
				
		<Card style={{ width:'25%',height:'70vh',margin:'30px',textAlign:'center'}}>
      
     		 <Card.Body>

	 		 	<Card.Img variant="top" src={title.image.medium} />
       				<Card.Title>Title :  {title.name}</Card.Title>
      				  		<Card.Text>id :  {title.id}</Card.Text>
							
							<Card.Text>runtime :  {title.runtime}</Card.Text>
							<Card.Text> rating :  {title.rating.average}</Card.Text>
							<Card.Text> number :  {title.number}</Card.Text> 
							 <Card.Text>type :  {title.type}</Card.Text>
							<Card.Text>airdate :  {title.airdate}</Card.Text>  
							

							
							
        				
      		</Card.Body>
    	</Card>
           
               
             
              
		  
			   ))
            }
		</div> 

       
    )
}

export default App123 ;