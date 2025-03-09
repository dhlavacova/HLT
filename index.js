(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;
//I'm adding this section so I don't have to keep updating this pen every year :-)
//remove this if you don't need it
    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth()+1).padStart(2, "0"),
        yyyy = today.getFullYear()

    const eventDay = 26,   // Den události (9. března)
        eventMonth = 2,  // Měsíc (0-based, tedy 2 = Březen)
        eventHour = 18,  // Čas (18:00)
        eventMinute = 0; // Minuty

    let eventDate = new Date(yyyy, eventMonth, eventDay, eventHour, eventMinute, 0);

    const countDown = eventDate.getTime();

    const x = setInterval(function() {
        const now = new Date().getTime(),
            distance = countDown - now;

        document.getElementById("days").innerText = Math.floor(distance / day);
        document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
        document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
        document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

        // Pokud čas vyprší
        if (distance < 0) {
            document.getElementById("countdown").style.display = "none";
            clearInterval(x);
        }

    }, 1000); // Aktualizace každou sekundu
}());