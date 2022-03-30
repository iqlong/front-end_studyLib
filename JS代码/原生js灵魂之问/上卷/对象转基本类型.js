let obj = {
    value: 1,
    toString() {
        // 使用this表示当前对象
        return this.value++;
    }
}
console.log(obj==1 && obj==2)
