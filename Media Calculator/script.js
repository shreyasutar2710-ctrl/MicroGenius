function loadMedia() {
  let select = document.getElementById("mediaSelect");
  select.innerHTML = "<option value=''>-- Select Media --</option>";

  for (let media in mediaData) {
    let opt = document.createElement("option");
    opt.value = media;
    opt.text = media;
    select.add(opt);
  }
}

function showComposition() {
  let media = document.getElementById("mediaSelect").value;
  let out = document.getElementById("output");

  if (!media) {
    out.innerText = "";
    return;
  }

  let data = mediaData[media];
  let text = media + " (" + data.type + ")\n";
  text += "Composition per 1000 ml:\n";

  for (let comp in data.composition) {
    text += comp + " : " + data.composition[comp] + "\n";
  }

  out.innerText = text;
}

function calculateMedia() {
  let media = document.getElementById("mediaSelect").value;
  let vol = parseFloat(document.getElementById("finalVolume").value);
  let out = document.getElementById("output");

  if (!media || isNaN(vol)) {
    out.innerText = "Select media and enter final volume";
    return;
  }

  let data = mediaData[media];
  let factor = vol / data.baseVolume;

  let text = media + " required for " + vol + " ml:\n";

  for (let comp in data.composition) {
    if (typeof data.composition[comp] === "number") {
      text += comp + " : " + (data.composition[comp] * factor).toFixed(2) + " g\n";
    } else {
      text += comp + " : " + data.composition[comp] + "\n";
    }
  }

  out.innerText = text;
}

window.onload = loadMedia;