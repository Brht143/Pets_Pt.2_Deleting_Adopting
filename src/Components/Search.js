
const Search = (props) =>

<div className="input-group rounded">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  onChange={(event) => props.handleOnClick(event.target.value.toLowerCase()) 
                  }
                />
              </div>
export default Search;