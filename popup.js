document.addEventListener('DOMContentLoaded', function () {
    var currentDate = new Date();

    // Select box oluşturuluyor
    var selectBox = document.createElement('select');
    selectBox.id = 'date-format';

    // Farklı formatlar ekleniyor
    var formats = ['dd-MM-yy', 'dd-MM-yyyy', 'MM-dd-yyyy', 'yyyy-MM-dd', 'yyyy-MM-dd HH:mm:ss', 'EEEEE MMMMM yyyy HH:mm:ss.SSSZ'];
    formats.forEach(function (format) {
        var option = document.createElement('option');
        option.value = format;
        option.text = format;
        selectBox.appendChild(option);
    });

    // Select box'ı sayfaya ekliyoruz
    document.body.appendChild(selectBox);

    // Bir line break ekliyoruz
    var lineBreak = document.createElement('br');
    document.body.appendChild(lineBreak);

    // Current date'i göstermek için bir div oluşturuyoruz
    var dateDiv = document.createElement('div');
    dateDiv.id = 'current-date';
    document.body.appendChild(dateDiv);

    // Select box'ta bir değişiklik olduğunda date'i yeniden formatlayıp gösteriyoruz
    document.getElementById('date-format').addEventListener('change', function () {
        var format = this.value;
        var dateString;
        switch (format) {
            case 'dd-MM-yy':
                dateString = ("0" + currentDate.getDate()).slice(-2) + "-" + ("0" + (currentDate.getMonth() + 1)).slice(-2) + "-" + currentDate.getFullYear().toString().substr(-2);
                break;
            case 'dd-MM-yyyy':
                dateString = ("0" + currentDate.getDate()).slice(-2) + "-" + ("0" + (currentDate.getMonth() + 1)).slice(-2) + "-" + currentDate.getFullYear();
                break;
            case 'MM-dd-yyyy':
                dateString = ("0" + (currentDate.getMonth() + 1)).slice(-2) + "-" + ("0" + currentDate.getDate()).slice(-2) + "-" + currentDate.getFullYear();
                break;
            case 'yyyy-MM-dd':
                dateString = currentDate.getFullYear() + "-" + ("0" + (currentDate.getMonth() + 1)).slice(-2) + "-" + ("0" + currentDate.getDate()).slice(-2);
                break;
            case 'yyyy-MM-dd HH:mm:ss':
                dateString = currentDate.getFullYear() + "-" + ("0" + (currentDate.getMonth() + 1)).slice(-2) + "-" + ("0" + currentDate.getDate()).slice(-2) + " " + currentDate.toTimeString().slice(0, 8);
                break;
            case 'EEEEE MMMMM yyyy HH:mm:ss.SSSZ':
                dateString = currentDate.toUTCString();
                break;
            default:
                dateString = currentDate.toDateString();
        }
        document.getElementById('current-date').innerText = dateString;
    });

    // Başlangıçta default olarak 'dd-MM-yy' formatını seçiyoruz
    document.getElementById('date-format').value = 'dd-MM-yy';
    document.getElementById('current-date').innerText = ("0" + currentDate.getDate()).slice(-2) + "-" + ("0" + (currentDate.getMonth() + 1)).slice(-2) + "-" + currentDate.getFullYear().toString().substr(-2);
});
