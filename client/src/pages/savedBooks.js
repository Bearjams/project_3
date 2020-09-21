import React from "react";
import API from "../utils/API.js";

class savedBooks extends Component {
state ={
    saved: []
}
componentDidMount() {
    API.savedBooks()
    .then(saved => this.setState({ saved: saved }))
    .catch(err => console.error(err));
}

handleSave (){

}
render() {
    return (
        <div className="container">
            <h2>Saved books</h2>
            <Results books={this.state.saved} />
        </div>
    )
}
}
export default savedBooks;