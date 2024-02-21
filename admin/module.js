//-----------ADMIN-CATEGORIES-------------//

//Hiển thị Categories
const GET_API = "http://localhost:3000/";

axios.get(GET_API + "categories")
    .then((response) => {
        const data = response.data;

        let app = document.getElementById('listCate');

        let lishCate = data;

        let html = ``;

        lishCate.forEach(categories => {

            html += `
                    <tr>
                        <td>${categories.id}</td>
                        <td>${categories.name}</td>
                        <td><img src="${categories.image}" alt="Image Shirt" width="30%"></td>
                        <td>${categories.status}</td>
                        <td><a><button type="button" class="btn btn-warning">Sửa</button></a></td>
                        <td><button type="button" class="btn btn-primary" onclick="deleteCateID(${categories.id})">Xóa</button></td>
                    </tr>`;

        });

        app.innerHTML = html;
        console.log(data);
    })
    .catch((error) => {
        console.error("Đã có lỗi xảy ra khi lấy dữ liệu từ API:", error);
    });

//Thêm dữ liệu
let saveData = (dataa) => {
    event.preventDefault();

    let data = new FormData(dataa);

    axios({
        method: "post",
        url: "http://localhost:3000/categories",
        data: {
            name: data.get('cateName'),
            image: data.get('cateImage'),
            status: data.get('cateStatus'),
        },
    }).then(function (response) {
        console.log(response);
    })
    .catch((error) => {
        console.error("Đã có lỗi xảy ra khi thêm dữ liệu:", error);
    });
}

//Sửa dữ liệu


//Xóa dữ liệu
const deleteCateID = (id) => {

    axios.delete(GET_API + "categories/" + id)
        .then((response) => {
            console.log("Dữ liệu đã được xóa thành công:", response.data);

        })
        .catch((error) => {
            console.error("Đã có lỗi xảy ra khi xóa dữ liệu:", error);
        });
}


//-----------SITE-CATEGORIES------------//

//Hiện thị Categories Site
axios.get(GET_API + "categories")
    .then((response) => {
        const data = response.data;

        let app = document.getElementById('listCateSite');

        let lishCate = data;

        let html = ``;

        lishCate.forEach(categories => {
            let categoriesId = categories.id;

            html += `<a href="categoriesdm.html?id=${categoriesId}">
                <img src="${categories.image}" alt="Image Shirt" width="140px">
                </a>`;

        });

        app.innerHTML = html;
        console.log(data);
    })
    .catch(function (error) {
        console.log("Đã có lỗi xảy ra khi lấy dữ liệu từ API:", error);
    });



//-----------ADMIN-PRODUCTS-------------//

//Hiển thị Products
axios.get(GET_API + "products")
    .then((response) => {
        const data = response.data;

        let app = document.getElementById('prodLish');

        let lishProd = data;

        let html = ``;

        lishProd.forEach(products => {

            html += `
                    <tr>
                        <td>${products.id}</td>
                        <td>${products.name}</td>
                        <td>${products.price}</td>
                        <td><img src="${products.image}" alt="Image Shirt" width="30%"></td>
                        <td>${products.detail}</td>
                        <td>${products.cate_name}</td>
                        <td>${products.status}</td>
                        <td><button type="button" class="btn btn-warning">Sửa</button></td>
                        <td><button type="button" class="btn btn-primary" onclick="deleteProdID(${products.id})">Xóa</button></td>
                    </tr>`;

        });

        app.innerHTML = html;
        console.log(data);
    })
    .catch(function (error) {
        console.log("Xử lý lỗi", error);
    });

//Thêm dữ liệu 
let addData = (dataa) => {
    event.preventDefault();

    let data = new FormData(dataa);

    axios({
        method: "post",
        url: "http://localhost:3000/products",
        data: {
            name: data.get('nameProd'),
            cate_name: data.get('cateProd'),
            price: data.get('priceProd'),
            detail: data.get('detailProd'),
            status: data.get('statusProd'),
            image: data.get('imageProd'),
        },
    }).then(function (response) {
        console.log(response);
    })
    .catch((error) => {
        console.error("Đã có lỗi xảy ra khi thêm dữ liệu:", error);
    });
}

//Sửa dữ liệu 



//Xóa dữ liệu
const deleteProdID = (id) => {

    axios.delete(GET_API + "products/" + id)
        .then((response) => {
            console.log("Dữ liệu đã được xóa thành công:", response.data);

        })
        .catch((error) => {
            console.error("Đã có lỗi xảy ra khi xóa dữ liệu:", error);
        });
}


//-----------SITE-PRODUCTS------------//

//Hiển thị Products Site
axios.get(GET_API + "products")
    .then((response) => {
        const data = response.data;

        let app = document.getElementById('products');

        let lishProd = data;

        let html = ``;

        lishProd.forEach(products => {
            let productsId = products.id;
            html += `
                    <a href="productct.html?id=${productsId}">
                    <div class="pro">
                        <img src="${products.image}" alt="Image Shirt">
                        <div class="des">
                            <span>
                                ${products.detail}
                            </span>
                            <h5>
                                ${products.name}
                            </h5>
                            <div class="star">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4>
                                ${products.price}
                            </h4>
                            <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
                        </div>
                    </div>
                    </a>`;
        });

        app.innerHTML = html;
        console.log(data);
    })
    .catch(function (error) {
        console.log("Xử lý lỗi", error);
    });

//Hiển thị Products-New
axios.get(GET_API + "products")
    .then((response) => {
        const data = response.data;

        let app = document.getElementById('products-new');

        let lishProd = data;

        let html = ``;

        lishProd.forEach(products => {

            if (products.detail == "Mới ra mắt") {

                let productsId = products.id;

                html += `
                    <a href="productct.html?id=${productsId}">
                    <div class="pro">
                        <img src="${products.image}" alt="Image Shirt">
                        <div class="des">
                            <span>
                                ${products.detail}
                            </span>
                            <h5>
                                ${products.name}
                            </h5>
                            <div class="star">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4>
                                ${products.price}
                            </h4>
                            <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
                        </div>
                    </div>
                    </a>`;
            }
        });

        app.innerHTML = html;
        console.log(data);
    })
    .catch(function (error) {
        console.log("Xử lý lỗi", error);
    });

//Hiển thị Products-New
axios.get(GET_API + "products")
    .then((response) => {
        const data = response.data;

        let app = document.getElementById('products-deal');

        let lishProd = data;

        let html = ``;

        lishProd.forEach(products => {

            if (products.detail == "Khuyến mãi") {

                let productsId = products.id;

                html += `
                    <a href="productct.html?id=${productsId}">
                    <div class="pro">
                        <img src="${products.image}" alt="Image Shirt">
                        <div class="des">
                            <span>
                                ${products.detail}
                            </span>
                            <h5>
                                ${products.name}
                            </h5>
                            <div class="star">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4>
                                ${products.price}
                            </h4>
                            <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
                        </div>
                    </div>
                    </a>`;
            }
        });

        app.innerHTML = html;
        console.log(data);
    })
    .catch(function (error) {
        console.log("Xử lý lỗi", error);
    });

//Hiển thị Product theo Categories
axios.get(GET_API + "products")
    .then((response) => {
        const data = response.data;

        let app = document.getElementById('productsDm');

        let lishProd = data;

        let html = ``;

        lishProd.forEach(products => {
            let productsId = products.id;
            html += `
                    <a href="productct.html?id=${productsId}">
                    <div class="pro">
                        <img src="${products.image}" alt="Image Shirt">
                        <div class="des">
                            <span>
                                ${products.detail}
                            </span>
                            <h5>
                                ${products.name}
                            </h5>
                            <div class="star">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                            <h4>
                                ${products.price}
                            </h4>
                            <a href="#"><i class="fa-solid fa-cart-shopping cart"></i></a>
                        </div>
                    </div>
                    </a>`;
        });

        app.innerHTML = html;
        console.log(data);
    })
    .catch(function (error) {
        console.log("Xử lý lỗi", error);
    });



