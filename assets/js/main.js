/* BAOBAO — site interactions */
(function () {
  "use strict";

  /* ---------- Full-screen nav ---------- */
  var overlay = document.querySelector(".overlay-nav");
  var openers = document.querySelectorAll("[data-nav-open]");
  var closer = document.querySelector("[data-nav-close]");
  var lastFocus = null;

  // Sit the close button exactly where the burger button is, so open/close don't jump
  function alignCloser() {
    var burger = document.querySelector(".site-header [data-nav-open]");
    if (!burger || !closer) return;
    var r = burger.getBoundingClientRect();
    // if the header has scrolled out of view, use its position at the top of the page
    closer.style.top = (r.top >= 0 ? r.top : r.top + window.scrollY) + "px";
    closer.style.left = r.left + "px";
  }

  function setNav(open) {
    if (!overlay) return;
    if (open) alignCloser();
    overlay.classList.toggle("is-open", open);
    overlay.setAttribute("aria-hidden", String(!open));
    document.body.style.overflow = open ? "hidden" : "";
    openers.forEach(function (b) { b.setAttribute("aria-expanded", String(open)); });
    if (open) {
      lastFocus = document.activeElement;
      closer && closer.focus();
    } else if (lastFocus) {
      lastFocus.focus();
    }
  }
  openers.forEach(function (b) { b.addEventListener("click", function () { setNav(true); }); });
  closer && closer.addEventListener("click", function () { setNav(false); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && overlay && overlay.classList.contains("is-open")) setNav(false);
  });

  /* ---------- Opening hours: highlight today ---------- */
  var today = new Date().getDay(); // 0 = Sunday
  document.querySelectorAll(".hours [data-day]").forEach(function (row) {
    if (row.getAttribute("data-day").split(",").indexOf(String(today)) !== -1) {
      row.classList.add("is-today");
    }
  });

  /* ---------- Menu ---------- */
  var rail = document.querySelector(".menu-rail");
  if (rail && window.BAOBAO_MENU) renderMenu(rail, window.BAOBAO_MENU);

  function renderMenu(rail, cats) {
    var leaf =
      '<svg class="dish__veg" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" aria-label="Vegetarian" role="img"><path d="M3 13C3 7 7 3 13 3c0 6-4 10-10 10Z"/><path d="M3 13l6-6"/></svg>';

    rail.innerHTML = cats.map(function (cat) {
      var items = cat.items.map(function (d) {
        return (
          '<li class="dish">' +
            '<img class="dish__img" src="' + d.img + '" alt="" loading="lazy" width="64" height="64">' +
            "<div>" +
              '<div class="dish__head">' +
                '<h3 class="dish__name">' + d.name + " <span>" + d.zh + "</span></h3>" +
                (d.veg ? leaf : "") +
                '<span class="dish__dots" aria-hidden="true"></span>' +
                '<span class="dish__price">£' + d.price + "</span>" +
              "</div>" +
              '<p class="dish__desc">' + d.desc + "</p>" +
            "</div>" +
          "</li>"
        );
      }).join("");

      return (
        '<section class="cat" id="' + cat.id + '">' +
          '<button class="cat__card" type="button" aria-expanded="false" aria-controls="' + cat.id + '-list">' +
            '<img class="cat__bg" src="' + cat.bg + '" alt="">' +
            '<img class="cat__plate" src="' + cat.plate + '" alt="">' +
            '<span class="cat__name">' + cat.title + "</span>" +
            '<span class="notch"><span class="icon-btn"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><path d="M8 3v10M3 8h10"/></svg></span></span>' +
          "</button>" +
          '<div class="cat__list panel" id="' + cat.id + '-list" role="region" aria-label="' + cat.title + ' menu">' +
            '<div class="cat__list-inner">' +
              '<h2 class="rule-title">' + cat.title + "</h2>" +
              '<ul class="dish-list">' + items + "</ul>" +
            "</div>" +
          "</div>" +
        "</section>"
      );
    }).join("");

    var sections = rail.querySelectorAll(".cat");

    function open(section) {
      var wasOpen = section && section.classList.contains("is-open");
      sections.forEach(function (s) {
        s.classList.remove("is-open");
        s.querySelector(".cat__card").setAttribute("aria-expanded", "false");
      });
      if (section && !wasOpen) {
        section.classList.add("is-open");
        section.querySelector(".cat__card").setAttribute("aria-expanded", "true");
        rail.classList.add("has-open");
        if (window.matchMedia("(max-width: 1100px)").matches) {
          setTimeout(function () { section.scrollIntoView({ behavior: "smooth", block: "start" }); }, 80);
        }
        history.replaceState(null, "", "#" + section.id);
      } else {
        rail.classList.remove("has-open");
        history.replaceState(null, "", location.pathname);
      }
    }

    sections.forEach(function (s) {
      s.querySelector(".cat__card").addEventListener("click", function () { open(s); });
    });

    var initial = location.hash && rail.querySelector(location.hash);
    if (initial) open(initial);
  }

  /* ---------- Reservation form ---------- */
  var form = document.querySelector(".reserve-form form");
  if (form) {
    var date = form.querySelector("#date");
    var iso = function (d) { return d.toISOString().slice(0, 10); };
    var now = new Date();
    date.min = iso(now);
    var max = new Date(now); max.setDate(max.getDate() + 60);
    date.max = iso(max);

    // Time slots follow opening hours: Mon–Thu 12–21:30, Fri–Sat 12–22, Sun 12–20 (last seating 1h before close)
    var time = form.querySelector("#time");
    function fillTimes() {
      var day = date.value ? new Date(date.value + "T12:00").getDay() : null;
      var close = day === 0 ? 20 : day === 5 || day === 6 ? 22 : 21.5;
      var current = time.value;
      var opts = ['<option value="" disabled' + (current ? "" : " selected") + "></option>"];
      for (var t = 12; t <= close - 1; t += 0.5) {
        var label = Math.floor(t) + ":" + (t % 1 ? "30" : "00");
        opts.push('<option value="' + label + '"' + (label === current ? " selected" : "") + ">" + label + "</option>");
      }
      time.innerHTML = opts.join("");
    }
    fillTimes();
    date.addEventListener("change", fillTimes);

    var rules = {
      name: function (v) { return v.trim().length >= 2 || "Please enter your name."; },
      phone: function (v) { return /^[+\d][\d\s()-]{6,}$/.test(v.trim()) || "Please enter a valid phone number."; },
      email: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || "Please enter a valid email."; },
      guests: function (v) { return !!v || "How many guests?"; },
      date: function (v) { return !!v || "Pick a date."; },
      time: function (v) { return !!v || "Pick a time."; }
    };

    function check(input) {
      var res = rules[input.name](input.value);
      var field = input.closest(".field");
      var ok = res === true;
      field.classList.toggle("is-invalid", !ok);
      field.querySelector(".field__error").textContent = ok ? "" : res;
      input.setAttribute("aria-invalid", String(!ok));
      return ok;
    }

    Object.keys(rules).forEach(function (name) {
      var input = form.elements[name];
      input.addEventListener("blur", function () { if (input.value) check(input); });
      input.addEventListener("input", function () {
        if (input.closest(".field").classList.contains("is-invalid")) check(input);
      });
    });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var firstBad = null;
      Object.keys(rules).forEach(function (name) {
        var input = form.elements[name];
        if (!check(input) && !firstBad) firstBad = input;
      });
      if (firstBad) { firstBad.focus(); return; }

      var d = new Date(date.value + "T12:00");
      var nice = d.toLocaleDateString("en-GB", { weekday: "long", day: "numeric", month: "long" });
      var ok = document.querySelector(".reserve-success");
      ok.querySelector("[data-summary]").innerHTML =
        "<strong>" + form.elements.guests.value + "</strong> on <strong>" + nice + "</strong> at <strong>" +
        time.value + "</strong>.<br>We'll send a confirmation to " + form.elements.email.value.trim() + ".";
      form.hidden = true;
      ok.classList.add("is-visible");
      ok.querySelector("h2").focus();
    });

    var again = document.querySelector("[data-reserve-again]");
    again && again.addEventListener("click", function () {
      form.reset();
      fillTimes();
      form.hidden = false;
      document.querySelector(".reserve-success").classList.remove("is-visible");
      form.elements.name.focus();
    });
  }
})();
