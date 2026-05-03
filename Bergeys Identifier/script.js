// script.js

function identify() {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  // 1️⃣ Collect user-selected filters
  const filters = {};
  document.querySelectorAll("select").forEach(select => {
    if (select.value !== "") {
      filters[select.id] = select.value.toLowerCase();
    }
  });

  // 2️⃣ ⚠️ Warning if no test selected
  if (Object.keys(filters).length === 0) {
    resultDiv.innerHTML =
      "<p style='color:orange; font-weight:bold;'>⚠️ Please select at least one test</p>";
    return; // Stop execution here
  }

  // 3️⃣ Score each microbe
  const scored = microbes.map(microbe => {
    let score = 0;
    let total = 0;
    Object.keys(filters).forEach(key => {
      if (microbe[key]) {
        total++;
        if (microbe[key].toLowerCase() === filters[key]) {
          score++;
        }
      }
    });
    return {
      microbe,
      score,
      total,
      percent: total ? Math.round((score / total) * 100) : 0
    };
  });

  // 4️⃣ Pick best match
  scored.sort((a, b) => b.score - a.score);
  const best = scored[0].microbe;
  const meta = scored[0];

  // 5️⃣ Display result in lab-report style
  const card = document.createElement("div");
  card.className = "result-card";

  card.innerHTML = `
    <h2>🧬 Most Probable Microorganism</h2>
    <h3>${best.genus} ${best.species}</h3>
    <p><b>Match:</b> ${meta.score} / ${meta.total}</p>
    <p><b>Probability:</b> ${meta.percent}%</p>
    <hr>

    <h4>Basic Characteristics</h4>
    <ul>
      <li>Gram: ${best.gram}</li>
      <li>Shape: ${best.shape}</li>
      <li>Motility: ${best.motility}</li>
      <li>Oxygen requirement: ${best.oxygen_requirement}</li>
    </ul>

    <h4>Enzyme Tests</h4>
    <ul>
      <li>Catalase: ${best.catalase}</li>
      <li>Oxidase: ${best.oxidase}</li>
      <li>Coagulase: ${best.coagulase}</li>
      <li>DNase: ${best.dnase}</li>
      <li>Gelatinase: ${best.gelatinase}</li>
      <li>Lipase: ${best.lipase}</li>
    </ul>

    <h4>IMViC</h4>
    <ul>
      <li>Indole: ${best.indole}</li>
      <li>MR: ${best.mr}</li>
      <li>VP: ${best.vp}</li>
      <li>Citrate: ${best.citrate}</li>
    </ul>

    <h4>Carbohydrate Fermentation</h4>
    <ul>
      <li>Glucose: ${best.glucose}</li>
      <li>Lactose: ${best.lactose}</li>
      <li>Mannitol: ${best.mannitol}</li>
      <li>Sucrose: ${best.sucrose}</li>
      <li>Sorbitol: ${best.sorbitol}</li>
      <li>Xylose: ${best.xylose}</li>
      <li>Arabinose: ${best.arabinose}</li>
      <li>Dulcitol: ${best.dulcitol}</li>
      <li>Raffinose: ${best.raffinose}</li>
      <li>Trehalose: ${best.trehalose}</li>
      <li>Inositol: ${best.inositol}</li>
    </ul>

    <h4>Amino Acid Tests</h4>
    <ul>
      <li>Lysine decarboxylase: ${best.lysine_decarboxylase}</li>
      <li>Ornithine decarboxylase: ${best.ornithine_decarboxylase}</li>
      <li>Arginine dihydrolase: ${best.arginine_dihydrolase}</li>
      <li>Phenylalanine deaminase: ${best.phenylalanine_deaminase}</li>
    </ul>

    <h4>Other Tests</h4>
    <ul>
      <li>H₂S: ${best.h2s}</li>
      <li>Gas: ${best.gas}</li>
      <li>OF test: ${best.of_test}</li>
      <li>TSIA: ${best.tsia}</li>
      <li>Bile esculin: ${best.bile_esculin}</li>
      <li>Salt tolerance (6.5%): ${best.salt_tolerance_6_5}</li>
      <li>Growth at 42°C: ${best.growth_42c}</li>
      <li>Growth at 25°C: ${best.growth_25c}</li>
      <li>Pigment: ${best.pigment}</li>
      <li>Capsule: ${best.capsule}</li>
      <li>String test: ${best.string_test}</li>
    </ul>
  `;

  resultDiv.appendChild(card);
}