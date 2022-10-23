import './search.css'

export const Search =({searchHandler})=>{
    return(
        <div >
            <input 
                className='search'
                type='search' 
                placeholder='monster name' 
                onChange={searchHandler}
            />
        </div>
    )
}