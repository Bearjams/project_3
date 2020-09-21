import React from 'react-modal';

const SearchForm = () => {
    return(
        <form id="searchbar"
            
        onSubmit={this.handleSubmit} 
       >
         
        <input id="booksearch"
          value={this.state.title}
          className="form-control mr-sm-2"
         
          type="text"
          onChange={this.handleChange}
          placeholder="Search by Author or Title"
          aria-label="Search"
          name="title"
        ></input>
        <button id="book-submit"
          className="btn btn-warning"
          type="submit">Search</button>
      </form> 
    )
}

export default SearchForm