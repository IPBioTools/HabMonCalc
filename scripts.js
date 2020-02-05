function calculate() {
    let ow = parseFloat(document.getElementById("openWaterInput").value);
    let e = parseFloat(document.getElementById("emergentInput").value);
    let f = parseFloat(document.getElementById("floatingInput").value);
    let s = parseFloat(document.getElementById("submergedInput").value);

    let total = (ow + e + f + s);

    document.getElementById("openWaterResult").innerText = (60 * (ow / total)).toFixed(2) + " seconds";
    document.getElementById("emergentResult").innerText = (60 * (e / total)).toFixed(2) + " seconds";
    document.getElementById("floatingResult").innerText = (60 * (f / total)).toFixed(2) + " seconds";
    document.getElementById("submergedResult").innerText = (60 * (s / total)).toFixed(2) + " seconds";
}

function reset() {
    for (let node of document.querySelectorAll("[id$='Input']")) {
        node.value = 0;
    }

    for (let node of document.querySelectorAll("[id$='Result']")) {
        node.innerText = null;
    }
}