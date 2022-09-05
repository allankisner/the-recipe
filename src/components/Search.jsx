import React from 'react'
import { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import { FormStyled } from './styles/search';


function Search() {

  const [busca, setBusca] = useState("")
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/' + busca)
  };

  return (
    <FormStyled onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <input placeholder='Search ;)' onChange={(e) => { setBusca(e.target.value) }} type="text" value={busca} />
      </div>
    </FormStyled>
  )
};

export default Search