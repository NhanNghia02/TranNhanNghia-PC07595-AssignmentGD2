const axios = require('axios');

const ADD_API = "http://localhost:3000/";

//Thêm dữ liệu Categories
document.getElementById('addFormCate').addEventListener('submit', function (event) {
    event.preventDefault();

    //Trường input
    const cateId = document.getElementById('cateId').value;
    const cateName = document.getElementById('cateName').value;
    const cateStatus = document.getElementById('cateStatus').value;
    const cateImage = document.getElementById('cateImage').files[0];

    const formData = new FormData();
    formData.append('id', cateId);
    formData.append('name', cateName);
    formData.append('status', cateStatus);
    formData.append('image', cateImage);

    // Gửi yêu cầu POST đến API để thêm dữ liệu
    axios.post(ADD_API + "categories", formData)
        .then((response) => {
            console.log("Dữ liệu đã được thêm thành công:", response.data);
        })
        .catch((error) => {
            console.error("Đã có lỗi xảy ra khi thêm dữ liệu:", error);
        });
});


//Sửa dữ liệu Categories
function editData() {

    const EDIT_URL = "http://localhost:3000/";

    // Hỏi người dùng nhập thông tin mới từ form
    const idToEdit = document.getElementById("cateId");
    const newName = document.getElementById("cateName");
    const newImage = document.getElementById("cateImage");
    const newStatus = document.getElementById("cateStatus");

    // Dữ liệu mới để gửi đến API
    const updatedData = {
        name: newName,
        image: newImage,
        status: newStatus
    };

    // Gửi yêu cầu PUT đến API để sửa dữ liệu
    axios.put(EDIT_URL + "categories/" + idToEdit, updatedData)
        .then((response) => {
            console.log("Dữ liệu đã được sửa thành công:", response.data);
        })
        .catch((error) => {
            console.error("Đã có lỗi xảy ra khi sửa dữ liệu:", error);
        });
}
editData();


//Xóa dữ liệu Categories
const DELETE_URL = "http://localhost:3000/";

const idToDelete = 6;

// Gửi yêu cầu DELETE đến API để xóa dữ liệu
axios.delete(DELETE_URL + "categories/" + idToDelete)
    .then((response) => {
        console.log("Dữ liệu đã được xóa thành công:", response.data);
    })
    .catch((error) => {
        console.error("Đã có lỗi xảy ra khi xóa dữ liệu:", error);
    });




