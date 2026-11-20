// وقفة · ويدجت الشاشة الرئيسية (Scriptable)
// الصلاة الجاية، ودلوقتي إيه، والعمل الجاي من جدولك في وقفة.
const SB='https://wlkkleutxulpzuwtvhnn.supabase.co',SBK='sb_publishable_gEfJkkL5K55-rN22u0QxNQ_ZlIc5etZ';
const C={ink:new Color('#1b1b1b'),neon:new Color('#7fdca6'),white:new Color('#ffffff'),dim:new Color('#ffffff',0.55),faint:new Color('#ffffff',0.08),forest:new Color('#1c9151')};
const CITIES={cairo:['القاهرة',30.0444,31.2357],giza:['الجيزة',30.0131,31.2089],alex:['الإسكندرية',31.2001,29.9187],qalyubia:['القليوبية',30.466,31.1848],sharqia:['الشرقية',30.5877,31.502],
 dakahlia:['الدقهلية',31.0409,31.3785],gharbia:['الغربية',30.7865,31.0004],menofia:['المنوفية',30.5526,31.0109],beheira:['البحيرة',31.0341,30.4682],kafr:['كفر الشيخ',31.1107,30.9388],
 damietta:['دمياط',31.4165,31.8133],portsaid:['بورسعيد',31.2653,32.3019],ismailia:['الإسماعيلية',30.5965,32.2715],suez:['السويس',29.9668,32.5498],fayoum:['الفيوم',29.3084,30.8428],
 benisuef:['بني سويف',29.0661,31.0994],minya:['المنيا',28.1099,30.7503],assiut:['أسيوط',27.1783,31.1859],sohag:['سوهاج',26.5591,31.6957],qena:['قنا',26.1551,32.716],luxor:['الأقصر',25.6872,32.6396],
 aswan:['أسوان',24.0889,32.8998],redsea:['البحر الأحمر',27.2579,33.8116],matrouh:['مطروح',31.3543,27.2373],newvalley:['الوادي الجديد',25.439,30.5586],nsinai:['شمال سيناء',31.1313,33.7984],ssinai:['جنوب سيناء',28.2416,33.6222]};
const PR=[['fajr','الفجر'],['dhuhr','الظهر'],['asr','العصر'],['maghrib','المغرب'],['isha','العشاء']];

/* ---------- prayer times (same method as the app: Egyptian General Authority of Survey) ---------- */
const R=Math.PI/180,sn=d=>Math.sin(d*R),cs=d=>Math.cos(d*R),tn=d=>Math.tan(d*R),asn=x=>Math.asin(x)/R,acs=x=>Math.acos(Math.max(-1,Math.min(1,x)))/R,at2=(y,x)=>Math.atan2(y,x)/R,acot=x=>Math.atan(1/x)/R,fix=(a,b)=>{a=a-b*Math.floor(a/b);return a<0?a+b:a};
function julian(y,m,d){if(m<=2){y-=1;m+=12}const A=Math.floor(y/100),B=2-A+Math.floor(A/4);return Math.floor(365.25*(y+4716))+Math.floor(30.6001*(m+1))+d+B-1524.5}
function sunPos(jd){const D=jd-2451545,g=fix(357.529+0.98560028*D,360),q=fix(280.459+0.98564736*D,360),L=fix(q+1.915*sn(g)+0.02*sn(2*g),360),e=23.439-0.00000036*D;const RA=fix(at2(cs(e)*sn(L),cs(L))/15,24);return{decl:asn(sn(e)*sn(L)),eqt:q/15-RA}}
function prayerTimes(date,lat,lng){const jd=julian(date.getFullYear(),date.getMonth()+1,date.getDate())-lng/(15*24),tz=-date.getTimezoneOffset()/60;
  const sp=t=>sunPos(jd+t/24),noon=t=>fix(12-sp(t).eqt,24);
  const ang=(a,t,ccw)=>{const p=sp(t);const T=acs((-sn(a)-sn(p.decl)*sn(lat))/(cs(p.decl)*cs(lat)))/15;return noon(t)+(ccw?-T:T)};
  const asr=t=>{const p=sp(t);return ang(-acot(1+tn(Math.abs(lat-p.decl))),t)};
  let t={fajr:5,sunrise:6,dhuhr:12,asr:13,maghrib:18,isha:18};
  for(let i=0;i<2;i++)t={fajr:ang(19.5,t.fajr,true),sunrise:ang(0.833,t.sunrise,true),dhuhr:noon(t.dhuhr),asr:asr(t.asr),maghrib:ang(0.833,t.maghrib),isha:ang(17.5,t.isha)};
  const out={};for(const k in t)out[k]=(t[k]+tz-lng/15)*60+(k==='dhuhr'?2:0);return out}

/* ---------- data from your Waqfa account ---------- */
const KC='waqfa.widget.',fm=FileManager.local(),cachePath=fm.joinPath(fm.documentsDirectory(),'waqfa-widget-cache.json');
async function call(path,body,token){const r=new Request(SB+path);r.method=body?'POST':'GET';r.headers={apikey:SBK,'Content-Type':'application/json'};if(token)r.headers.Authorization='Bearer '+token;if(body)r.body=JSON.stringify(body);
  const j=await r.loadJSON();if(r.response.statusCode>=300)throw new Error(j.msg||j.error_description||j.message||('HTTP '+r.response.statusCode));return j}
async function session(){const em=Keychain.contains(KC+'email')?Keychain.get(KC+'email'):null;if(!em)return null;
  if(Keychain.contains(KC+'rt')){try{const j=await call('/auth/v1/token?grant_type=refresh_token',{refresh_token:Keychain.get(KC+'rt')});Keychain.set(KC+'rt',j.refresh_token);return j}catch(e){}}
  const j=await call('/auth/v1/token?grant_type=password',{email:em,password:Keychain.get(KC+'pass')});Keychain.set(KC+'rt',j.refresh_token);return j}
async function loadData(){try{const s=await session();if(!s)return {need:true};
    const rows=await call(`/rest/v1/user_data?select=sched:data->sched,settings:data->settings&user_id=eq.${s.user.id}`,null,s.access_token);
    const d=rows&&rows[0]||{};fm.writeString(cachePath,JSON.stringify(d));return d}
  catch(e){if(fm.fileExists(cachePath))return JSON.parse(fm.readString(cachePath));return {err:String(e.message||e)}}}

/* ---------- compute ---------- */
const keyDate=(base,add)=>{const d=new Date(base);d.setDate(d.getDate()+add);d.setHours(12,0,0,0);return d};
const atMin=(day,m)=>{const d=new Date(day);d.setHours(0,0,0,0);return new Date(d.getTime()+Math.round(m)*60000)};
const hm=d=>{const h=d.getHours(),m=d.getMinutes();return `${((h+11)%12)+1}:${String(m).padStart(2,'0')}`};
function compute(data){const st=data.settings||{},now=new Date();
  const loc=st.useLoc&&st.loc?['موقعك',st.loc.lat,st.loc.lng]:(CITIES[st.city]||CITIES.cairo);
  const day=keyDate(now,0),P=prayerTimes(day,loc[1],loc[2]),P2=prayerTimes(keyDate(now,1),loc[1],loc[2]),fri=day.getDay()===5;
  const times=PR.map(([id,n])=>({id,name:id==='dhuhr'&&fri?'الجمعة':n,at:atMin(day,P[id])}));
  let next=times.find(t=>t.at>now);if(!next)next={...times[0],at:atMin(keyDate(now,1),P2.fajr)};
  let cur=null,nxt=null,upcoming=[];const sc=data.sched;
  if(sc&&sc.on!==false&&(sc.items||[]).length){
    const build=(P0,d0,isFri)=>sc.items.map(it=>({name:isFri&&it.link==='dhuhr'?'صلاة الجمعة':it.name,dur:it.dur,at:atMin(d0,it.anchor==='clock'?it.off:P0[it.anchor]+it.off)})).sort((a,b)=>a.at-b.at);
    const L=build(P,day,fri),L2=build(P2,keyDate(now,1),keyDate(now,1).getDay()===5);
    for(const it of L){if(it.at<=now)cur=it;else{nxt=nxt||it}}
    if(cur&&cur.dur&&now>=new Date(cur.at.getTime()+cur.dur*60000))cur=null;
    const all=L.concat(L2).filter(it=>it.at>now);nxt=all[0]||null;upcoming=all.slice(0,5)}
  return {loc:loc[0],times,next,cur,nxt,upcoming,now}}

/* ---------- widget ---------- */
function txt(stack,s,size,color,bold){const t=stack.addText(s);t.font=bold?Font.boldSystemFont(size):Font.systemFont(size);t.textColor=color;t.rightAlignText();t.lineLimit=1;t.minimumScaleFactor=0.7;return t}
function timer(stack,date,size,color){const t=stack.addDate(date);t.applyTimerStyle();t.font=Font.semiboldMonospacedSystemFont(size);t.textColor=color;t.rightAlignText();return t}
function right(parent){const s=parent.addStack();s.layoutHorizontally();s.addSpacer();const inner=s.addStack();inner.layoutVertically();return inner}
function block(parent,label,name,date,big){const v=right(parent);const l=v.addStack();l.addSpacer();txt(l,label,11,C.dim,false);
  const n=v.addStack();n.addSpacer();txt(n,name,big?22:16,C.white,true);
  if(date){const tr=v.addStack();tr.addSpacer();timer(tr,date,big?15:13,C.neon)}}
function build(c,family,msg){const w=new ListWidget();w.backgroundColor=C.ink;w.setPadding(14,16,14,16);
  if(msg){const s=right(w);txt(s,'وقفة',16,C.neon,true);s.addSpacer(6);const m=s.addText(msg);m.font=Font.systemFont(12);m.textColor=C.white;m.rightAlignText();return w}
  const top=w.addStack();top.layoutHorizontally();top.centerAlignContent();
  if(family!=='small'&&c.nxt){const L=top.addStack();L.layoutVertically();
    const a=L.addStack();txt(a,'العمل الجاي',11,C.dim,false);const b=L.addStack();txt(b,c.nxt.name,15,C.white,true);const d=L.addStack();timer(d,c.nxt.at,13,C.neon)}
  top.addSpacer();const Rt=top.addStack();Rt.layoutVertically();
  const e=Rt.addStack();e.addSpacer();txt(e,'الصلاة الجاية',11,C.dim,false);
  const f=Rt.addStack();f.addSpacer();txt(f,`${c.next.name} ${hm(c.next.at)}`,family==='small'?20:22,C.white,true);
  const g=Rt.addStack();g.addSpacer();timer(g,c.next.at,15,C.neon);
  w.addSpacer();
  if(family==='small'){if(c.nxt){const s=right(w);const a=s.addStack();a.addSpacer();txt(a,'العمل الجاي',10,C.dim,false);const b=s.addStack();b.addSpacer();txt(b,c.nxt.name,13,C.white,true)}return w}
  if(c.cur){const s=w.addStack();s.addSpacer();txt(s,`دلوقتي: ${c.cur.name}${c.cur.dur?` لحد ${hm(new Date(c.cur.at.getTime()+c.cur.dur*60000))}`:''}`,12,C.dim,false);w.addSpacer(6)}
  const row=w.addStack();row.layoutHorizontally();row.spacing=5;
  c.times.slice().reverse().forEach(t=>{const isN=t.id===c.next.id&&t.at.getDate()===c.next.at.getDate();const cell=row.addStack();cell.layoutVertically();cell.centerAlignContent();
    cell.backgroundColor=isN?C.neon:C.faint;cell.cornerRadius=10;cell.setPadding(4,6,4,6);cell.size=new Size(0,40);
    const a=cell.addStack();a.addSpacer();const x=a.addText(t.name);x.font=Font.systemFont(10);x.textColor=isN?C.ink:C.dim;a.addSpacer();
    const b=cell.addStack();b.addSpacer();const y=b.addText(hm(t.at));y.font=Font.semiboldSystemFont(12);y.textColor=isN?C.ink:C.white;b.addSpacer()});
  if(family==='large'&&c.upcoming.length){w.addSpacer(12);const h=w.addStack();h.addSpacer();txt(h,'الجاي في جدولك',12,C.dim,false);w.addSpacer(4);
    c.upcoming.forEach(it=>{const r=w.addStack();r.layoutHorizontally();txt(r,hm(it.at),13,C.neon,true);r.addSpacer();txt(r,it.name,14,C.white,false);w.addSpacer(4)})}
  const foot=w.addStack();foot.addSpacer();const fl=foot.addText(`المواقيت على ${c.loc}`);fl.font=Font.systemFont(9);fl.textColor=C.dim;
  return w}

/* ---------- run ---------- */
async function setup(){const a=new Alert();a.title='وقفة';a.message='سجّل بنفس إيميل وباسورد حسابك في وقفة، عشان الويدجت تجيب جدولك.';
  a.addTextField('الإيميل',Keychain.contains(KC+'email')?Keychain.get(KC+'email'):'');a.addSecureTextField('الباسورد','');a.addAction('دخول');a.addCancelAction('إلغاء');
  if(await a.presentAlert()===-1)return false;Keychain.set(KC+'email',a.textFieldValue(0).trim());Keychain.set(KC+'pass',a.textFieldValue(1));if(Keychain.contains(KC+'rt'))Keychain.remove(KC+'rt');
  try{await session();return true}catch(e){const x=new Alert();x.title='مقدرناش ندخل';x.message='اتأكد من الإيميل والباسورد، وجرّب تاني.';x.addAction('تمام');await x.presentAlert();return false}}
if(config.runsInApp){
  if(!Keychain.contains(KC+'email')){if(!await setup()){Script.complete();return}}
  else{const m=new Alert();m.title='وقفة';m.addAction('اعرض الويدجت');m.addAction('غيّر الحساب');m.addCancelAction('خروج');const i=await m.presentAlert();if(i===1)await setup();if(i===-1){Script.complete();return}}
}
const data=await loadData();let wd;
if(data.need)wd=build(null,config.widgetFamily,'افتح تطبيق Scriptable وشغّل سكريبت "وقفة" مرة، وسجّل بحسابك.');
else{const c=compute(data);wd=build(c,config.widgetFamily||'medium');
  const soon=[c.next.at,c.nxt&&c.nxt.at,new Date(Date.now()+15*60000)].filter(Boolean).sort((a,b)=>a-b)[0];wd.refreshAfterDate=new Date(Math.max(soon.getTime()+30000,Date.now()+60000))}
if(config.runsInWidget)Script.setWidget(wd);else await wd.presentMedium();
Script.complete();
