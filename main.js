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
                        <td style="text-align: center;"><a href="edit.html?id=${categories.id}" class="nav-link"><i class="fa-solid fa-pen-to-square"></i></a></td>
                        <td onclick="return confirm('Bạn có chắc rằng muốn xóa ?');"style="text-align: center;"><a href="remove.html?id=${categories.id}" class="nav-link"><i class="fa-regular fa-circle-xmark"></i></a></td>
                    </tr>`;

        });

        app.innerHTML = html;
        console.log(data);
    })
    .catch((error) => {
        console.error("Đã có lỗi xảy ra khi lấy dữ liệu từ API:", error);
    });

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
                        <td style="text-align: center;"><a href="edit.html?id=${products.id}" class="nav-link"><i class="fa-solid fa-pen-to-square"></i></a></td>
                        <td onclick=" return confirm('Bạn có chắc rằng muốn xóa ?');"style="text-align: center;"><a href="remove.html?id=${products.id}" class="nav-link"><i class="fa-regular fa-circle-xmark"></i></a></td>
                    </tr>`;

        });

        app.innerHTML = html;
        console.log(data);
    })
    .catch(function (error) {
        console.log("Xử lý lỗi", error);
    });

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
                                ${products.detail + " 30%"}
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

//Hiển thị Products đề xuất
axios.get(GET_API + "products")
    .then((response) => {
        const data = response.data;

        let app = document.getElementById('products-dx');

        let lishProd = data;

        let html = ``;

        let indexes = [];
        for (let i = 0; i < 4; i++) {
            let randomIndex;
            do {
                randomIndex = Math.floor(Math.random() * lishProd.length);
            } while (indexes.includes(randomIndex)); // Đảm bảo không có chỉ mục trùng lặp
            indexes.push(randomIndex);
        }

        lishProd.forEach(products => {

            if (products.id == random(1, 4)) {

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