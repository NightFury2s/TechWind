import React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

function CustomPagination({ currentPage, totalPages, onPageChange }) {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={(event, page) => onPageChange(page)}
        renderItem={(item) => (
          <PaginationItem
            component={item.type === 'page' ? 'button' : 'span'}
            {...item}
          />
        )}
        shape="rounded"
        color="primary"
        size="large"
        hidePrevButton
        hideNextButton
        nextIcon={<AiOutlineRight />}
        prevIcon={<AiOutlineLeft />}
      />
    </Stack>
  );
}

export default CustomPagination;
