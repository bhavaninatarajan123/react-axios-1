import React,{useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
function Api(){
    const [title,settitle]=useState([])

    useEffect(()=>{

        fetch('https://api.tvmaze.com/shows/1/episodes')
        .then((res)=>{
			console.log(res)
            return res.json()
           
        })

        .then((data)=>settitle(data))

        .catch((err)=>console.log(err))

    })
    

    return(
		
        <div className='row-1'style={{ width:'100%',display:'flex',flexWrap:'wrap',marginLeft:'30px'}} >
	   
	 

			 {

               title.map((title)=>(
				
		<Card style={{ width:'25%',height:'70vh',margin:'30px',textAlign:'center'}}>
      
     		 <Card.Body>

	 		 	<Card.Img variant="top" src={title.image.medium} />
       				<Card.Title>Title : {title.name}</Card.Title>
      				  		<Card.Text>id :{title.id}</Card.Text>
							
							<Card.Text>runtime :{title.runtime}</Card.Text>
							<Card.Text> rating :{title.rating.average}</Card.Text>
							<Card.Text> number : {title.number}</Card.Text> 
							 <Card.Text>type :{title.type}</Card.Text>
							<Card.Text>airdate :{title.airdate}</Card.Text>  
							

							 {/* <Card.Text>{title.season}</Card.Text>
							<Card.Text> summary :{title.summary}</Card.Text>
							<Card.Text>{title.airtime}</Card.Text>
							<Card.Text>{title.airstamp}</Card.Text> 
							 <Card.Text>{title.links.self.href}</Card.Text> 
							 <Card.Text>{title.show.href}</Card.Text> 
							 <Button variant="primary">read more</Button>   */}
							
        				
      		</Card.Body>
    	</Card>
           
               
             
              
		  
			   ))
            }
		</div> 

       
    )
}

export default Api ;