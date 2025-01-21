document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq__item");

    faqItems.forEach(item => {
        item.addEventListener("click", () => {
            // Close other items if necessary
            faqItems.forEach(i => {
                if (i !== item) {
                    i.classList.remove("active");
                    i.querySelector("img").src = "assets/icons/down.svg"; // Reset icon to down state
                }
            });

            // Toggle current item
            item.classList.toggle("active");

            // Update icon based on state
            const icon = item.querySelector("img");
            if (item.classList.contains("active")) {
                icon.src = "assets/icons/up.svg"; // Switch to up icon
            } else {
                icon.src = "assets/icons/down.svg"; // Switch to down icon
            }
        });
    });
});
