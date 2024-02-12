document.addEventListener('DOMContentLoaded', function () {
  let calendarEl = document.getElementById('calendar');
  let calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    selectable: true,
    validRange: {
      start: Date.now(),
    }
  });
  calendar.render();

  calendar.on('dateClick', function (info) {

    let date = info.dateStr;
    document.getElementById("dateTxt").value = date;
  });

  let drop = document.getElementById("dropdown");
  let hiddenDiv = document.getElementById("hidden")
  
  drop.addEventListener("change", function() {
    if (drop.value === "Other") {
      hiddenDiv.style.display = "block";
    } else {
      hiddenDiv.style.display = "none";
    }
  });
});