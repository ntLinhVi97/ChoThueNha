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

// function createAcc() {
//     var hoTen = $('#userNameCreateAcc').val();
//     var employeeIDCreateAcc = $('#employeeIDCreateAcc').val();
//     var diaChi = $('#address').val();
//     var dienThoai = $('#phone').val();
//     var email = $('#email').val();
//     // ma so xe tu generate
//     // var maSoXe= $('#carID').val();

//     $.ajax({
//         type: 'POST',
//         url: 'localhost:3000/createAcc',
//         data: {
//             hoten: hoTen,
//             employeeIDCreateAcc: employeeIDCreateAcc,
//             diachi: diaChi,
//             sdt: dienThoai,
//             email: email
//         },
//         dataType: "json",
//         success: function (resultData) {
//             alert("Save Complete");
//         }
//     });
// }



  









