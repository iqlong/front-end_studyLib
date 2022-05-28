const valiForm=[{
    categoryForm: ['productVariety'],
},{
    shopForm: ['shopSelection'],
},{
    goodsForm: ['productName','uploadCoverPic','uploadProductPic']
}]
valiForm.forEach(item => {
    const firKey =Object.keys(item)[0]
    console.log('@',firKey);
    item[firKey].forEach(item => {
        console.log(item);
    })
})