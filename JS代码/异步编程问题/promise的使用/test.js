new Promise((resolve, reject) => {
    resolve(() => {console.log('g');return 2});
    console.log(2);
  }).then(r => {
    console.log(r);
  });