//Hiển thị Categories
fetch(" http://localhost:3000/categories")
    .then(function (resprose) {
        resprose.json().then(function (data) {
            let app = document.getElementById('cateLish');

            let lishCate = data;

            let html = ``;

            lishCate.forEach(categories => {

                html += `
                    <tr>
                        <td>${categories.id}</td>
                        <td>${categories.name}</td>
                        <td><img src="${categories.image}" alt="Image Shirt" width="30%"></td>
                        <td>${categories.status}</td>
                        <td style="text-align: center;"><a href="" class="nav-link"><i
                                    class="fa-solid fa-pen-to-square"></i></a></td>
                        <td onclick=" return confirm('Bạn có chắc rằng muốn xóa ?');"
                            style="text-align: center;"><a href="" class="nav-link"><i 
                                    class="fa-regular fa-circle-xmark"></i></a></td>
                    </tr>`;

            });

            app.innerHTML = html;
            console.log(data);
        })
    })
    .catch(function (error) {
        console.log("Xử lý lỗi", error);
    });

//Lấy id Categories
fetch(" http://localhost:3000/categories")
    .then(function (resprose) {
        resprose.json().then(function (data) {
            let app = document.getElementById('categories');

            let lishCate = data;

            let html = ``;

            lishCate.forEach(categories => {
                let categoriesId = categories.id;
                html += `<a href="categoriesdm.html?id=${categoriesId}">
                <img src="${categories.image}" alt="Image Shirt" width="150px">
                </a>`;

            });

            app.innerHTML = html;
            console.log(data);
        })
    })
    .catch(function (error) {
        console.log("Xử lý lỗi", error);
    });

//Xử lý Products
fetch(" http://localhost:3000/products")
    .then(function (resprose) {
        resprose.json().then(function (data) {
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
    })
    .catch(function (error) {
        console.log("Xử lý lỗi", error);
    });

//New Products
fetch(" http://localhost:3000/products")
    .then(function (resprose) {
        resprose.json().then(function (data) {
            let app = document.getElementById('products-new');

            let lishProd = data;

            let html = ``;

            lishProd.forEach(products => {
                let productsId = products.id;
                let productsNew = products.detail;

                if (productsNew == "Mới ra mắt") {
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
    })
    .catch(function (error) {
        console.log("Xử lý lỗi", error);
    });

//Deal Products
fetch(" http://localhost:3000/products")
    .then(function (resprose) {
        resprose.json().then(function (data) {
            let app = document.getElementById('products-deal');

            let lishProd = data;

            let html = ``;

            lishProd.forEach(products => {
                let productsId = products.id;
                let productsDeal = products.detail;

                if (productsDeal == "Khuyến mãi") {
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
    })
    .catch(function (error) {
        console.log("Xử lý lỗi", error);
    });

//Hiển thị Products
fetch(" http://localhost:3000/products")
    .then(function (resprose) {
        resprose.json().then(function (data) {
            let app = document.getElementById('prodLish');

            let lishProd = data;

            let html = ``;

            lishProd.forEach(products => {

                html += `
                <tr>
                    <td>
                        ${products.id}
                    </td>
                    <td>
                        ${products.name}
                    </td>
                    <td>
                        ${products.price}
                    </td>
                    <td>
                        <img src="${products.image}" alt="image-product" width="30%">
                    </td>
                    <td>
                        ${products.detail}
                    </td>
                    <td>

                    </td>
                    <td>
                        ${products.status}
                    </td>
        
                    <td style="text-align: center;"><a href="" class="nav-link"><i class="fa-solid fa-pen-to-square"></i></a></td>
                    <td onclick=" return confirm('Bạn có chắc rằng muốn xóa ?');"
                        style="text-align: center;"><a href="" class="nav-link"><i class="fa-regular fa-circle-xmark"></i></a></td>
            </tr>`;
            });

            app.innerHTML = html;
            console.log(data);
        })
    })
    .catch(function (error) {
        console.log("Xử lý lỗi", error);
    });




