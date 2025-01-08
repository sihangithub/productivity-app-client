
const Finance = (
    { listOfItems = [] }
) => {

    const renderListOfItems = () => {

        return (
            <div className="flex flex-row">
                { listOfItems?.length > 0? 
                listOfItems.map(((item, index) => {
                    return (
                        <div className="border-solid border-4 border-gray-600">
                            <div className="bg-blue-400">item: {item.name? item.name: '???'}</div>
                            <div className="bg-red-300">amount: {item.amount? item.amount: '???'}</div>
                        </div>
                    )
                }))
                : <div>NO ITEMS FOUND</div>}
            </div>
        )
    }

    return (
        <>
            <h1 className="text-5xl">FINANCE</h1>
            { renderListOfItems() }
        </>
    )
}

export default Finance