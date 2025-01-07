
// implement a greedy algorithm to 
const Scheduler = ({
    ListOfTasks = []
}) => {
    
    return (
        <div className="bg-black text-white w-1/2 p-3 space-y-2 mx-auto">
            {/* Iterate through ListOfTasks and render it*/}
            { ListOfTasks?.length > 0? ListOfTasks.map((item, index) => {
                return (<div 
                key={`${index}-${item}`}
                className="bg-blue-400">
                    {item.name? item.name.toUpperCase(): 'UNKNOWN NAME'}
                </div>)}) 
                : <div>tasks empty</div> }
        </div>
    )
}

export default Scheduler