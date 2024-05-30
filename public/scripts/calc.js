function display(num) {
  result.value += num;
}

function allClear() {
  result.value = "";
}

function back() {
  result.value = result.value.slice(0, -1);
}

function equal() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    console.log(error);
    result.value = "ERROR!";
    setTimeout(() => {
      result.value = "";
    }, 1500);
  }
}
