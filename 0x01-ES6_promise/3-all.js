/* eslin-tdisable no-unused-vars */
// Handle multiple successful promises
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const up = uploadPhoto();
  const cu = createUser();
  return Promise.all([up, cu])
    .then(([res1, res2]) => console.log(`${res1.body} ${res2.firstName} ${res2.lastName}`))
    .catch(() => console.error('Signup system offline'));
}
