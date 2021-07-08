console.log("this is data file");

let products = [
    {
        id: 1,
        name: "asus 001",
        price: 1345,
        quantity: 50,
        picture:
            "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_74172788/fee_786_587_png",
    },
    {
        id: 2,
        name: "asus 002",
        price: 1345,
        quantity: 50,
        picture:
            "https://images-na.ssl-images-amazon.com/images/I/81NbyNDC8eS._AC_SL1500_.jpg",
    },
    {
        id: 3,
        name: "asus 003",
        price: 1345,
        quantity: 50,
        picture:
            "https://www.ubuy.co.de/productimg/?image=aHR0cHM6Ly9pbWFnZXMtbmEuc3NsLWltYWdlcy1hbWF6b24uY29tL2ltYWdlcy9JLzgxMEJZNVU5YmFMLl9TUzQwMF8uanBn.jpg",
    },
    {
        id: 4,
        name: "asus 004",
        price: 1345,
        quantity: 50,
        picture:
            "https://electromall.net/media/2021/03/asus-laptop-x415jf-ek046-i5-1035g1-ram-2gb-hdd-1tb-14.jpg",
    },
    {
        id: 5,
        name: "asus 005",
        price: 1345,
        quantity: 50,
        picture:
            "https://www.bhphotovideo.com/images/images2500x2500/asus_ux434flc_xh77_zenbook_ux434flc_i7_10510u_16gb_1543085.jpg",
    },
];

function getProductById(id) {
    return products.filter((item) => {
        return item.id === id;
    })[0];
}

function getProductIndex(id) {
    products.map((item, i) => {
        if (item.id === id) {
            return i;
        }
    });
    return -1;
}

function editProduct(id, productData) {
    // productData = {id, name, price, quantity, picture}
    let index = getProductIndex(id);

    if (index) {
        products[index] = productData;
    } else {
        console.log("can not find product");
    }
}

function deleteProduct(id) {
    products = products.filter((item) => item.id !== id);
}

let form = {
    name: "",
    price: 0,
    quantity: 0,
    picture: "",
    status: "create", // edit, create
};

let selectedId = -1;
let lastId = 5;

function setForm({ name, price, quantity, picture }, status) {
    form = {
        name: name,
        price: price,
        quantity: quantity,
        picture: picture,
        status: status,
    };
}

function addProduct(product) {
    products.push(product);
}
