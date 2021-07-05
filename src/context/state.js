import users from './initialState/users';

const state = (context, window) => ({
  users: users(context, window),
});

export default state;
