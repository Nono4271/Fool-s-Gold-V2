import { RKEYS, RSS } from "../../constants/map.js";

export default function HUD({ facName, pKeys, rss, gems, setHqOpen, setHqTab, setSelKey, setMode, setScreen }) {
  return (
    <div style={{position:"fixed",top:0,left:0,right:0,zIndex:200,background:"rgba(4,6,10,.96)",borderBottom:"1px solid #1c180e",padding:"5px 10px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:6,flexWrap:"wrap",minHeight:38}}>
      <div style={{display:"flex",alignItems:"center",gap:7}}>
        <span style={{fontFamily:"'Cinzel Decorative',serif",fontSize:11,background:"linear-gradient(135deg,#f0c040,#c03030,#f0c040)",backgroundSize:"200% auto",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",animation:"shimmer 3s linear infinite"}}>RTW</span>
        <span style={{color:"#221800",fontSize:9}}>|</span>
        <span style={{fontFamily:"'Cinzel',serif",fontSize:10,color:"#3daa60"}}>{facName}</span>
        <span style={{color:"#221800",fontSize:9}}>|</span>
        <span style={{fontFamily:"'Cinzel',serif",fontSize:9,color:"#3a4a3a"}}>{pKeys.size} tiles</span>
      </div>

      <div style={{display:"flex",gap:5,flexWrap:"wrap",alignItems:"center"}}>
        {RKEYS.map(k => (
          <div key={k} style={{display:"flex",alignItems:"center",gap:2,padding:"2px 6px",background:RSS[k].bg,border:`1px solid ${RSS[k].col}30`,borderRadius:3,fontSize:10,color:RSS[k].col,fontFamily:"'Cinzel',serif",whiteSpace:"nowrap"}}>
            {RSS[k].icon}{Math.floor(rss[k]).toLocaleString()}
          </div>
        ))}
        <div style={{padding:"2px 6px",background:"rgba(240,192,64,.08)",border:"1px solid rgba(240,192,64,.2)",borderRadius:3,color:"#f0c040",fontFamily:"'Cinzel',serif",fontSize:10,whiteSpace:"nowrap"}}>💎{gems}</div>
      </div>

      <div style={{display:"flex",gap:5}}>
        <button className="btn" onClick={() => { setHqOpen(true); setHqTab("overview"); setSelKey(null); setMode("view"); }}
          style={{padding:"4px 10px",background:"rgba(240,192,64,.07)",border:"1px solid rgba(240,192,64,.2)",color:"#f0c040",fontSize:10}}>🏰 HQ</button>
        <button className="btn" onClick={() => setScreen("gacha")}
          style={{padding:"4px 10px",background:"rgba(120,50,150,.14)",border:"1px solid rgba(153,64,204,.25)",color:"#bb88ee",fontSize:10}}>✦ Summon</button>
      </div>
    </div>
  );
}
