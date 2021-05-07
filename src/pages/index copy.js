import {listCollection} from '../services/db';
import {useEffect,useState} from 'react';
import Button from '../components/button';
import Card from '../components/Card/index';
//Equals the line above
/*import React from 'react'
const useEffect = React.useEffect
const useState = React.useState*/

function HomePage() {

    const [recipes,setRecipes]= useState([]);
    const getRecipes = async () => {
        const result = await listCollection('recipes');
        const {data,success} = result;
        if(success){
            setRecipes(data);
        }
    }

    useEffect(()=> {getRecipes()},[])
    
    return(
        <div>
            {recipes.map((recipe)=>{
                const {autorName,description,ingredients,name,pic,id} = recipe;
                const imgStyle = {width:'30%'}
                return(
                    <div key={id}>
                        <img style={imgStyle} alt="pic" src={pic}/>
                        <h3>{name}</h3>
                        <p>{autorName}</p>
                        <p>{description}</p>
                        <ul>
                           {ingredients.map((ingredient) =>{
                               return(
                                   <li key={ingredient}>{ingredient}</li>
                               )
                           })}
                            
                        </ul>
                        <Card />   
             </div>
            )} )}
        </div>
    )
};

export default HomePage;