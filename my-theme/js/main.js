(function () {
  // Variables
  var nav = document.querySelector(".header__navigation");
  var langSwitcher = document.querySelector(".header__language-switcher");
  var search = document.querySelector(".header__search");
  var allToggles = document.querySelectorAll(".header--toggle");
  var navToggle = document.querySelector(".header__navigation--toggle");
  var langToggle = document.querySelector(".header__language-switcher--toggle");
  var searchToggle = document.querySelector(".header__search--toggle");
  var closeToggle = document.querySelector(".header__close--toggle");
  var allElements = document.querySelectorAll(
    ".header--element, .header--toggle",
  );
  var emailGlobalUnsub = document.querySelector('input[name="globalunsub"]');

  // Function for executing code on document ready
  function domReady(callback) {
    if (["interactive", "complete"].indexOf(document.readyState) >= 0) {
      callback();
    } else {
      document.addEventListener("DOMContentLoaded", callback);
    }
  }

  // Function for toggling mobile navigation
  function toggleNav() {
    if (window.innerWidth <= 767) return; // disable hamburger on mobile
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle("hide");
    });
    nav.classList.toggle("open");
    navToggle.classList.toggle("open");
    closeToggle.classList.toggle("show");
  }

  // Function for toggling mobile language selector
  function toggleLang() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle("hide");
    });

    langSwitcher.classList.toggle("open");
    langToggle.classList.toggle("open");

    closeToggle.classList.toggle("show");
  }

  // Function for toggling mobile search field
  function toggleSearch() {
    allToggles.forEach(function (toggle) {
      toggle.classList.toggle("hide");
    });

    search.classList.toggle("open");
    searchToggle.classList.toggle("open");

    closeToggle.classList.toggle("show");
  }

  // Function for the header close option on mobile
  function closeAll() {
    allElements.forEach(function (element) {
      element.classList.remove("hide", "open");
    });

    closeToggle.classList.remove("show");
  }

  // Function to disable the other checkbox inputs on the email subscription system page template
  function toggleDisabled() {
    var emailSubItem = document.querySelectorAll("#email-prefs-form .item");

    emailSubItem.forEach(function (item) {
      var emailSubItemInput = item.querySelector("input");

      if (emailGlobalUnsub.checked) {
        item.classList.add("disabled");
        emailSubItemInput.setAttribute("disabled", "disabled");
        emailSubItemInput.checked = false;
      } else {
        item.classList.remove("disabled");
        emailSubItemInput.removeAttribute("disabled");
      }
    });
  }

  // Force nav always visible on mobile — no hamburger
  function handleResize() {
    var navEl = document.querySelector(".header__navigation");
    if (navEl) {
      if (window.innerWidth <= 767) {
        navEl.style.display = "block";
        navEl.style.position = "static";
        navEl.style.backgroundColor = "transparent";
        navEl.style.minHeight = "unset";
        navEl.style.width = "auto";
        navEl.classList.remove("open");
      } else {
        navEl.style.display = "";
        navEl.style.position = "";
        navEl.style.backgroundColor = "";
        navEl.style.minHeight = "";
        navEl.style.width = "";
      }
    }
  }

  // Execute JavaScript on document ready
  domReady(function () {
    if (!document.body) {
      return;
    } else {
      // Run resize handler immediately and on window resize
      handleResize();
      window.addEventListener("resize", handleResize);

      // Function dependent on language switcher
      if (langSwitcher) {
        langToggle.addEventListener("click", toggleLang);
      }

      // Function dependent on navigation
      if (navToggle) {
        navToggle.addEventListener("click", toggleNav);
      }

      // Function dependent on search field
      if (searchToggle) {
        searchToggle.addEventListener("click", toggleSearch);
      }

      // Function dependent on close toggle
      if (closeToggle) {
        closeToggle.addEventListener("click", closeAll);
      }

      // Function dependent on email unsubscribe from all input
      if (emailGlobalUnsub) {
        emailGlobalUnsub.addEventListener("change", toggleDisabled);
      }

      /* Back to Top */
      var btn = document.getElementById("back-to-top");
      if (btn) {
        window.addEventListener("scroll", function () {
          if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
          ) {
            btn.classList.add("show");
          } else {
            btn.classList.remove("show");
          }
        });

        btn.addEventListener("click", function () {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
        });
      }
    }
  });
})();
