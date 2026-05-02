import { CSS } from "../../constants/css.js";
import { ALIGNMENT, PLAYABLE_FACTIONS } from "../../constants/factions.js";
import { HDEFS, SC, SS } from "../../constants/heroes.js";

export default function GachaScreen({ screen, tiles, gems, pull, showG, gRes, coll, playerAlignment, setScreen }) {
  const aln = ALIGNMENT[playerAlignment];

  return (
    <div style={{width:"100vw",height:"100vh",background:"#0a0c10",overflow:"auto",padding:16}}>
      <style>{CSS}</style>
      <div style={{maxWidth:620,margin:"0 auto"}}>

        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14,flexWrap:"wrap",gap:8}}>
          <div>
            <h2 style={{fontFamily:"'Cinzel Decorative',serif",fontSize:"clamp(13px,4vw,20px)",background:"linear-gradient(135deg,#bb88ee,#8840cc,#bb88ee)",backgroundSize:"200% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:"shimmer 3s linear infinite"}}>✦ HERO SUMMONS</h2>
            <p style={{fontSize:9,color:"#6a5a7a",letterSpacing:".1em",fontFamily:"'Crimson Pro',serif"}}>3% 5★ · 12% 4★ · 85% 3★</p>
            <div style={{marginTop:4,display:"inline-flex",alignItems:"center",gap:4,padding:"2px 8px",background:`${aln.color}15`,border:`1px solid ${aln.color}40`,borderRadius:3}}>
              <span style={{fontSize:11}}>{aln.icon}</span>
              <span style={{fontSize:8,color:aln.color,fontFamily:"'Cinzel',serif",letterSpacing:".08em"}}>{aln.n} pool only</span>
            </div>
          </div>
          <div style={{padding:"4px 10px",background:"rgba(240,192,64,.1)",border:"1px solid rgba(240,192,64,.25)",borderRadius:3,color:"#f0c040",fontFamily:"'Cinzel',serif",fontSize:11}}>💎 {gems}</div>
        </div>

        <div style={{display:"flex",gap:10,marginBottom:18,flexWrap:"wrap"}}>
          {[{n:1,cost:160},{n:10,cost:1400}].map(({n,cost}) => (
            <button key={n} className="btn" onClick={() => pull(n)} disabled={gems < cost}
              style={{flex:1,minWidth:120,padding:"12px 8px",background:gems>=cost?"linear-gradient(135deg,rgba(120,50,150,.3),rgba(120,50,150,.1))":"rgba(255,255,255,.02)",border:`1px solid ${gems>=cost?"#9940cc":"#181818"}`,color:gems>=cost?"#bb88ee":"#2a2a2a",textAlign:"center",fontSize:12}}>
              <div style={{fontSize:15,marginBottom:2}}>{n===1?"✦":"✦✦✦"}</div>
              <div style={{fontWeight:700}}>x{n} Summon</div>
              <div style={{fontSize:9,color:"#9940cc",marginTop:2}}>💎 {cost}</div>
            </button>
          ))}
        </div>

        {showG && gRes.length > 0 && (
          <div style={{marginBottom:18}}>
            <div style={{fontSize:8,color:"#7a6a8a",letterSpacing:".1em",fontFamily:"'Cinzel',serif",marginBottom:7}}>SUMMONED</div>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(96px,1fr))",gap:6}}>
              {gRes.map((h,i) => (
                <div key={h.uid} style={{background:"rgba(255,255,255,.04)",border:`2px solid ${SC(h.star)}`,borderRadius:6,padding:8,textAlign:"center",animation:`popIn .3s ease ${i*.06}s both`,boxShadow:h.star===5?`0 0 14px ${SC(h.star)}55`:"none"}}>
                  <div style={{fontSize:24}}>{h.icon}</div>
                  <div style={{color:SC(h.star),fontSize:8}}>{SS(h.star)}</div>
                  <div style={{fontFamily:"'Cinzel',serif",fontSize:8,fontWeight:700,color:"#e0d0c0",lineHeight:1.3,marginTop:2}}>{h.n}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{marginBottom:14}}>
          <div style={{display:"flex",alignItems:"center",gap:6,marginBottom:10}}>
            <span style={{fontSize:14}}>{aln.icon}</span>
            <span style={{fontFamily:"'Cinzel',serif",fontSize:8,color:aln.color,letterSpacing:".1em"}}>{aln.n.toUpperCase()} COLLECTION</span>
            <span style={{fontSize:8,color:"#5a4a3a",fontFamily:"'Cinzel',serif",marginLeft:"auto"}}>
              {HDEFS.filter(h => aln.factions.includes(h.faction)).filter(h => coll.find(x => x.id===h.id)).length}/
              {HDEFS.filter(h => aln.factions.includes(h.faction)).length}
            </span>
          </div>
          {PLAYABLE_FACTIONS.filter(f => aln.factions.includes(f.key)).map(f => (
            <div key={f.key} style={{marginBottom:10}}>
              <div style={{fontSize:8,color:f.c,fontFamily:"'Cinzel',serif",letterSpacing:".08em",marginBottom:4}}>{f.s} {f.n}</div>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(84px,1fr))",gap:5}}>
                {HDEFS.filter(h => h.faction===f.key).map(h => {
                  const owned = coll.find(x => x.id===h.id);
                  return (
                    <div key={h.id} style={{background:"rgba(255,255,255,.02)",border:`1px solid ${owned?SC(h.star)+"70":"#131318"}`,borderRadius:5,padding:6,textAlign:"center",opacity:owned?1:.28,filter:owned?"none":"grayscale(1)"}}>
                      <div style={{fontSize:20}}>{owned?h.icon:"❓"}</div>
                      <div style={{color:SC(h.star),fontSize:7}}>{SS(h.star)}</div>
                      <div style={{fontFamily:"'Cinzel',serif",fontSize:7,color:"#c0b090",lineHeight:1.3,marginTop:1}}>{owned?h.n:"???"}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <button className="btn" onClick={() => setScreen(Object.keys(tiles).length ? "game" : "title")}
          style={{padding:"8px 16px",background:"none",border:"1px solid #1e1e1e",color:"#444",fontSize:11}}>← Back</button>
      </div>
    </div>
  );
}
