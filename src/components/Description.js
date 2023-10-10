export default function Description(props) {
    if(props.url==="desc"){
        return (
            <div>This is description</div>
        )
    }
    else if(props.url==="part"){
        return(
            <div>This is participant</div>
        )
    }
    else if(props.url==="program"){
        return(
            <div>This is program</div>
        )
    }
    else if(props.url==="abstract"){
        return(
            <div>This is abstract</div>
        )
    }
    else if(props.url==="doc"){
        return(
            <div>This is document</div>
        )
    }
    
}