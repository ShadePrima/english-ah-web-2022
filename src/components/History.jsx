const arr = [
    { index: 1, name: 'word1' },
    { index: 2, name: 'word2' },
    { index: 3, name: 'word3' },
    { index: 4, name: 'word3' },
    { index: 5, name: 'word3' }
]

function History() {
    return (
        
       <div className="container">
        <h3>History</h3>
         <div className="card history__card">
            <div className="history__info card__info d-flex justify-between flex-column" >
                {arr.map((val) => (
                    <p className='ml-20'>{val.index}.{val.name}</p>
                ))}
            </div>

        </div>
       </div>
    )
}
export default History