import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteComment } from '../api/commentApi';
import { AppDispatch } from '../redux';
import { getAllCommentsData } from '../redux/CommentSlice';
import { setMode } from '../redux/modeSlice';
import { setCurrentPage } from '../redux/PageSlice';

export default function CommentItem({
  author,
  content,
  createdAt,
  id,
  profile_url,
}: {
  author: string;
  content: string;
  createdAt: string;
  id: number;
  profile_url: string;
}) {
  const dispatch = useDispatch<AppDispatch>();

  const onDeleteComment = async () => {
    await deleteComment(id);
    await dispatch(getAllCommentsData());
    dispatch(setCurrentPage({ currentPage: 1 }));
  };

  const onUpdateComment = () => {
    dispatch(
      setMode({
        mode: 'UPDATE',
        currentItemData: { author, content, createdAt, id, profile_url },
      })
    );
  };
  return (
    <div className='border p-1'>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <img alt='profile' src={profile_url} className='rounded-full'></img>
          <p className='ml-2'>{author}</p>
        </div>
        <p>{createdAt}</p>
      </div>
      <p className='p-2'>{content}</p>
      <div className='flex justify-end'>
        <button
          type='button'
          onClick={onUpdateComment}
          className='border border-gray-700 bg-gray-700 text-white rounded-md px-2 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline'
        >
          수정
        </button>
        <button
          type='button'
          onClick={onDeleteComment}
          className='border border-red-500 bg-red-500 text-white rounded-md px-2 py-1 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline'
        >
          삭제
        </button>
      </div>
    </div>
  );
}
