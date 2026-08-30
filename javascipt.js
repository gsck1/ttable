let db = {};
let times = [];
let saturdayTimes = [];
let days = [];
let allRooms = [];
let originalTimetable = [];
let timetable = [];

let studentViewMode = 'daily';
let teacherViewMode = 'daily';

// Load JSON database asynchronously via Fetch API
async function loadDatabase() {
    try {
        const response = await fetch('timetable.json');
        db = await response.json();
        
        times = db.meta.times;
        saturdayTimes = db.meta.saturdayTimes;
        days = db.meta.days;
        allRooms = db.meta.allRooms;
        originalTimetable = db.meta.originalTimetable;

        timetable = JSON.parse(localStorage.getItem("bcaTimetable")) || originalTimetable;
        
        goHome();
    } catch (error) {
        console.error("Error loading database JSON:", error);
        alert("Failed to load timetable database.");
    }
}

function saveData(){
    localStorage.setItem("bcaTimetable", JSON.stringify(timetable));
}

function hideAll(){
    document.querySelectorAll(".card").forEach(x=>{
        x.classList.add("hidden");
    });
}

function goHome(){
    hideAll();
    document.getElementById("home").classList.remove("hidden");
}

function showStudent(){
    hideAll();
    document.getElementById("student").classList.remove("hidden");
    setToday("studentDate");
    setStudentView('daily');
}

function showTeacher(){
    hideAll();
    document.getElementById("teacher").classList.remove("hidden");
    loadTeachersDropdown();
    setToday("teacherDate");
    setToday("teacherCheckDate");
    setTeacherView('daily');
}

function showAdmin(){
    hideAll();
    document.getElementById("adminLogin").classList.remove("hidden");
}

function yearChanged(){
    const year = document.getElementById("studentYear").value;
    const box = document.getElementById("streamBox");
    if(year === "BCA-III"){
        box.classList.remove("hidden");
    }else{
        box.classList.add("hidden");
    }
}

function setStudentView(mode){
    studentViewMode = mode;
    if(mode === 'daily'){
        document.getElementById("studentBtnDaily").classList.add("active");
        document.getElementById("studentBtnWeekly").classList.remove("active");
        document.getElementById("studentDateBox").classList.remove("hidden");
    } else {
        document.getElementById("studentBtnWeekly").classList.add("active");
        document.getElementById("studentBtnDaily").classList.remove("active");
        document.getElementById("studentDateBox").classList.add("hidden");
    }
}

function setTeacherView(mode){
    teacherViewMode = mode;
    document.getElementById("teacherBtnDaily").classList.remove("active");
    document.getElementById("teacherBtnWeekly").classList.remove("active");
    document.getElementById("teacherBtnAvailability").classList.remove("active");

    if(mode === 'daily'){
        document.getElementById("teacherBtnDaily").classList.add("active");
        document.getElementById("teacherDateBox").classList.remove("hidden");
        document.getElementById("teacherAvailabilityBox").classList.add("hidden");
        document.getElementById("teacherActionBtn").style.display = "inline-block";
        document.getElementById("teacherActionBtn").innerText = "Show Timetable";
    } else if(mode === 'weekly') {
        document.getElementById("teacherBtnWeekly").classList.add("active");
        document.getElementById("teacherDateBox").classList.add("hidden");
        document.getElementById("teacherAvailabilityBox").classList.add("hidden");
        document.getElementById("teacherActionBtn").style.display = "inline-block";
        document.getElementById("teacherActionBtn").innerText = "Show Timetable";
    } else {
        document.getElementById("teacherBtnAvailability").classList.add("active");
        document.getElementById("teacherDateBox").classList.add("hidden");
        document.getElementById("teacherAvailabilityBox").classList.remove("hidden");
        document.getElementById("teacherActionBtn").style.display = "none";
        checkTeacherAvailability();
    }
}

function loadTeachersDropdown(){
    const teachers = [...new Set(timetable.map(x=>x.teacher).filter(x=>x))];
    const select = document.getElementById("teacherSelect");
    select.innerHTML = `<option value="">Select Teacher</option>`;
    teachers.forEach(t=>{
        select.innerHTML += `<option value="${t}">${t}</option>`;
    });

    const filterSelect = document.getElementById("filterTeacher");
    if(filterSelect){
        filterSelect.innerHTML = `<option value="">All Teachers</option>`;
        teachers.forEach(t=>{
            filterSelect.innerHTML += `<option value="${t}">${t}</option>`;
        });
    }
}

/* STUDENT TIMETABLE DISPATCHER */
function loadStudentTimetableDisplay(){
    const name = document.getElementById("studentName").value.trim();
    const year = document.getElementById("studentYear").value;
    let cls = year;

    if(year === "BCA-III"){
        cls = document.getElementById("studentStream").value;
    }

    if(!name || !cls){
        alert("Please enter your name and select year/stream.");
        return;
    }

    if(studentViewMode === 'daily'){
        const date = document.getElementById("studentDate").value;
        if(!date){
            alert("Please select a date.");
            return;
        }
        const day = new Date(date + "T00:00:00").toLocaleDateString("en-US",{weekday:"long"});
        const data = timetable.filter(x => x.day === day && x.class === cls);

        let html = `
            <div class="info">
                <b>Student:</b> ${name}<br>
                <b>Class:</b> ${cls}<br>
                <b>Date:</b> ${date} (${day})
            </div>
        `;
        html += createDayTable(day, cls, data);
        document.getElementById("studentResult").innerHTML = html;
    } else {
        let html = `
            <div class="info">
                <b>Student:</b> ${name}<br>
                <b>Class:</b> ${cls}
            </div>
            <h3>Weekly Time Table</h3>
        `;
        days.forEach(day => {
            const dayData = timetable.filter(x => x.day === day && x.class === cls);
            html += `<h4>${day}</h4>`;
            html += createDayTable(day, cls, dayData);
        });
        document.getElementById("studentResult").innerHTML = html;
    }
}

/* TEACHER TIMETABLE & AVAILABILITY DISPATCHER */
function loadTeacherTimetableDisplay(){
    const teacher = document.getElementById("teacherSelect").value;

    if(!teacher){
        alert("Please select a teacher.");
        return;
    }

    if(teacherViewMode === 'daily'){
        const date = document.getElementById("teacherDate").value;
        if(!date){
            alert("Please select a date.");
            return;
        }
        const day = new Date(date + "T00:00:00").toLocaleDateString("en-US",{weekday:"long"});
        const data = timetable.filter(x => x.day === day && x.teacher === teacher);

        let html = `
            <div class="info">
                <b>Teacher:</b> ${teacher}<br>
                <b>Date:</b> ${date} (${day})
            </div>
        `;

        if(data.length === 0){
            html += "<h3>No lectures scheduled for this day.</h3>";
        } else {
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
            data.forEach(x=>{
                html += `
                <tr>
                    <td>${x.time}</td>
                    <td>${x.class}</td>
                    <td>${x.subject}</td>
                    <td>${x.room}</td>
                </tr>`;
            });
            html += "</table></div>";
        }
        document.getElementById("teacherResult").innerHTML = html;
    } else if(teacherViewMode === 'weekly') {
        let html = `
            <div class="info">
                <b>Teacher:</b> ${teacher}
            </div>
            <h3>Weekly Teaching Schedule</h3>
        `;
        days.forEach(day => {
            const dayData = timetable.filter(x => x.day === day && x.teacher === teacher);
            if(dayData.length > 0){
                html += `<h4>${day}</h4>`;
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
                    </tr>`;
                });
                html += "</table></div>";
            }
        });
        document.getElementById("teacherResult").innerHTML = html;
    }
}

/* CHECK AVAILABLE ROOMS & SLOTS FOR TEACHER / ADMIN */
function checkTeacherAvailability(){
    const date = document.getElementById("teacherCheckDate").value;
    if(!date) return;
    const day = new Date(date + "T00:00:00").toLocaleDateString("en-US",{weekday:"long"});
    const slotList = day === "Saturday" ? saturdayTimes : times;

    let html = `<h4>Availability for ${date} (${day})</h4>`;
    html += `
    <div class="table-scroll">
    <table>
        <tr>
            <th>Time Slot</th>
            <th>Room Status</th>
        </tr>
    `;

    slotList.forEach(time => {
        const bookedEntries = timetable.filter(x => x.day === day && x.time === time);
        const occupiedRooms = bookedEntries.map(x => x.room);
        const freeRooms = allRooms.filter(r => !occupiedRooms.includes(r));

        html += `
        <tr>
            <td><b>${time}</b></td>
            <td style="text-align:left;">
        `;

        if(freeRooms.length > 0){
            html += `<span class="available-badge">🟢 Available Rooms: ${freeRooms.join(", ")}</span><br>`;
        } else {
            html += `<span class="occupied-badge">🔴 All Rooms Occupied</span><br>`;
        }

        if(bookedEntries.length > 0){
            html += `<small style="color:#555; display:inline-block; margin-top:4px;">Booked: `;
            bookedEntries.forEach(b => {
                html += `[${b.room} → ${b.class} (${b.subject})] `;
            });
            html += `</small>`;
        }

        html += `</td></tr>`;
    });

    html += "</table></div>";
    document.getElementById("teacherResult").innerHTML = html;
}

function runAdminAvailabilityCheck(){
    const date = document.getElementById("adminCheckDate").value;
    const specificRoom = document.getElementById("adminCheckRoom").value;
    const container = document.getElementById("adminAvailabilityResult");

    if(!date){
        container.innerHTML = "<p style='color:#666;'>Please select a date above to scan available slots.</p>";
        return;
    }

    const day = new Date(date + "T00:00:00").toLocaleDateString("en-US",{weekday:"long"});
    const slotList = day === "Saturday" ? saturdayTimes : times;
    const roomsToCheck = specificRoom ? [specificRoom] : allRooms;

    let html = `<h4>Open Slots for ${date} (${day}) ${specificRoom ? 'in '+specificRoom : ''}</h4>`;
    html += `
    <div class="table-scroll">
    <table>
        <tr>
            <th>Time Slot</th>
            <th>Available Rooms</th>
            <th>Current Occupants</th>
        </tr>
    `;

    slotList.forEach(time => {
        const booked = timetable.filter(x => x.day === day && x.time === time);
        const occupiedRooms = booked.map(x => x.room);
        const freeRooms = roomsToCheck.filter(r => !occupiedRooms.includes(r));

        html += `
        <tr>
            <td><b>${time}</b></td>
            <td>
        `;

        if(freeRooms.length > 0){
            html += `<span class="available-badge">${freeRooms.join(", ")}</span>`;
        } else {
            html += `<span class="occupied-badge">None</span>`;
        }

        html += `</td><td style="text-align:left;"><small>`;
        if(booked.length > 0){
            booked.forEach(b => {
                html += `<b>${b.room}</b>: ${b.class} (${b.subject})<br>`;
            });
        } else {
            html += `All rooms free`;
        }
        html += `</small></td></tr>`;
    });

    html += "</table></div>";
    container.innerHTML = html;
}

/* GENERATE SINGLE DAY TABLE */
function createDayTable(day, cls, data){
    let slotList = day === "Saturday" ? saturdayTimes : times;

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

    slotList.forEach(time=>{
        const lecture = data.find(x=>x.time === time);
        if(lecture){
            const isLab = lecture.subject.toUpperCase().includes("LAB");
            html += `
            <tr>
                <td>${time}</td>
                <td>
                    <div class="lecture ${isLab ? "lab":""}">
                        <b>${lecture.subject}</b>
                    </div>
                </td>
                <td>${lecture.teacher || "-"}</td>
                <td>${lecture.room}</td>
            </tr>`;
        }else{
            html += `
            <tr>
                <td>${time}</td>
                <td colspan="3" class="free">Free</td>
            </tr>`;
        }
    });

    html += "</table></div>";
    return html;
}

/* ADMIN LOGIN & MANAGEMENT */
function adminLogin(){
    const id = document.getElementById("adminId").value;
    const password = document.getElementById("adminPassword").value;

    if(id === "admin" && password === "1234"){
        hideAll();
        document.getElementById("adminPanel").classList.remove("hidden");
        setToday("adminCheckDate");
        loadAdmin();
    }else{
        document.getElementById("loginMsg").innerHTML = "❌ Wrong ID or Password";
    }
}

function loadTimeOptions(){
    const select = document.getElementById("aTime");
    select.innerHTML = "";
    [...times,...saturdayTimes]
    .filter((x,i,a)=>a.indexOf(x)===i)
    .forEach(t=>{
        select.innerHTML += `<option>${t}</option>`;
    });
}

function loadAdmin(){
    loadTimeOptions();
    loadTeachersDropdown();
    loadAdminTable();
    runAdminAvailabilityCheck();
}

function loadAdminTable(){
    const box = document.getElementById("adminData");
    const filterTeacher = document.getElementById("filterTeacher").value;
    const filterDay = document.getElementById("filterDay").value;

    let filtered = timetable.filter(x => {
        let matchT = filterTeacher ? x.teacher === filterTeacher : true;
        let matchD = filterDay ? x.day === filterDay : true;
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

    filtered.forEach((x)=>{
        const masterIndex = timetable.findIndex(item => item === x);
        html += `
        <tr>
            <td>${x.day}</td>
            <td>${x.class}</td>
            <td>${x.time}</td>
            <td>${x.subject}</td>
            <td>${x.teacher || "-"}</td>
            <td>${x.room}</td>
            <td>
                <button class="edit" onclick="editLecture(${masterIndex})">Edit</button>
                <button class="delete" onclick="deleteLecture(${masterIndex})">Delete</button>
            </td>
        </tr>
        `;
    });

    html += "</table></div>";
    box.innerHTML = html;
}

/* CONFLICT DETECTION LOGIC */
function checkOverlap(day, time, teacher, room, cls, ignoreIndex = -1){
    let conflicts = [];

    timetable.forEach((item, idx) => {
        if(idx === ignoreIndex) return;

        if(item.day === day && item.time === time){
            if(teacher && item.teacher && item.teacher.toLowerCase() === teacher.toLowerCase()){
                conflicts.push(`Teacher '${teacher}' is already assigned to class '${item.class}' (${item.subject}) at this time slot.`);
            }
            if(item.room === room){
                conflicts.push(`Room '${room}' is already occupied by class '${item.class}' (${item.subject}) at this time slot.`);
            }
            if(item.class === cls){
                conflicts.push(`Class '${cls}' already has a lecture (${item.subject}) assigned at this time slot.`);
            }
        }
    });

    return conflicts;
}

function saveLecture(){
    const day = document.getElementById("aDay").value;
    const cls = document.getElementById("aClass").value;
    const time = document.getElementById("aTime").value;
    const subject = document.getElementById("aSubject").value.trim();
    const teacher = document.getElementById("aTeacher").value.trim();
    const room = document.getElementById("aRoom").value;
    const editIndex = parseInt(document.getElementById("editIndex").value);
    const alertContainer = document.getElementById("adminAlertContainer");

    alertContainer.innerHTML = "";

    if(!subject){
        alert("Please enter subject name.");
        return;
    }

    const conflicts = checkOverlap(day, time, teacher, room, cls, editIndex);

    if(conflicts.length > 0){
        let alertHTML = `<div class="alert-box"><b>⚠️ Lecture Overlap Detected! Action Blocked:</b><ul>`;
        conflicts.forEach(err => {
            alertHTML += `<li>${err}</li>`;
        });
        alertHTML += `</ul></div>`;
        alertContainer.innerHTML = alertHTML;
        return;
    }

    const obj = { day, class: cls, time, subject, teacher, room };

    if(editIndex >= 0){
        timetable[editIndex] = obj;
    }else{
        timetable.push(obj);
    }

    saveData();
    resetForm();
    loadAdmin();
    alert("Timetable updated successfully.");
}

function editLecture(index){
    const item = timetable[index];
    document.getElementById("aDay").value = item.day;
    document.getElementById("aClass").value = item.class;
    document.getElementById("aTime").value = item.time;
    document.getElementById("aSubject").value = item.subject;
    document.getElementById("aTeacher").value = item.teacher || "";
    document.getElementById("aRoom").value = item.room;
    document.getElementById("editIndex").value = index;
    window.scrollTo({top:0, behavior:'smooth'});
}

function resetForm(){
    document.getElementById("aSubject").value = "";
    document.getElementById("aTeacher").value = "";
    document.getElementById("editIndex").value = "-1";
    document.getElementById("adminAlertContainer").innerHTML = "";
}

function deleteLecture(index){
    if(confirm("Delete this lecture?")){
        timetable.splice(index,1);
        saveData();
        loadAdmin();
    }
}

function resetTimetable(){
    if(confirm("Reset complete timetable to original?")){
        timetable = JSON.parse(JSON.stringify(originalTimetable));
        saveData();
        loadAdmin();
    }
}

function setToday(id){
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth()+1).padStart(2,"0");
    const dd = String(d.getDate()).padStart(2,"0");
    const el = document.getElementById(id);
    if(el) el.value = `${yyyy}-${mm}-${dd}`;
}

// Automatically initialize database fetch on startup
window.onload = loadDatabase;
