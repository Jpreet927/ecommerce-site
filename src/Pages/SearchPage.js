import React, { useState, useEffect } from 'react'
import { womensProducts } from '../Data/WomenProducts'
import { mensProducts } from '../Data/MenProducts'
import SearchResult from '../Components/SearchResult'
import SearchIcon from '@mui/icons-material/Search';
import '../Styles/SearchPage/SearchPage.css'

function SearchPage() {
    const [search, setSearch] = useState("");
    const products = [...mensProducts, ...womensProducts];

    useEffect(() => {
        console.log(search);
    }, [search])

  return (
    <div className="search__container">
      <div className="search__main">
        <div className="search__heading">
          <h1>SEARCH PRODUCTS</h1>
          <div className="search__input">
              <SearchIcon sx={{ color: 'white' }} />
            <input type="text" placeholder="Search for a product..." value={search} onChange={(e) => {setSearch(e.target.value)}} />
          </div>
        </div>
        <div className="search__results">
            {products.filter((item) => {
                if (search == "") {
                    return ""
                } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
                    return item
                }
            }).map((item) => <SearchResult key={item.id} item={item} /> )}
        </div>
      </div>
    </div>
  )
}

export default SearchPage