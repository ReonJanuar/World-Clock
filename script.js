const timeZones = [
    { flag: "afghanistan.png", name: "Afghanistan (Kabul)", timeZone: "Asia/Kabul" },
    { flag: "albania.png", name: "Albania (Tirana)", timeZone: "Europe/Tirane" },
    { flag: "algeria.png", name: "Algeria (Algiers)", timeZone: "Africa/Algiers" },
    { flag: "andorra.png", name: "Andorra (Andorra la Vella)", timeZone: "Europe/Andorra" },
    { flag: "angola.png", name: "Angola (Luanda)", timeZone: "Africa/Luanda" },
    { flag: "antigua and barbuda.png", name: "Antigua and Barbuda (St. John's)", timeZone: "America/Antigua" },
    { flag: "argentina.png", name: "Argentina (Buenos Aires)", timeZone: "America/Argentina/Buenos_Aires" },
    { flag: "armenia.png", name: "Armenia (Yerevan)", timeZone: "Asia/Yerevan" },
    { flag: "australia.png", name: "Australia (Sydney)", timeZone: "Australia/Sydney" },
    { flag: "austria.png", name: "Austria (Vienna)", timeZone: "Europe/Vienna" },
    { flag: "azerbaijan.png", name: "Azerbaijan (Baku)", timeZone: "Asia/Baku" },
    { flag: "bahamas.png", name: "Bahamas (Nassau)", timeZone: "America/Nassau" },
    { flag: "bahrain.png", name: "Bahrain (Manama)", timeZone: "Asia/Bahrain" },
    { flag: "bangladesh.png", name: "Bangladesh (Dhaka)", timeZone: "Asia/Dhaka" },
    { flag: "barbados.png", name: "Barbados (Bridgetown)", timeZone: "America/Barbados" },
    { flag: "belarus.png", name: "Belarus (Minsk)", timeZone: "Europe/Minsk" },
    { flag: "belgium.png", name: "Belgium (Brussels)", timeZone: "Europe/Brussels" },
    { flag: "belize.png", name: "Belize (Belmopan)", timeZone: "America/Belize" },
    { flag: "benin.png", name: "Benin (Porto-Novo)", timeZone: "Africa/Porto-Novo" },
    { flag: "bhutan.png", name: "Bhutan (Thimphu)", timeZone: "Asia/Thimphu" },
    { flag: "bolivia.png", name: "Bolivia (La Paz)", timeZone: "America/La_Paz" },
    { flag: "bosnia and herzegovina.png", name: "Bosnia and Herzegovina (Sarajevo)", timeZone: "Europe/Sarajevo" },
    { flag: "botswana.png", name: "Botswana (Gaborone)", timeZone: "Africa/Gaborone" },
    { flag: "brazil.png", name: "Brazil (Brasília)", timeZone: "America/Fortaleza" },
    { flag: "brunei.png", name: "Brunei Darussalam (Bandar Seri Bengawan)", timeZone: "Asia/Brunei" },
    { flag: "bulgaria.png", name: "Bulgaria (Sofia)", timeZone: "Europe/Sofia" },
    { flag: "burkina faso.png", name: "Burkina Faso (Ouagadougou)", timeZone: "Africa/Ouagadougou" },
    { flag: "burundi.png", name: "Burundi (Gitega)", timeZone: "Africa/Bujumbura" },
    { flag: "cambodia.png", name: "Cambodia (Phnom Penh)", timeZone: "Asia/Phnom_Penh" },
    { flag: "cameroon.png", name: "Cameroon (Yaoundé)", timeZone: "Africa/Douala" },
    { flag: "canada.png", name: "Canada (Ottawa)", timeZone: "America/Toronto" },
    { flag: "central african republic.png", name: "Central African Republic (Bangui)", timeZone: "Africa/Bangui" },
    { flag: "chad.png", name: "Chad (N'Djamena)", timeZone: "Africa/Ndjamena" },
    { flag: "cape verde.png", name: "Cape Verde (Praia)", timeZone: "Atlantic/Cape_Verde" },
    { flag: "chile.png", name: "Chile (Santiago)", timeZone: "America/Santiago" },
    { flag: "china.png", name: "China (Shanghai)", timeZone: "Asia/Shanghai" },
    { flag: "colombia.png", name: "Colombia (Bogotá)", timeZone: "America/Bogota" },
    { flag: "comoros.png", name: "Comoros (Moroni)", timeZone: "Indian/Comoro" },
    { flag: "congo republic.png", name: "Republic of the Congo (Brazzaville)", timeZone: "Africa/Brazzaville" },
    { flag: "congo democratic republic.png", name: "Democratic Republic of the Congo (Kinshasa)", timeZone: "Africa/Kinshasa" },
    { flag: "costa rica.png", name: "Costa Rica (San José)", timeZone: "America/Costa_Rica" },
    { flag: "croatia.png", name: "Croatia (Zagreb)", timeZone: "Europe/Zagreb" },
    { flag: "cuba.png", name: "Cuba (Havana)", timeZone: "America/Havana" },
    { flag: "cyprus.png", name: "Cyprus (Nicosia)", timeZone: "Asia/Nicosia" },
    { flag: "czech republic.png", name: "Czech Republic (Prague)", timeZone: "Europe/Prague" },
    { flag: "denmark.png", name: "Denmark (Copenhagen)", timeZone: "Europe/Copenhagen" },
    { flag: "djibouti.png", name: "Djibouti (Djibouti City)", timeZone: "Africa/Djibouti" },
    { flag: "dominica.png", name: "Dominica (Roseau)", timeZone: "America/Dominica" },
    { flag: "dominican republic.png", name: "Dominican Republic (Santo Domingo)", timeZone: "America/Santo_Domingo" },
    { flag: "ecuador.png", name: "Ecuador (Quito)", timeZone: "America/Guayaquil" },
    { flag: "egypt.png", name: "Egypt (Cairo)", timeZone: "Africa/Cairo" },
    { flag: "el salvador.png", name: "El Salvador (San Salvador)", timeZone: "America/El_Salvador" },
    { flag: "equatorial guinea.png", name: "Equatorial Guinea (Malabo)", timeZone: "Africa/Lagos" },
    { flag: "eritrea.png", name: "Eritrea (Asmara)", timeZone: "Africa/Asmara" },
    { flag: "estonia.png", name: "Estonia (Tallinn)", timeZone: "Europe/Tallinn" },
    { flag: "eswatini.png", name: "Eswatini (Mbabane)", timeZone: "Africa/Mbabane" },
    { flag: "ethiopia.png", name: "Ethiopia (Addis Ababa)", timeZone: "Africa/Addis_Ababa" },
    { flag: "fiji.png", name: "Fiji (Suva)", timeZone: "Pacific/Fiji" },
    { flag: "finland.png", name: "Finland (Helsinki)", timeZone: "Europe/Helsinki" },
    { flag: "france.png", name: "France (Paris)", timeZone: "Europe/Paris" },
    { flag: "gabon.png", name: "Gabon (Libreville)", timeZone: "Africa/Libreville" },
    { flag: "gambia.png", name: "Gambia (Banjul)", timeZone: "Africa/Abidjan" },
    { flag: "georgia.png", name: "Georgia (Tbilisi)", timeZone: "Asia/Tbilisi" },
    { flag: "germany.png", name: "Germany (Berlin)", timeZone: "Europe/Berlin" },
    { flag: "ghana.png", name: "Ghana (Accra)", timeZone: "Africa/Accra" },
    { flag: "greece.png", name: "Greece (Athens)", timeZone: "Europe/Athens" },
    { flag: "grenada.png", name: "Grenada (St. George's)", timeZone: "America/Grenada" },
    { flag: "guatemala.png", name: "Guatemala (Guatemala City)", timeZone: "America/Guatemala" },
    { flag: "guinea.png", name: "Guinea (Conakry)", timeZone: "Africa/Conakry" },
    { flag: "guinea-bissau.png", name: "Guinea-Bissau (Bissau)", timeZone: "Africa/Bissau" },
    { flag: "guyana.png", name: "Guyana (Georgetown)", timeZone: "America/Guyana" },
    { flag: "haiti.png", name: "Haiti (Port-au-Prince)", timeZone: "America/Port-au-Prince" },
    { flag: "honduras.png", name: "Honduras (Tegucigalpa)", timeZone: "America/Tegucigalpa" },
    { flag: "hungary.png", name: "Hungary (Budapest)", timeZone: "Europe/Budapest" },
    { flag: "iceland.png", name: "Iceland (Reykjavik)", timeZone: "Atlantic/Reykjavik" },
    { flag: "india.png", name: "India (New Delhi)", timeZone: "Asia/Kolkata" },
    { flag: "indonesia.png", name: "Indonesia (Jakarta)", timeZone: "Asia/Jakarta" }, 
    { flag: "iran.png", name: "Iran (Tehran)", timeZone: "Asia/Tehran" },
    { flag: "iraq.png", name: "Iraq (Baghdad)", timeZone: "Asia/Baghdad" },
    { flag: "ireland.png", name: "Ireland (Dublin)", timeZone: "Europe/Dublin" },
    { flag: "italy.png", name: "Italy (Rome)", timeZone: "Europe/Rome" },
    { flag: "jamaica.png", name: "Jamaica (Kingston)", timeZone: "America/Jamaica" },
    { flag: "japan.png", name: "Japan (Tokyo)", timeZone: "Asia/Tokyo" },
    { flag: "jordan.png", name: "Jordan (Amman)", timeZone: "Asia/Amman" },
    { flag: "kazakhstan.png", name: "Kazakhstan (Almaty)", timeZone: "Asia/Almaty" },
    { flag: "kenya.png", name: "Kenya (Nairobi)", timeZone: "Africa/Nairobi" },
    { flag: "kiribati.png", name: "Kiribati (Tarawa)", timeZone: "Pacific/Tarawa" },
    { flag: "north korea.png", name: "North Korea (Pyongyang)", timeZone: "Asia/Pyongyang" },
    { flag: "south korea.png", name: "South Korea (Seoul)", timeZone: "Asia/Seoul" }, 
    { flag: "kuwait.png", name: "Kuwait (Kuwait City)", timeZone: "Asia/Kuwait" },
    { flag: "kyrgyzstan.png", name: "Kyrgyzstan (Bishkek)", timeZone: "Asia/Bishkek" },
    { flag: "laos.png", name: "Laos (Vientiane)", timeZone: "Asia/Vientiane" },
    { flag: "latvia.png", name: "Latvia (Riga)", timeZone: "Europe/Riga" },
    { flag: "lebanon.png", name: "Lebanon (Beirut)", timeZone: "Asia/Beirut" },
    { flag: "lesotho.png", name: "Lesotho (Maseru)", timeZone: "Africa/Maseru" },
    { flag: "liberia.png", name: "Liberia (Monrovia)", timeZone: "Africa/Monrovia" },
    { flag: "libya.png", name: "Libya (Tripoli)", timeZone: "Africa/Tripoli" },
    { flag: "liechtenstein.png", name: "Liechtenstein (Vaduz)", timeZone: "Europe/Zurich" },
    { flag: "lithuania.png", name: "Lithuania (Vilnius)", timeZone: "Europe/Vilnius" },
    { flag: "luxembourg.png", name: "Luxembourg (Luxembourg City)", timeZone: "Europe/Luxembourg" },
    { flag: "madagascar.png", name: "Madagascar (Antananarivo)", timeZone: "Indian/Antananarivo" },
    { flag: "malawi.png", name: "Malawi (Lilongwe)", timeZone: "Africa/Blantyre" },
    { flag: "malaysia.png", name: "Malaysia (Kuala Lumpur)", timeZone: "Asia/Kuala_Lumpur" },
    { flag: "maldives.png", name: "Maldives (Malé)", timeZone: "Indian/Maldives" },
    { flag: "mali.png", name: "Mali (Bamako)", timeZone: "Africa/Bamako" },
    { flag: "malta.png", name: "Malta (Valletta)", timeZone: "Europe/Malta" },
    { flag: "marshall islands.png", name: "Marshall Islands (Majuro)", timeZone: "Pacific/Majuro" },
    { flag: "mauritania.png", name: "Mauritania (Nouakchott)", timeZone: "Africa/Nouakchott" },
    { flag: "mauritius.png", name: "Mauritius (Port Louis)", timeZone: "Indian/Mauritius" },
    { flag: "mexico.png", name: "Mexico (Mexico City)", timeZone: "America/Mexico_City" },
    { flag: "micronesia.png", name: "Micronesia (Palikir)", timeZone: "Pacific/Pohnpei" },
    { flag: "moldova.png", name: "Moldova (Chișinău)", timeZone: "Europe/Chisinau" },
    { flag: "monaco.png", name: "Monaco (Monaco)", timeZone: "Europe/Monaco" },
    { flag: "mongolia.png", name: "Mongolia (Ulaanbaatar)", timeZone: "Asia/Ulaanbaatar" },
    { flag: "montenegro.png", name: "Montenegro (Podgorica)", timeZone: "Europe/Belgrade" },
    { flag: "morocco.png", name: "Morocco (Rabat)", timeZone: "Africa/Casablanca" },
    { flag: "mozambique.png", name: "Mozambique (Maputo)", timeZone: "Africa/Maputo" },
    { flag: "myanmar.png", name: "Myanmar (Naypyidaw)", timeZone: "Asia/Yangon" },
    { flag: "namibia.png", name: "Namibia (Windhoek)", timeZone: "Africa/Windhoek" },
    { flag: "nauru.png", name: "Nauru (Yaren)", timeZone: "Pacific/Nauru" },
    { flag: "nepal.png", name: "Nepal (Kathmandu)", timeZone: "Asia/Kathmandu" },
    { flag: "netherlands.png", name: "Netherlands (Amsterdam)", timeZone: "Europe/Amsterdam" },
    { flag: "new zealand.png", name: "New Zealand (Auckland)", timeZone: "Pacific/Auckland" },
    { flag: "nicaragua.png", name: "Nicaragua (Managua)", timeZone: "America/Managua" },
    { flag: "niger.png", name: "Niger (Niamey)", timeZone: "Africa/Niamey" },
    { flag: "nigeria.png", name: "Nigeria (Lagos)", timeZone:"Africa/Lagos" },
    { flag: "north macedonia.png", name: "North Macedonia (Skopje)", timeZone: "Europe/Skopje" },
    { flag: "norway.png", name: "Norway (Oslo)", timeZone:"Europe/Oslo" },
    { flag: "oman.png", name: "Oman (Muscat)", timeZone: "Asia/Muscat" },
    { flag: "pakistan.png", name: "Pakistan (Islamabad)", timeZone: "Asia/Karachi" },
    { flag: "palau.png", name: "Palau (Ngerulmud)", timeZone: "Pacific/Palau" },
    { flag: "palestine.png", name: "Palestine (Gaza)", timeZone: "Asia/Gaza" },
    { flag: "panama.png", name: "Panama (Panama City)", timeZone: "America/Panama" }, 
    { flag: "papua new guinea.png", name: "Papua New Guinea (Port Moresby)", timeZone: "Pacific/Port_Moresby" },
    { flag: "paraguay.png", name: "Paraguay (Asunción)", timeZone: "America/Asuncion" },
    { flag: "peru.png", name: "Peru (Lima)", timeZone:"America/Lima" },
    { flag: "philippines.png", name: "Philippines (Manila)", timeZone: "Asia/Manila" },
    { flag: "poland.png", name: "Poland (Warsaw)", timeZone: "Europe/Warsaw" },
    { flag: "portugal.png", name: "Portugal (Lisbon)", timeZone: "Europe/Lisbon" },
    { flag: "qatar.png", name: "Qatar (Doha)", timeZone: "Asia/Qatar" },
    { flag: "romania.png", name: "Romania (Bucharest)", timeZone: "Europe/Bucharest" },
    { flag: "russia.png", name: "Russia (Moscow)", timeZone: "Europe/Moscow" },
    { flag: "rwanda.png", name: "Rwanda (Kigali)", timeZone: "Africa/Kigali" },
    { flag: "saint kitts and nevis.png", name: "Saint Kitts and Nevis (Basseterre)", timeZone: "America/St_Kitts" },
    { flag: "saint lucia.png", name: "Saint Lucia (Castries)", timeZone: "America/St_Lucia" },
    { flag: "saint vincent and the grenadines.png", name: "Saint Vincent and the Grenadines (Kingstown)", timeZone: "America/St_Vincent" },
    { flag: "samoa.png", name: "Samoa (Apia)", timeZone: "Pacific/Apia" },
    { flag: "san marino.png", name: "San Marino (San Marino)", timeZone: "Europe/San_Marino" },
    { flag: "sao tome and principe.png", name: "Sao Tome and Principe (São Tomé)", timeZone: "Africa/Sao_Tome" },
    { flag: "saudi.png", name: "Saudi Arabia (Riyadh)", timeZone: "Asia/Riyadh" },
    { flag: "senegal.png", name: "Senegal (Dakar)", timeZone: "Africa/Dakar" },
    { flag: "serbia.png", name: "Serbia (Belgrade)", timeZone: "Europe/Belgrade" },
    { flag: "seychelles.png", name: "Seychelles (Victoria)", timeZone: "Indian/Mahe" },
    { flag: "sierra leone.png", name: "Sierra Leone (Freetown)", timeZone: "Africa/Freetown" },
    { flag: "singapore.png", name: "Singapore (Singapore)", timeZone: "Asia/Singapore" },
    { flag: "slovakia.png", name: "Slovakia (Bratislava)", timeZone: "Europe/Bratislava" },
    { flag: "slovenia.png", name: "Slovenia (Ljubljana)", timeZone: "Europe/Ljubljana" },
    { flag: "solomon island.png", name: "Solomon Island (Honiara)", timeZone: "Pacific/Guadalcanal" },
    { flag: "somalia.png", name: "Somalia (Mogadishu)", timeZone: "Africa/Mogadishu" },
    { flag: "south africa.png", name: "South Africa (Johannesburg)", timeZone: "Africa/Johannesburg" },
    { flag: "south sudan.png", name: "South Sudan (Juba)", timeZone: "Africa/Juba" },
    { flag: "spain.png", name: "Spain (Madrid)", timeZone: "Europe/Madrid" },
    { flag: "sri lanka.png", name: "Sri Lanka (Colombo)", timeZone: "Asia/Colombo" },
    { flag: "sudan.png", name: "Sudan (Khartoum)", timeZone: "Africa/Khartoum" },
    { flag: "suriname.png", name: "Suriname (Paramaribo)", timeZone: "America/Paramaribo" },
    { flag: "sweden.png", name: "Sweden (Stockholm)", timeZone: "Europe/Stockholm" },
    { flag: "switzerland.png", name: "Switzerland (Bern)", timeZone: "Europe/Zurich" },
    { flag: "syria.png", name: "Syria (Damascus)", timeZone: "Asia/Damascus" },
    { flag: "tajikistan.png", name: "Tajikistan (Dushanbe)", timeZone: "Asia/Dushanbe" },
    { flag: "tanzania.png", name: "Tanzania (Dodoma)", timeZone: "Africa/Dar_es_Salaam" },
    { flag: "thailand.png", name: "Thailand (Bangkok)", timeZone: "Asia/Bangkok" },
    { flag: "timor-leste.png", name: "Timor-Leste (Dili)", timeZone: "Asia/Dili" },
    { flag: "togo.png", name: "Togo (Lomé)", timeZone: "Africa/Lome" },
    { flag: "tonga.png", name: "Tonga (Nukuʻalofa)", timeZone: "Pacific/Tongatapu" },
    { flag: "trinidad and tobago.png", name: "Trinidad and Tobago (Port of Spain)", timeZone: "America/Port_of_Spain" },
    { flag: "tunisia.png", name: "Tunisia (Tunis)", timeZone: "Africa/Tunis" },
    { flag: "turkey.png", name: "Turkey (Istanbul)", timeZone: "Europe/Istanbul" },
    { flag: "turkmenistan.png", name: "Turkmenistan (Ashgabat)", timeZone: "Asia/Ashgabat" },
    { flag: "tuvalu.png", name: "Tuvalu (Funafuti)", timeZone: "Pacific/Funafuti" },
    { flag: "uganda.png", name: "Uganda (Kampala)", timeZone: "Africa/Kampala" },
    { flag: "ukraine.png", name: "Ukraine (Kyiv)", timeZone: "Europe/Kyiv" },
    { flag: "united arab emirates.png", name: "United Arab Emirates (Dubai)", timeZone: "Asia/Dubai" },
    { flag: "united kingdom.png", name: "United Kingdom (London)", timeZone: "Europe/London" },
    { flag: "united states.png", name: "United States (New York)", timeZone: "America/New_York" },
    { flag: "uruguay.png", name: "Uruguay (Montevideo)", timeZone: "America/Montevideo" },
    { flag: "uzbekistan.png", name: "Uzbekistan (Tashkent)", timeZone: "Asia/Tashkent" },
    { flag: "vanuatu.png", name: "Vanuatu (Port Vila)", timeZone: "Pacific/Efate" },
    { flag: "venezuela.png", name: "Venezuela (Caracas)", timeZone: "America/Caracas" },
    { flag: "vietnam.png", name: "Vietnam (Hanoi)", timeZone: "Asia/Ho_Chi_Minh" },
    { flag: "yemen.png", name: "Yemen (Sana'a)", timeZone: "Asia/Aden" },
    { flag: "zambia.png", name: "Zambia (Lusaka)", timeZone: "Africa/Lusaka" },
    { flag: "zimbabwe.png", name: "Zimbabwe (Harare)", timeZone: "Africa/Harare" },
    { flag: "vatican.png", name: "Vatican City (Vatican City)", timeZone: "Europe/Vatican" },
    { flag: "kosovo.png", name: "Kosovo (Pristina)", timeZone: "Europe/Belgrade" }
];

document.getElementById("searchBox").addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  const filtered = timeZones
    .filter(zone => zone.name.toLowerCase().includes(keyword));

  renderClocks(filtered);
});

let renderedZones = [];

function renderClocks(zones) {
  renderedZones = zones;
  const container = document.getElementById("clockContainer");
  container.innerHTML = "";

  zones.forEach(zone => {
    const clockBox = document.createElement("div");
    clockBox.className = "clock";

    const flagImg = document.createElement("img");
    flagImg.src = `flags/${zone.flag}`;
    flagImg.alt = zone.name;
    flagImg.className = "flag";
    clockBox.appendChild(flagImg);

    const title = document.createElement("h3");
    title.textContent = zone.name;
    clockBox.appendChild(title);

    const digital = document.createElement("p");
    digital.className = "digital-time";
    digital.dataset.timezone = zone.timeZone;
    clockBox.appendChild(digital);

    container.appendChild(clockBox);
  });
}

function updateAllTimes() {
  document.querySelectorAll('.digital-time').forEach(el => {
    const tz = el.dataset.timezone;
    try {
      const now = new Date().toLocaleTimeString('en-US', {
        timeZone: tz,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      el.textContent = now;
    } catch (e) {
      el.textContent = "Invalid TimeZone";
      console.error(`TimeZone error for ${tz}:`, e);
    }
  });
}

renderClocks(timeZones);
setInterval(updateAllTimes, 1000);

// Tampilkan tombol saat scroll ke bawah
window.addEventListener("scroll", function () {
  const btn = document.getElementById("backToTop");
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

// Scroll ke atas smooth pas diklik
document.getElementById("backToTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

function populateZoneSelect(selectElement) {
  timeZones.forEach(zone => {
    const opt = document.createElement("option");
    opt.value = zone.timeZone;
    opt.textContent = zone.name;
    selectElement.appendChild(opt);
  });
}

function addTargetZone() {
  const container = document.getElementById("targetZonesContainer");
  const wrapper = document.createElement("div");
  wrapper.className = "target-zone-entry";

  const select = document.createElement("select");
  populateZoneSelect(select);

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "❌";
  removeBtn.className = "remove-btn";
  removeBtn.onclick = () => container.removeChild(wrapper);

  wrapper.appendChild(select);
  wrapper.appendChild(removeBtn);
  container.appendChild(wrapper);
}

function convertMultipleZones() {
  const baseZone = document.getElementById("baseZone").value;
  const baseTime = document.getElementById("baseTime").value;
  if (!baseZone || !baseTime) return;

  const [h, m] = baseTime.split(":").map(Number);
  const now = new Date();
  now.setHours(h, m, 0);

  const baseLocalString = now.toLocaleString("en-US", { timeZone: baseZone });
  const baseDate = new Date(baseLocalString);

  const resultContainer = document.getElementById("multiResult");
  resultContainer.innerHTML = "<h3>Converted Times:</h3>";

  document.querySelectorAll("#targetZonesContainer select").forEach(sel => {
    const tz = sel.value;
    const time = baseDate.toLocaleTimeString("en-US", {
      timeZone: tz,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    });
    const zoneName = timeZones.find(z => z.timeZone === tz)?.name || tz;
    const p = document.createElement("p");
    p.textContent = `${zoneName}: ${time}`;
    resultContainer.appendChild(p);
  });
}

document.getElementById("addZoneBtn").addEventListener("click", addTargetZone);
document.getElementById("multiConvertBtn").addEventListener("click", convertMultipleZones);
populateZoneSelect(document.getElementById("baseZone"));

function resetConverter() {
  document.getElementById("baseZone").selectedIndex = 0;
  document.getElementById("baseTime").value = "";
  document.getElementById("targetZonesContainer").innerHTML = "";
  document.getElementById("multiResult").innerHTML = "";
}
document.getElementById("resetConverterBtn").addEventListener("click", resetConverter);

document.getElementById("openConverterBtn").addEventListener("click", () => {
  document.getElementById("converterModal").style.display = "block";
});

document.getElementById("closeModalBtn").addEventListener("click", () => {
  document.getElementById("converterModal").style.display = "none";
});

// Close if user clicks outside modal
window.addEventListener("click", (e) => {
  const modal = document.getElementById("converterModal");
  if (e.target === modal) modal.style.display = "none";
});

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-mode");
  
  // Ubah icon tombol
  if (document.body.classList.contains("light-mode")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});

// Load theme dari localStorage pas buka halaman
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  themeToggle.textContent = "☀️";
}
