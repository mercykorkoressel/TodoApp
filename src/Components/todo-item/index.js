function Todoitem({index ,todo}){
return (
    <li className="list-group-item" key={index}>
        <input
            className="form-check-input me-1"
            type="checkbox"
            id={index} />
        <label
            className="form-check-label"
            for={index}
        >{todo}</label>
        
<button className="btn btn-danger">
    DELETE
</button>
    </li>
    );
}
export default Todoitem ;