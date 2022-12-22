let textInp = document.getElementById("textInp")
let addProduct = document.getElementById("addProduct")
let container = []
if (localStorage.getItem("product") == null) {
    productContainer = []
}
else {
    container = JSON.parse(localStorage.getItem("product"))
    displayProduct()
}
addProduct.addEventListener("click", function () {
    let product = {
        name: textInp.value
    }
    container.push(product)
    localStorage.setItem("product", JSON.stringify(container))
    displayProduct()
    clearInp()
})
function displayProduct() {
    rowProduct = "";
    for (let i = 0; i < container.length; i++) {
        rowProduct += `
        <div class="d-flex justify-content-between mt-3 todo mx-auto">
            <p class="text">${container[i].name}</p>
            <button class="plus" onclick="deleteRow(${i})">Delete</button>
        </div>
        `
    }
    document.getElementById("todoList").innerHTML = rowProduct
}

function clearInp() {
    textInp.value = "";
}

function deleteRow(i){
    container.splice(i , 1)
    localStorage.setItem("product", JSON.stringify(container))
    displayProduct()
}