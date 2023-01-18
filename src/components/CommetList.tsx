import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { getPageComments } from '../api/commentApi';
import { COMMENT_NUMBER_ONEPAGE } from '../constants/constants';
import { AppDispatch } from '../redux';
import { commentsData, getAllCommentsData } from '../redux/CommentSlice';
import { currnetPage, setTotalPage, totalPage } from '../redux/PageSlice';
import { commentDataType } from '../types/types';
import CommentItem from './CommentItem';
import CommetInputForm from './CommetInputForm';
import Pagination from './Pagination';

export default function CommetList() {
  const [pageComments, setPageComments] = useState<commentDataType[]>([]);
  const dispatch = useDispatch<AppDispatch>();
  const currentpage = useSelector(currnetPage);
  const totalpage = useSelector(totalPage);
  const commentData = useSelector(commentsData);

  useEffect(() => {
    dispatch(getAllCommentsData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(
      setTotalPage({
        totalPage: Math.ceil(commentData.length / COMMENT_NUMBER_ONEPAGE),
      })
    );
  }, [commentData, dispatch]);

  useEffect(() => {
    const getPageCommentsData = async () => {
      const res = await getPageComments(currentpage);
      setPageComments(() => [...res.data]);
    };
    getPageCommentsData();
  }, [totalpage, currentpage, commentData]);

  return (
    <div>
      {pageComments.map((item) => (
        <CommentItem
          key={item.id}
          author={item.author}
          content={item.content}
          createdAt={item.createdAt}
          id={item.id}
          profile_url={item.profile_url}
        />
      ))}
      <Pagination />
      <CommetInputForm />
    </div>
  );
}
