// import React, { Component } from 'react';

// class PokeSingle extends Component {

//     state={
//         data:[],
//         isLoading: false,
//     }

//     componentDidMount(){
//         this.setState({isLoading:true});

//         fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.params.pokesingle}`)
//         .then((res) => res.json())
//         .then((data) => this.setState({ data: data, isLoading: false }));
//     }
  

        
    
//     render() {
//         if (this.state.isLoading) {
//             return <p>Loading...</p>;
//           }
      
//         return (
            
//             <div>
//                 <h>{this.state.data.name}</h>
//                 <img 
//                 src={this.state.data.sprites?.other.dream_world.front_default}
//                 alt={this.state.data.name}
//                 />
//             </div>
//         );
//     }
// }

// export default PokeSingle;


import React,{useEffect, useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';


const PokeSingle = () => {
    const params = useParams();
    const navigate=  useNavigate();
    const [data, setData]= useState([]);
   
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios
        .get(`https://pokeapi.co/api/v2/pokemon/${params.pokesingle}`)
        .then ((res) => {
            setData(res.data)
            setIsLoading(false);
        });
    }, []);

    if(isLoading){
        return <p>Loading...</p>;
    }
    return (
        <div>
           <h>{data.name}</h>
           
      <img 
       src={data.sprites?.other.dream_world.front_default}
        alt={data.name}
      />
      <button onClick={() => navigate(-1)}>Go Back </button>
    </div>
    );
};

export default PokeSingle;