import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Button } from '@mui/material';

function Paginations() {
  const [tableData, setTableData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentData = tableData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPage = Math.ceil(tableData.length / rowsPerPage);

  useEffect(() => {
    axios.get("https://dummyjson.com/users").then((res) => {
      setTableData(res.data.users);
    });
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1))

  };
  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPage))
  };

  return (
    <div>
      <div className='flex justify-center'>
        <table className="table-fixed border-collapse border border-slate-500">
          <thead>
            <tr className='border border-slate-600'>
              <th className='border border-slate-600'>Id</th>
              <th className='border border-slate-600'>Name</th>
              <th className='border border-slate-600'>Email</th>
            </tr>
          </thead>
          <tbody>
            {currentData.length > 0 ? (
              currentData.map((item) => (
                <tr className='border border-slate-600' key={item.id}>
                  <td className='border border-slate-600'>{item.id}</td>
                  <td className='border border-slate-600'>{`${item.firstName} ${item.lastName}`}</td>
                  <td className='border border-slate-600'>{item.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className='border border-slate-600 text-center'>Data not Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className='flex justify-center mt-4 gap-2'>
        <Button variant='contained' onClick={handlePrev} disabled={currentPage === 1} style={{
          color: currentPage === 1 && "black"
        }}>Prev</Button>
        {Array.from({ length: totalPage }, (_, index) => (
          <Button variant='contained' onClick={() => { handlePageChange(index + 1) }} style={{
            background: currentPage === index + 1 ? "blue" : "yellow",
            color: currentPage === index + 1 ? "white" : "black"
          }}>{index + 1}</Button>
        ))}
        <Button variant='contained' style={{
          color: currentPage === totalPage && "black"
        }} onClick={handleNext} disabled={currentPage === totalPage}>Next</Button>
      </div>
    </div>
  );
}

export default Paginations;
