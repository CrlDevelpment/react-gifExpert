import {useState} from 'react'

import { GifGrid, AddCategory } from './components';


export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Goku']);
  
  const onAddCategory = (newCategory)=>{

    if (categories.includes(newCategory)) return

    setCategories(cat => [newCategory, ...cat]);


  }

  return (
    <>
        
      <h1>GifExpertApp</h1>


      <AddCategory onNewCategory = {value => onAddCategory(value)}></AddCategory>
          
        {
          categories.map((categorie)=> <GifGrid key={categorie } category={categorie}/>)
        }

    </>
  )
}

