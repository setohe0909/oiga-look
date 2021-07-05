import update from 'immutability-helper';

const users = (context) => ({
  values: {},
  setAnyValue: (states, callback) => {
    context.setState(
      {
        users: update(context.state.users, states),
      },
      () => {
        if (callback) {
          callback();
        }
      }
    );
  },
});

export default users;
