  
import { singup } from '../services/auth';
import { createObjectWithId, getObjectById } from '../services/db';

const USER_COLLECTION = 'profiles';

export async function userSignup(userData) {
  const { name, lastname, email, password } = userData;
  const { success: signupSuccess, data, message } = await singup(email, password);

  if (signupSuccess) {
    const profileSuccess = await createObjectWithId(USER_COLLECTION, { name, lastname, email }, data);
    if (profileSuccess.success) {
      return ({success:true});
    }
  }
  return ({success: false, error: message});
}

export async function getUserProfile(userId) {
  const { success, data } = await getObjectById(USER_COLLECTION, userId)
  return success ? data : null;
}