class Product {
    constructor(name,code,unit,number,price,number1,price1,number2,price2,costofcapital,sell) {
        this.name=name;
        this.code=code;
        this.unit=unit;
        this.number=number;
        this.price=price;
        this.number1=number1;
        this.price1=price1;
        this.number2=number2;
        this.price2=price2;
        this.costofcapital=costofcapital;
        this.sell=sell;
    }
}
let product=[];
function showAllProduct() {
    let content = "<table  style='height:100% ;width: 100% ; border: solid black 1px'>" +
        "<tr>" +
        "<th rowspan='2'>Tên hàng hóa</th>" +
        "<th rowspan='2'>Mã hàng</th>" +
        "<th rowspan='2'>ĐVT</th>" +
        "<th colspan='2'>Tồn đầu kỳ</th>" +
        "<th colspan='2'>Nhập trong kỳ</th>" +
        "<th colspan='2'>Xuất trong kỳ</th>" +
        "<th colspan='2'>Tồn cuối kỳ</th>" +
        "<th rowspan='2'>Đơn giá</th>" +
        "<th rowspan='2'>Giá bán</th>"+
        "<th colspan='2'>Xuất nhập hàng</th>"+
        "<th rowspan='2'>Xóa</th>"+
        "</tr>" +
        "<tr>"+
        "<th>Số lượng</th>"+
        "<th>Thành tiền</th>"+
        "<th>Số lượng</th>"+
        "<th>Thành tiền</th>"+
        "<th>Số lượng</th>"+
        "<th>Thành tiền</th>"+
        "<th>Số lượng</th>"+
        "<th>Thành tiền</th>"+
        "<th>Nhập kho</th>"+
        "<th>Xuất kho</th>"+
        "</tr>"
    for (let i = 0; i <product.length; i++) {
        let a= product[i].number+product[i].number1-product[i].number2;
        let b= product[i].price+product[i].price1-product[i].price2;
        product[i].costofcapital=(product[i].price+product[i].price1)/(product[i].number+product[i].number1);
        let temp =  "<tr>"+
            "<td style='background-color: cornflowerblue'>"+product[i].name+"</td>"+
            "<td style='background-color: cornflowerblue'>"+product[i].code+"</td>"+
            "<td style='background-color: cornflowerblue'>"+product[i].unit+"</td>"+
            "<td>"+product[i].number+"</td>"+
            "<td>"+product[i].price.toLocaleString('vi-VN',{style:'currency',currency:'VND'})+"</td>"+
            "<td>"+product[i].number1+"</td>"+
            "<td>"+product[i].price1.toLocaleString('vi-VN',{style:'currency',currency:'VND'})+"</td>"+
            "<td>"+product[i].number2+"</td>"+
            "<td>"+product[i].price2.toLocaleString('vi-VN',{style:'currency',currency:'VND'})+"</td>"+
            "<td>"+a+"</td>"+
            "<td>"+b.toLocaleString('vi-VN',{style:'currency',currency:'VND'})+"</td>"+
            "<td>"+product[i].costofcapital.toLocaleString('vi-VN',{style:'currency',currency:'VND'})+"</td>"+
            "<td>"+(product[i].costofcapital/product[i].sell).toLocaleString('vi-VN',{style:'currency',currency:'VND'})+"</td>"+
            "<td><button onclick='nhapHang("+i+")' class='custom-btn btn-5'>Nhập kho</button></td>"+
            "<td><button onclick='xuatHang("+i+")' class='custom-btn btn-5'>Xuất kho</button></td>"+
            "<td><button onclick='Xoa("+i+")'class='custom-btn btn-14'>Xóa</button></td>"+
            "</tr>"
            content +=temp;
    }
    let sumofnumber="";
    let sumofprice="";
    let sumofnumber1="";
    let sumofprice1="";
    let sumofnumber2="";
    let sumofprice2="";
    let sumoflastnum="";
    let sumoflastprice="";
    for (let j=0;j<product.length;j++ ){
        sumofnumber=Number(sumofnumber)+product[j].number;
        sumofprice=Number(sumofprice)+product[j].price;
        sumofnumber1=Number(sumofnumber1)+product[j].number1;
        sumofprice1=Number(sumofprice1)+product[j].price1;
        sumofnumber2=Number(sumofnumber2)+product[j].number2;
        sumofprice2=Number(sumofprice2)+product[j].price2;
        sumoflastnum=Number(sumofnumber)+Number(sumofnumber1)-Number(sumofnumber2);
        sumoflastprice=Number(sumofprice)+Number(sumofprice1)-Number(sumofprice2);
    }
    content+= "<tr>"+
        "<th colspan='3' style='background-color: mediumpurple'>Tổng cộng</th>"+
        "<th style='background-color: mediumpurple'>"+sumofnumber+"</th>"+
        "<th style='background-color: mediumpurple'>"+sumofprice.toLocaleString('vi-VN',{style:'currency',currency:'VND'})+"</th>"+
        "<th style='background-color: mediumpurple'>"+sumofnumber1+"</th>"+
        "<th style='background-color: mediumpurple'>"+sumofprice1.toLocaleString('vi-VN',{style:'currency',currency:'VND'})+"</th>"+
        "<th style='background-color: mediumpurple'>"+sumofnumber2+"</th>"+
        "<th style='background-color: mediumpurple'>"+sumofprice2.toLocaleString('vi-VN',{style:'currency',currency:'VND'})+"</th>"+
        "<th style='background-color: mediumpurple'>"+sumoflastnum+"</th>"+
        "<th style='background-color: mediumpurple'>"+sumoflastprice.toLocaleString('vi-VN',{style:'currency',currency:'VND'})  +"</th>"+
        "<th colspan='5'style='background-color: mediumpurple'></th>"+
        "</tr>"
    content += "</table>";
    document.getElementById("content").innerHTML=content;
}
function checkExist(name){
    for (let i = 0; i < product.length; i++) {
        if(product[i].name==name){return true
        }
    }return false
}
function creatOldProduct(){
    let name = document.getElementById("newproduct").value;
    let code = document.getElementById("newproductcode").value;
    let unit=document.getElementById("unit").value;
    let number = Number(document.getElementById("number").value);
    let price =Number(document.getElementById("sumprice").value);
    let number1="";
    let price1="";
    let number2="";
    let price2="";
    let costofcapital="";
    let sell=Number(document.getElementById("sell").value);
    let newproduct =new Product(name,code,unit,number,price,number1,price1,number2,price2,costofcapital,sell);
    if (number>0 && price>0 && sell>0&&sell<1){
        if (!checkExist(name)){
            product.push(newproduct);
            showAllProduct();
        }else {alert("Tên mặt hàng đã được khai báo . Mời bạn nhập lại")}
    }else {alert("Bạn đã nhập sai . Mời bạn nhập lại")}
    document.getElementById("newproduct").value="";
    document.getElementById("newproductcode").value="";
    document.getElementById("unit").value="";
    document.getElementById("number").value="";
    document.getElementById("sumprice").value="";
    document.getElementById("sell").value="";
}
function creatNewProduct(){
    let name = document.getElementById("newproduct").value;
    let code = document.getElementById("newproductcode").value;
    let unit=document.getElementById("unit").value;
    let number1 = Number(document.getElementById("number").value);
    let price1 = Number(document.getElementById("sumprice").value);
    let number="";
    let price="";
    let number2="";
    let price2="";
    let costofcapital="";
    let sell=Number(document.getElementById("sell").value);
    let newproduct =new Product(name,code,unit,number,price,number1,price1,number2,price2,costofcapital,sell);
    if (number1>0 && price1>0 && sell>0&&sell<1){
        if (!checkExist(name)){
    product.push(newproduct);
    showAllProduct();
        }else {alert("Tên mặt hàng đã được khai báo . Mời bạn nhập lại")}
    }else {alert("Bạn đã nhập sai . Mời bạn nhập lại")}
    document.getElementById("newproduct").value="";
    document.getElementById("newproductcode").value="";
    document.getElementById("unit").value="";
    document.getElementById("number").value="";
    document.getElementById("sumprice").value="";
    document.getElementById("sell").value="";
}
function nhapHang(index){
    let addNumber=Number(prompt('Nhập số lượng'));
    let addPrice=Number(prompt("Nhập thành tiền"));
    product[index].number1=Number(product[index].number1)+addNumber;
    product[index].price1=Number(product[index].price1)+addPrice;
    showAllProduct();
}
function xuatHang(index){
    let minusNumber=Number(prompt("Nhập số lượng"));
    if (minusNumber>product[index].number+product[index].number1){
        alert("Bạn nhập sai . Mời bạn nhập lại")
    }else {
    product[index].number2=Number(product[index].number2)+minusNumber;
    product[index].price2=product[index].number2*product[index].costofcapital;}
    showAllProduct();
}
function Xoa(index){
    product.splice(index,1);
    showAllProduct();
}

showAllProduct();