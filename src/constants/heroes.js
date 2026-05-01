export const HDEFS = [
  // Pirates
  { id:"h1",  n:"Redwake Fynn",     faction:"pirates",       star:5, atk:185, foc:0,   spd:88, icon:"🏴‍☠️", skill:"Siege Crush"    },
  { id:"h2",  n:"Cutlass Mora",     faction:"pirates",       star:4, atk:155, foc:0,   spd:92, icon:"🗡",  skill:"Eagle Eye"      },
  // Marines
  { id:"h3",  n:"Admiral Stonewall",faction:"marines",       star:5, atk:170, foc:0,   spd:65, icon:"⚓",  skill:"Shield Wall"    },
  { id:"h4",  n:"Sergeant Vael",    faction:"marines",       star:3, atk:120, foc:0,   spd:72, icon:"🪖",  skill:"War Cry"        },
  // Wizards
  { id:"h5",  n:"Solarius Vex",     faction:"bountyhunters", star:5, atk:20,  foc:230, spd:62, icon:"🔮",  skill:"Arcane Tempest" },
  { id:"h6",  n:"Mira Ashveil",     faction:"bountyhunters", star:4, atk:15,  foc:180, spd:70, icon:"✨",  skill:"Mending Light"  },
  // MerFolk
  { id:"h7",  n:"Tidalborn Cael",   faction:"merfolk",       star:5, atk:165, foc:0,   spd:78, icon:"🌊",  skill:"Tidal Wave"     },
  { id:"h8",  n:"Coralspine Nyra",  faction:"merfolk",       star:3, atk:115, foc:0,   spd:68, icon:"🐚",  skill:"Root Bind"      },
  // Orcs
  { id:"h9",  n:"Grimtusk",         faction:"orcs",          star:5, atk:200, foc:0,   spd:60, icon:"⚔️",  skill:"Thornstorm"     },
  { id:"h10", n:"Ashgrip",          faction:"orcs",          star:4, atk:160, foc:0,   spd:70, icon:"🪓",  skill:"Shadow Clone"   },
  // Dragons
  { id:"h11", n:"Emberclaw",        faction:"dragons",       star:5, atk:195, foc:0,   spd:75, icon:"🐉",  skill:"Soul Drain"     },
  { id:"h12", n:"Scaleveil Dusk",   faction:"dragons",       star:3, atk:125, foc:0,   spd:85, icon:"🔥",  skill:"Void Bolt"      },
];

export const SC = s => s===5 ? "#f0c040" : s===4 ? "#a855f7" : "#6b7280";
export const SS = s => "★".repeat(s) + "☆".repeat(5 - s);

export function rollGacha(n, alignFactions) {
  return Array.from({ length: n }, (_, i) => {
    const r = Math.random();
    const star = r < .03 ? 5 : r < .15 ? 4 : 3;
    const base = alignFactions
      ? HDEFS.filter(h => alignFactions.includes(h.faction))
      : HDEFS;
    const pool = base.filter(h => h.star === star);
    const src  = pool.length ? pool : base;
    return { ...src[Math.floor(Math.random() * src.length)], uid:`g${Date.now()}${i}` };
  });
}
