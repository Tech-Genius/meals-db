import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

const AppContext = React.createContext()

const allMealsUrl = 'https://themealdb.com/api/json/v1/1/search.php?s='

const randomMealsUrl = 'https://themealdb.com/api/json/v1/1/random.php'

const AppProvider = ({ children }) => {
    const [meals, setMeals] = useState([])
    const [loading, setLoading] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [selectedMeal, setSelectedMeal] = useState(null)


    const fetchMeal = async (url) => {
        setLoading(true)
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.meals) {
                setMeals(data.meals);
            }
            else {
                setMeals([])
            }
        } catch (error) {
            console.log(error.response);
        }
        setLoading(false)
    };

    const fetchRandomMeals = () => {
        fetchMeal(randomMealsUrl)
    }

    const selectMeal = (idMeal, favouriteMeal) => {

        let meal;
        meal = meals.find((meal) => meal.idMeal === idMeal)
        setSelectedMeal(meal)
        setShowModal(true)
    }

    const closeModal = () => {
        setShowModal(false)
    }
    useEffect(() => {
        fetchMeal(allMealsUrl);
    }, []);

    useEffect(() => {
        if (!searchTerm) return
        fetchMeal(`${allMealsUrl}${searchTerm}`);
    }, [searchTerm]);



    return <AppContext.Provider value={{ meals, loading, setSearchTerm, fetchRandomMeals, showModal, selectedMeal, selectMeal, closeModal }}>
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }