function handleChangeCorrectionVisibility(e) {
    let obj = e.target.parentNode.childNodes, correction;
    for (key in obj) {
        if (obj.hasOwnProperty(key) && obj[key].classList !== undefined && obj[key].classList.contains("exercise__correction")) {
            correction = obj[key];
            break;
        }
    }

    let className = "exercise__correction--hidden";
    if (correction.classList.contains(className)) {
        correction.classList.remove(className);
    } else {
        correction.classList.add(className);
    }
}