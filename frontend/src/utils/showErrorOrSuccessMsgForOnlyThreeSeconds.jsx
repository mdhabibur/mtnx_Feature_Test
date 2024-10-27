export const showErrorOrSuccessMsgForOnlyThreeSeconds = (error, success, dispatch, clearErrorOrSuccessMsg, navigate, navigateTo) => {
    let timer

    if(error || success) {
        if(success){
            dispatch(clearErrorOrSuccessMsg())
            if(navigateTo !== ""){
                navigate(navigateTo)
            }
            return
        }

        timer = setTimeout(() => {
            dispatch(clearErrorOrSuccessMsg())
        }, 3000);

    }
    //clean up timer on unmount or in dependencies change within 3 seconds again
    return () => clearTimeout(timer)


}