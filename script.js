function game() {
    let randNumber = parseInt(Math.random() * 99 + 1);
    let attempt = 10;

    function trying() {

        let userNumber = prompt("Введите число"); //"буквы"
        function checkNumber() {
            if (parseInt(userNumber)) {
                return Number(userNumber);
            } else {
                userNumber = prompt("Ошибка, сервера гугл недоступны, а пентагон взломан. повторите попытку вчера");
                checkNumber();
            }
        }
        userNumber = checkNumber();
            if (userNumber > randNumber) {
                alert("Загаданное число меньше вашего, повторите попытку");
            } else if (userNumber < randNumber) {
                alert("Загаданное число больше вашего, повторите попытку");
            } else {
                alert("Вы угадали число");
                return;
            }
            if (attempt == 1) {
                alert - ("У вас осталось не попыток, вы проиграли");
                if (confirm("Вы хотите занового запустить игру")){
                    game();
                }else{
                    return;
                }
            }
        alert - ("У вас осталось " + (--attempt) + "попыток");
        trying();
    }
    trying();
}
game();