function loadOrganisms(){
  let select = document.getElementById("organismSelect");
  select.innerHTML = '<option value="">--Select Organism--</option>';

  for(let org in microorganismsData){
    let opt = document.createElement("option");
    opt.value = org;
    opt.textContent = org;
    select.appendChild(opt);
  }
}

function showMedia(){
  let org = document.getElementById("organismSelect").value;
  let out = document.getElementById("output");

  if(!org){
    out.innerText = "";
    return;
  }

  let data = microorganismsData[org];

  let text = "Organism: " + org + "\n";
  text += "Morphology: " + data.gram + "\n";
  text += "Oxygen Requirement: " + data.oxygen + "\n\n";
  text += "Recommended Media:\n";

  data.media.forEach(m => {
    text += "• " + m + "\n";
  });

  out.innerText = text;
}

window.onload = loadOrganisms;