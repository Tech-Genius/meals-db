import { useState } from "react"
import { useGlobalContext } from "../context"

const Search = () => {
    const [text, setText] = useState('')

    const {setSearchTerm, fetchRandomMeals} = useGlobalContext()

    const handleChange = (e) => {
        setText(e.target.value)
        console.log(text)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(text){
            setSearchTerm(text)
            setText('')
        }
    }

    const handleRandomMeal = () => {
        setSearchTerm('')
        setText('')
        fetchRandomMeals()
    }
    return (
        <div className="search">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="type favourite meal" value={text} onChange={handleChange} className="form-input" />
                <button type="submit" className="btn">search</button>
                <button type="submit" className="btn btn-hipster" onClick={handleRandomMeal}>suprise me!</button>
            </form>
        </div>
    )
} 

export default Search