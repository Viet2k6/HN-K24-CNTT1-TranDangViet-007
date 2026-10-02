let currentRepairCode = "";
let isRepairValid = false;
let totalRevenue = 0;
let totalRepairs = 0; 

while (true) {
  console.log("========================================");
  console.log(" HỆ THỐNG DỊCH VỤ AUTOCARE GARAGE");
  console.log("========================================");
  console.log("1. Nhập và kiểm chuẩn mã phiếu sửa chữa");
  console.log("2. Tính chi phí sửa chữa");
  console.log("3. Thẩm định mã thẻ khách hàng may mắn");
  console.log("0. Thoát chương trình");
  console.log("========================================");

  let choiceInput = prompt("Vui lòng nhập lựa chọn của bạn (0 - 3):");
  if (choiceInput === null) {
    console.log("Lựa chọn không hợp lệ.");
    continue;
  }

  let choiceString = choiceInput.trim();
  let choice = choiceString === "" ? NaN : Number(choiceString);

  switch (choice) {
    case 1: {
      currentRepairCode = "";
      isRepairValid = false;

      let input = prompt("Nhập mã phiếu sửa chữa:");
      if (input === null || input.trim() === "") {
        console.log("Chưa nhập mã phiếu sửa chữa");
        break;
      }

      let repairCode = input.trim().toUpperCase();

      if (repairCode.length < 6) {
        console.log("Độ dài tối thiểu 6 ký tự");
        break;
      }

      if (!repairCode.startsWith("CAR-")) {
        console.log('Sai tiền tố "CAR-"');
        break;
      }

      if (repairCode.includes(" ")) {
        console.log("Lỗi chứa khoảng trắng ở giữa");
        break;
      } 

      currentRepairCode = repairCode;
      isRepairValid = true;

      console.log(`Mã phiếu hợp lệ: ${currentRepairCode}`);
      break;
    }

    case 2: {
      if (!isRepairValid) {
        console.log("Vui lòng nhập mã phiếu sửa chữa hợp lệ.");
        break;
      }

      let jobCount;
      while (true) {
        let input = prompt("Nhập số hạng mục sửa chữa:");
        if (input === null) {
          console.log("Đã hủy giao dịch.");
          break;
        }

        jobCount = Number(input);
        if (
          input.trim() !== "" &&
          !isNaN(jobCount) &&
          jobCount > 0 &&
          jobCount % 1 === 0
        ) {
          break;
        }

        console.log("Số lượng phải là số nguyên lớn hơn 0.");
      }

      if (jobCount === undefined) {
        break;
      }

      let pricePerJob;
      while (true) {
        let input = prompt("Nhập đơn giá mỗi hạng mục:");
        if (input === null) {
          console.log("Đã hủy giao dịch.");
          break;
        }

        pricePerJob = Number(input);
        if (
          input.trim() !== "" &&
          !isNaN(pricePerJob) &&
          pricePerJob > 0 &&
          pricePerJob % 1 === 0
        ) {
          break;
        }

        console.log("Đơn giá phải là số nguyên lớn hơn 0.");
      }

      if (pricePerJob === undefined) {
        break;
      }

      let baseCost = jobCount * pricePerJob;
      let discount = 0;
      if (jobCount >= 4) {
        discount = Math.round(baseCost * 0.1);
      }

      let materialFee = Math.round((baseCost - discount) * 0.08);
      let totalPayment = baseCost - discount + materialFee;
      totalRevenue += totalPayment;
      totalRepairs++;

      let paidRepairCode = currentRepairCode;
      currentRepairCode = "";
      isRepairValid = false;

      console.log("========================================");
      console.log("          HÓA ĐƠN SỬA CHỮA");
      console.log("========================================");
      console.log(`Mã phiếu sửa chữa: ${paidRepairCode}`);
      console.log(`Số hạng mục sửa chữa: ${jobCount}`);
      console.log(`Đơn giá mỗi hạng mục: ${pricePerJob.toLocaleString("vi-VN")} VNĐ`);
      console.log(`Chi phí cơ sở: ${baseCost.toLocaleString("vi-VN")} VNĐ`);
      console.log(`Tiền giảm giá: ${discount.toLocaleString("vi-VN")} VNĐ`);
      console.log(`Phí xử lý dầu thải và vật tư: ${materialFee.toLocaleString("vi-VN")} VNĐ`);
      console.log(`Tổng thanh toán: ${totalPayment.toLocaleString("vi-VN")} VNĐ`);
      console.log("========================================");
      break;
    }

    case 3: {
      break;
    }

    case 0: {
      console.log("Thoát chương trình");
      break;
    }

    default: {
      console.log("Lựa chọn không hợp lệ.");
      break;
    }
  }

  if (choice === 0) {
    break;
  }
}
