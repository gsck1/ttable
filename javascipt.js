```javascript
/* =========================================================
   BCA TIME TABLE MANAGEMENT SYSTEM
   Complete JavaScript
   Timetable data is included directly in this JS file
========================================================= */


/* =========================================================
   DATABASE / TIMETABLE DATA
========================================================= */

let db = {
    meta: {
        times: [
            "10:30-11:30",
            "11:30-12:30",
            "12:30-1:30",
            "1:30-2:30",
            "2:30-3:30",
            "3:30-4:30"
        ],

        saturdayTimes: [
            "7:30-8:30",
            "8:30-9:30",
            "9:30-10:30",
            "10:30-11:30",
            "11:30-12:30",
            "12:30-1:30"
        ],

        days: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
        ],

        allRooms: [
            "Room 6",
            "Smart Room",
            "BCA Lab"
        ]
    },

    originalTimetable: [
        /* ================= MONDAY ================= */

        {"day":"Monday","class":"BCA-II","time":"11:30-12:30","subject":"SE","teacher":"NPT","room":"Room 6"},
        {"day":"Monday","class":"BCA-II","time":"12:30-1:30","subject":"DBMS LAB","teacher":"KSC","room":"BCA Lab"},
        {"day":"Monday","class":"BCA-II","time":"1:30-2:30","subject":"DBMS LAB","teacher":"KSC","room":"BCA Lab"},
        {"day":"Monday","class":"BCA-II","time":"2:30-3:30","subject":"PS","teacher":"KVD","room":"Room 6"},

        {"day":"Monday","class":"BCA-III (AI)","time":"11:30-12:30","subject":"NLP","teacher":"MPC","room":"Room 6"},
        {"day":"Monday","class":"BCA-III (AI)","time":"12:30-1:30","subject":"DIP","teacher":"NPT","room":"Room 6"},
        {"day":"Monday","class":"BCA-III (AI)","time":"2:30-3:30","subject":"NN* LAB","teacher":"","room":"BCA Lab"},
        {"day":"Monday","class":"BCA-III (AI)","time":"3:30-4:30","subject":"NN* LAB","teacher":"","room":"BCA Lab"},

        {"day":"Monday","class":"BCA-III (DS)","time":"10:30-11:30","subject":"DS LAB","teacher":"KRS","room":"BCA Lab"},
        {"day":"Monday","class":"BCA-III (DS)","time":"11:30-12:30","subject":"DS LAB","teacher":"KRS","room":"BCA Lab"},
        {"day":"Monday","class":"BCA-III (DS)","time":"1:30-2:30","subject":"TSA","teacher":"ADU","room":"Room 6"},
        {"day":"Monday","class":"BCA-III (DS)","time":"2:30-3:30","subject":"ML","teacher":"KSC","room":"Room 6"},


        /* ================= TUESDAY ================= */

        {"day":"Tuesday","class":"BCA-II","time":"11:30-12:30","subject":"DBMS","teacher":"KSC","room":"Room 6"},
        {"day":"Tuesday","class":"BCA-II","time":"12:30-1:30","subject":"PYTHON LAB","teacher":"KRS","room":"BCA Lab"},
        {"day":"Tuesday","class":"BCA-II","time":"1:30-2:30","subject":"PYTHON LAB","teacher":"KRS","room":"BCA Lab"},
        {"day":"Tuesday","class":"BCA-II","time":"2:30-3:30","subject":"PS","teacher":"KVD","room":"Room 6"},

        {"day":"Tuesday","class":"BCA-III (AI)","time":"10:30-11:30","subject":"DIP LAB","teacher":"NPT","room":"BCA Lab"},
        {"day":"Tuesday","class":"BCA-III (AI)","time":"11:30-12:30","subject":"DIP LAB","teacher":"NPT","room":"BCA Lab"},
        {"day":"Tuesday","class":"BCA-III (AI)","time":"1:30-2:30","subject":"NLP","teacher":"MPC","room":"Room 6"},
        {"day":"Tuesday","class":"BCA-III (AI)","time":"2:30-3:30","subject":"NN*","teacher":"","room":"Room 6"},

        {"day":"Tuesday","class":"BCA-III (DS)","time":"11:30-12:30","subject":"DS","teacher":"KRS","room":"Room 6"},
        {"day":"Tuesday","class":"BCA-III (DS)","time":"12:30-1:30","subject":"ML","teacher":"KSC","room":"Room 6"},
        {"day":"Tuesday","class":"BCA-III (DS)","time":"2:30-3:30","subject":"TSA LAB","teacher":"ADU","room":"BCA Lab"},
        {"day":"Tuesday","class":"BCA-III (DS)","time":"3:30-4:30","subject":"TSA LAB","teacher":"ADU","room":"BCA Lab"},


        /* ================= WEDNESDAY ================= */

        {"day":"Wednesday","class":"BCA-II","time":"11:30-12:30","subject":"SE","teacher":"NPT","room":"Room 6"},
        {"day":"Wednesday","class":"BCA-II","time":"12:30-1:30","subject":"PYTHON LAB","teacher":"KRS","room":"BCA Lab"},
        {"day":"Wednesday","class":"BCA-II","time":"1:30-2:30","subject":"PYTHON LAB","teacher":"KRS","room":"BCA Lab"},
        {"day":"Wednesday","class":"BCA-II","time":"2:30-3:30","subject":"PS","teacher":"KVD","room":"Room 6"},

        {"day":"Wednesday","class":"BCA-III (AI)","time":"11:30-12:30","subject":"NN*","teacher":"","room":"Room 6"},
        {"day":"Wednesday","class":"BCA-III (AI)","time":"12:30-1:30","subject":"DIP","teacher":"NPT","room":"Room 6"},
        {"day":"Wednesday","class":"BCA-III (AI)","time":"2:30-3:30","subject":"NLP LAB","teacher":"MPC","room":"BCA Lab"},
        {"day":"Wednesday","class":"BCA-III (AI)","time":"3:30-4:30","subject":"NLP LAB","teacher":"MPC","room":"BCA Lab"},

        {"day":"Wednesday","class":"BCA-III (DS)","time":"10:30-11:30","subject":"ML LAB","teacher":"KSC","room":"BCA Lab"},
        {"day":"Wednesday","class":"BCA-III (DS)","time":"11:30-12:30","subject":"ML LAB","teacher":"KSC","room":"BCA Lab"},
        {"day":"Wednesday","class":"BCA-III (DS)","time":"1:30-2:30","subject":"TSA","teacher":"ADU","room":"Room 6"},
        {"day":"Wednesday","class":"BCA-III (DS)","time":"2:30-3:30","subject":"DS","teacher":"KRS","room":"Room 6"},


        /* ================= THURSDAY ================= */

        {"day":"Thursday","class":"BCA-II","time":"10:30-11:30","subject":"DBMS","teacher":"KSC","room":"Room 6"},
        {"day":"Thursday","class":"BCA-II","time":"11:30-12:30","subject":"SE","teacher":"NPT","room":"Room 6"},
        {"day":"Thursday","class":"BCA-II","time":"12:30-1:30","subject":"DBMS LAB","teacher":"KSC","room":"BCA Lab"},
        {"day":"Thursday","class":"BCA-II","time":"1:30-2:30","subject":"DBMS LAB","teacher":"KSC","room":"BCA Lab"},
        {"day":"Thursday","class":"BCA-II","time":"2:30-3:30","subject":"FE","teacher":"MPC","room":"Room 6"},

        {"day":"Thursday","class":"BCA-III (AI)","time":"10:30-11:30","subject":"NN* LAB","teacher":"","room":"BCA Lab"},
        {"day":"Thursday","class":"BCA-III (AI)","time":"11:30-12:30","subject":"NN* LAB","teacher":"","room":"BCA Lab"},
        {"day":"Thursday","class":"BCA-III (AI)","time":"12:30-1:30","subject":"QT*","teacher":"","room":"Room 6"},
        {"day":"Thursday","class":"BCA-III (AI)","time":"1:30-2:30","subject":"DIP","teacher":"NPT","room":"Room 6"},

        {"day":"Thursday","class":"BCA-III (DS)","time":"1:30-2:30","subject":"TSA","teacher":"ADU","room":"Room 6"},
        {"day":"Thursday","class":"BCA-III (DS)","time":"2:30-3:30","subject":"DS LAB","teacher":"KRS","room":"BCA Lab"},
        {"day":"Thursday","class":"BCA-III (DS)","time":"3:30-4:30","subject":"DS LAB","teacher":"KRS","room":"BCA Lab"},


        /* ================= FRIDAY ================= */

        {"day":"Friday","class":"BCA-II","time":"10:30-11:30","subject":"DBMS","teacher":"KSC","room":"Room 6"},
        {"day":"Friday","class":"BCA-II","time":"11:30-12:30","subject":"PYTHON","teacher":"KRS","room":"Room 6"},
        {"day":"Friday","class":"BCA-II","time":"12:30-1:30","subject":"FE LAB","teacher":"MPC","room":"BCA Lab"},
        {"day":"Friday","class":"BCA-II","time":"1:30-2:30","subject":"FE LAB","teacher":"MPC","room":"BCA Lab"},

        {"day":"Friday","class":"BCA-III (AI)","time":"10:30-11:30","subject":"TSA LAB","teacher":"ADU","room":"BCA Lab"},
        {"day":"Friday","class":"BCA-III (AI)","time":"11:30-12:30","subject":"TSA LAB","teacher":"ADU","room":"BCA Lab"},
        {"day":"Friday","class":"BCA-III (AI)","time":"12:30-1:30","subject":"QT*","teacher":"","room":"Room 6"},
        {"day":"Friday","class":"BCA-III (AI)","time":"1:30-2:30","subject":"NN*","teacher":"","room":"Room 6"},
        {"day":"Friday","class":"BCA-III (AI)","time":"2:30-3:30","subject":"DIP LAB","teacher":"NPT","room":"BCA Lab"},
        {"day":"Friday","class":"BCA-III (AI)","time":"3:30-4:30","subject":"DIP LAB","teacher":"NPT","room":"BCA Lab"},

        {"day":"Friday","class":"BCA-III (DS)","time":"10:30-11:30","subject":"TSA LAB","teacher":"ADU","room":"BCA Lab"},
        {"day":"Friday","class":"BCA-III (DS)","time":"11:30-12:30","subject":"TSA LAB","teacher":"ADU","room":"BCA Lab"},
        {"day":"Friday","class":"BCA-III (DS)","time":"12:30-1:30","subject":"QT*","teacher":"","room":"Room 6"},
        {"day":"Friday","class":"BCA-III (DS)","time":"1:30-2:30","subject":"DS","teacher":"KRS","room":"Room 6"},


        /* ================= SATURDAY ================= */

        {"day":"Saturday","class":"BCA-II","time":"9:30-10:30","subject":"PYTHON","teacher":"KRS","room":"Room 6"},
        {"day":"Saturday","class":"BCA-II","time":"11:30-12:30","subject":"FE LAB","teacher":"MPC","room":"BCA Lab"},
        {"day":"Saturday","class":"BCA-II","time":"12:30-1:30","subject":"FE LAB","teacher":"MPC","room":"BCA Lab"},

        {"day":"Saturday","class":"BCA-III (AI)","time":"7:30-8:30","subject":"NLP LAB","teacher":"MPC","room":"BCA Lab"},
        {"day":"Saturday","class":"BCA-III (AI)","time":"8:30-9:30","subject":"NLP LAB","teacher":"MPC","room":"BCA Lab"},
        {"day":"Saturday","class":"BCA-III (AI)","time":"10:30-11:30","subject":"NLP","teacher":"MPC","room":"Room 6"},

        {"day":"Saturday","class":"BCA-III (DS)","time":"9:30-10:30","subject":"ML LAB","teacher":"KSC","room":"BCA Lab"},
        {"day":"Saturday","class":"BCA-III (DS)","time":"10:30-11:30","subject":"ML LAB","teacher":"KSC","room":"BCA Lab"},
        {"day":"Saturday","class":"BCA-III (DS)","time":"11:30-12:30","subject":"ML","teacher":"KSC","room":"Room 6"}
    ]
};


/* =========================================================
   GLOBAL VARIABLES
========================================================= */

let times = db.meta.times;
let saturdayTimes = db.meta.saturdayTimes;
let days = db.meta.days;
let allRooms = db.meta.allRooms;

let originalTimetable = JSON.parse(
    JSON.stringify(db.originalTimetable)
);

let timetable = [];

let studentViewMode = "daily";
let teacherViewMode = "daily";


/* =========================================================
   LOAD DATABASE
========================================================= */

function loadDatabase() {

    try {

        /*
           First check if admin has modified timetable.
           If not, use original timetable.
        */

        timetable =
            JSON.parse(
                localStorage.getItem("bcaTimetable")
            ) || JSON.parse(
                JSON.stringify(originalTimetable)
            );


        goHome();

    } catch (error) {

        console.error(
            "Error loading timetable:",
            error
        );

        alert(
            "Failed to load timetable database."
        );

    }

}


/* =========================================================
   SAVE DATA
========================================================= */

function saveData() {

    localStorage.setItem(
        "bcaTimetable",
        JSON.stringify(timetable)
    );

}


/* =========================================================
   HIDE ALL CARDS
========================================================= */

function hideAll() {

    document
        .querySelectorAll(".card")
        .forEach(x => {

            x.classList.add("hidden");

        });

}


/* =========================================================
   HOME
========================================================= */

function goHome() {

    hideAll();

    const home =
        document.getElementById("home");

    if (home) {

        home.classList.remove("hidden");

    }

}


/* =========================================================
   STUDENT PAGE
========================================================= */

function showStudent() {

    hideAll();

    const student =
        document.getElementById("student");

    if (student) {

        student.classList.remove("hidden");

    }

    setToday("studentDate");

    setStudentView("daily");

}


/* =========================================================
   TEACHER PAGE
========================================================= */

function showTeacher() {

    hideAll();

    const teacher =
        document.getElementById("teacher");

    if (teacher) {

        teacher.classList.remove("hidden");

    }

    loadTeachersDropdown();

    setToday("teacherDate");

    setToday("teacherCheckDate");

    setTeacherView("daily");

}


/* =========================================================
   ADMIN LOGIN PAGE
========================================================= */

function showAdmin() {

    hideAll();

    const adminLogin =
        document.getElementById("adminLogin");

    if (adminLogin) {

        adminLogin.classList.remove("hidden");

    }

}


/* =========================================================
   STUDENT YEAR CHANGE
========================================================= */

function yearChanged() {

    const year =
        document.getElementById("studentYear").value;

    const box =
        document.getElementById("streamBox");

    if (!box) return;

    if (year === "BCA-III") {

        box.classList.remove("hidden");

    } else {

        box.classList.add("hidden");

    }

}


/* =========================================================
   STUDENT VIEW MODE
========================================================= */

function setStudentView(mode) {

    studentViewMode = mode;

    const dailyBtn =
        document.getElementById("studentBtnDaily");

    const weeklyBtn =
        document.getElementById("studentBtnWeekly");

    const dateBox =
        document.getElementById("studentDateBox");


    if (mode === "daily") {

        if (dailyBtn)
            dailyBtn.classList.add("active");

        if (weeklyBtn)
            weeklyBtn.classList.remove("active");

        if (dateBox)
            dateBox.classList.remove("hidden");

    } else {

        if (weeklyBtn)
            weeklyBtn.classList.add("active");

        if (dailyBtn)
            dailyBtn.classList.remove("active");

        if (dateBox)
            dateBox.classList.add("hidden");

    }

}


/* =========================================================
   TEACHER VIEW MODE
========================================================= */

function setTeacherView(mode) {

    teacherViewMode = mode;

    const dailyBtn =
        document.getElementById("teacherBtnDaily");

    const weeklyBtn =
        document.getElementById("teacherBtnWeekly");

    const availabilityBtn =
        document.getElementById("teacherBtnAvailability");

    const dateBox =
        document.getElementById("teacherDateBox");

    const availabilityBox =
        document.getElementById("teacherAvailabilityBox");

    const actionBtn =
        document.getElementById("teacherActionBtn");


    if (dailyBtn)
        dailyBtn.classList.remove("active");

    if (weeklyBtn)
        weeklyBtn.classList.remove("active");

    if (availabilityBtn)
        availabilityBtn.classList.remove("active");


    if (mode === "daily") {

        if (dailyBtn)
            dailyBtn.classList.add("active");

        if (dateBox)
            dateBox.classList.remove("hidden");

        if (availabilityBox)
            availabilityBox.classList.add("hidden");

        if (actionBtn) {

            actionBtn.style.display =
                "inline-block";

            actionBtn.innerText =
                "Show Timetable";

        }

    }

    else if (mode === "weekly") {

        if (weeklyBtn)
            weeklyBtn.classList.add("active");

        if (dateBox)
            dateBox.classList.add("hidden");

        if (availabilityBox)
            availabilityBox.classList.add("hidden");

        if (actionBtn) {

            actionBtn.style.display =
                "inline-block";

            actionBtn.innerText =
                "Show Timetable";

        }

    }

    else {

        if (availabilityBtn)
            availabilityBtn.classList.add("active");

        if (dateBox)
            dateBox.classList.add("hidden");

        if (availabilityBox)
            availabilityBox.classList.remove("hidden");

        if (actionBtn)
            actionBtn.style.display = "none";

        checkTeacherAvailability();

    }

}


/* =========================================================
   LOAD TEACHERS DROPDOWN
========================================================= */

function loadTeachersDropdown() {

    const teachers = [
        ...new Set(
            timetable
                .map(x => x.teacher)
                .filter(x => x)
        )
    ];


    const select =
        document.getElementById("teacherSelect");

    if (select) {

        select.innerHTML =
            `<option value="">Select Teacher</option>`;

        teachers.forEach(t => {

            select.innerHTML +=
                `<option value="${t}">${t}</option>`;

        });

    }


    const filterSelect =
        document.getElementById("filterTeacher");

    if (filterSelect) {

        filterSelect.innerHTML =
            `<option value="">All Teachers</option>`;

        teachers.forEach(t => {

            filterSelect.innerHTML +=
                `<option value="${t}">${t}</option>`;

        });

    }

}


/* =========================================================
   STUDENT TIMETABLE
========================================================= */

function loadStudentTimetableDisplay() {

    const nameElement =
        document.getElementById("studentName");

    const yearElement =
        document.getElementById("studentYear");

    if (!nameElement || !yearElement) return;


    const name =
        nameElement.value.trim();

    const year =
        yearElement.value;

    let cls = year;


    if (year === "BCA-III") {

        const stream =
            document.getElementById("studentStream");

        if (stream) {

            cls = stream.value;

        }

    }


    if (!name || !cls) {

        alert(
            "Please enter your name and select year/stream."
        );

        return;

    }


    /* ================= DAILY ================= */

    if (studentViewMode === "daily") {

        const date =
            document.getElementById("studentDate").value;


        if (!date) {

            alert(
                "Please select a date."
            );

            return;

        }


        const day =
            new Date(
                date + "T00:00:00"
            ).toLocaleDateString(
                "en-US",
                {
                    weekday: "long"
                }
            );


        const data =
            timetable.filter(
                x =>
                    x.day === day &&
                    x.class === cls
            );


        let html = `

            <div class="info">

                <b>Student:</b> ${name}<br>

                <b>Class:</b> ${cls}<br>

                <b>Date:</b> ${date} (${day})

            </div>

        `;


        html += createDayTable(
            day,
            cls,
            data
        );


        const result =
            document.getElementById(
                "studentResult"
            );

        if (result)
            result.innerHTML = html;

    }


    /* ================= WEEKLY ================= */

    else {

        let html = `

            <div class="info">

                <b>Student:</b> ${name}<br>

                <b>Class:</b> ${cls}

            </div>

            <h3>Weekly Time Table</h3>

        `;


        days.forEach(day => {

            const dayData =
                timetable.filter(
                    x =>
                        x.day === day &&
                        x.class === cls
                );


            html += `<h4>${day}</h4>`;

            html += createDayTable(
                day,
                cls,
                dayData
            );

        });


        const result =
            document.getElementById(
                "studentResult"
            );

        if (result)
            result.innerHTML = html;

    }

}


/* =========================================================
   TEACHER TIMETABLE
========================================================= */

function loadTeacherTimetableDisplay() {

    const select =
        document.getElementById(
            "teacherSelect"
        );

    if (!select) return;


    const teacher =
        select.value;


    if (!teacher) {

        alert(
            "Please select a teacher."
        );

        return;

    }


    /* ================= DAILY ================= */

    if (teacherViewMode === "daily") {

        const date =
            document.getElementById(
                "teacherDate"
            ).value;


        if (!date) {

            alert(
                "Please select a date."
            );

            return;

        }


        const day =
            new Date(
                date + "T00:00:00"
            ).toLocaleDateString(
                "en-US",
                {
                    weekday: "long"
                }
            );


        const data =
            timetable.filter(
                x =>
                    x.day === day &&
                    x.teacher === teacher
            );


        let html = `

            <div class="info">

                <b>Teacher:</b> ${teacher}<br>

                <b>Date:</b> ${date} (${day})

            </div>

        `;


        if (data.length === 0) {

            html +=
                "<h3>No lectures scheduled for this day.</h3>";

        }

        else {

            html += `

                <div class="table-scroll">

                <table>

                    <tr>

                        <th>Time</th>

                        <th>Class</th>

                        <th>Subject</th>

                        <th>Room</th>

                    </tr>

            `;


            data.forEach(x => {

                html += `

                    <tr>

                        <td>${x.time}</td>

                        <td>${x.class}</td>

                        <td>${x.subject}</td>

                        <td>${x.room}</td>

                    </tr>

                `;

            });


            html +=

                "</table></div>";

        }


        const result =
            document.getElementById(
                "teacherResult"
            );

        if (result)
            result.innerHTML = html;

    }


    /* ================= WEEKLY ================= */

    else if (
        teacherViewMode === "weekly"
    ) {

        let html = `

            <div class="info">

                <b>Teacher:</b> ${teacher}

            </div>

            <h3>Weekly Teaching Schedule</h3>

        `;


        days.forEach(day => {

            const dayData =
                timetable.filter(
                    x =>
                        x.day === day &&
                        x.teacher === teacher
                );


            if (dayData.length > 0) {

                html +=
                    `<h4>${day}</h4>`;

                html += `

                    <div class="table-scroll">

                    <table>

                        <tr>

                            <th>Time</th>

                            <th>Class</th>

                            <th>Subject</th>

                            <th>Room</th>

                        </tr>

                `;


                dayData.forEach(x => {

                    html += `

                        <tr>

                            <td>${x.time}</td>

                            <td>${x.class}</td>

                            <td>${x.subject}</td>

                            <td>${x.room}</td>

                        </tr>

                    `;

                });


                html +=

                    "</table></div>";

            }

        });


        const result =
            document.getElementById(
                "teacherResult"
            );

        if (result)
            result.innerHTML = html;

    }

}


/* =========================================================
   TEACHER AVAILABILITY
========================================================= */

function checkTeacherAvailability() {

    const dateElement =
        document.getElementById(
            "teacherCheckDate"
        );

    if (!dateElement) return;


    const date =
        dateElement.value;


    if (!date) return;


    const day =
        new Date(
            date + "T00:00:00"
        ).toLocaleDateString(
            "en-US",
            {
                weekday: "long"
            }
        );


    const slotList =
        day === "Saturday"
            ? saturdayTimes
            : times;


    let html = `

        <h4>
            Availability for
            ${date} (${day})
        </h4>

        <div class="table-scroll">

        <table>

            <tr>

                <th>Time Slot</th>

                <th>Room Status</th>

            </tr>

    `;


    slotList.forEach(time => {

        const bookedEntries =
            timetable.filter(
                x =>
                    x.day === day &&
                    x.time === time
            );


        const occupiedRooms =
            bookedEntries.map(
                x => x.room
            );


        const freeRooms =
            allRooms.filter(
                r =>
                    !occupiedRooms.includes(r)
            );


        html += `

            <tr>

                <td>
                    <b>${time}</b>
                </td>

                <td style="text-align:left;">

        `;


        if (freeRooms.length > 0) {

            html += `

                <span class="available-badge">

                    🟢 Available Rooms:
                    ${freeRooms.join(", ")}

                </span>

                <br>

            `;

        }

        else {

            html += `

                <span class="occupied-badge">

                    🔴 All Rooms Occupied

                </span>

                <br>

            `;

        }


        if (bookedEntries.length > 0) {

            html += `

                <small
                    style="
                        color:#555;
                        display:inline-block;
                        margin-top:4px;
                    "
                >

                    Booked:

            `;


            bookedEntries.forEach(b => {

                html += `

                    [${b.room} →
                    ${b.class}
                    (${b.subject})]

                `;

            });


            html += `</small>`;

        }


        html += `

                </td>

            </tr>

        `;

    });


    html +=

        "</table></div>";


    const result =
        document.getElementById(
            "teacherResult"
        );

    if (result)
        result.innerHTML = html;

}


/* =========================================================
   ADMIN AVAILABILITY
========================================================= */

function runAdminAvailabilityCheck() {

    const dateElement =
        document.getElementById(
            "adminCheckDate"
        );

    const roomElement =
        document.getElementById(
            "adminCheckRoom"
        );

    const container =
        document.getElementById(
            "adminAvailabilityResult"
        );


    if (!dateElement || !container)
        return;


    const date =
        dateElement.value;


    const specificRoom =
        roomElement
            ? roomElement.value
            : "";


    if (!date) {

        container.innerHTML =
            "<p style='color:#666;'>Please select a date above to scan available slots.</p>";

        return;

    }


    const day =
        new Date(
            date + "T00:00:00"
        ).toLocaleDateString(
            "en-US",
            {
                weekday: "long"
            }
        );


    const slotList =
        day === "Saturday"
            ? saturdayTimes
            : times;


    const roomsToCheck =
        specificRoom
            ? [specificRoom]
            : allRooms;


    let html = `

        <h4>

            Open Slots for
            ${date}
            (${day})

            ${specificRoom
                ? "in " + specificRoom
                : ""}

        </h4>


        <div class="table-scroll">

        <table>

            <tr>

                <th>Time Slot</th>

                <th>Available Rooms</th>

                <th>Current Occupants</th>

            </tr>

    `;


    slotList.forEach(time => {

        const booked =
            timetable.filter(
                x =>
                    x.day === day &&
                    x.time === time
            );


        const occupiedRooms =
            booked.map(
                x => x.room
            );


        const freeRooms =
            roomsToCheck.filter(
                r =>
                    !occupiedRooms.includes(r)
            );


        html += `

            <tr>

                <td>
                    <b>${time}</b>
                </td>

                <td>

        `;


        if (freeRooms.length > 0) {

            html += `

                <span class="available-badge">

                    ${freeRooms.join(", ")}

                </span>

            `;

        }

        else {

            html += `

                <span class="occupied-badge">

                    None

                </span>

            `;

        }


        html += `

                </td>

                <td
                    style="text-align:left;"
                >

                    <small>

        `;


        if (booked.length > 0) {

            booked.forEach(b => {

                html += `

                    <b>${b.room}</b>:
                    ${b.class}
                    (${b.subject})

                    <br>

                `;

            });

        }

        else {

            html +=
                "All rooms free";

        }


        html += `

                    </small>

                </td>

            </tr>

        `;

    });


    html +=

        "</table></div>";


    container.innerHTML =
        html;

}


/* =========================================================
   CREATE DAY TABLE
========================================================= */

function createDayTable(
    day,
    cls,
    data
) {

    const slotList =
        day === "Saturday"
            ? saturdayTimes
            : times;


    let html = `

        <div class="table-scroll">

        <table>

            <tr>

                <th>Time</th>

                <th>Subject</th>

                <th>Teacher</th>

                <th>Room</th>

            </tr>

    `;


    slotList.forEach(time => {

        const lecture =
            data.find(
                x => x.time === time
            );


        if (lecture) {

            const isLab =
                lecture.subject
                    .toUpperCase()
                    .includes("LAB");


            html += `

                <tr>

                    <td>${time}</td>

                    <td>

                        <div
                            class="lecture ${isLab ? "lab" : ""}"
                        >

                            <b>
                                ${lecture.subject}
                            </b>

                        </div>

                    </td>

                    <td>
                        ${lecture.teacher || "-"}
                    </td>

                    <td>
                        ${lecture.room}
                    </td>

                </tr>

            `;

        }

        else {

            html += `

                <tr>

                    <td>${time}</td>

                    <td
                        colspan="3"
                        class="free"
                    >
                        Free
                    </td>

                </tr>

            `;

        }

    });


    html +=

        "</table></div>";


    return html;

}


/* =========================================================
   ADMIN LOGIN
========================================================= */

function adminLogin() {

    const idElement =
        document.getElementById(
            "adminId"
        );

    const passwordElement =
        document.getElementById(
            "adminPassword"
        );


    if (!idElement || !passwordElement)
        return;


    const id =
        idElement.value;

    const password =
        passwordElement.value;


    if (
        id === "admin" &&
        password === "1234"
    ) {

        hideAll();


        const panel =
            document.getElementById(
                "adminPanel"
            );


        if (panel)
            panel.classList.remove("hidden");


        setToday(
            "adminCheckDate"
        );


        loadAdmin();

    }

    else {

        const msg =
            document.getElementById(
                "loginMsg"
            );


        if (msg) {

            msg.innerHTML =
                "❌ Wrong ID or Password";

        }

    }

}


/* =========================================================
   LOAD TIME OPTIONS
========================================================= */

function loadTimeOptions() {

    const select =
        document.getElementById(
            "aTime"
        );


    if (!select) return;


    select.innerHTML = "";


    [
        ...times,
        ...saturdayTimes
    ]

    .filter(
        (x, i, a) =>
            a.indexOf(x) === i
    )

    .forEach(t => {

        select.innerHTML +=
            `<option>${t}</option>`;

    });

}


/* =========================================================
   LOAD ADMIN
========================================================= */

function loadAdmin() {

    loadTimeOptions();

    loadTeachersDropdown();

    loadAdminTable();

    runAdminAvailabilityCheck();

}


/* =========================================================
   LOAD ADMIN TABLE
========================================================= */

function loadAdminTable() {

    const box =
        document.getElementById(
            "adminData"
        );


    if (!box) return;


    const filterTeacherElement =
        document.getElementById(
            "filterTeacher"
        );

    const filterDayElement =
        document.getElementById(
            "filterDay"
        );


    const filterTeacher =
        filterTeacherElement
            ? filterTeacherElement.value
            : "";


    const filterDay =
        filterDayElement
            ? filterDayElement.value
            : "";


    const filtered =
        timetable.filter(x => {

            const matchT =
                filterTeacher
                    ? x.teacher === filterTeacher
                    : true;


            const matchD =
                filterDay
                    ? x.day === filterDay
                    : true;


            return matchT && matchD;

        });


    let html = `

        <div class="table-scroll">

        <table>

            <tr>

                <th>Day</th>

                <th>Class</th>

                <th>Time</th>

                <th>Subject</th>

                <th>Teacher</th>

                <th>Room</th>

                <th>Actions</th>

            </tr>

    `;


    filtered.forEach(x => {

        const masterIndex =
            timetable.findIndex(
                item => item === x
            );


        html += `

            <tr>

                <td>${x.day}</td>

                <td>${x.class}</td>

                <td>${x.time}</td>

                <td>${x.subject}</td>

                <td>${x.teacher || "-"}</td>

                <td>${x.room}</td>

                <td>

                    <button
                        class="edit"
                        onclick="editLecture(${masterIndex})"
                    >
                        Edit
                    </button>

                    <button
                        class="delete"
                        onclick="deleteLecture(${masterIndex})"
                    >
                        Delete
                    </button>

                </td>

            </tr>

        `;

    });


    html +=

        "</table></div>";


    box.innerHTML =
        html;

}


/* =========================================================
   CONFLICT DETECTION
========================================================= */

function checkOverlap(
    day,
    time,
    teacher,
    room,
    cls,
    ignoreIndex = -1
) {

    let conflicts = [];


    timetable.forEach(
        (item, idx) => {

            if (idx === ignoreIndex)
                return;


            if (
                item.day === day &&
                item.time === time
            ) {


                /* Teacher conflict */

                if (
                    teacher &&
                    item.teacher &&
                    item.teacher
                        .toLowerCase() ===
                    teacher.toLowerCase()
                ) {

                    conflicts.push(
                        `Teacher '${teacher}' is already assigned to class '${item.class}' (${item.subject}) at this time slot.`
                    );

                }


                /* Room conflict */

                if (
                    item.room === room
                ) {

                    conflicts.push(
                        `Room '${room}' is already occupied by class '${item.class}' (${item.subject}) at this time slot.`
                    );

                }


                /* Class conflict */

                if (
                    item.class === cls
                ) {

                    conflicts.push(
                        `Class '${cls}' already has a lecture (${item.subject}) assigned at this time slot.`
                    );

                }

            }

        }
    );


    return conflicts;

}


/* =========================================================
   SAVE / ADD / EDIT LECTURE
========================================================= */

function saveLecture() {

    const day =
        document.getElementById(
            "aDay"
        ).value;


    const cls =
        document.getElementById(
            "aClass"
        ).value;


    const time =
        document.getElementById(
            "aTime"
        ).value;


    const subject =
        document.getElementById(
            "aSubject"
        ).value.trim();


    const teacher =
        document.getElementById(
            "aTeacher"
        ).value.trim();


    const room =
        document.getElementById(
            "aRoom"
        ).value;


    const editIndex =
        parseInt(
            document.getElementById(
                "editIndex"
            ).value
        );


    const alertContainer =
        document.getElementById(
            "adminAlertContainer"
        );


    if (alertContainer) {

        alertContainer.innerHTML =
            "";

    }


    if (!subject) {

        alert(
            "Please enter subject name."
        );

        return;

    }


    const conflicts =
        checkOverlap(
            day,
            time,
            teacher,
            room,
            cls,
            editIndex
        );


    if (conflicts.length > 0) {

        let alertHTML = `

            <div class="alert-box">

                <b>
                    ⚠️ Lecture Overlap Detected!
                    Action Blocked:
                </b>

                <ul>

        `;


        conflicts.forEach(err => {

            alertHTML +=
                `<li>${err}</li>`;

        });


        alertHTML += `

                </ul>

            </div>

        `;


        if (alertContainer) {

            alertContainer.innerHTML =
                alertHTML;

        }


        return;

    }


    const obj = {

        day: day,

        class: cls,

        time: time,

        subject: subject,

        teacher: teacher,

        room: room

    };


    if (editIndex >= 0) {

        timetable[editIndex] =
            obj;

    }

    else {

        timetable.push(obj);

    }


    saveData();

    resetForm();

    loadAdmin();

    alert(
        "Timetable updated successfully."
    );

}


/* =========================================================
   EDIT LECTURE
========================================================= */

function editLecture(index) {

    const item =
        timetable[index];


    if (!item) return;


    document.getElementById(
        "aDay"
    ).value =
        item.day;


    document.getElementById(
        "aClass"
    ).value =
        item.class;


    document.getElementById(
        "aTime"
    ).value =
        item.time;


    document.getElementById(
        "aSubject"
    ).value =
        item.subject;


    document.getElementById(
        "aTeacher"
    ).value =
        item.teacher || "";


    document.getElementById(
        "aRoom"
    ).value =
        item.room;


    document.getElementById(
        "editIndex"
    ).value =
        index;


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================================================
   RESET ADMIN FORM
========================================================= */

function resetForm() {

    const subject =
        document.getElementById(
            "aSubject"
        );

    const teacher =
        document.getElementById(
            "aTeacher"
        );

    const editIndex =
        document.getElementById(
            "editIndex"
        );

    const alertContainer =
        document.getElementById(
            "adminAlertContainer"
        );


    if (subject)
        subject.value = "";


    if (teacher)
        teacher.value = "";


    if (editIndex)
        editIndex.value = "-1";


    if (alertContainer)
        alertContainer.innerHTML = "";

}


/* =========================================================
   DELETE LECTURE
========================================================= */

function deleteLecture(index) {

    if (
        confirm(
            "Delete this lecture?"
        )
    ) {

        timetable.splice(
            index,
            1
        );


        saveData();

        loadAdmin();

    }

}


/* =========================================================
   RESET COMPLETE TIMETABLE
========================================================= */

function resetTimetable() {

    if (
        confirm(
            "Reset complete timetable to original?"
        )
    ) {

        timetable =
            JSON.parse(
                JSON.stringify(
                    originalTimetable
                )
            );


        saveData();

        loadAdmin();

    }

}


/* =========================================================
   SET TODAY'S DATE
========================================================= */

function setToday(id) {

    const d =
        new Date();


    const yyyy =
        d.getFullYear();


    const mm =
        String(
            d.getMonth() + 1
        ).padStart(
            2,
            "0"
        );


    const dd =
        String(
            d.getDate()
        ).padStart(
            2,
            "0"
        );


    const el =
        document.getElementById(
            id
        );


    if (el) {

        el.value =
            `${yyyy}-${mm}-${dd}`;

    }

}


/* =========================================================
   START APPLICATION
========================================================= */

window.onload =
    loadDatabase;
```
