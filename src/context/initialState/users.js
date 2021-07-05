import update from 'immutability-helper';

const usersContent = (context) => ({
  values: {},
  setAnyValue: (states, callback) => {
    context.setState(
      {
        usersContent: update(context.state.usersContent, states),
      },
      () => {
        if (callback) {
          callback();
        }
      }
    );
  },
});

export default usersContent;
