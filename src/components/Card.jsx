function Card() {
    return (        
        <div className="container">
            <h3>Words</h3>
            <div className="card d-flex">            

                <div className='card__left'>

                    <textarea autoFocus></textarea>
                </div>

                 <div className='card__centr'>

                    </div> 

                 <div className='card__right'>
                    Example
                </div>

            </div>
        </div>

    )
}
export default Card