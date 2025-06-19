const screen = document.getElementById("screen");
const buttons = document.querySelectorAll("button");
const historyList = document.getElementById("historyList");
const toggleHistory = document.getElementById("toggleHistory");
const historySection = document.getElementById("historySection");

let input = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent;

    if (btn.classList.contains("clear")) {
      input = "";
      screen.value = "";
    } else if (btn.classList.contains("cancel")) {
      input = input.slice(0, -1);
      screen.value = input;
    } else if (btn.classList.contains("equals")) {
      try {
        const formatted = input.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-");
        const result = eval(formatted);
        screen.value = result;

        const historyItem = `${input} = ${result}`;
        const listItem = document.createElement("li");
        listItem.textContent = historyItem;
        historyList.prepend(listItem);

        input = result.toString();
      } catch {
        screen.value = "Error";
        input = "";
      }
    } else if (!btn.classList.contains("history-button")) {
      input += value;
      screen.value = input;
    }
  });
});

toggleHistory.addEventListener("click", () => {
  historySection.classList.toggle("visible");
});
