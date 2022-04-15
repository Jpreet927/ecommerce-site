import React from 'react'
import { Link } from 'react-router-dom'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import '../Styles/SearchResult/SearchResult.css'

function SearchResult(props) {
    const { item } = props;
  return (
    <div className="searchresult__main">
        <Link to={`/${item.category}/${item.id}`} style={{ textDecoration: 'none' }}>
            <div className="searchresult__information">
                <div className="searchresult__column searchresult__thumbnail">
                    <img src={item.image} alt="" />
                </div>
                <div className="searchresult__column searchresult__name">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                </div>
                <div className="searchresult__column searchresult__price">
                    <p>${item.price}</p>
                </div>
                <div className="searchresult__column searchresult__chevron">
                    <ChevronRightIcon sx={{ color: 'white' }} />
                </div>
            </div>
            <hr className="searchresult__divider" />
        </Link>
    </div>
  )
}

export default SearchResult