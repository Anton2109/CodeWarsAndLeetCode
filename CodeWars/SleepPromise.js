async function f(millis) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(millis);
      resolve(millis);
    }, millis);
  });
}

f(100).then((result) => {});
