document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("qcmForm");
    const clearButton = document.getElementById("clearSelections");
    const correctionButton = document.getElementById("correction");
    const corrigéButton = document.getElementById("showCorrigé");
    const scoreDisplay = document.getElementById("score");

    clearButton.addEventListener("click", function () {
        form.reset();
        scoreDisplay.textContent = "";
    });

    correctionButton.addEventListener("click", function () {
        const questions = form.querySelectorAll("li");
        let score = 0;

        questions.forEach(function (question) {
            const inputs = question.querySelectorAll("input[type=radio]");
            const correctAnswer = question.getAttribute("data-correct");

            inputs.forEach(function (input) {
                if (input.checked && input.value === correctAnswer) {
                    score++;
                }
            });
        });

        scoreDisplay.textContent = `Score : ${score} / 10`;
    });

    corrigéButton.addEventListener("click", function () {
        window.open("corrigé.html", "_blank");
    });
});
