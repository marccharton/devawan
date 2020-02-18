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
function renderExercise({name, description, correction}) {
    let exercise = document.createElement("article");
    exercise.classList.add("exercise");

    let exercise__title = document.createElement("div");
    exercise__title.classList.add("exercise__title");
    exercise__title.innerHTML = name;

    let exercise__content = document.createElement("div");
    exercise__content.classList.add("exercise__content");

    let exercise__description = document.createElement("div");
    exercise__description.classList.add("exercise__description");
    exercise__description.innerHTML = description;
    exercise__description.addEventListener("click", handleChangeCorrectionVisibility);

    let exercise__correction = document.createElement("div");
    exercise__correction.classList.add("exercise__correction");
    exercise__correction.classList.add("exercise__correction--hidden");
    let pre = document.createElement("pre");
    let code = document.createElement("code");
    code.classList.add("language-javascript");
    exercise__correction.appendChild(pre).appendChild(code);
    code.innerHTML = correction;

    document.querySelector(".exercise__container").appendChild(exercise);
    exercise.appendChild(exercise__title);
    exercise.appendChild(exercise__content);
    exercise__content.appendChild(exercise__description);
    exercise__content.appendChild(exercise__correction);
}
function renderExerciceList(exerciseList) {
    exerciseList.forEach(function(exercise) {
        renderExercise(exercise);
    });
}

renderExerciceList(exerciseList);
