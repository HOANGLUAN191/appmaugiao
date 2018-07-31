export default (state = null, action) => {
    switch (action.type) {
      case 'select_kindergarten':
        return action.payload;
      default:
        return state;
    }
  };