//

//########### Handle show hide page ###################

function hideAll() {
    $('#signInSection').hide();
    $('#adminPage').hide();
}

function showLogin() {
    hideAll();
    $('#signInSection').show();
}

function showCreateAccComponent() {
    var showEle = ['#createAccComponent', '#changePass', '#createAccActive', '#createBranch', '#editBranch', '#editEmployee', '#createKindsOfHouse', '#editKindsOfHouse', '#deleteAcc'];
    var hiddenElements = ['#createBrachComponent', '#changePassComponent', '#changePassActive', '#createAcc', '#createBranchActive','#editBranchActive', '#editEmployeeActive', '#createKindsOfHouseActive', '#editKindsOfHouseActive', '#deleteAccActive'];
    hideAll();
    $('#adminPage').show();
    hideElements(hiddenElements);
    showElements(showEle);

    handleNavbtnForAdmin();
    var attribute = ['#userNameCreateAcc', '#employmentIDCreateAcc']
    $('#cancelbtnCreateAcc').click(function () {
        blankValue(attribute);
    })
}

function showChangePassComponent() {
    var showEle = ['#changePassComponent', '#changePassActive', '#createAcc', '#createBranch', '#editBranch', '#editEmployee', '#createKindsOfHouse', '#editKindsOfHouse', '#deleteAcc'];
    var hiddenElements = ['#createBrachComponent', '#createAccComponent', '#changePass', '#createAccActive', '#createBranchActive','#editBranchActive', '#editEmployeeActive', '#createKindsOfHouseActive', '#editKindsOfHouseActive', '#deleteAccActive'];
    hideAll();
    $('#adminPage').show();
    hideElements(hiddenElements);
    showElements(showEle);

    handleNavbtnForAdmin();
    var attribute = ['#oldPassChangePass', '#newPassChangePass', '#confirmPassChangePass'];
    $('#cancelbtnChangePass').click(function () {
        blankValue(attribute);
    })
}

function showCreateBranchComponent() {
    var showEle = ['#createBrachComponent', '#changePass', '#createAcc','#createBranchActive', '#editBranch', '#editEmployee', '#createKindsOfHouse', '#editKindsOfHouse', '#deleteAcc'];
    var hiddenElements = ['#createAccComponent', '#changePassComponent','#changePassActive', '#createAccActive', '#createBranch','#editBranchActive', '#editEmployeeActive', '#createKindsOfHouseActive', '#editKindsOfHouseActive', '#deleteAccActive'];
    hideAll();
    $('#adminPage').show();
    hideElements(hiddenElements);
    showElements(showEle);

    handleNavbtnForAdmin();
    var attribute = ['#streetCreateBranch', '#districCreateBranch', '#areaCreateBranch', '#cityCreateBranch', '#phoneCreateBranch', '#faxCreateBranch'
    ];
    $('#cancelbtnCreateBranch').click(function () {
        blankValue(attribute);
    })
}

function handleNavbtnForAdmin() {
    $('#changePass').click(function () {
        showChangePassComponent();
    });

    $('#createAcc').click(function () {
        showCreateAccComponent();
    });

    $('#createBranch').click(function () {
        showCreateBranchComponent();
    });

    $('#editBranch').click(function () {
        
    });

    $('#editEmployee').click(function () {
        
    }); 
    
    $('#createKindsOfHouse').click(function () {
        
    });

    $('#editKindsOfHouse').click(function () {
        
    });

    $('#deleteAcc').click(function () {
        
    });

}

function hideElements(arr) {
    arr.forEach(x => {
        $(x).hide();
    })
}

function showElements(arr) {
    arr.forEach(x => {
        $(x).show();
    })
}

function blankValue(arr) {
    arr.forEach(x => {
        $(x).val('');
    })
}

$(document).ready(() => {

    showChangePassComponent();

    $(".logoutbtn").click(function () {
        showLogin();
    })

})

//

// ############# Handle event #############
function login() {
    var tendangnhap = $('#userName').val();
    var matkhau = $('#password').val();
    getUser(tendangnhap, matkhau);
}

//

// ############## API request #############

//create account request
function registerAccount() {
    var tendangnhap = $('#userNameSignUp').val();
    var bophan = $('#departmentCreateAcc option:selected').text();
    var matKhau = $('#passwordSignUp').val();
    $.ajax({
        type: 'POST',
        url: 'localhost:3000/register/registerAccount',
        data: {
            tendangnhap: tendangnhap,
            bophan: bophan,
            matkhau: matkhau
        },
        dataType: "json",
        success: function (resultData) {
            alert("Save Complete");
            showLogin();
        }
    });
}

function getUser(tendangnhap, matkhau) {
    $.ajax({
        type: 'GET',
        url: 'localhost:3000/login',
        data: {
            userName: tendangnhap, //userName, passWord are column in db; tendangnhap, matkhau are value for send to API
            passWord: matkhau
        },
        dataType: "json",
        success: function (resultData) {
            if (resultData == null) {
                alert("Đăng nhập không thành công!");
            }
            else {
                if (resultData.bophan == "admin") {
                    showChangePassComponent();
                }
            }
        }
    });
}

function createAcc() {
    var hoTen = $('#userNameCreateAcc').val();
    var employeeIDCreateAcc = $('#employeeIDCreateAcc').val();
    var diaChi = $('#address').val();
    var dienThoai = $('#phone').val();
    var email = $('#email').val();
    // ma so xe tu generate
    // var maSoXe= $('#carID').val();

    $.ajax({
        type: 'POST',
        url: 'localhost:3000/createAcc',
        data: {
            hoten: hoTen,
            employeeIDCreateAcc: employeeIDCreateAcc,
            diachi: diaChi,
            sdt: dienThoai,
            email: email
        },
        dataType: "json",
        success: function (resultData) {
            alert("Save Complete");
        }
    });
}

var lastCarID = 0;
var generateCarID = 0;
function getLastCarID(){
    $.ajax({
        type: 'GET',
        url: 'localhost:3000/getLastCarID',
        dataType: "String",
        success: function (resultData) {
            console.log("getLastCarID success!");
            this.lastCarID = parseInt(resultData);
            this.generateCarID = lastCarID + 1;
            $("#carID").val(this.generateCarID);
        }
    });
}

var lastOwnerID = 0;
var generateOwnerID = 0;
function getLastOwnerID() {
    $.ajax({
        type: 'GET',
        url: 'localhost:3000/getLastOwnerID',
        dataType: "String",
        success: function (resultData) {
            console.log("getLastOwnerID success!");
            this.lastOwnerID = parseInt(resultData);
            //this.generateOwnerID = lastOwnerID + 1;
           
            $("#mtbID").val(this.generateCarID);
            $("#OwnerID").val(this.lastOwnerID);
        }
    });
}

function saveInfoMotoBike() {
    // mtbID tu generate
    //var mtbID = $('#mtbID').val();
    var loai = $('#carType').val();
    var biensoxe = $('#bikeID').val();
    var giamua = $('#price').val();

    var maSoXe = generateCarID;
    var maNguoiBan = this.lastOwnerID;

    $.ajax({
        type: 'POST',
        url: 'localhost:3000/saveInfoMotoBike',
        data: {
            loai: loai,
            biensoxe: biensoxe,
            giamua: giamua,
            machuxe: maNguoiBan,
            id: maSoXe
        },
        dataType: "json",
        success: function (resultData) {
            alert("Save Complete");
        }
    });
}

var lastCustomerID = 0;
var generateCustomerID = 0;
function getLastOwnerID() {
    $.ajax({
        type: 'GET',
        url: 'localhost:3000/getLastOwnerID',
        dataType: "String",
        success: function (resultData) {
            console.log("getLastOwnerID success!");
            this.lastCustomerID = parseInt(resultData);
            this.generateCustomerID = lastOwnerID + 1;
           
            $("#customerID").val(this.generateCustomerID);
        }
    });
}

function saveInforCustomer() {
    var hoten = $('#customerName').val();
    var employeeIDCreateAcc = $('#customeremployeeIDCreateAcc').val();
    var diachi = $('#customerAddress').val();
    var dienThoai = $('#customerPhone').val();
    var email = $('#customerEmail').val();
    var yeuCau = $('#customerRequest').val();

    $.ajax({
        type: 'POST',
        url: 'localhost:3000/saveInforCustomer',
        data: {
            hoten: hoten,
            employeeIDCreateAcc: employeeIDCreateAcc,
            diachi: diachi,
            sdt: dienThoai,
            email: email,
            yeucau: yeuCau
        },
        dataType: "json",
        success: function (resultData) {
            alert("Save Complete");
        }
    });
}

function searchCustomer() {
    var id = $('#customerIDtst').val();
    var employeeIDCreateAcc = $('#tstemployeeIDCreateAccsearch').val();
    $.ajax({
        type: 'GET',
        url: 'localhost:3000/searchCustomer',
        data: {
            id: id,
            employeeIDCreateAcc: employeeIDCreateAcc,
        },
        dataType: "json",
        success: function (resultData) {
            //alert("Save Complete");
        }
    });
}

function saveInforTransaction() {
    var maXe = $('#customerIDtst').val();
    var giaBan = $('#tstemployeeIDCreateAccsearch').val();
    var ngayGD = $('#tstDate').val();
    $.ajax({
        type: 'POST',
        url: 'localhost:3000/saveInforTransaction',
        data: {
            maXe: maXe,
            giaBan: giaBan,
            ngayGD: ngayGD
        },
        dataType: "json",
        success: function (resultData) {
            alert("Save Complete");
        }
    });
}

function saveInforCarStatus() {
    var status = $('#status').val();
    var minPrice = $('#minPrice').val();
    var maxPrice = $('#maxPrice').val();
    var maXe = $('#sttCarID').val();
   
    $.ajax({
        type: 'POST',
        url: 'localhost:3000/saveInforCarStatus',
        data: {
            status: status,
            minPrice: minPrice,
            maxPrice: maxPrice,
            maXe: maXe
        },
        dataType: "json",
        success: function (resultData) {
            alert("Save Complete");
        }
    });
}







