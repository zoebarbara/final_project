import {listCollection} from '../../services/db';
import {useEffect,useState} from 'react';
import Button from '../button';
import { UpperCardWrapper, CardWrapper, CardImage, TextWrapper, H3text, Category, DescriptionWrapper, ParDescription, HeartIconEmpty, ShareIcon, ButtonWrapper, IconWrapper } from './CardElements';
//Equals the line above
/*import React from 'react'
const useEffect = React.useEffect
const useState = React.useState*/

function Card() {

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
        <UpperCardWrapper>
            {recipes.map((recipe)=>{
                
                const {autorName,description,ingredients,name,pic,id} = recipe;
                // const imgStyle = {width:'30%'}
                
                return(
                    <CardWrapper key={id}>
                        <CardImage alt="pic" src={pic}/>
                        <TextWrapper>
                            <H3text>{name}</H3text>
                            <Category>Comida Asiática</Category>
                            <DescriptionWrapper>
                                <ParDescription>{description}</ParDescription>
                                </DescriptionWrapper>
                            <ButtonWrapper>
                                <Button>Ver receta</Button>
                                <IconWrapper>
                                    <HeartIconEmpty />
                                    <ShareIcon />
                                </IconWrapper>
                            </ButtonWrapper>
                            
                        </TextWrapper>
                    </CardWrapper>
            )} )}
        </UpperCardWrapper>
    )
};

export default Card;
