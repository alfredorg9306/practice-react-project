import { useState } from "react";

export default function FeedbackForm(){
    const [range, setRange] = useState(0)
    const [comment, setComment] = useState('');

    function HandleSubmit(e){
        e.preventDefault();
    }

    return(
        <form className="Main-Container" onSubmit={HandleSubmit} >
            <div className="heading-form">
                <h1>Feedback Form</h1>
                <label>Score:{range}</label><br/>
                <input type="range" min={0} max={10} value={range} onChange={e=>setRange(e.target.value)}/>
            </div>
            <div>
                <h3>Write a comment</h3>
                <textarea value={comment} onChange={e=>setComment(e.target.value)}>

                </textarea>
            </div>

            <input type="submit"/>

        </form>

    );


}


