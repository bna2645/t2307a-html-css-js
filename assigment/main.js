function addProduct() {
    // Kiểm tra dữ liệu nhập vào
    if (document.getElementById("product-name").value === "" ||
      document.getElementById("price").value === "" ||
      document.getElementById("quantity").value === "") {
      alert("Vui lòng nhập đầy đủ thông tin sản phẩm.");
      return;
    }
  
    // Hiển thị hộp thoại xác nhận
    let confirmDialog = window