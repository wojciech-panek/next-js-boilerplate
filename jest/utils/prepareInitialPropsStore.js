export default (dispatch) => {
  return {
    execSagaTasks: (isServer, callback) => {
      callback(dispatch);
    },
  };
};

