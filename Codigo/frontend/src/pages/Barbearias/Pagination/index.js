import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';

import { Container } from './styles';

const Pagination = ({ limit, total, offset, setOffset }) => {
  var currentPage = offset ? (offset / limit) + 1 : 1;

  const pages = Math.ceil(total / limit);

  function onPageChange(page) {
    setOffset((page - 1) * limit)
  }

  return (
    <Container>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}><FiArrowLeft size={30} /></button>
      <span>{currentPage} / {pages}</span>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === pages}><FiArrowRight size={30} /></button>
    </Container>
  )
};

export default Pagination;