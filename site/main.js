
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

//Xử lý Categories
fetch(" http://localhost:3000/categories")
    .then(function (resprose) {
        resprose.json().then(function (data) {
            let app = document.getElementById('categories');

            let lishCate = data;

            let categoriesId = categories.id = products.cate_id;

            let html = ``;

            lishCate.forEach(categories => {

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




