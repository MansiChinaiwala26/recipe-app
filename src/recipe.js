import React from "react";
import style from "./recipe.module.css";
const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <h5>Ingredients:</h5>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <h5>Calories:</h5>
            <p>{calories}</p>
            <img className={style.image} src={image} alt="" />

        </div>
    );
};

export default Recipe;