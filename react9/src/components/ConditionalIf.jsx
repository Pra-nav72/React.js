
const ConditionalIf = () => {

    const option = 'a';
    
    // conditional Rendering using if
    if(option === 'a'){
        return (
            <div>
                <h1>option 'a' is selected</h1>
            </div>
        )
    }
    if(option === 'b'){
        return (
            <div>
                <h1>option 'b' is selected</h1>
            </div>
        )
    }
    if(option === 'c'){
        return (
            <div>
                <h1>option 'c' is selected</h1>
            </div>
        )
    }
    return(
        <div>
            <h1>No option is selected</h1>
        </div>
    )
}

export default ConditionalIf
