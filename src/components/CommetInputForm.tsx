import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { createComment, updataComment } from '../api/commentApi';
import { createMode, updateMode } from '../constants/constants';
import { AppDispatch } from '../redux';
import { getAllCommentsData } from '../redux/CommentSlice';
import { mode, updateCommentData } from '../redux/modeSlice';
import { setCurrentPage } from '../redux/PageSlice';
import { commentDataType } from '../types/types';

export default function CommetInputForm() {
  const dispatch = useDispatch<AppDispatch>();
  const MODE = useSelector(mode);
  const currentItem = useSelector(updateCommentData);

  const initailFormData = {
    author: '',
    content: '',
    createdAt: '',
    profile_url: '',
  };

  const [formData, setFormData] =
    useState<Partial<commentDataType>>(initailFormData);
  console.log(formData);
  useEffect(() => {
    if (MODE === updateMode) {
      setFormData(currentItem);
    }
  }, [MODE, currentItem]);

  const onSubmitComment = async () => {
    await createComment(formData);
    setFormData(initailFormData);
    await dispatch(getAllCommentsData());
    dispatch(setCurrentPage({ currentPage: 1 }));
  };

  const onUpdateComment = async () => {
    await updataComment(formData);
    await dispatch(getAllCommentsData());
  };

  return (
    <div className='flex flex-col'>
      <input
        placeholder='이미지 URL'
        value={formData.profile_url}
        onChange={(e) =>
          setFormData((prev) => {
            return { ...prev, profile_url: e.target.value };
          })
        }
        className='border m-2 p-1'
      />
      <input
        placeholder='작성자'
        value={formData.author}
        onChange={(e) =>
          setFormData((prev) => {
            return { ...prev, author: e.target.value };
          })
        }
        className='border m-2 p-1'
      />
      <input
        placeholder='내용'
        value={formData.content}
        onChange={(e) =>
          setFormData((prev) => {
            return { ...prev, content: e.target.value };
          })
        }
        className='border m-2 p-1'
      />
      <input
        placeholder='날짜'
        value={formData.createdAt}
        onChange={(e) =>
          setFormData((prev) => {
            return { ...prev, createdAt: e.target.value };
          })
        }
        className='border m-2 p-1'
      />
      <div>
        {MODE === updateMode && (
          <button
            onClick={onUpdateComment}
            type='button'
            className='border border-gray-700 bg-gray-700 text-white rounded-md px-2 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline'
          >
            등록
          </button>
        )}
        {MODE === createMode && (
          <button
            onClick={onSubmitComment}
            type='button'
            className='border border-gray-700 bg-gray-700 text-white rounded-md px-2 py-1 m-2 transition duration-500 ease select-none hover:bg-gray-800 focus:outline-none focus:shadow-outline'
          >
            등록
          </button>
        )}
      </div>
    </div>
  );
}
