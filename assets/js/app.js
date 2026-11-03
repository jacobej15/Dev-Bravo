/* DOM Time front-end behavior. All authentication and content are demo-only. */
(function ($) {
  "use strict";

  function showToast(title, message) {
    const toastElement = document.getElementById("app-toast");
    if (!toastElement || typeof bootstrap === "undefined") return;

    $("#toast-title").text(title);
    $("#toast-message").text(message);
    bootstrap.Toast.getOrCreateInstance(toastElement, { delay: 3500 }).show();
  }

  function categoryLabel(category) {
    const labels = {
      academics: "Academics",
      campus: "Campus life",
      events: "Events",
      services: "Student services"
    };
    return labels[category] || "Student resource";
  }

  function createResourceCard(title, description, category) {
    const iconMap = {
      academics: "bi-journal-bookmark-fill",
      campus: "bi-building",
      events: "bi-calendar-event-fill",
      services: "bi-person-workspace"
    };
    const safeTitle = $("<div>").text(title).html();
    const safeDescription = $("<div>").text(description).html();
    const icon = iconMap[category] || "bi-info-circle";

    return `
      <div class="col-md-6 col-xl-3 resource-column">
        <article class="resource-card h-100" data-category="${category}" data-title="${safeTitle.toLowerCase()}" data-date="${new Date().toISOString().slice(0, 10)}">
          <div class="resource-icon icon-purple"><i class="bi ${icon}" aria-hidden="true"></i></div>
          <span class="resource-tag">${categoryLabel(category)}</span>
          <h3>${safeTitle}</h3>
          <p>${safeDescription}</p>
          <div class="resource-meta"><i class="bi bi-plus-circle" aria-hidden="true"></i> Added during this session</div>
        </article>
      </div>`;
  }

  function filterResources() {
    const searchTerm = ($("#search-box").val() || "").toString().trim().toLowerCase();
    const selectedCategory = $("#filter-category").val() || "all";
    let visibleCount = 0;

    $(".resource-column").each(function () {
      const card = $(this).find(".resource-card");
      const categoryMatches = selectedCategory === "all" || card.data("category") === selectedCategory;
      const textMatches = card.text().toLowerCase().includes(searchTerm);
      const visible = categoryMatches && textMatches;
      $(this).toggleClass("d-none", !visible);
      if (visible) visibleCount += 1;
    });

    $("#results-count").text(`${visibleCount} ${visibleCount === 1 ? "resource" : "resources"}`);
    $("#empty-state").toggleClass("d-none", visibleCount !== 0);
  }

  function sortResources() {
    const sortMode = $("#sort-order").val();
    const cards = $(".resource-column").get();

    cards.sort(function (first, second) {
      const firstCard = $(first).find(".resource-card");
      const secondCard = $(second).find(".resource-card");

      if (sortMode === "title") {
        return firstCard.find("h3").text().localeCompare(secondCard.find("h3").text());
      }
      if (sortMode === "newest") {
        return secondCard.data("date").localeCompare(firstCard.data("date"));
      }
      return 0;
    });

    $("#content-container").append(cards);
    filterResources();
  }

  $(function () {
    const savedUsername = sessionStorage.getItem("domTimeUsername");

    if ($("#account-name").length) {
      if (savedUsername) {
        $("#account-name").text(savedUsername);
        $("#account-action").text("Sign out").attr("href", "#").attr("id", "account-signout");
      }

      $(document).on("click", "#account-signout", function (event) {
        event.preventDefault();
        sessionStorage.removeItem("domTimeUsername");
        $("#account-name").text("Guest");
        $(this).text("Sign in").attr("href", "pages/login.html").attr("id", "account-action");
        showToast("Signed out", "You are now browsing as a guest.");
      });
    }

    $("#search-box, #filter-category").on("input change", filterResources);
    $("#sort-order").on("change", sortResources);

    $("#clear-filters").on("click", function () {
      $("#search-box").val("");
      $("#filter-category").val("all");
      $("#sort-order").val("default");
      sortResources();
      showToast("Filters cleared", "All campus board resources are visible.");
    });

    $("#add-form").on("submit", function (event) {
      event.preventDefault();
      const title = $("#resource-title").val().trim();
      const description = $("#resource-description").val().trim();
      const category = $("#resource-category").val();

      if (!title || !description || !category) {
        showToast("Missing information", "Complete each required field before adding a resource.");
        return;
      }

      $("#content-container").append(createResourceCard(title, description, category));
      this.reset();
      $("#sort-order").val("default");
      filterResources();
      showToast("Resource added", "Your resource is now displayed on the campus board for this session.");
      $("#campus-board").get(0).scrollIntoView({ behavior: "smooth" });
    });

    $("#signin-form").on("submit", function (event) {
      event.preventDefault();
      const username = $("#hello-box").val().trim();
      const password = $("#password").val();
      const feedback = $("#user-greeting");

      if (!username || !password) {
        feedback.text("Enter both a username and password to continue.");
        return;
      }

      /* Keep the original classroom demo credentials; this is not secure authentication. */
      if (username !== "Jacobe" || password !== "Johnson") {
        feedback.text("Username or password is incorrect. Please try again.");
        return;
      }

      sessionStorage.setItem("domTimeUsername", username);
      feedback.text(`Sign-in successful! Welcome, ${username}.`);
      window.setTimeout(function () {
        window.location.href = "lions.html";
      }, 1500);
    });

    if ($("#success-heading").length) {
      const username = sessionStorage.getItem("domTimeUsername");
      if (username) {
        $("#success-heading").text(`Welcome, ${username}!`);
        $("#success-message").text("Your DOM Time demo sign-in was successful.");
      }
    }

    $("#signout-btn").on("click", function () {
      sessionStorage.removeItem("domTimeUsername");
      window.location.href = "../index.html";
    });
  });
})(jQuery);
