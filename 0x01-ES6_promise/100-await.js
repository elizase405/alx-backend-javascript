import { uploadPhoto, createUser } from './utils';

export default function asyncUploadUser() {
  const data = {};
  uploadPhoto().then((res) => { data.photo = res; }).catch(() => { data.photo = null; });
  createUser().then((res) => { data.user = res; }).catch(() => { data.user = null; });
  return data;
}
