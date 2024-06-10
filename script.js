const btns = document.querySelectorAll(".btn");
const answers = document.querySelectorAll(".answer");
const pluses = document.querySelectorAll(".plus");
for (let index = 0; index < btns.length; index++) {
    const btn = btns[index];
    const answer = answers[index];
    const plus = pluses[index];
    btn.addEventListener("click", () => {
        if (!answer.classList.contains("active_answer")) {
            answer.classList.add("active_answer");
            plus.classList.add("active_plus");
        } else {
            answer.classList.remove("active_answer");
            plus.classList.remove("active_plus");
        }
    });
}