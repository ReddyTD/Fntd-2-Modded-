const units = [
  { name: "Pyro Spring Bonnie", exists: "3.24K", value: "25k-35k", demand: "8.5/10", status: "Slowly Dropping", statusClass: "orange", date: "2026-08-28", shiny: false },
  { name: "SHINY Pyro Spring Bonnie", exists: "709", value: "80k-110k", demand: "8/10", status: "Slowly Dropping", statusClass: "orange", date: "2026-08-28", shiny: true },
  { name: "Witch of the Sea Scrapbaby", exists: "19.38K", value: "10k-12.5k", demand: "7.5/10", status: "Stable", statusClass: "green", date: "2026-08-28", shiny: false },
  { name: "SHINY Witch of the Sea Scrapbaby", exists: "699", value: "235k-285k", demand: "8/10", status: "Unstable", statusClass: "yellow", date: "2026-08-28", shiny: true },
  { name: "Grand Strategist Chica", exists: "617", value: "420k-445k", demand: "9/10", status: "Unstable", statusClass: "yellow", date: "2026-08-28", shiny: false },
  { name: "SHINY Grand Strategist Chica", exists: "22", value: "2.5M+", demand: "10/10", status: "Fluctuating", statusClass: "red", date: "2026-08-28", shiny: true },
  { name: "Gaia Chica", exists: "5.32K", value: "20k-25k", demand: "7/10", status: "Unstable", statusClass: "yellow", date: "2026-08-28", shiny: false },
  { name: "SHINY Gaia Chica", exists: "6.92K", value: "35k-40k", demand: "8/10", status: "Stable", statusClass: "green", date: "2026-08-28", shiny: true },
  { name: "Kronos Endo Freddy", exists: "27.43K", value: "N/A", demand: "N/A", status: "Stable", statusClass: "green", date: "2026-06-27", shiny: false },
  { name: "SHINY Kronos Endo Freddy", exists: "2.74K", value: "N/A", demand: "N/A", status: "Stable", statusClass: "green", date: "2026-06-27", shiny: true },
  { name: "Astral Bonnie", exists: "21.83K", value: "25k-35k", demand: "9/10", status: "Unstable", statusClass: "yellow", date: "2026-08-28", shiny: false },
  { name: "SHINY Astral Bonnie", exists: "967", value: "190k-250k", demand: "8.5/10", status: "Unstable", statusClass: "yellow", date: "2026-08-28", shiny: true },
];

function renderUnits(list) {
  const grid = document.getElementById('unit-grid');
  if (!grid) return;
  grid.innerHTML = list.map(u => `
    <div class="unit-card ${u.shiny ? 'shiny' : ''}">
      <div class="unit-header">
        <div class="unit-icon">${u.shiny ? '✨' : '🐻'}</div>
        <div>
          <div class="unit-name">${u.name}</div>
          <span class="unit-exists">${u.exists} EXISTS</span>
        </div>
      </div>
      <div class="unit-body">
        <div><div class="label">VALUE</div><div class="val green">${u.value}</div></div>
        <div><div class="label">DEMAND</div><div class="val">${u.demand}</div></div>
        <div class="status-row">
          <div><div class="label">STATUS</div><div class="val ${u.statusClass}">${u.status}</div></div>
          <div style="text-align:right"><div class="label">LAST UPDATE</div><div class="val">${u.date}</div></div>
        </div>
      </div>
    </div>
  `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
  renderUnits(units);
  const search = document.getElementById('search');
  if (search) {
    search.addEventListener('input', e => {
      const q = e.target.value.toLowerCase();
      renderUnits(units.filter(u => u.name.toLowerCase().includes(q)));
    });
  }
});
