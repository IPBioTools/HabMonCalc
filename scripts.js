function calculate() {
    let inputNodes = document.querySelectorAll("[id$='Input']");

    for (let node of inputNodes) {
        if (node.value === "") {
            node.value = "0";
        }
    }

    let ow = parseFloat(document.getElementById("openWaterInput").value);
    let e = parseFloat(document.getElementById("emergentInput").value);
    let f = parseFloat(document.getElementById("floatingInput").value);
    let s = parseFloat(document.getElementById("submergedInput").value);

    let total = (ow + e + f + s);

    if (total === 0) {
        alert("Nothing entered");
        for (let node of inputNodes) {
            if (node.value === "0") {
                node.value = ""
            }
        }
        return;
    }

    document.getElementById("openWaterResult").innerText = `${hab(ow, total)} seconds`;
    document.getElementById("emergentResult").innerText = `${hab(e, total)} seconds`;
    document.getElementById("floatingResult").innerText = `${hab(f, total)} seconds`;
    document.getElementById("submergedResult").innerText = `${hab(s, total)} seconds`;

    for (let node of inputNodes) {
        if (node.value === "0") {
            node.value = ""
        }
    }
}

function hab(subset, total) {
    // This will not always perfectly add up to 60. But people aren't perfect anyway, so...
    return Math.round((60 * (subset / total)))
}

function next(keyEvent, nodeId) {
    console.log(keyEvent);
    if (keyEvent.code === "Enter") {
        document.getElementById(nodeId).focus()
    }
}

function reset() {
    for (let node of document.querySelectorAll("[id$='Input']")) {
        node.value = null;
    }

    for (let node of document.querySelectorAll("[id$='Result']")) {
        node.innerText = null;
    }
}