import axios from 'axios';

export const uploadFile = data => {
  return axios
    .post(`HTTP://3.7.20.173:8503/api/upload/`, data)
    .then(res => {
      console.log('res', res);
      return res;
    })
    .catch(err => {
      return err;
    });
};
