let x: Function = (): void => {
  let x = 1;
};

type DescribableFunction = {
  description: string;
  (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
  console.log(fn.description + " returned " + fn(6));
}

doSomething({
    description: 'hello';
    (num) => {
        return false 
    }
})
