let count = 0;

function addPushup() {
    count++;
    document.getElementById("count").innerText = count;
}

function resetPushup() {
    count = 0;
    document.getElementById("count").innerText = count;
}
