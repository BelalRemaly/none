let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');
let div4 = document.getElementById('div4');

function run() {
    let id = document.getElementById('id_number').value;
    id.split('')
    if (id.length < 14) {
        div1.innerHTML = "invalid Id";
        div2.innerHTML = " "
        div3.innerHTML = " "
        div4.innerHTML = " "
    }
    else if (id.length > 14) {
        div1.innerHTML = "invalid Id";
        div2.innerHTML = " "
        div3.innerHTML = " "
        div4.innerHTML = " "
    }
    else if (id[0] != 2 && id[0] != 3) {
        div1.innerHTML = "invalid Id";
        div2.innerHTML = " "
        div3.innerHTML = " "
        div4.innerHTML = " "
    }
    else {
        if (id[0] == 3) {
            alph = 20;
        }
        else if (id[0] == 2) {
            alph = 19;
        }
        else {
            alph = "invalid";
        }
        let year = id[1] + id[2];
        // div1.innerHTML = "year of birth is " + alph + year;
        let month = id[3] + id[4];
        // div2.innerHTML = "month of birth is " + month;
        let day = id[5] + id[6];
        // div3.innerHTML = "day of birth is " + day;
        let birth = new Date(alph + year, month - 1, day);
        let today = new Date();
        let age = today.getFullYear() - birth.getFullYear();
        let monthDiffr = today.getMonth() - birth.getMonth();
        if (monthDiffr < 0) {
            year--;
            month + 12;
        }
        div1.innerHTML = "The age is " + age + " and " + monthDiffr + " month";
        let conturyCode = id[7] + id[8];
        div2.innerHTML = `the contury code is ${conturyCode}`
        let gender = id[12];
        if (gender % 2 == 0) {
            div3.innerHTML = "The gender is : Girl"
        }
        else {
            div3.innerHTML = "The gender is : Boy"
        }
    }
}