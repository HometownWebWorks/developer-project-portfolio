const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");
const copyButton = document.querySelector("[data-copy]");
const copyStatus = document.querySelector(".copy-status");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    projectCards.forEach((card) => {
      const shouldShow = filter === "all" || card.dataset.category === filter;
      card.classList.toggle("hidden", !shouldShow);
    });
  });
});

copyButton?.addEventListener("click", async () => {
  const value = copyButton.dataset.copy || "";

  try {
    await navigator.clipboard.writeText(value);
    copyStatus.textContent = "Email copied.";
  } catch {
    copyStatus.textContent = value;
  }
});
