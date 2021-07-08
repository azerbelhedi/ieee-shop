console.log("this is ui file");

function productBox({ id, name, quantity, price, picture }) {
    return `
        <div class="product-box"
        id=${id} onClick = "selectProduct(${id})" >
        <img src="${picture}"
            alt="">
        <div class="data-section">
            <div class="product-name">
                ${name}
            </div>
            <div class="product-extra-data">
            ${price} DT (${quantity} pieces)
            </div>
        </div>
    </div>
        `;
}

function renderProducts(products) {
    document.querySelector("#products-container").innerHTML = products.map(
        (product) => {
            return productBox(product);
        }
    );
}

function selectProduct(id) {
    //alert(id);
    selectedId = id;
    setForm(getProductById(parseInt(id, 10)), "edit");
    updateFormUI();
    updateFormInterface("edit");
}

function updateFormUI() {
    document.querySelector("#name").value = form.name;
    document.querySelector("#price").value = form.price;
    document.querySelector("#quantity").value = form.quantity;
    document.querySelector("#picture").value = form.picture;
}

function resetForm() {
    updateFormInterface("create");
    setForm({ name: "", price: 0, quantity: 0, picture: "" }, "create");
    updateFormUI();
}

function updateFormInterface(status) {
    let button1 = document.querySelector("#add-button");
    let button2 = document.querySelector("#delete-button");

    if (status === "edit") {
        button2.style.display = "inline";
        button1.innerHTML = "Save";
    } else if (status === "create") {
        button2.style.display = "none";
        button1.innerHTML = "Add";
    } else {
        console.log("unknown status");
    }
}

function handleDeleteButton() {
    deleteProduct(selectedId);
    renderProducts(products);
    selectedId = -1;
    resetForm();
}

function getFormData() {
    return {
        name: document.querySelector("#name").value,
        price: document.querySelector("#price").value,
        quantity: document.querySelector("#quantity").value,
        picture: document.querySelector("#picture").value,
    };
}

function handleCreateButton() {
    let product = {
        ...getFormData(),
        id: lastId + 1,
    };
    lastId++;
    addProduct(product);
    renderProducts(products);
    resetForm();
}

function handleSaveEditButton() {
    if (form.status === "edit") {
    } else {
        handleCreateButton();
    }
}
