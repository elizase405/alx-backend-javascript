import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let data1 = null;
  let data2 = null;
  data1 = await uploadPhoto();
  data2 = await createUser();
  return {photo: data1, user: data2};
}
