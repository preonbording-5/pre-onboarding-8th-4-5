import { COMMENT_NUMBER_ONEPAGE } from '../constants/constants';
import { commentDataType } from '../types/types';
import { baseInstance } from './instance';

export const getAllComments = () => {
  return baseInstance.get('/comments');
};

export const getPageComments = (page: number) => {
  return baseInstance.get('/comments', {
    params: {
      _page: page,
      _limit: COMMENT_NUMBER_ONEPAGE,
      _order: 'desc',
      _sort: 'id',
    },
  });
};

export const getComment = (commentId: string) => {
  return baseInstance.get(`/comments/${commentId}`);
};

export const createComment = (formData: Partial<commentDataType>) => {
  return baseInstance.post('/comments', formData);
};

export const updataComment = (formData: Partial<commentDataType>) => {
  return baseInstance.put(`/comments/${formData.id}`, { ...formData });
};

export const deleteComment = (commentId: number) => {
  return baseInstance.delete(`/comments/${commentId}`);
};
