import React, { useState, useEffect  } from 'react';
import { connect } from 'react-redux'
import './search.less'
import { setMovie } from '../../actions/index'
import { fetchData, cacheStoreItem, cacheGetItem, sortByProps} from '../../utils/helper'
let Search = (props) => {
    const [value, setValue] = useState(``);
    useEffect(() => {
        setValue(props.search)
    }, [props.search]);
    let handleChange = async (event) => {
        let movies;
        let search = event.target.value
        setValue(search)
      
        movies = cacheGetItem(search);
        if (movies){
            return props.setMovie({
                movies: movies,
                search: search
            });
        }
        movies = await fetchData(search);
        console.log(search,movies)
        if(!movies.Error){
            
            props.setMovie({
                movies: sortByProps(movies.Search, 'Title'),
                search: search
            });
        } else {
            props.setMovie({
                movies: [],
                search: search
            });
        }
           
    }

    return (
        <div>
            <input className='search' value={value} type="text" onChange={handleChange}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        search: state.movie.search
    }
}

const mapDispatchToProps = dipatch => {
    return {
        setMovie : (data) => {
            cacheStoreItem(data.search, data.movies)
            return dipatch(setMovie(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);