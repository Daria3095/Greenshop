var expanded = false;

function showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

function showCheckboxes0() {
  var checkboxes = document.getElementById("checkboxes0");
  if (!expanded) {
    checkboxes.style.display = "block";
    expanded = true;
  } else {
    checkboxes.style.display = "none";
    expanded = false;
  }
}

function showCheckboxes1() {
  var checkboxes = document.getElementById("checkboxes1");

  if (!expanded) {
      checkboxes.style.display = "block";
      expanded = true;
  } else {
      checkboxes.style.display = "none";
      expanded = false;
  }
}

