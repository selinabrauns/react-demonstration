const bindActionCreators = (obj, dispatch, rest) => {
  let newObj = { ...rest };
  for(let key in obj) {
    if(obj.hasOwnProperty(key)){
      newObj[key] = obj[key](dispatch);
    }
  }
  return newObj;
};

export default bindActionCreators;
