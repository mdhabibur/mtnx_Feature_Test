export const loadingMsg = (loadingMsg = "loading...") => {
    return <div className="bg-indigo-300 text-black font-semibold text-sm rounded-lg p-3 mt-4">{loadingMsg}</div>
}

export const errorMsg = (error) => {
    if(error === null) {
        return ""
    }
    return <div className="bg-red-500 text-yellow-100 font-semibold text-sm rounded-lg p-3 mt-4">{error}</div>
}

export const successMsg = (success) => {
    if(success === null) {
        return ""
    }

    return <div className="bg-orange-400 text-black font-semibold text-sm rounded-lg p-3 mt-4">{success}</div>
}


export const showInfoMsg = (infoMsg = "enter necessary fields...") => {
    return <div className="bg-indigo-300 text-black font-semibold text-sm rounded-lg p-3 mt-4">{infoMsg}</div>
}