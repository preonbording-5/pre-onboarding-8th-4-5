import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { currnetPage, setCurrentPage, totalPage } from '../redux/PageSlice';

export default function Pagination() {
  const dispatch = useDispatch();
  const currentpage = useSelector(currnetPage);
  const totalpage = useSelector(totalPage);
  const [totalPageArr, setTotalPageArr] = useState<number[]>([]);

  useEffect(() => {
    setTotalPageArr(() => {
      const copy = [];
      for (let i = 1; i <= totalpage; i++) {
        copy.push(i);
      }
      return copy;
    });
  }, [totalpage]);

  return (
    <div className='flex justify-center m-2'>
      <nav aria-label='Page navigation example'>
        <ul className='flex list-style-none'>
          {totalPageArr.map((item, index) => {
            return (
              <li
                className='page-item'
                key={index}
                onClick={() => {
                  dispatch(setCurrentPage({ currentPage: item }));
                }}
              >
                <div
                  className={`page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none cursor-pointer ${
                    currentpage === item && 'bg-gray-500'
                  }`}
                >
                  {item}
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
