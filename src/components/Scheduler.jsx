
const Scheduler = ({
    ListOfTasks = []
}) => {
    // Check whether list
    return (
        <div className="bg-black w-1/2 p-3 space-y-2 mx-auto">
            {/* Iterate through ListOfTasks and render it*/}
            { ListOfTasks? ListOfTasks.map((item, index) => {
                return (<div 
                key={`${index}-${item}`}
                className="bg-blue-400 text-white">
                    {item.name? item.name.toUpperCase(): 'UNKNOWN NAME'}
                </div>)
            }) : <div>list empty</div> }
        </div>
    )
}

export default Scheduler