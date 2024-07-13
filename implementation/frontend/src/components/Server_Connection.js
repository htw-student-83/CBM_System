const Server_Connection = () => {
    return(
        <div className="bg-sky-400 h-dvh w-auto">
            <div className="mx-4 border border-amber-800 ml-auto mr-auto rounded-2xl p-4 w-fit">
                <h1 className="text-2xl text-center">Welcher Server soll benutzt werden?</h1>
                <div className="flex flex-grow">
                    <button className="bg-white text-2xl rounded-2xl p-4 mx-24 my-4 hover:bg-emerald-200 border border-b-emerald-200">TCP</button>
                    <button className="bg-amber-600 text-2xl rounded-2xl p-4 mx-28 my-4">Lokal</button>
                </div>
            </div>
        </div>
    )
}

export default Server_Connection