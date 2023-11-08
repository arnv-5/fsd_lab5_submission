import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [descarr, setDescarr] = useState([]); // Use useState to maintain the state

    const submit = (e) => {
        e.preventDefault();
        if (!title || !desc) {
            alert("Title or Description cannot be blank");
        }
        else {
            addTodo(title, desc);
            setTitle("");
            setDesc("");
        }
    }

    function validateForm(desctest){
        if(desctest === "3:00 am" || desctest === "6:50 am" || desctest === "7:00 am" || desctest === "8:00 pm"){
            alert('Two activities can\'t be at the same time!!');
            return;
        }

        let isMatch = false;
        for (let i = 0; i < descarr.length; i++) {
            if (desctest === descarr[i]) {
                alert('Two activities can\'t be at the same time!!');
                isMatch = true;
                break;
            }
        }

        if (!isMatch) {
            setDescarr(prevDescarr => [...prevDescarr, desctest]); // Update descarr using the setDescarr function
        }
    }

    return (
        <div className="container my-3">
            <h3>Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <button type="submit" onClick={() => validateForm(desc)} className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
