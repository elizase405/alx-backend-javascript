import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const su = signUpUser(firstName, lastName);
  const up = uploadPhoto(fileName);

  return Promise.allSettled([su, up])
    .then((result) => console.log(result));
}
