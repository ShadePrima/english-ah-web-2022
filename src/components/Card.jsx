function Card() {
    return (
        <div className="card">
        <div className="card__header">
            <h3>Words</h3>
        </div>
        <div className="card__info d-flex justify-between" >
        <div className='card__left'>
        <textarea autoFocus></textarea>
        </div>

        <div className='card__right'>
            Example
        </div>
           
        </div>
        
        </div>
    )
}
export default Card