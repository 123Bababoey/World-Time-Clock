// Map of locations to IANA time zone names (Expanded list)
const cityMap = {
  local: { label: "Local Time", zone: null },

  // Africa
  casablanca: { label: "Casablanca (Morocco)", zone: "Africa/Casablanca" },
  cairo: { label: "Cairo (Egypt)", zone: "Africa/Cairo" },
  lagos: { label: "Lagos (Nigeria)", zone: "Africa/Lagos" },
  capeTown: { label: "Cape Town (South Africa)", zone: "Africa/Johannesburg" },
  nairobi: { label: "Nairobi (Kenya)", zone: "Africa/Nairobi" },
  khartoum: { label: "Khartoum (Sudan)", zone: "Africa/Khartoum" },
  kinshasa: { label: "Kinshasa (DR Congo)", zone: "Africa/Kinshasa" },
  windhoek: { label: "Windhoek (Namibia)", zone: "Africa/Windhoek" },
  antananarivo: { label: "Antananarivo (Madagascar)", zone: "Indian/Antananarivo" },
  djibouti: { label: "Djibouti (Djibouti)", zone: "Africa/Djibouti" },

  // Europe
  london: { label: "London (UK)", zone: "Europe/London" },
  berlin: { label: "Berlin (Germany)", zone: "Europe/Berlin" },
  madrid: { label: "Madrid (Spain)", zone: "Europe/Madrid" },
  moscow: { label: "Moscow (Russia)", zone: "Europe/Moscow" },
  paris: { label: "Paris (France)", zone: "Europe/Paris" },
  rome: { label: "Rome (Italy)", zone: "Europe/Rome" },
  warsaw: { label: "Warsaw (Poland)", zone: "Europe/Warsaw" },
  stockholm: { label: "Stockholm (Sweden)", zone: "Europe/Stockholm" },
  istanbul: { label: "Istanbul (Turkey)", zone: "Europe/Istanbul" },
  kiev: { label: "Kyiv (Ukraine)", zone: "Europe/Kyiv" },

  // Asia
  dubai: { label: "Dubai (UAE)", zone: "Asia/Dubai" },
  tehran: { label: "Tehran (Iran)", zone: "Asia/Tehran" },
  mumbai: { label: "Mumbai (India)", zone: "Asia/Kolkata" },
  beijing: { label: "Beijing (China)", zone: "Asia/Shanghai" },
  tokyo: { label: "Tokyo (Japan)", zone: "Asia/Tokyo" },
  seoul: { label: "Seoul (South Korea)", zone: "Asia/Seoul" },
  bangkok: { label: "Bangkok (Thailand)", zone: "Asia/Bangkok" },
  jakarta: { label: "Jakarta (Indonesia)", zone: "Asia/Jakarta" },
  singapore: { label: "Singapore (Singapore)", zone: "Asia/Singapore" },
  dhaka: { label: "Dhaka (Bangladesh)", zone: "Asia/Dhaka" },
  manila: { label: "Manila (Philippines)", zone: "Asia/Manila" },
  hongkong: { label: "Hong Kong", zone: "Asia/Hong_Kong" },
  baghdad: { label: "Baghdad (Iraq)", zone: "Asia/Baghdad" },
  karachi: { label: "Karachi (Pakistan)", zone: "Asia/Karachi" },
  riyadh: { label: "Riyadh (Saudi Arabia)", zone: "Asia/Riyadh" },
  telaviv: { label: "Tel Aviv (Israel)", zone: "Asia/Jerusalem" },
  vladivostok: { label: "Vladivostok (Russia)", zone: "Asia/Vladivostok" },

  // North America
  newyork: { label: "New York (USA)", zone: "America/New_York" },
  losangeles: { label: "Los Angeles (USA)", zone: "America/Los_Angeles" },
  chicago: { label: "Chicago (USA)", zone: "America/Chicago" },
  mexicoCity: { label: "Mexico City (Mexico)", zone: "America/Mexico_City" },
  vancouver: { label: "Vancouver (Canada)", zone: "America/Vancouver" },
  denver: { label: "Denver (USA)", zone: "America/Denver" },
  halifax: { label: "Halifax (Canada)", zone: "America/Glace_Bay" },
  sanfrancisco: { label: "San Francisco (USA)", zone: "America/Los_Angeles" },
  toronto: { label: "Toronto (Canada)", zone: "America/Toronto" },
  managua: { label: "Managua (Nicaragua)", zone: "America/Managua" },
  phoenix: { label: "Phoenix (USA)", zone: "America/Phoenix" },
  miami: { label: "Miami (USA)", zone: "America/New_York" },
  washington: { label: "Washington D.C. (USA)", zone: "America/New_York" },
  dallas: { label: "Dallas (USA)", zone: "America/Chicago" },
  edmonton: { label: "Edmonton (Canada)", zone: "America/Edmonton" },
  montreal: { label: "Montreal (Canada)", zone: "America/Toronto" },
  detroit: { label: "Detroit (USA)", zone: "America/New_York" },
  portland: { label: "Portland (USA)", zone: "America/Los_Angeles" },
  anchorage: { label: "Anchorage (USA)", zone: "America/Anchorage" },
  honolulu: { label: "Honolulu (USA)", zone: "Pacific/Honolulu" },

  // South America
  buenosAires: { label: "Buenos Aires (Argentina)", zone: "America/Argentina/Buenos_Aires" },
  lima: { label: "Lima (Peru)", zone: "America/Lima" },
  bogota: { label: "Bogotá (Colombia)", zone: "America/Bogota" },
  brasilia: { label: "Brasília (Brazil)", zone: "America/Sao_Paulo" },
  caracas: { label: "Caracas (Venezuela)", zone: "America/Caracas" },
  asuncion: { label: "Asunción (Paraguay)", zone: "America/Asuncion" },
  quito: { label: "Quito (Ecuador)", zone: "America/Guayaquil" },
  montevideo: { label: "Montevideo (Uruguay)", zone: "America/Montevideo" },
  georgetown: { label: "Georgetown (Guyana)", zone: "America/Guyana" },
  paramaribo: { label: "Paramaribo (Suriname)", zone: "America/Paramaribo" },
  laPaz: { label: "La Paz (Bolivia)", zone: "America/La_Paz" },

  // Australia & Oceania
  sydney: { label: "Sydney (Australia)", zone: "Australia/Sydney" },
  melbourne: { label: "Melbourne (Australia)", zone: "Australia/Melbourne" },
  auckland: { label: "Auckland (New Zealand)", zone: "Pacific/Auckland" },
  wellington: { label: "Wellington (New Zealand)", zone: "Pacific/Auckland" },
  portMoresby: { label: "Port Moresby (Papua New Guinea)", zone: "Pacific/Port_Moresby" },
  noumea: { label: "Nouméa (New Caledonia)", zone: "Pacific/Noumea" },
  fiji: { label: "Fiji (Fiji)", zone: "Pacific/Fiji" },
  apia: { label: "Apia (Samoa)", zone: "Pacific/Apia" },
  nauru: { label: "Nauru (Nauru)", zone: "Pacific/Nauru" },
  suva: { label: "Suva (Fiji)", zone: "Pacific/Fiji" },
  tarawa: { label: "Tarawa (Kiribati)", zone: "Pacific/Tarawa" },
  funafuti: { label: "Funafuti (Tuvalu)", zone: "Pacific/Funafuti" }
};

function updateClock() {
  const select = document.getElementById("location-select");
  const key = select.value;
  const entry = cityMap[key];

  if (!entry) return;

  const timeOptions = {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: entry.zone || undefined
  };

  const dateOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    timeZone: entry.zone || undefined
  };

  const now = new Date();

  const timeFormatter = new Intl.DateTimeFormat('en-US', timeOptions);
  const dateFormatter = new Intl.DateTimeFormat('en-US', dateOptions);

  const timeParts = timeFormatter.formatToParts(now);
  const dateParts = dateFormatter.formatToParts(now);

  const hour = timeParts.find(p => p.type === 'hour')?.value || '00';
  const minute = timeParts.find(p => p.type === 'minute')?.value || '00';
  const second = timeParts.find(p => p.type === 'second')?.value || '00';

  const day = dateParts.find(p => p.type === 'day')?.value || '00';
  const month = dateParts.find(p => p.type === 'month')?.value || '00';
  const year = dateParts.find(p => p.type === 'year')?.value || '0000';

  document.getElementById("hours").textContent = hour;
  document.getElementById("minutes").textContent = minute;
  document.getElementById("seconds").textContent = second;
  document.getElementById("date").textContent = `${day} / ${month} / ${year}`;
  document.getElementById("description").textContent = `Current time in ${entry.label}`;
}

window.onload = () => {
  const select = document.getElementById("location-select");
  select.innerHTML = ""; // Clear existing options

  // Convert object to array and sort by label
  const sortedCities = Object.entries(cityMap).sort((a, b) =>
    a[1].label.localeCompare(b[1].label)
  );

  sortedCities.forEach(([key, info]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = info.label;
    select.appendChild(option);
  });

  updateClock(); // Initial call
};

setInterval(updateClock, 1000);