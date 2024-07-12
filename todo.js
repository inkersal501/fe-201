const pureTodo = [];

// 'high' or 'low'
const addTodo = (arr, item, priority) => {
  //   const newArr = [...arr];
  if (priority === "high") {
    // newArr.unshift(item);
    return [item, ...arr];
  } else {
    // newArr.push(item);
    return [...arr, item];
  }
  //   return newArr;
};

const clearTodo = (arr, index) => {
  const tempArr = [...arr];
  tempArr[index] = null;
  return tempArr;
};

const updateTodo = (arr, index, newItem) => {
  const tempArr = [...arr];
  tempArr[index] = newItem;
  return tempArr;
};

const getTodo = (arr, index) => {
  return index && index < arr.length ? arr[index] : arr;
};

// const todo = addTodo(pureTodo, "Repair laptop", "high");
