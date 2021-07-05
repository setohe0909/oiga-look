import usersContent from './initialState/users';

const state = (context, window) => ({
  usersContent: usersContent(context, window),
});

export default state;
