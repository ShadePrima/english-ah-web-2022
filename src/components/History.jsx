

function History(props) {
    console.log(props.texts)
    return (

        <div className="container">
            <div className="card history__card mt-10">
                <div className="history__info card__info d-flex justify-between flex-column" >
                    {props.texts.map((obj) => (
                        obj.value
                    ))}


                </div>

            </div>
        </div>
    )
}
export default History