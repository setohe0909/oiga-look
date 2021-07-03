import update from 'immutability-helper';

const users = (context) => ({
  on: false,
  setAnyValue: (states, callback) => {
    context.setState({
      users: update(context.state.darkMode, states),
    }, () => {
      if (callback) {
        callback()
      }
    })
  },
})

export default users
