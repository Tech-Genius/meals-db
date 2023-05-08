import {BsHandThumbsUp} from 'react-icons/bs'
import { useGlobalContext } from "../context"

const Meals = () => {
    const { meals, loading, selectMeal } = useGlobalContext()

    if (loading){
        return <div className="loading">
            <h4>Loading...</h4>
        </div>
    }

    if (meals.length < 1){
        return <div className="error">
            <h4>Sorry! We do not have that meal </h4>
        </div>
    }

    return (
        <div className="meals">
            {
                meals.map((singleMeal) => {
                    const { idMeal, strMeal: title, strMealThumb: image } = singleMeal
                    return <div className="mealBox" key={idMeal}>
                        <img src={image} alt="" onClick={ () => selectMeal(idMeal)} />
                        <div className="text">
                            <h5>{title}</h5>
                            <button className="likebtn"><BsHandThumbsUp/></button>
                        </div>
                    </div>

                }
                )
            }
        </div>
    )
}

export default Meals