function check(){
    let newProduct=[];
    let Code=document.getElementById("search").value;
    for (let i = 0; i < product.length; i++) {
        if (product[i].code.includes(Code)){
            newProduct.push(product[i]);
        }
    }
    let content = "<table border='' style='height:100% ;width: 100%'>" +
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
    for (let i = 0; i <newProduct.length; i++) {
        let a= newProduct[i].number+newProduct[i].number1-newProduct[i].number2;
        let b= newProduct[i].price+newProduct[i].price1-newProduct[i].price2;
        newProduct[i].costofcapital=(newProduct[i].price+newProduct[i].price1)/(newProduct[i].number+newProduct[i].number1);
        let temp =  "<tr>"+
            "<td style='background-color: cornflowerblue'>"+newProduct[i].name+"</td>"+
            "<td style='background-color: cornflowerblue'>"+newProduct[i].code+"</td>"+
            "<td style='background-color: cornflowerblue'>"+newProduct[i].unit+"</td>"+
            "<td>"+newProduct[i].number+"</td>"+
            "<td>"+newProduct[i].price.toLocaleString('vi-VN',{style:'currency',currency:'VND'})+"</td>"+
            "<td>"+newProduct[i].number1+"</td>"+
            "<td>"+newProduct[i].price1.toLocaleString('vi-VN',{style:'currency',currency:'VND'})+"</td>"+
            "<td>"+newProduct[i].number2+"</td>"+
            "<td>"+newProduct[i].price2.toLocaleString('vi-VN',{style:'currency',currency:'VND'})+"</td>"+
            "<td>"+a.toLocaleString('vi-VN',{style:'currency',currency:'VND'})+"</td>"+
            "<td>"+b.toLocaleString('vi-VN',{style:'currency',currency:'VND'})+"</td>"+
            "<td>"+newProduct[i].costofcapital.toLocaleString('vi-VN',{style:'currency',currency:'VND'})+"</td>"+
            "<td>"+(newProduct[i].costofcapital/newProduct[i].sell).toLocaleString('vi-VN',{style:'currency',currency:'VND'})+"</td>"+
            "<td><button onclick='nhapHang("+i+")' style='width: 100%'>Nhập kho</button></td>"+
            "<td><button onclick='xuatHang("+i+")' style='width: 100%'>Xuất kho</button></td>"+
            "<td><button onclick='Xoa("+i+")' style='width: 100%'>Xóa</button></td>"+
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