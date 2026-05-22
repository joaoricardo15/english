var STORAGE_KEY = 'english-course-data';

var CLASS_SCHEDULE = {
    1: '2026-05-30',
    2: '2026-06-06',
    3: '2026-06-13',
    4: '2026-06-20',
    5: '2026-06-27',
    6: '2026-07-04',
    7: '2026-07-11',
    8: '2026-07-18',
    9: '2026-07-25',
    10: '2026-08-01'
};

function getStudentData() {
    var data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : null;
}

function saveStudentData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function initStudentData(name) {
    var data = {
        student: { name: name },
        progress: {},
        completedClasses: []
    };
    saveStudentData(data);
    return data;
}

function isFirstVisit() {
    return getStudentData() === null;
}

function getStudentName() {
    var data = getStudentData();
    return data ? data.student.name : '';
}

function setStudentName(name) {
    var data = getStudentData();
    if (data) {
        data.student.name = name;
        saveStudentData(data);
    } else {
        initStudentData(name);
    }
}

function markExerciseComplete(classId, exerciseId) {
    var data = getStudentData();
    if (!data) return;

    if (!data.progress[classId]) {
        data.progress[classId] = {};
    }
    data.progress[classId][exerciseId] = true;
    saveStudentData(data);
}

function isExerciseComplete(classId, exerciseId) {
    var data = getStudentData();
    if (!data || !data.progress[classId]) return false;
    return data.progress[classId][exerciseId] === true;
}

function getClassProgress(classId) {
    var data = getStudentData();
    if (!data || !data.progress[classId]) return {};
    return data.progress[classId];
}

function isClassComplete(classId, totalExercises) {
    var progress = getClassProgress(classId);
    var completed = Object.keys(progress).filter(function(key) {
        return progress[key] === true;
    }).length;
    return completed >= totalExercises;
}

function markClassComplete(classNum) {
    var data = getStudentData();
    if (!data) return;

    if (data.completedClasses.indexOf(classNum) === -1) {
        data.completedClasses.push(classNum);
        saveStudentData(data);
    }
}

function getCompletedClasses() {
    var data = getStudentData();
    return data ? data.completedClasses : [];
}

function isClassDateReached(classNum) {
    var dateStr = CLASS_SCHEDULE[classNum];
    if (!dateStr) return false;
    var classDate = new Date(dateStr + 'T00:00:00');
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    return today >= classDate;
}

function getClassStartDate(classNum) {
    return CLASS_SCHEDULE[classNum] || null;
}

function formatDatePT(dateStr) {
    var parts = dateStr.split('-');
    return parts[2] + '/' + parts[1] + '/' + parts[0];
}

function getClassLockReason(classNum) {
    if (classNum === 1) return null;

    var completed = getCompletedClasses();
    var prevCompleted = completed.indexOf(classNum - 1) !== -1;
    var dateReached = isClassDateReached(classNum);

    if (!prevCompleted && !dateReached) {
        return 'both';
    } else if (!prevCompleted) {
        return 'previous';
    } else if (!dateReached) {
        return 'date';
    }
    return null;
}
