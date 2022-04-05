window.onload = function () {


    b1.onclick = function () {
        name = prompt("이름을 입력하세요.");
        document.getElementsByClassName("name")[0].innerHTML = "Name : " + name;
        // 대괄호는 클래스 번호를 의미함
    }

    b2.onclick = function () {
        name = prompt("전화번호를 입력하세요.");
        document.getElementsByClassName("number")[0].innerHTML = "Number : " + name;
    }

    b3.onclick = function () {
        name = prompt("나이를 입력하세요.");
        document.getElementsByClassName("age")[0].innerHTML = "Age : " + name;
    }

    b4.onclick = function () {
        name = prompt("주소를 입력하세요.");
        document.getElementsByClassName("addr")[0].innerHTML = "Address : " + name;
    }

    b5.onclick = function () {
        name = prompt("MBTI를 입력하세요.");
        document.getElementsByClassName("mbti")[0].innerHTML = "MBTI : " + name;
    }
};