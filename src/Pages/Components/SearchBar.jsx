import React, { useState } from "react";
import { Form, FormControl, Button, InputGroup } from "react-bootstrap";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()){
    onSearch(query);
    }
  };

  return (
    <Form className="d-flex" onSubmit={handleSearch}>
      <InputGroup>
        <FormControl
          type="search"
          placeholder="Search products"
          className="me-2"
          aria-label="Search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </InputGroup>
    </Form>
  );
}

export default SearchBar;
