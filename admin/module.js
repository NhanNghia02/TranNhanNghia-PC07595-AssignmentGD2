const axios = require('axios').default;

//Thêm dữ liệu Categories
const ADD_API = "http://localhost:3000/";

const addData = {
    id: document.getElementById('cateId').value,
    name: document.getElementById('cateName').value,
    status: document.getElementById('cateStatus').value,
    image: document.getElementById('cateImage').files[0].name
};

document.getElementById('addFormCate').addEventListener('submit', function (event) {
    event.preventDefault();

    // Gửi yêu cầu POST đến API để thêm dữ liệu
    axios.post(ADD_API + "categories", addData)
        .then((response) => {
            console.log("Dữ liệu đã được thêm thành công:", response.data);
        })
        .catch((error) => {
            console.error("Đã có lỗi xảy ra khi thêm dữ liệu:", error);
        });
});


//Sửa dữ liệu Categories
function editData() {

    // Địa chỉ API bạn muốn sửa dữ liệu
    const EDIT_URL = "http://localhost:3000/";

    // Hỏi người dùng nhập thông tin mới từ form
    const idToEdit = document.getElementById("cateId").value;
    const newName = document.getElementById("cateName").value;
    const newImage = document.getElementById("cateImage").value;
    const newStatus = document.getElementById("cateStatus").value;

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




