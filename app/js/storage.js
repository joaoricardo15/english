var STORAGE_KEY = 'english-course-data';

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
