const arr = [
    { name: 'word1' },
    { name: 'word2' },
    { name: 'word3' },
    { name: 'word4' },
    { name: 'word5' }
]



function History(props) {
    return (
        
       <div className="container">
         <div className="card history__card mt-10">
            <div className="history__info card__info d-flex justify-between flex-column" >
               {props.title}            
       
            </div>

        </div>
       </div>
    )
}
export default History