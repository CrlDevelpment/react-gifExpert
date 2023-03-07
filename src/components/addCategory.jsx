import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({target})=>{
        
        setInputValue(target.value);
    }

    const addSubmit = (event)=>{

        event.preventDefault();

        if (inputValue.trim().length <=1) return

        onNewCategory(inputValue.trim());

        setInputValue('');
    }


    return (
            <form onSubmit={addSubmit}>
                <input type="text" placeholder="Buscar Gifs" value={inputValue} onChange={onInputChange}/>
            </form>
          )
}
