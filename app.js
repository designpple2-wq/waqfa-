
const APP=window.APP||'waqfa';
(()=>{
const KEY='waqfa.v1';
/* ================= icons ================= */
const P={salah:'<path d="M4 20h16M6 20v-8a6 6 0 0 1 12 0v8M12 6V3"/>',dhikr:'<circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 0 0 0 16M8 12h8"/>',fardi:'<path d="M4 5h16v11H9l-5 4z"/>',
 jamaai:'<circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15.5 14.2c2.9.3 5.5 2.6 5.5 5.8"/>',adab:'<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
 nafs:'<path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',ok:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
 gear:'<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>',
 back:'<path d="M9 6l6 6-6 6"/>',fwd:'<path d="M15 6l-6 6 6 6"/>',up:'<path d="M6 15l6-6 6 6"/>',down:'<path d="M6 9l6 6 6-6"/>',map:'<path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z"/><circle cx="12" cy="10" r="2.2"/>',cam:'<path d="M3.5 8.5A1.5 1.5 0 0 1 5 7h2.2l1.6-2.2h6.4L16.8 7H19a1.5 1.5 0 0 1 1.5 1.5v9A1.5 1.5 0 0 1 19 19H5a1.5 1.5 0 0 1-1.5-1.5z"/><circle cx="12" cy="12.8" r="3.4"/>',mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5V21"/>',tag:'<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1.5"/>',pen:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M14 6l4 4"/>',book:'<path d="M12 6.5C10 5 7 4.5 3.5 5v13c3.5-.5 6.5 0 8.5 1.5 2-1.5 5-2 8.5-1.5V5C17 4.5 14 5 12 6.5zM12 6.5v13"/>',trash:'<path d="M4 7h16M9 7V4h6v3M6 7l1 13h10l1-13M10 11v6M14 11v6"/>',plus:'<path d="M12 5v14M5 12h14"/>',spark:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z"/>',stop:'<rect x="7" y="7" width="10" height="10" rx="2.5" fill="currentColor" stroke="none"/>'};
const ico=(n,cls='')=>`<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[n]||''}</svg>`;
/* ================= question bank (from the original app, kept word for word) ================= */
const HEART=['كان غائبًا غالبًا','حاضرًا أحيانًا','حاضرًا غالبًا'];
const Q={
 heart:{id:'heart',label:'حضور القلب',type:'one',opts:HEART},
 khushu:{id:'khushu',label:'الخشوع في الركوع والسجود',type:'one',opts:['شغلني غيره','حاولت','وجدته']},
 understand:{id:'understand',label:'فهم ما أقرأ وأسمع',type:'one',opts:['لم أنتبه','فهمت بعضه','تدبّرت']},
 calm:{id:'calm',label:'الطمأنينة',type:'one',opts:['استعجلت','متوسطة','اطمأننت']},
 qdua:{id:'qdua',label:'الدعاء',type:'one',opts:['دعوت سريعًا','دعوت بحضور','دعوت بتضرّع']},
 meaning:{id:'meaning',label:'الحضور مع المعنى',type:'one',opts:['باللسان فقط','أحيانًا','غالبًا']},
 pace:{id:'pace',label:'التأنّي',type:'one',opts:['بسرعة','متوسط','بتأنٍّ']},
 tadabbur:{id:'tadabbur',label:'التدبّر',type:'one',opts:['قراءة فقط','وقفت عند بعض الآيات','تدبّرت']},
 tajweed:{id:'tajweed',label:'التجويد',type:'one',opts:['لم أنتبه له','انتبهت أحيانًا','اعتنيت به']},
 intent:{id:'intent',label:'تذكّر النية قبل الكلام',type:'one',opts:['نسيت','أحيانًا','غالبًا']},
 gentle:{id:'gentle',label:'الرفق واللين',type:'one',opts:['احتجت أكثر','متوسط','كان حاضرًا']},
 listen:{id:'listen',label:'حسن الاستماع',type:'one',opts:['تكلمت أكثر','متوازن','استمعت جيدًا']},
 focus:{id:'focus',label:'التركيز',type:'one',opts:['تشتّت','متوسط','ركّزت']},
 fahm:{id:'fahm',label:'الفهم',type:'one',opts:['قليل','بعضه','واضح']},
 sintent:{id:'sintent',label:'تذكّر النية لله',type:'one',opts:['نسيت','أحيانًا','تذكّرتها']},
 hide:{id:'hide',label:'إخفاء العمل',type:'one',opts:['حكيته لغيري','لم أقصد شيئًا','أخفيته']},
 joy:{id:'joy',label:'طيب النفس وأنا بخدم',type:'one',opts:['تثاقلت','عادي','بفرح']},
 yaqeen:{id:'yaqeen',label:'اليقين بالإجابة',type:'one',opts:['ضعيف','متوسط','موقن']},
 tadarru:{id:'tadarru',label:'التضرّع',type:'one',opts:['دعوت سريعًا','دعوت بحضور','دعوت بتضرّع']},
 jintent:{id:'jintent',label:'تذكّر النية',type:'one',opts:['نسيت','أحيانًا','غالبًا']},
 jadab:{id:'jadab',label:'الالتزام بالآداب',type:'one',opts:['قصّرت','إلى حدٍّ ما','التزمت']},
 distract:{id:'distract',label:'إيه اللي شغلني؟',type:'many',opts:['الشغل','الأكل','الناس','همّ أو قلق','تعب ونوم','الموبايل']}
};
const KBF=[{id:'hadith',label:'حديث اليوم',type:'text',kb:'حديث',ph:'نص الحديث، ومين رواه'},{id:'ayah',label:'آية اليوم',type:'text',kb:'آية',ph:'الآية، والسورة، وفهمت منها إيه'},{id:'qissa',label:'قصة اليوم',type:'text',kb:'قصة',ph:'القصة باختصار، ومن أي كتاب'}];
const kbArr=v=>Array.isArray(v)?v:(v&&String(v).trim()?[{id:'0',t:String(v)}]:[]);
const hasText=v=>kbArr(v).some(o=>(o.t||'').trim());
const CLOSE=[{id:'quality',label:'أديته زي ما نويت؟',type:'one',opts:['لا','إلى حدٍّ ما','نعم']},{id:'note',label:'إيه اللي ساعدني أو شتّتني؟',type:'text'},{id:'next',label:'خطوة أجرّبها المرة الجاية',type:'text'}];
const cp=o=>JSON.parse(JSON.stringify(o));
const H=(...ids)=>ids.map(i=>cp(Q[i]));
const PERF3=(a,b,c)=>({id:'perf',label:'الأداء',type:'one',opts:[a,b,c]});
const prayer=(id,name,slot,sunnah)=>({id,name,cat:'salah',slot,
 perf:[{id:'perf',label:'الصلاة',type:'one',opts:['في وقتها','قضاء','فاتتني']},
  {id:'place',label:'صليت فين؟',type:'one',opts:['في المسجد','جماعة في البيت','منفرد'],mode:'m',when:[{f:'perf',in:['في وقتها','قضاء']}]},
  {id:'idrak',label:'الإدراك',type:'one',opts:['تكبيرة الإحرام','أدركت الركعة الأولى','مسبوق','فاتتني الجماعة'],when:[{f:'perf',in:['في وقتها']},{f:'place',in:['في المسجد','جماعة في البيت'],orMode:'k'}]},
  {id:'row',label:'الصف',type:'one',opts:['الصف الأول','الصفوف الأولى','متأخر'],when:[{f:'perf',in:['في وقتها']},{f:'place',in:['في المسجد'],orMode:'k'}]},
  {id:'early',label:'التبكير',type:'one',opts:['قبل الأذان أو معه','مع الإقامة','بعد الإقامة'],when:[{f:'perf',in:['في وقتها']},{f:'place',in:['في المسجد'],orMode:'k'}]},
  ...(sunnah?[{id:'sunnah',label:'السنن الرواتب',type:'many',opts:sunnah}]:[])],
 heart:H('heart','khushu','understand','distract'),st:{f:'perf',map:{'في وقتها':'done','قضاء':'part','فاتتني':'miss'}}});
const CATS=[['salah','الصلاة'],['dhikr','الذكر والدعاء'],['fardi','الدعوة والتعليم'],['jamaai','الأعمال الجماعية'],['adab','الآداب وأصول العمل'],['nafs','النفس والمعاملات']];
const ONEOFF=['اتعمل','ما اتعملش'];
const ADAB=[
 ['adab1','نخرج في سبيل الله بأربعة',['النفس','المال','الوقت الحلال','الافتقار إلى الله'],['قصّرت','إلى حدٍّ ما','حاضر بقوة']],
 ['adab2','نلتزم بأربعة',['طاعة خادم الجماعة','العمل الجماعي','آداب المساجد','الصبر والتحمل'],['قصّرت','التزمت غالبًا','التزمت تمامًا']],
 ['adab3','نقيم بالمسجد أربعة أعمال',['الدعوة إلى الله','التعليم والتعلم','العبادات والذكر','خدمة المسلمين'],['قصّرت','إلى حدٍّ ما','أقمته']],
 ['adab4','نقلل من أربعة',['الطعام','المنام','الكلام في غير ذكر الله','وقت قضاء الحاجة'],['زوّدت','معتدل','قلّلت']],
 ['adab5','نمتنع عن أربعة',['الإسراف','الإشراف','استعمال حاجة الغير بدون إذنه','السؤال لغير الله'],['أكتر من مرة','مرة','ولا مرة']],
 ['adab6','لا نتكلم في أربعة',['السياسة','الخلافات الفقهية','أمراض الأمة','الأفكار الأخرى'],['أكتر من مرة','مرة','ولا مرة']]];
const DEFAULT_DEEDS=[
 prayer('fajr','الفجر','fajr',['سنة الفجر']),{...prayer('dhuhr','الظهر','dhuhr',['القبلية','البعدية']),notDays:[5]},
 {id:'jumuah',name:'صلاة الجمعة',cat:'salah',slot:'dhuhr',days:[5],
  perf:[{id:'perf',label:'الصلاة',type:'one',opts:['صليتها','فاتتني']},
   {id:'early',label:'التبكير',type:'one',opts:['بدري قبل الأذان الأول','قبل دخول الخطيب','بعد دخول الخطيب'],when:[{f:'perf',in:['صليتها']}]},
   {id:'prep',label:'التجهّز للجمعة',type:'many',opts:['الغسل','السواك','الطيب','أحسن الثياب','المشي للمسجد'],when:[{f:'perf',in:['صليتها']}]},
   {id:'row',label:'الصف',type:'one',opts:['الصف الأول','الصفوف الأولى','متأخر'],when:[{f:'perf',in:['صليتها']}]},
   {id:'listen',label:'الإنصات للخطبة',type:'one',opts:['انشغلت','أحيانًا','أنصتّ'],when:[{f:'perf',in:['صليتها']}]},
   {id:'sunnah',label:'السنة البعدية',type:'many',opts:['البعدية']}],
  heart:[...H('heart','khushu'),{id:'khutba',label:'أهم حاجة طلعت بيها من الخطبة',type:'text'},cp(Q.distract)],st:{f:'perf',map:{'صليتها':'done','فاتتني':'miss'}}},prayer('asr','العصر','asr'),prayer('maghrib','المغرب','maghrib',['البعدية']),prayer('isha','العشاء','isha',['البعدية']),
 {id:'qiyam',name:'قيام الليل والوتر',cat:'salah',slot:'night',perf:[{id:'n',label:'الركعات',type:'num',unit:'ركعة',goal:11},{id:'parts',label:'فيه إيه',type:'many',opts:['صلاة','قرآن','دعاء','استغفار']}],heart:H('heart','qdua'),st:{num:'n'}},
 {id:'duha',name:'صلاة الضحى',cat:'salah',slot:'duha',perf:[{id:'n',label:'الركعات',type:'num',unit:'ركعة',goal:8}],heart:H('heart','calm'),st:{num:'n'}},
 {id:'kahf',name:'سورة الكهف',cat:'dhikr',slot:'duha',days:[5],perf:[PERF3('قريتها كاملة','بعضها','ما قريتهاش')],heart:H('tadabbur','tajweed'),st:{f:'perf',map:{'قريتها كاملة':'done','بعضها':'part','ما قريتهاش':'miss'}}},
 {id:'salawat',name:'الإكثار من الصلاة على النبي ﷺ',cat:'dhikr',slot:'any',days:[5],perf:[{id:'n',label:'العدد',type:'num',unit:'مرة',goal:300,step:10}],heart:H('meaning','pace'),st:{num:'n'}},
 {id:'ijaba',name:'ساعة الإجابة',cat:'dhikr',slot:'asr',days:[5],perf:[{id:'perf',label:'آخر ساعة بعد العصر',type:'one',opts:['دعوت فيها','دعوت شوية','ما لحقتهاش']},{id:'n',label:'المدة',type:'num',unit:'دقيقة',goal:30,step:5},{id:'whom',label:'دعيت لمين',type:'many',opts:['نفسي','أهلي','الأمة','اللي قابلتهم','الأحباب اللي شكّلناهم']}],heart:H('heart','yaqeen','tadarru'),st:{f:'perf',map:{'دعوت فيها':'done','دعوت شوية':'part','ما لحقتهاش':'miss'}}},
 {id:'am',name:'أذكار الصباح',cat:'dhikr',slot:'fajr',perf:[PERF3('كاملة','بعضها','ما قلتهاش'),{id:'time',label:'الوقت',type:'one',opts:['في وقتها','متأخر']}],heart:H('meaning','pace'),st:{f:'perf',map:{'كاملة':'done','بعضها':'part','ما قلتهاش':'miss'}}},
 {id:'pm',name:'أذكار المساء',cat:'dhikr',slot:'asr',perf:[PERF3('كاملة','بعضها','ما قلتهاش'),{id:'time',label:'الوقت',type:'one',opts:['في وقتها','متأخر']}],heart:H('meaning','pace'),st:{f:'perf',map:{'كاملة':'done','بعضها':'part','ما قلتهاش':'miss'}}},
 {id:'quran',name:'ورد القرآن',cat:'dhikr',slot:'any',perf:[{id:'n',label:'التلاوة',type:'num',unit:'صفحة',goal:20},{id:'hifz',label:'الحفظ',type:'num',unit:'آية',goal:5},{id:'ayah',label:'التدبّر: آية وقفت عندها، وفهمت منها إيه',type:'text'}],heart:H('tadabbur','tajweed'),st:{num:'n'}},
 {id:'adhkar',name:'الأذكار المطلقة',cat:'dhikr',slot:'any',perf:[{id:'c',label:'العدد',type:'counts',items:[{n:'الاستغفار',goal:100},{n:'الصلاة على النبي ﷺ',goal:100},{n:'لا إله إلا الله',goal:100},{n:'سبحان الله وبحمده',goal:100}]}],heart:H('meaning','pace'),st:{counts:'c'}},
 {id:'muqayyad',name:'الأذكار المقيدة',cat:'dhikr',slot:'any',perf:[{id:'parts',label:'قلت إيه منها',type:'many',opts:['بعد الصلوات','النوم','دخول وخروج المسجد','الطعام','الخروج من البيت']}],heart:H('meaning'),st:{many:'parts',goal:4}},
 {id:'dua',name:'الدعاء',cat:'dhikr',slot:'any',link:'duas',perf:[{id:'n',label:'المدة',type:'num',unit:'دقيقة',goal:15,step:5},{id:'when',label:'إمتى',type:'many',opts:['آخر الليل','بين الأذان والإقامة','في السجود','بعد الصلوات','قبل المغرب']},{id:'whom',label:'دعيت لمين',type:'many',opts:['نفسي','أهلي','الأمة','اللي قابلتهم','الأحباب اللي شكّلناهم']}],heart:H('heart','yaqeen','tadarru'),st:{num:'n'}},
 {id:'dawah',name:'الدعوة الانفرادية',cat:'fardi',slot:'any',perf:[{id:'n',label:'كلمت كام واحد',type:'num',unit:'شخص',goal:25},{id:'res',label:'النتيجة',type:'many',opts:['اتكلمنا','وعد ييجي المسجد','جه المسجد','اتشكّل']}],heart:H('intent','gentle','listen'),st:{num:'n'}},
 {id:'taleem',name:'التعليم الانفرادي',cat:'fardi',slot:'dhuhr',perf:[{id:'n',label:'المدة',type:'num',unit:'دقيقة',goal:90,step:10},{id:'book',label:'في إيه',type:'many',opts:['رياض الصالحين','حياة الصحابة','منتخب الأحاديث','فضائل الأعمال','القرآن والتفسير']},{id:'topic',label:'الموضوع',type:'text'},...KBF.map(cp)],link:'kb',heart:H('focus','fahm'),st:{num:'n',orText:['hadith','ayah','qissa']}},
 {id:'shura_d',name:'المشورة اليومية',cat:'jamaai',slot:'fajr',link:'shura',perf:[PERF3('حضرت','اتأخرت','غبت'),{id:'role',label:'مشاركتي',type:'one',opts:['كنت مستمع بس','شاركت برأي','بادرت']}],heart:H('jintent','jadab'),st:{f:'perf',map:{'حضرت':'done','اتأخرت':'part','غبت':'miss'}}},
 {id:'halaqa',name:'حلقة التعليم في المسجد',cat:'jamaai',slot:'duha',perf:[PERF3('حضرتها كلها','جزء منها','غبت')],heart:H('focus','fahm'),st:{f:'perf',map:{'حضرتها كلها':'done','جزء منها':'part','غبت':'miss'}}},
 {id:'halaqa_b',name:'التعليم في البيت',cat:'jamaai',slot:'isha',modes:['m'],perf:[{id:'perf',label:'الأداء',type:'one',opts:ONEOFF}],heart:H('focus'),st:{f:'perf',map:{'اتعمل':'done','ما اتعملش':'miss'}}},
 {id:'ziyarat',name:'الزيارات',cat:'jamaai',slot:'asr',modes:['k'],perf:[{id:'n',label:'زرنا كام واحد',type:'num',unit:'زيارة',goal:2}],heart:H('intent','gentle','listen'),st:{num:'n'}},
 {id:'jawla',name:'الجولة',cat:'jamaai',slot:'maghrib',modes:['k'],perf:[{id:'perf',label:'الأداء',type:'one',opts:['طلعت','ما طلعتش']},{id:'n',label:'كلمنا كام واحد',type:'num',unit:'شخص',goal:10}],heart:H('intent','gentle','jadab'),st:{f:'perf',map:{'طلعت':'done','ما طلعتش':'miss'}}},
 {id:'waqt',name:'الوقت اليومي والزيارات',cat:'jamaai',slot:'asr',modes:['m'],perf:[{id:'n',label:'المدة',type:'num',unit:'دقيقة',goal:150,step:15}],heart:H('intent','gentle'),st:{num:'n'}},
 {id:'khidma',name:'خدمة المسلمين',cat:'jamaai',slot:'any',perf:[{id:'whom',label:'خدمت مين النهارده؟',type:'many',opts:['أهلي','الإخوان','حد في الشارع','المسجد','غير ذلك']},{id:'what',label:'خدمته في إيه؟',type:'text'}],heart:H('sintent','hide','joy'),st:{many:'whom',goal:1}},
 ...[['jawla_m','الجولة المقامية','week'],['jawla_t','الجولة الانتقالية','week'],['shura_w','المشورة الأسبوعية','week'],['shura_a','مشورة المنطقة','week'],['juhd_b','جهد البيت','week'],['khuruj3','الخروج الشهري (٣ أيام)','month']]
   .map(([id,name,period])=>({id,name,cat:'jamaai',slot:'any',modes:['m'],period,perf:[{id:'perf',label:'الأداء',type:'one',opts:ONEOFF}],heart:H('jintent'),st:{f:'perf',map:{'اتعمل':'done','ما اتعملش':'miss'}}})),
 ...ADAB.map(([id,name,items,opts])=>({id,name,cat:'adab',slot:'review',noClose:true,perf:items.map((n,i)=>({id:'p'+i,label:n,type:'one',opts:opts.slice(),cmt:true})),heart:[],st:{avg:true}})),
 {id:'tazkiya',name:'تزكية النفس',cat:'nafs',slot:'review',noClose:true,perf:[{id:'overall',label:'سلامتي من العيوب النهارده',type:'one',opts:['سلمت غالبًا','جاهدت','غلبتني']},{id:'f',label:'وقعت في إيه؟ وكام مرة',type:'faults'},{id:'text',label:'الموقف، وإزاي أصلحه بكرة',type:'text'}],heart:[],st:{f:'overall',map:{'سلمت غالبًا':'done','جاهدت':'part','غلبتني':'miss'}}},
 {id:'muamala',name:'التعامل مع الأهل والعمل',nameK:'التعامل مع الإخوان في الجماعة',cat:'nafs',slot:'review',noClose:true,perf:[{id:'perf',label:'حسن التعامل',type:'one',opts:['أحسنت','متوسط','قصّرت']},{id:'who',label:'مع مين بالذات',type:'many',opts:['الإخوان','الأهل','الشغل','الناس']},{id:'text',label:'ملاحظة',type:'text'}],heart:[],st:{f:'perf',map:{'أحسنت':'done','متوسط':'part','قصّرت':'miss'}}},
 {id:'waqt_e',name:'الوقت والطاقة',cat:'nafs',slot:'review',noClose:true,perf:[{id:'perf',label:'استغلال الوقت',type:'one',opts:['استغليته','متوسط','ضاع كتير']},{id:'focus',label:'التركيز',type:'one',opts:['ركّزت','متوسط','تشتّت']},{id:'drain',label:'إيه اللي استنزفني؟',type:'many',opts:['الموبايل','الكلام الزائد','النوم الزائد','السرحان','الأكل الكتير']},{id:'text',label:'أكثر حاجة ضيّعت وقتي أو شتّتتني',type:'text'}],heart:[],st:{f:'perf',map:{'استغليته':'done','متوسط':'part','ضاع كتير':'miss'}}}
];
const SLOTS=[['night','آخر الليل'],['fajr','الفجر'],['duha','الضحى'],['dhuhr','الظهر'],['asr','العصر'],['maghrib','المغرب'],['isha','العشاء'],['any','طول اليوم']];
const STL={done:'تم',part:'جزئي',miss:'فاتني'};
const DISCLAIMER='ما يظهر هنا وصفٌ لما سجّلته أنت، وليس حكمًا على الإخلاص أو القبول؛ فذلك إلى الله وحده.';
const FGROUPS=[['lisan','أخلاق اللسان'],['qalb','أخلاق القلب والنفس'],['other','أخلاق تانية']];
const VIRT={'الغيبة':'حفظ اللسان','النميمة':'الستر والإصلاح','الجدال':'ترك المراء','الكِبر':'التواضع','العُجب':'رؤية فضل الله','حب الظهور':'الإخلاص','شُحّ النفس':'السخاء','الأنانية':'الإيثار','حب الراحة':'المجاهدة'};
const DRILL={'حفظ اللسان':'لما حد يتكلم عن غايب، دافع عنه مرة','الستر والإصلاح':'قول كلمة طيبة عن حد قدام اللي زعلان منه','ترك المراء':'سيب نقاش واحد وانت محق','التواضع':'ابدأ بالسلام على ٣ أشخاص، واخدم حد بنفسك','رؤية فضل الله':'بعد كل عمل قول: الحمد لله اللي وفقني','الإخلاص':'عمل واحد في السر محدش يعرفه','السخاء':'صدقة صغيرة أو هدية لحد','الإيثار':'قدّم حد عليك في أكل أو مكان','المجاهدة':'اختار أصعب حاجة في الخدمة'};
const vName=f=>f.virtue||f.name;
const FSTG=['مش واخد بالي منه','باخد بالي بعد ما أقع','باخد بالي وأنا بقع','باخد بالي قبلها وبمنع نفسي','تقريبًا اختفى'];
const FMODES=[['focus','تركيز'],['watch','كل أسبوع'],['off','مش دلوقتي']];
const FCURE={'الغيبة':['لما حد يتكلم عن غايب قدامك، دافع عنه أو غيّر الموضوع، واذكر له حسنة.','استغفر له، وادعيله باسمه.'],
 'النميمة':['متنقلش كلام بين اتنين حتى لو صحيح. قول: خلّيها بينكم.','أصلح بين اللي نقلت بينهم.'],
 'الجدال':['لما تحس إنك داخل في نقاش للغلبة، اسكت وسيبها وانت محق، واحتسب ترك المراء.','ابدأ اللي جادلته بالسلام وكلمة طيبة.'],
 'الكِبر':['اقبل الحق والنصيحة من أي حد مهما كان سنه، وابدأ بالسلام، واخدم إخوانك بنفسك.','اعتذر للي تعاليت عليه.'],
 'العُجب':['انسب أي توفيق لربنا، وأخفي عملك، وافتكر تقصيرك وذنوبك.','ركعتين لله في السر، وقول: اللهم لك الحمد.'],
 'حب الظهور':['اعمل كل يوم عمل في السر محدش يعرفه، وسيب الصدارة في الكلام والمكان لغيرك.','عمل خفي زيادة النهارده.'],
 'شُحّ النفس':['اتصدّق كل يوم بحاجة ولو صغيرة، واعطي من حاجة بتحبها.','صدقة على قد اللي بخلت بيه.'],
 'الأنانية':['قدّم غيرك في الأكل والمكان والدور، واسأل نفسك: إيه اللي يريّح أخويا؟','خدمة لحد من الجماعة.'],
 'حب الراحة':['اختار الأصعب في الخدمة عمدًا، وقوم أول ما تصحى، وبلاش نوم بعد الفجر.','عمل شاق زيادة النهارده.']};
const DEF_FAULTS=[['lisan','الغيبة'],['lisan','النميمة'],['lisan','الجدال'],['qalb','الكِبر'],['qalb','العُجب'],['qalb','حب الظهور'],['nafs','شُحّ النفس'],['nafs','الأنانية'],['nafs','حب الراحة']];
const DEF_DUAS=['﴿رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ﴾','﴿رَبِّ اشْرَحْ لِي صَدْرِي ۝ وَيَسِّرْ لِي أَمْرِي﴾','اللهم إني أسألك الهدى والتقى والعفاف والغنى','يا حيّ يا قيوم برحمتك أستغيث، أصلح لي شأني كله، ولا تكلني إلى نفسي طرفة عين'];
const NTAGS=['مفاهيم','من البيانات','رسائل','من الأحباب'];
const METRICS=[['juz','صفحات القرآن'],['qiyam','أيام قيام الليل'],['fajrM','الفجر في المسجد'],['dawah','الدعوة الفردية (شخص)'],['halaqa','أيام حلقة التعليم'],['people','الأحباب']];
const SB='https://wlkkleutxulpzuwtvhnn.supabase.co',SBK='sb_publishable_gEfJkkL5K55-rN22u0QxNQ_ZlIc5etZ',AK='waqfa.auth';
const NSRC=['بيان الفجر','حديثين الظهر','بيان العصر','الترغيب','بيان العشاء','حلقة التعليم','حياة الصحابة','المشورة','زيارة أو جولة','موقف','خاطرة'];
const NTOPICS=['اليقين','الصلاة','العلم والذكر','إكرام المسلمين','الإخلاص','الدعوة والخروج','الأخلاق','النفس'];
const ANCH=[['clock','وقت ثابت'],['fajr','الفجر'],['sunrise','الشروق'],['dhuhr','الظهر'],['asr','العصر'],['maghrib','المغرب'],['isha','العشاء']];
const DEF_SCHED=[['قيام الليل','fajr',-107,107,'qiyam'],['صلاة الفجر','fajr',0,58,'fajr'],['الأذكار','fajr',58,20,'am'],['مشورة الفكر','fajr',78,82,'shura_d'],['وقت انفرادي','fajr',160,93,'taleem'],
 ['الإفطار','fajr',253,30,''],['صلاة الضحى','fajr',283,19,'duha'],['التعليم الجماعي','fajr',302,86,'halaqa'],['صلاة الظهر','dhuhr',0,49,'dhuhr'],['تكملة التعليم','dhuhr',49,60,''],
 ['أدب الطعام','dhuhr',109,11,''],['وجبة الغداء','dhuhr',120,29,''],['وقت انفرادي','dhuhr',149,32,'taleem'],['صلاة العصر','asr',0,41,'asr'],['مذاكرات','asr',41,30,''],['الزيارات','asr',71,37,'ziyarat'],
 ['الأذكار','asr',108,30,'pm'],['صلاة المغرب','maghrib',0,0,'maghrib'],['صلاة العشاء','isha',0,69,'isha'],['أدب الطعام','isha',69,17,''],['وجبة العشاء','isha',86,18,''],['حياة الصحابة','isha',104,55,''],
 ['مذاكرات','isha',159,15,''],['النوم','isha',174,0,'']];
const defSched=()=>DEF_SCHED.map(([name,anchor,off,dur,link])=>({id:Math.random().toString(36).slice(2,9),name,anchor,off,dur,link}));
const FTYPES=[['one','اختيار واحد'],['many','اختيارات متعددة'],['num','عدد'],['text','كتابة']];
const JTYPES={
 d3:{label:'خروج ٣ أيام',days:3,stageKind:'مسجد',stages:['المسجد'],hint:'مسجد واحد غالبًا، وأعمال اليوم والليلة، والمشورة.'},
 d40:{label:'خروج ٤٠ يوم',days:40,stageKind:'محافظة',stages:['المحافظة الأولى','المحافظة الثانية'],hint:'محافظتين، ٢٠ يوم في كل واحدة، ومسجد كل ٣ أيام.'},
 m4:{label:'خروج ٤ شهور',days:120,stageKind:'تشكيل',stages:['التشكيل الأول','التشكيل الثاني','التشكيل الثالث','التشكيل الرابع'],hint:'٤ تشكيلات، كل تشكيل حوالي شهر، ومعاه فترة في المركز.'}};
const STAGE_KINDS=['محافظة','تشكيل','المركز','مسجد'];
const BAYANAT=[['fajr_b','بيان الفجر','fajr'],['hadith','حديثين الظهر','dhuhr'],['asr_b','بيان العصر','asr'],['ilan','الإعلان','maghrib'],['jawla','آداب الجولة','maghrib'],['targheeb','الترغيب','maghrib'],['isha_b','بيان العشاء','isha']];
const AMAL=[['halaqa_t','حلقة التعليم','duha'],['taam','آداب الطعام','dhuhr'],['sahaba','حياة الصحابة','isha'],['nawm','آداب النوم','isha'],['khidma_t','الخدمة','any']];
const PLANS=[['jamaa','إزاي جماعتنا ترتقي'],['hayy','إزاي الحي والمسجد يتحسن لحد ما يبقى مسجد مقامي'],['naqdan','إزاي نخرج جماعة نقدًا']];
const READY=['خلّص اللي في إيدك، وادخل الحمام لو محتاج','توضأ بخشوع، ومن غير إسراف في المية','اتجه للقبلة، وردّد مع المؤذن','ادعُ بعد الأذان، واغتنم الوقت لحد الإقامة'];
const CITIES=[['cairo','القاهرة',30.0444,31.2357],['giza','الجيزة',30.0131,31.2089],['alex','الإسكندرية',31.2001,29.9187],['qalyubia','القليوبية',30.466,31.1848],
 ['sharqia','الشرقية',30.5877,31.502],['dakahlia','الدقهلية',31.0409,31.3785],['gharbia','الغربية',30.7865,31.0004],['menofia','المنوفية',30.5526,31.0109],
 ['beheira','البحيرة',31.0341,30.4682],['kafr','كفر الشيخ',31.1107,30.9388],['damietta','دمياط',31.4165,31.8133],['portsaid','بورسعيد',31.2653,32.3019],
 ['ismailia','الإسماعيلية',30.5965,32.2715],['suez','السويس',29.9668,32.5498],['fayoum','الفيوم',29.3084,30.8428],['benisuef','بني سويف',29.0661,31.0994],
 ['minya','المنيا',28.1099,30.7503],['assiut','أسيوط',27.1783,31.1859],['sohag','سوهاج',26.5591,31.6957],['qena','قنا',26.1551,32.716],['luxor','الأقصر',25.6872,32.6396],
 ['aswan','أسوان',24.0889,32.8998],['redsea','البحر الأحمر',27.2579,33.8116],['matrouh','مطروح',31.3543,27.2373],['newvalley','الوادي الجديد',25.439,30.5586],
 ['nsinai','شمال سيناء',31.1313,33.7984],['ssinai','جنوب سيناء',28.2416,33.6222]];

/* ================= storage ================= */
let db=null;
const uid=p=>p+Date.now().toString(36)+Math.random().toString(36).slice(2,6);
const defDeeds=()=>DEFAULT_DEEDS.map(d=>({...cp(d),on:true}));
function blank(){return {version:4,deeds:defDeeds(),logs:{},reviews:{},plans:{},tags:[],kb:[],cols:[],p40:[],notes:[],journeys:[],people:[],
  faults:DEF_FAULTS.map((f,i)=>({id:'flt'+i,g:f[0]==='nafs'?'qalb':f[0],name:f[1],virtue:VIRT[f[1]]||'',mode:'watch',on:true,detail:'',hist:[],stg:[],rules:[],log:[]})),duas:DEF_DUAS.map((t,i)=>({id:'dua'+i,text:t,k:'mathur'})),
  goals:{d3:[],d40:[],m4:[]},gsecs:[{id:'life',name:'أهداف الحياة',items:[]},{id:'work',name:'أهداف العمل',items:[]}],settings:{dayStart:'03:30',city:'cairo',lastBackup:null,useLoc:false,loc:null},sched:{on:true,items:defSched()},noteCfg:{srcs:[...NSRC],topics:[...NTOPICS]},meta:{dirty:false,syncedAt:null}}}
/* rename or merge a topic/tag everywhere (to='' deletes it) */
function renameTagIn(d,from,to){const fix=arr=>{if(!Array.isArray(arr))return arr;const o=[];arr.forEach(x=>{const y=x===from?to:x;if(y&&!o.includes(y))o.push(y)});return o};
  (d.notes||[]).forEach(n=>{if(n.topics)n.topics=fix(n.topics)});(d.kb||[]).forEach(x=>{if(x.tags)x.tags=fix(x.tags)});
  Object.values(d.logs||{}).forEach(l=>Object.values(l||{}).forEach(e=>{if(!e||!e.a)return;Object.values(e.a).forEach(v=>{if(Array.isArray(v))v.forEach(o=>{if(o&&typeof o==='object'&&o.tags)o.tags=fix(o.tags)})})}));
  d.tags=fix(d.tags||[]);if(d.noteCfg)d.noteCfg.topics=fix(d.noteCfg.topics||[])}
function migrate(d){const b=blank();
  if((d.version||1)<4){d.deeds=b.deeds;d.legacyLogs=d.logs;d.logs={}}
  ['p40','notes','journeys','people'].forEach(k=>d[k]=d[k]||b[k]);['logs','reviews','plans'].forEach(k=>d[k]=d[k]||{});
  d.faults=(d.faults||b.faults).map(f=>{const x={detail:'',hist:[],stg:[],g:'other',on:true,...f};if(x.g==='nafs')x.g='qalb';if(!x.mode)x.mode=x.on===false?'off':'watch';if(x.virtue==null)x.virtue=VIRT[x.name]||'';x.rules=x.rules||[];x.log=x.log||[];if(x.detail&&x.signs==null)x.signs=x.detail;return x});d.tags=d.tags||[];d.kb=d.kb||[];d.cols=d.cols||[];d.duas=d.duas||b.duas;d.goals=Object.assign({d3:[],d40:[],m4:[]},d.goals||{});
  d.gsecs=d.gsecs||b.gsecs;d.settings=Object.assign(b.settings,d.settings||{});d.sched=d.sched||b.sched;d.noteCfg=d.noteCfg||b.noteCfg;d.meta=d.meta||b.meta;normNotes(d);d.removed=d.removed||[];
  DEFAULT_DEEDS.forEach((x,i)=>{if(d.deeds.some(y=>y.id===x.id)||d.removed.includes(x.id))return;const prev=DEFAULT_DEEDS.slice(0,i).reverse().find(p=>d.deeds.some(y=>y.id===p.id));const at=prev?d.deeds.findIndex(y=>y.id===prev.id)+1:d.deeds.length;d.deeds.splice(at,0,{...cp(x),on:true})});
  if(!d.kb1){const tl=d.deeds.find(y=>y.id==='taleem');if(tl){const have=new Set((tl.perf||[]).map(f=>f.id));KBF.forEach(f=>{if(!have.has(f.id))(tl.perf=tl.perf||[]).push(cp(f))});tl.link=tl.link||'kb';if(tl.st&&tl.st.num)tl.st.orText=['hadith','ayah','qissa']}d.kb1=1}
  if(!d.fri){const dh=d.deeds.find(y=>y.id==='dhuhr');if(dh)dh.notDays=[5];d.fri=1}
  if(!d.mg1){renameTagIn(d,'رسائل','مفاهيم');d.mg1=1;d._mg=1}
  d.version=4;return d}
function normNotes(d){if((d.kb||[]).some(x=>x.type==='فائدة')){d.kbr=d.kbr||{};d.kb.filter(x=>x.type==='فائدة').forEach(x=>{if(!d.notes.some(n=>n.id===x.id))d.notes.push({id:x.id,k:x.k,text:x.t,ti:x.ti||'',h:x.h||'',src:x.src||'',topics:x.tags||[]});if(d.kbr['s|'+x.id]){d.kbr['n|'+x.id]=d.kbr['s|'+x.id];delete d.kbr['s|'+x.id]}});d.kb=d.kb.filter(x=>x.type!=='فائدة')}
  d.notes.forEach(n=>{if(!n.topics){n.topics=n.tag?[n.tag]:[];delete n.tag}n.topics.forEach(x=>{if(!d.noteCfg.topics.includes(x))d.noteCfg.topics.push(x)});if(n.src==null)n.src=''})}
function load(){try{const s=localStorage.getItem(KEY);if(s)return migrate(JSON.parse(s))}catch(e){}return blank()}
function saveLocal(){try{localStorage.setItem(KEY,JSON.stringify(db))}catch(e){}}
let pushT=null;
const MKEYS=['notes','p40','journeys','people','duas','faults','deeds','kb','cols','caps'];
function idsOf(d){const S=new Set();MKEYS.forEach(k=>(d[k]||[]).forEach(o=>o&&o.id&&S.add(o.id)));(d.gsecs||[]).forEach(g=>{S.add(g.id);(g.items||[]).forEach(o=>o&&o.id&&S.add(o.id))});Object.values(d.goals||{}).forEach(a=>(a||[]).forEach(o=>o&&o.id&&S.add(o.id)));return S}
let lastIds=null;const markGone=()=>{const now=idsOf(db);if(lastIds){db.gone=db.gone||{};const t=Date.now();lastIds.forEach(id=>{if(!now.has(id))db.gone[id]=t})}lastIds=now};
function save(){db.meta=db.meta||{};markGone();db.meta.dirty=true;db.meta.editAt=Date.now();saveLocal();if(auth){clearTimeout(pushT);pushT=setTimeout(syncNow,2500)}paintCloud()}

/* ================= dates & prayer times ================= */
const pad=n=>String(n).padStart(2,'0');
const keyOf=d=>d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());
function dsMin(){const [h,m]=(db?db.settings.dayStart:'03:30').split(':').map(Number);return h*60+m}
function dayKey(){const now=new Date(),d=new Date(now);if(now.getHours()*60+now.getMinutes()<dsMin())d.setDate(d.getDate()-1);return keyOf(d)}
function fromKey(k){const [y,m,d]=k.split('-').map(Number);return new Date(y,m-1,d,12)}
function shift(k,n){const d=fromKey(k);d.setDate(d.getDate()+n);return keyOf(d)}
function diffDays(a,b){return Math.round((fromKey(b)-fromKey(a))/864e5)}
function fmt(k,o){try{return new Intl.DateTimeFormat('ar-EG-u-nu-latn',o).format(fromKey(k))}catch(e){return k}}
function hijri(k){try{return new Intl.DateTimeFormat('ar-EG-u-ca-islamic-umalqura-nu-latn',{day:'numeric',month:'long'}).format(fromKey(k))}catch(e){return ''}}
const num=(n,s='')=>`<bdi>${Number(n).toLocaleString('en-US',{maximumFractionDigits:1})}${s}</bdi>`;
function hm(min){min=((Math.round(min)%1440)+1440)%1440;const h=Math.floor(min/60),m=min%60;return `<bdi>${((h+11)%12)+1}:${pad(m)}</bdi>`}
function until(d){d=Math.max(0,Math.round(d));const h=Math.floor(d/60),m=d%60;return h?`${num(h)} س ${num(m)} د`:`${num(m)} دقيقة`}
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
const city=()=>db.settings.useLoc&&db.settings.loc?['loc','موقعك',db.settings.loc.lat,db.settings.loc.lng]:(CITIES.find(c=>c[0]===db.settings.city)||CITIES[0]);
const timesFor=k=>{const c=city();return prayerTimes(fromKey(k),c[2],c[3])};

/* ================= model helpers ================= */
db=load();lastIds=idsOf(db);if(db._mg){delete db._mg;setTimeout(()=>save(),800)}
let view={tab:APP==='zad'?'zhome':'today',day:dayKey(),filter:'all',step:0,zad:'goals',ntag:'',nq:'',month:dayKey().slice(0,7),ready:0};
const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const byId=id=>db.deeds.find(x=>x.id===id);
const jOn=k=>db.journeys.find(j=>k>=j.start&&(j.status==='active'||k<=j.end));
const mode=k=>jOn(k)?'k':'m';
const wd=k=>fromKey(k).getDay();
const fits=(d,k)=>(!d.modes||d.modes.includes(mode(k)))&&(!d.days||d.days.includes(wd(k)))&&(!d.notDays||!d.notDays.includes(wd(k)));
const daily=(k=view.day)=>db.deeds.filter(d=>d.on&&!d.period&&fits(d,k));
const timeline=(k=view.day)=>daily(k).filter(d=>d.slot!=='review');
const periodic=(k=view.day)=>db.deeds.filter(d=>d.on&&d.period&&fits(d,k));
const dname=(d,k=view.day)=>d.nameK&&mode(k)==='k'?d.nameK:d.name;
const logOf=k=>db.logs[k]||(db.logs[k]={});
const E=(id,k=view.day)=>{const l=logOf(k);return l[id]||(l[id]={a:{}})};
const ans=(e,f)=>((e||{}).a||{})[f];
const fieldsOf=d=>[...(d.perf||[]),...(d.heart||[]),...(d.noClose?[]:CLOSE)];
const findF=(d,fid)=>fieldsOf(d).find(f=>f.id===fid);
function visible(f,e,k){if(f.mode&&f.mode!==mode(k))return false;
  return (f.when||[]).every(c=>(c.orMode&&mode(k)===c.orMode)||c.in.includes(ans(e,c.f)))}
const score=(f,v)=>{if(f.type!=='one'||v==null)return null;const i=f.opts.indexOf(v);return i<0||f.opts.length<2?null:i/(f.opts.length-1)};
const avg=a=>{a=a.filter(x=>typeof x==='number'&&!isNaN(x));return a.length?a.reduce((s,x)=>s+x,0)/a.length:null};
function status(d,e,k){if(!e)return null;if(e.miss)return 'miss';const st=d.st||{};
  if(st.f){const v=ans(e,st.f);return (st.map||{})[v]||null}
  if(st.num){const f=findF(d,st.num),v=Number(ans(e,st.num)||0);if(!v)return (st.orText||[]).some(x=>hasText(ans(e,x)))?'part':null;return v>=(f&&f.goal||1)?'done':'part'}
  if(st.counts){const f=findF(d,st.counts),c=ans(e,st.counts)||{};const vs=f.items.map(it=>Number(c[it.n]||0));if(!vs.some(Boolean))return null;return f.items.every((it,i)=>vs[i]>=(it.goal||1))?'done':'part'}
  if(st.many){const v=ans(e,st.many)||[];if(!v.length)return null;return v.length>=(st.goal||1)?'done':'part'}
  if(st.avg){const s=avg(d.perf.map(f=>score(f,ans(e,f.id))));if(s==null)return null;return s>=.75?'done':s>=.4?'part':'miss'}
  return null}
const stOf=(d,k)=>status(d,(db.logs[k]||{})[d.id],k);
const W=s=>({done:1,part:.5,miss:0})[s]??0;
function summary(d,e,k){if(!e||!e.a)return '';const out=[];
  for(const f of fieldsOf(d)){const v=e.a[f.id];if(v==null||v===''||!visible(f,e,k))continue;
    if(f.type==='one')out.push(v);else if(f.type==='num'&&v)out.push(`${v} ${f.unit||''}`);else if(f.type==='many'&&v.length&&f.id!=='distract')out.push(v.join('، '));
    else if(f.type==='counts'){const t=Object.values(v).reduce((s,x)=>s+Number(x||0),0);if(t)out.push(`${t} ذكر`)}
    if(out.length>=4)break}
  return out.join(' · ')}
function periodStart(k,p){if(p==='month')return k.slice(0,8)+'01';return shift(k,-((fromKey(k).getDay()+1)%7))}
const activeJ=()=>db.journeys.find(j=>j.status==='active');
const jDay=(j,k=dayKey())=>diffDays(j.start,k)+1;
const plan=k=>db.plans[k]||(db.plans[k]=[]);
const p40done=(it,k)=>(((db.logs[k]||{})._p40)||[]).includes(it.id)||(it.link&&byId(it.link)&&['done','part'].includes(stOf(byId(it.link),k)));
const fPct=f=>f.hist.length?f.hist[f.hist.length-1][1]:null;
function toast(t){document.querySelectorAll('.toast').forEach(x=>x.remove());const el=document.createElement('div');el.className='toast';el.textContent=String(t).replace(/<[^>]*>/g,'');document.body.appendChild(el);setTimeout(()=>el.remove(),1900)}
const buzz=()=>{try{navigator.vibrate&&navigator.vibrate(8)}catch(e){}};

/* ================= metrics ================= */
function metrics(k){const l=db.logs[k]||{},list=daily(k);let w=0,rec=0;list.forEach(d=>{const s=stOf(d,k);if(s)rec++;w+=W(s)});
  const pr=list.filter(d=>d.cat==='salah'&&d.st&&d.st.f==='perf');
  const heart=avg(pr.map(d=>score(findF(d,'heart')||{},ans(l[d.id],'heart'))));
  const quality=avg(list.flatMap(d=>(d.heart||[]).map(f=>score(f,ans(l[d.id],f.id)))));
  const adab=avg(list.filter(d=>d.cat==='adab').flatMap(d=>d.perf.map(f=>score(f,ans(l[d.id],f.id)))));
  const fc=ans(l.tazkiya,'f')||{},faults=Object.values(fc).reduce((s,x)=>s+Number(x||0),0),fwc=ans(l.tazkiya,'fw')||{},wins=Object.values(fwc).reduce((s,x)=>s+Number(x||0),0);
  const pl=db.plans[k]||[],pd=pl.filter(x=>x.done).length;
  return {n:list.length,rec,pct:list.length?w/list.length:0,heart,quality,adab,faults,fc,wins,fwc,plan:pl.length?pd/pl.length:null,pd,pn:pl.length,
    distract:pr.flatMap(d=>ans(l[d.id],'distract')||[])}}
function windowNow(){const k=dayKey(),P=timesFor(k),d=new Date(),now=d.getHours()*60+d.getMinutes(),ds=dsMin();let key;
  if(now>=P.isha-10||now<ds)key='isha';else if(now<P.fajr-10)key='night';else if(now<P.sunrise+15)key='fajr';else if(now<P.dhuhr-10)key='duha';else if(now<P.asr-10)key='dhuhr';else if(now<P.maghrib-10)key='asr';else key='maghrib';
  const order=[['fajr','الفجر'],['dhuhr','الظهر'],['asr','العصر'],['maghrib','المغرب'],['isha','العشاء']];
  let nx=order.find(([id])=>P[id]>now),nt;if(nx)nt=P[nx[0]];else{nx=order[0];nt=P.fajr+1440}
  return {key,P,next:{id:nx[0],name:nx[1],at:nt,in:nt-now}}}

/* ================= shared UI ================= */
const top=(eyebrow,title,extra='')=>`<header class="top rise"><div class="tt"><span class="eyebrow">${eyebrow}</span><h1 class="title">${title}</h1></div>${extra}</header>`;
const gearBtn=`<button class="iconbtn" data-act="settings" aria-label="الإعدادات">${ico('gear')}</button>`;
const backTop=(title,eyebrow='',act='back',extra='')=>`<header class="top rise"><div class="back"><button class="iconbtn" data-act="${act}" aria-label="رجوع">${ico('back')}</button><div class="tt"><span class="eyebrow">${eyebrow}</span><h1 class="title" style="font-size:24px">${title}</h1></div></div>${extra}</header>`;
const badge=s=>s?`<span class="badge ${s}">${STL[s]}</span>`:'<span class="badge">لسه</span>';
const tick=(act,attrs,on)=>`<button class="tick" data-act="${act}" ${attrs} aria-pressed="${!!on}" aria-label="تم">${ico('ok')}</button>`;
const xbtn=(act,attrs,label='امسح')=>`<button class="x" data-act="${act}" ${attrs} aria-label="${label}">${ico('x')}</button>`;
function deedRow(d,k){const e=(db.logs[k]||{})[d.id],s=status(d,e,k),sm=summary(d,e,k);let ex='';
  if(d.period){const ps=periodStart(k,d.period);let when=null;for(let x=ps;x<=k;x=shift(x,1))if(stOf(d,x)==='done')when=x;ex=when?`اتعمل ${d.period==='week'?'الأسبوع ده':'الشهر ده'} يوم ${fmt(when,{weekday:'long'})}`:`لسه ما اتعملش ${d.period==='week'?'الأسبوع ده':'الشهر ده'}`}
  return `<button class="row st-${s||'none'}" data-act="open" data-id="${d.id}"><span class="ic">${ico(d.cat)}</span><span class="t"><b>${esc(dname(d,k))}</b><span>${esc(sm||ex||'اضغط للتسجيل')}</span></span>${badge(s)}</button>`}

/* ================= field rendering ================= */
function fieldHTML(d,f,e,k){if(!visible(f,e,k))return '';const v=ans(e,f.id),A=`data-id="${d.id}" data-f="${f.id}"`;
  let h=`<div class="fld">${f.type!=='counts'?`<span class="lb">${esc(f.label)}</span>`:''}`;
  if(f.type==='one'){const long=f.opts.length>3||f.opts.some(o=>o.length>20);
    h+=`<div class="seg ${long?'long':''}" role="radiogroup">${f.opts.map(o=>`<button role="radio" data-act="one" ${A} data-v="${esc(o)}" aria-pressed="${v===o}">${esc(o)}</button>`).join('')}</div>`;
    if(f.cmt){const c=((e||{}).c||{})[f.id]||'';h+=`<input class="inp" data-act="cmt" ${A} value="${esc(c)}" placeholder="تعليق">`}}
  else if(f.type==='many'){const arr=v||[];h+=`<div class="chips">${f.opts.map(o=>`<button class="chip" data-act="many" ${A} data-v="${esc(o)}" aria-pressed="${arr.includes(o)}">${esc(o)}</button>`).join('')}</div>`}
  else if(f.type==='num'){const n=Number(v||0),st=f.step||1;
    h+=`<div class="stepper"><button class="sb" data-act="inc" ${A} data-n="${-st}" aria-label="أقل">−</button><input type="number" inputmode="numeric" min="0" data-act="numin" ${A} value="${n||''}" placeholder="0"><button class="sb" data-act="inc" ${A} data-n="${st}" aria-label="أكتر">+</button><span class="u">${esc(f.unit||'')}${f.goal?` من ${num(f.goal)}`:''}</span></div>${f.goal?`<div class="meter"><i style="width:${Math.min(100,n/f.goal*100)}%"></i></div>`:''}`}
  else if(f.type==='text'&&f.kb){const arr=kbArr(v),more=f.kb==='حديث'?'تاني':'تانية';
    h+=(arr.length?arr:[{id:'new',t:''}]).map((o,i)=>`${o.id!=='new'&&(o.t||'').trim()?`<input class="inp ti" data-act="kbti" ${A} data-e="${o.id}" value="${esc(o.ti||'')}" placeholder="عنوان يفكّرك بيه">`:''}<div class="row-in" style="align-items:flex-start"><textarea class="inp" data-act="kbtext" ${A} data-e="${o.id}" placeholder="${esc(i?f.kb+' '+more:(f.ph||'اكتب هنا'))}">${esc(o.t||'')}</textarea>${arr.length>1?xbtn('kbdel',`${A} data-e="${o.id}"`):''}</div>${o.id!=='new'&&(o.t||'').trim()?tagRow(o,A,d.id+f.id+o.id):''}`).join('')
      +`<div class="kbt"><button class="link" data-act="kbadd" ${A}>+ ${esc(f.kb)} ${more}</button>${toolsHTML(d.id+f.id,A)}</div>`}
  else if(f.type==='text'){h+=`<textarea class="inp" data-act="text" ${A} placeholder="${esc(f.ph||'اكتب هنا')}">${esc(v||'')}</textarea>`}
  else if(f.type==='counts'){const c=v||{};h+=`<div>${f.items.map(it=>{const n=Number(c[it.n]||0);return `<div class="crow"><span class="n">${esc(it.n)}</span><span class="mini"><button data-act="cinc" ${A} data-k="${esc(it.n)}" data-n="-10">−</button><input type="number" inputmode="numeric" data-act="cnt" ${A} data-k="${esc(it.n)}" value="${n||''}" placeholder="0"><button data-act="cinc" ${A} data-k="${esc(it.n)}" data-n="33">+</button></span><span class="g ${n>=it.goal?'ok':''}">/ ${num(it.goal)}</span></div>`}).join('')}</div><p class="small muted">+ ٣٣  ·  − ١٠</p>`}
  else if(f.type==='faults'){const c=v||{},w=ans(e,'fw')||{},dr=ans(e,'fd')||{},foc=db.faults.filter(x=>x.mode==='focus'),oth=db.faults.filter(x=>x.mode==='watch'&&x.name);
    const ctr=(x,fid,store,lbl)=>{const n=Number(store[x.id]||0);return `<div class="crow"><span class="n">${lbl}</span><span class="mini"><button data-act="finc" data-id="${d.id}" data-f="${fid}" data-k="${x.id}" data-n="-1">−</button><input type="number" inputmode="numeric" data-act="fcnt" data-id="${d.id}" data-f="${fid}" data-k="${x.id}" value="${n||''}" placeholder="0"><button data-act="finc" data-id="${d.id}" data-f="${fid}" data-k="${x.id}" data-n="1">+</button></span><span class="g">مرة</span></div>`};
    h+=foc.length?foc.map(x=>`<div class="fbox"><div class="ch"><b>${esc(vName(x))}</b>${stgDots(fStage(x))}</div>
      ${x.drill?`<button class="drill ${dr[x.id]?'on':''}" data-act="fdrill" data-id="${d.id}" data-k="${x.id}"><i>${dr[x.id]?ico('ok'):''}</i><span><b>تمرين النهارده</b>${esc(x.drill)}</span></button>`:''}
      ${ctr(x,'fw',w,'عملت الخُلق')}${x.name?ctr(x,f.id,c,`غلبني ${esc(x.name)}`):''}</div>`).join('')
      :'<p class="small muted">اختار خُلق تركيز من تزكية.</p>';
    if(oth.length){const open=view.fmore||!foc.length;h+=open?`<span class="lb">${foc.length?'باقي العيوب':'وقعت في إيه؟'}</span><div>${oth.map(x=>ctr(x,f.id,c,esc(x.name))).join('')}</div>`:`<button class="link" data-act="fmore" style="align-self:flex-start">باقي العيوب (${num(oth.length)})</button>`}
    h+=`<p class="fdua">«اللهم اهدني لأحسن الأخلاق، لا يهدي لأحسنها إلا أنت، واصرف عني سيئها، لا يصرف عني سيئها إلا أنت»</p><button class="link" data-act="zad-go" data-v="faults" style="align-self:flex-start">تزكية ←</button>`}
  return h+'</div>'}
function deedBody(d,k){const e=(db.logs[k]||{})[d.id]||{a:{}};
  let h=`<div class="sec">${(d.perf||[]).map(f=>fieldHTML(d,f,e,k)).join('')}${d.st&&!d.st.f&&!d.st.avg?`<button class="missbtn" data-act="miss" data-id="${d.id}">${e.miss?'رجّعها: لسه هسجّل':'ما عملتوش النهارده'}</button>`:''}</div>`;
  if((d.heart||[]).length)h+=`<div class="sec heart"><h3>وقفة القلب</h3>${d.heart.map(f=>fieldHTML(d,f,e,k)).join('')}</div>`;
  if(!d.noClose)h+=`<div class="sec"><h3>بعد العمل</h3>${CLOSE.map(f=>fieldHTML(d,f,e,k)).join('')}</div>`;
  if(d.link==='shura'&&activeJ())h+=`<button class="btn ghost" data-act="go" data-v="shura">افتح المشورة</button>`;
  if(d.link==='kb')h+=`<button class="btn ghost" data-act="zad-go" data-v="kb">علمي ←</button>`;
  if(d.link==='duas')h+=`<button class="btn ghost" data-act="zad-go" data-v="duas">افتح أدعيتي</button>`;
  return h}

/* ================= sheet ================= */
let sheetEl=null,sheetRender=null;
function openSheet(renderFn,opts={}){closeSheet(true);sheetRender=renderFn;const s=document.createElement('div');s.className='scrim';
  s.innerHTML=`<div class="sheet" role="dialog" aria-modal="true"><div class="sh-h"><div class="grab"></div><button class="sh-x" data-act="close-sheet" aria-label="اقفل">${ico('x')}</button><div class="hh"></div></div><div class="sh-b"></div><div class="sh-f"></div></div>`;
  s.addEventListener('click',ev=>{if(ev.target===s)closeSheet()});document.body.appendChild(s);
  const sh=s.querySelector('.sheet');let y0=null,x0=0,dy=0,drag=false;
  sh.addEventListener('touchstart',e=>{const b=sh.querySelector('.sh-b');if(e.target.closest('input[type=range]')){y0=null;return}if(e.target.closest('.sh-h')||(e.target.closest('.sh-b')&&b.scrollTop<=0)){y0=e.touches[0].clientY;x0=e.touches[0].clientX;dy=0;drag=false}else y0=null},{passive:true});
  sh.addEventListener('touchmove',e=>{if(y0==null)return;const d=e.touches[0].clientY-y0,dx=Math.abs(e.touches[0].clientX-x0);if(!drag){if(d>8&&d>dx){drag=true;sh.style.transition='none'}else if(d<-4||dx>8){y0=null;return}else return}
    dy=Math.max(0,d);sh.style.transform=`translateY(${dy}px)`;s.style.background=`rgba(27,27,27,${Math.max(.05,.4-dy/900)})`;if(e.cancelable)e.preventDefault()},{passive:false});
  sh.addEventListener('touchend',()=>{if(!drag){y0=null;return}sh.style.transition='transform .25s var(--ease)';if(dy>110){sh.style.transform='translateY(100%)';setTimeout(()=>closeSheet(),180)}else{sh.style.transform='';s.style.background=''}y0=null;drag=false});document.body.classList.add('lock');sheetEl=s;paintSheet();const b0=s.querySelector('.sh-b');setTimeout(()=>fitTA(b0),60);if(document.fonts)document.fonts.ready.then(()=>fitTA(b0))}
const scrollers=el=>{const L=[];for(let p=el.parentElement;p;p=p.parentElement)if(p.scrollHeight>p.clientHeight+1)L.push([p,p.scrollTop]);const se=document.scrollingElement||document.documentElement;if(se)L.push([se,se.scrollTop]);return L};
const fitTA=(root=document)=>root.querySelectorAll('textarea.inp').forEach(x=>{const S=scrollers(x),h0=x.offsetHeight;x.style.height=h0+'px';x.style.height='0px';const want=Math.max(x.scrollHeight+2,parseFloat(getComputedStyle(x).minHeight)||0);x.style.height=want+'px';S.forEach(([p,t])=>{if(p)p.scrollTop=t});
  if(x===document.activeElement&&want>h0&&x.selectionEnd>=x.value.length-2){const r=x.getBoundingClientRect(),vh=window.visualViewport?window.visualViewport.height:innerHeight,sp=S[0]&&S[0][0];if(sp&&r.bottom>vh-12)sp.scrollTop+=r.bottom-vh+40}});
function paintSheet(keepScroll=true){if(!sheetEl)return;const r=sheetRender();const b=sheetEl.querySelector('.sh-b'),st=b.scrollTop;
  sheetEl.querySelector('.hh').innerHTML=r.head;b.innerHTML=r.body;sheetEl.querySelector('.sh-f').innerHTML=r.foot||'<button class="btn" data-act="close-sheet">تمام</button>';fitTA(b);if(keepScroll)b.scrollTop=st}
function closeSheet(silent){if(sheetEl){sheetEl.remove();sheetEl=null;document.body.classList.remove('lock');if(!silent){render();if(view.kbiBack){const fb=view.kbiBack;view.kbiBack=null;openFault(fb)}else if(view.dhBack){const db2=view.dhBack;view.dhBack=null;openDeedHist(db2)}}}}
function openDeed(id,k=view.day){const d=byId(id);if(!d)return;
  openSheet(()=>{const s=stOf(d,k);return {head:`<div class="ch"><span class="eyebrow">${esc((CATS.find(c=>c[0]===d.cat)||[])[1]||'')}${k!==dayKey()?' · '+fmt(k,{weekday:'long',day:'numeric',month:'long'}):''}</span>${badge(s)}</div><h2 class="title">${esc(dname(d,k))}</h2>`,body:deedBody(d,k)}})}

/* ================= screens ================= */
function render(){
  document.querySelectorAll('nav.tabs [data-tab]').forEach(b=>b.setAttribute('aria-current',b.dataset.tab===view.tab&&!view.sub?'page':'false'));
  const s=view.sub;let h;
  if(s==='review')h=renderReview();else if(s==='khuruj')h=renderKhuruj();else if(s==='shura')h=renderShura();else if(s==='settings')h=renderSettings();else if(s==='custom')h=renderCustom();else if(s==='cat')h=renderCat();else if(s==='sched')h=renderSched();else if(s==='harvest')h=renderHarvest();
  else if(s==='col')h=renderCol();else if(s==='sess')h=renderSess();
  else if(APP==='zad')h=view.tab==='lib'?renderIlm():view.tab==='cols'?renderCols():view.tab==='mem'?renderMem():renderZHome();
  else h=view.tab==='today'?renderToday():view.tab==='progress'?renderProgress():(view.tab==='ilm'||view.tab==='notes')?renderIlm():renderZad();
  $('#app').innerHTML=h;
  document.querySelectorAll('.wz-nav').forEach(x=>{if(view.sub!=='review')x.remove()});
  document.body.classList.toggle('wz',view.sub==='review');
  if(view.sub==='review')renderWzNav();
  if(sheetEl)paintSheet()}
function ring(p){const r=44,c=2*Math.PI*r;return `<div class="ring"><svg viewBox="0 0 104 104"><circle class="bg" cx="52" cy="52" r="${r}"/><circle class="fg" cx="52" cy="52" r="${r}" stroke-dasharray="${c}" stroke-dashoffset="${c*(1-p)}"/></svg><div class="v"><span><b>${num(Math.round(p*100),'%')}</b><br><span>من يومك</span></span></div></div>`}
function planCard(k,title='خطة النهارده',editable=true){const pl=plan(k),d=pl.filter(x=>x.done).length;
  return `<section class="card rise"><div class="ch"><h2>${title}</h2>${pl.length?`<span class="badge ${d===pl.length?'done':''}">${num(d)} من ${num(pl.length)}</span>`:''}</div>
   ${pl.length?`<div>${pl.map((x,i)=>`<div class="check ${x.done?'done':''}">${tick('pl-tog',`data-k="${k}" data-i="${i}"`,x.done)}<div class="t"><span>${esc(x.t)}</span></div>${editable?xbtn('pl-del',`data-k="${k}" data-i="${i}"`):''}</div>`).join('')}</div>`:'<p class="lead">لسه مفيش خطوات.</p>'}
   ${editable?`<div class="row-in"><input class="inp" id="pl-${k}" placeholder="أضف خطوة" enterkeyhint="done"><button class="btn sm" data-act="pl-add" data-k="${k}">أضف</button></div>`:''}</section>`}
function p40Card(k){if(!db.p40.length)return '';const d=db.p40.filter(it=>p40done(it,k)).length;
  return `<section class="card rise"><div class="ch"><h2>خطة الأربعين</h2><span class="hb"><span class="badge ${d===db.p40.length?'done':''}">${num(d)} من ${num(db.p40.length)}</span><button class="link" data-act="p40-edit">تعديل</button></span></div><div class="meter"><i style="width:${d/db.p40.length*100}%"></i></div>
   <div>${db.p40.map(it=>{const ok=p40done(it,k),auto=it.link&&byId(it.link);return `<div class="check ${ok?'done':''}">${tick('p40',`data-id="${it.id}"`,ok)}<div class="t"><span>${esc(it.text)}</span>${auto?`<span class="small muted">بيتعلّم لوحده لما تسجّل ${esc(auto.name)}</span>`:''}</div></div>`}).join('')}</div></section>`}
function renderToday(){
  const k=view.day,today=dayKey(),isT=k===today,m=metrics(k),w=windowNow(),j=activeJ();
  let h=top(`${fmt(k,{weekday:'long',day:'numeric',month:'long'})} · ${esc(hijri(k))}`,isT?'يومك':fmt(k,{weekday:'long'}),`<div class="hb"><button data-act="settings" aria-label="الحفظ أونلاين">${cloudChip()}</button>${gearBtn}</div>`);
  if(!isT)h+=`<div class="notice"><span>بتعرض يوم ${fmt(k,{day:'numeric',month:'long'})}</span><button class="link" data-act="go-today">اليوم</button></div>`;
  if(isT&&!auth)h+=`<div class="notice"><span>بياناتك على الموبايل ده بس. احفظها أونلاين عشان متضيعش.</span><button class="link" data-act="settings">احفظها</button></div>`;
  const lb=db.settings.lastBackup;if(isT&&auth&&0&&Object.keys(db.logs).length>3&&(!lb||diffDays(lb,today)>=7))h+=`<div class="notice"><span>بقالك أسبوع من غير نسخة احتياطية</span><button class="link" data-act="backup">خدها</button></div>`;
  if(isT){const P=w.P;let extra='';
    if(w.next.in<=10){const i=Math.min(view.ready,READY.length);extra+=`<div class="ready"><span>${i<READY.length?`${num(i+1)}. ${READY[i]}`:'جاهز، ربنا يتقبّل.'}</span>${i<READY.length?'<button class="btn sm" data-act="ready">تمام</button>':''}</div>`}
    if(j){const sh=(j.shura||{})[k];if(sh&&sh.assign){const mine=BAYANAT.concat(AMAL).filter(([id])=>sh.assign[id]&&sh.assign[id].mine);if(mine.length)extra+=`<div class="mine">عليك النهارده: <b>${mine.map(x=>x[1]).join('، ')}</b></div>`}}
    h+=`<section class="hero rise">${ring(m.pct)}<div class="np"><span class="eyebrow">الصلاة الجاية</span><b>${esc(w.next.name)} ${hm(w.next.at)}</b><span class="cd">بعد ${until(w.next.in)}</span><span class="small" style="color:rgba(255,255,255,.6)">سجّلت ${num(m.rec)} من ${num(m.n)} عمل</span></div>
     <div class="times">${[['fajr','الفجر'],['dhuhr','الظهر'],['asr','العصر'],['maghrib','المغرب'],['isha','العشاء']].map(([id,n])=>`<div class="${w.next.id===id?'cur':''}">${n}<b>${hm(P[id])}</b></div>`).join('')}</div>${schedHero()}${extra}${locLine()}</section>`}
  else h+=`<section class="hero rise">${ring(m.pct)}<div class="np"><span class="eyebrow">ملخص اليوم</span><b>سجّلت ${num(m.rec)} من ${num(m.n)}</b>${m.heart!=null?`<span class="cd">حضور القلب ${num(Math.round(m.heart*100),'%')}</span>`:''}</div></section>`;
  h+=planCard(k)+reviewCard()+fawaidCard(k)+p40Card(k);
  h+=`<button class="card journey rise" data-act="go" data-v="khuruj" style="text-align:start"><span class="ic">${ico('map')}</span><span class="t"><b>${j?esc(JTYPES[j.type].label):'الخروج'}</b>${j?`<span class="small muted">اليوم ${num(Math.max(1,Math.min(jDay(j),j.days)))} من ${num(j.days)}</span><span class="meter"><i style="width:${Math.min(100,jDay(j)/j.days*100)}%"></i></span>`:'<span class="small muted">ابدأ خروج: ٣ أيام، أو ٤٠ يوم، أو ٤ شهور</span>'}</span>${ico('fwd')}</button>`;
  const cats=CATS.filter(c=>!['adab','nafs'].includes(c[0]));
  h+=`<div class="filters">${[['all','الكل']].concat(cats).map(([id,n])=>`<button class="chip" data-act="filter" data-v="${id}" aria-pressed="${view.filter===id}">${n}</button>`).join('')}</div>`;
  const tl=timeline(k).filter(d=>view.filter==='all'||d.cat===view.filter),P=timesFor(k),tm={fajr:P.fajr,duha:P.sunrise+15,dhuhr:P.dhuhr,asr:P.asr,maghrib:P.maghrib,isha:P.isha};
  SLOTS.forEach(([sid,sn])=>{const list=tl.filter(d=>d.slot===sid);if(!list.length)return;const cur=isT&&w.key===sid;
    h+=`<section class="slot rise"><div class="slot-h"><span>${sn}</span>${cur?'<span class="now">دلوقتي</span>':''}${tm[sid]?`<span class="tm">${hm(tm[sid])}</span>`:''}</div><div class="list">${list.map(d=>deedRow(d,k)).join('')}</div></section>`});
  const per=periodic(k).filter(d=>view.filter==='all'||d.cat===view.filter);
  if(per.length)h+=`<section class="slot rise"><div class="slot-h"><span>أعمال الأسبوع والشهر</span></div><div class="list">${per.map(d=>deedRow(d,k)).join('')}</div></section>`;
  const r=db.reviews[k]||{};
  h+=`<section class="hero rise" style="grid-template-columns:1fr"><div class="np"><span class="eyebrow">قبل النوم</span><b>محاسبة الليلة</b><span class="small" style="color:rgba(255,255,255,.7)">${r.done?'خلّصت محاسبة اليوم ده ✓':'الآداب، وتزكية النفس، والمعاملات، وخطة بكرة'}</span></div><div class="hbtns"><button class="btn" data-act="go" data-v="${r.done?'harvest':'review'}" style="background:var(--neon);color:var(--ink)">${r.done?'حصاد اليوم':'ابدأ المحاسبة'}</button>${r.done?'<button class="link" data-act="go" data-v="review" style="color:rgba(255,255,255,.75)">راجع المحاسبة</button>':''}</div></section>`;
  return h}

function openP40(){openSheet(()=>{const opts=sel=>`<option value="">مش مربوط بعمل</option>${db.deeds.map(x=>`<option value="${x.id}"${sel===x.id?' selected':''}>${esc(x.name)}</option>`).join('')}`;
  return {head:'<span class="eyebrow">بنودك اليومية طول الخروج</span><h2 class="title">خطة الأربعين</h2>',
   body:`${db.p40.length?'':'<p class="lead">لسه مفيش بنود. ضيف أول بند من تحت.</p>'}${db.p40.map((it,i)=>`<div class="ed-f"><div class="row-in"><input class="inp" data-act="p40-text" data-id="${it.id}" value="${esc(it.text)}">
     <button class="x" data-act="p40-mv" data-id="${it.id}" data-n="-1" aria-label="لفوق">${ico('up')}</button><button class="x" data-act="p40-mv" data-id="${it.id}" data-n="1" aria-label="لتحت">${ico('down')}</button>${xbtn('p40-del',`data-id="${it.id}"`)}</div>
     <select class="inp" data-act="p40-link" data-id="${it.id}">${opts(it.link)}</select></div>`).join('')}
    <div class="sec"><h3>بند جديد</h3><input class="inp" id="p40-new" placeholder="مثلًا: ورد رياض الصالحين"><select class="inp" id="p40-newlink">${opts('')}</select><span class="small muted">بيتعلّم لوحده مع العمل.</span><button class="btn" data-act="p40-add">أضف البند</button></div>`}})}
/* ---------- review wizard ---------- */
const STEPS=[['day','مراجعة اليوم'],['adab','الآداب وأصول العمل'],['tazkiya','تزكية النفس'],['nafs','المعاملات والوقت'],['plans','الخطط'],['tomorrow','خطة بكرة'],['close','الختام']];
function renderReview(){const k=view.day,i=view.step,[sid,st]=STEPS[i],m=metrics(k),l=db.logs[k]||{};
  let h=backTop(st,`محاسبة الليلة · ${num(i+1)} من ${num(STEPS.length)}`,'back')+`<div class="wz-bar">${STEPS.map((_,x)=>`<i class="${x<=i?'on':''}"></i>`).join('')}</div>`;
  if(sid==='day'){const tl=timeline(k),miss=tl.filter(d=>!stOf(d,k)||stOf(d,k)==='miss');
    h+=`<div class="stats rise"><div class="stat"><b>${num(Math.round(m.pct*100),'%')}</b><span>من يومك</span></div><div class="stat"><b>${m.heart==null?'–':num(Math.round(m.heart*100),'%')}</b><span>حضور القلب في الصلاة</span></div><div class="stat"><b>${m.quality==null?'–':num(Math.round(m.quality*100),'%')}</b><span>جودة الأعمال</span></div></div>
     <p class="lead">${DISCLAIMER}</p>${miss.length?`<section class="slot"><div class="slot-h"><span>لسه ما سجّلتهاش أو فاتتك (${num(miss.length)})</span></div><div class="list">${miss.map(d=>deedRow(d,k)).join('')}</div></section>`:'<div class="notice"><span>سجّلت كل أعمال اليوم.</span></div>'}`}
  if(sid==='adab')h+=`<p class="lead">كنت فين من كل نقطة؟</p>`+daily(k).filter(d=>d.cat==='adab').map(d=>{const e=l[d.id]||{a:{}};return `<section class="card rise"><div class="ch"><h2>${esc(d.name)}</h2>${badge(status(d,e,k))}</div>${d.perf.map(f=>`<div class="point"><b>${esc(f.label)}</b>${fieldHTML(d,{...f,label:''},e,k).replace('<span class="lb"></span>','')}</div>`).join('')}</section>`}).join('');
  if(sid==='tazkiya'||sid==='nafs'){const ids=sid==='tazkiya'?['tazkiya']:['muamala','waqt_e'];h+=ids.map(byId).filter(d=>d&&d.on).map(d=>`<section class="card rise"><div class="ch"><h2>${esc(dname(d,k))}</h2>${badge(stOf(d,k))}</div>${deedBody(d,k)}</section>`).join('')}
  if(sid==='plans')h+=(plan(k).length?planCard(k,'خطة النهارده: اتنفذ إيه؟',false):'<div class="notice"><span>ما كانش فيه خطة لليوم ده.</span></div>')+p40Card(k);
  if(sid==='tomorrow')h+=`<p class="lead">بتظهرلك الصبح وتعلّم عليها.</p>`+planCard(shift(k,1),'خطة '+fmt(shift(k,1),{weekday:'long'}));
  if(sid==='close'){const r=db.reviews[k]||{};h+=`<section class="card rise"><div class="fld"><span class="lb">حاجة تانية اجتهدت فيها أو قصّرت فيها</span><textarea class="inp" data-act="rv" data-f="more">${esc(r.more||'')}</textarea></div>
    <div class="fld"><span class="lb">حاجة أشكر ربنا عليها النهارده</span><textarea class="inp" data-act="rv" data-f="thanks">${esc(r.thanks||'')}</textarea></div></section><p class="ayah">﴿بَلِ الْإِنسَانُ عَلَىٰ نَفْسِهِ بَصِيرَةٌ﴾</p>`}
  return h+'<div style="height:60px"></div>'}
function renderWzNav(){let n=$('.wz-nav');if(!n){n=document.createElement('div');n.className='wz-nav';document.body.appendChild(n)}
  const i=view.step,last=i===STEPS.length-1;n.innerHTML=`<div>${i>0?'<button class="btn ghost" data-act="wz" data-n="-1">السابق</button>':''}<button class="btn" data-act="${last?'rv-done':'wz'}" data-n="1">${last?'خلّصت المحاسبة':'التالي'}</button></div>`}

/* ---------- journey ---------- */
function jStats(j){const end=j.status==='active'?dayKey():j.end,lastD=shift(j.start,j.days-1),last=end<lastD?end:lastD,n=Math.max(0,diffDays(j.start,last)+1);
  const s={n,qiyam:0,fajrM:0,halaqa:0,dawah:0,juz:0};
  for(let i=0;i<n;i++){const k=shift(j.start,i),l=db.logs[k]||{};const q=byId('qiyam');if(q&&['done','part'].includes(stOf(q,k)))s.qiyam++;
    if(ans(l.fajr,'perf')==='في وقتها'&&(mode(k)==='k'||ans(l.fajr,'place')==='في المسجد'))s.fajrM++;const hq=byId('halaqa');if(hq&&stOf(hq,k)==='done')s.halaqa++;
    s.dawah+=Number(ans(l.dawah,'n')||0);s.juz+=Number(ans(l.quran,'n')||0)}
  return s}
function renderKhuruj(){const j=activeJ();let h=backTop('الخروج','رحلتي');
  if(!j){const sel=view.jtype||'d40';
    h+=`<p class="lead">أعمالك بتتظبط على الخروج لوحدها.</p><div class="list">${Object.entries(JTYPES).map(([id,t])=>`<button class="row" data-act="jtype" data-v="${id}"><span class="t"><b>${t.label}</b><span>${t.hint}</span></span><span class="badge ${sel===id?'done':''}">${sel===id?'مختار':''}</span></button>`).join('')}</div>
     <section class="card"><div class="fld"><span class="lb">تاريخ البداية</span><input class="inp" type="date" id="jstart" value="${dayKey()}"></div><button class="btn block" data-act="jbegin">ابدأ ${JTYPES[sel].label}</button></section>`;
    const old=db.journeys.filter(x=>x.status==='archived');if(old.length)h+=`<section class="card"><h2>خروج سابق</h2>${old.map(o=>`<div class="check"><div class="t"><span>${JTYPES[o.type].label}</span><span class="small muted">من ${fmt(o.start,{day:'numeric',month:'long',year:'numeric'})} · ${num((o.mosques||[]).length)} مسجد</span></div></div>`).join('')}</section>`;return h}
  const t=JTYPES[j.type],d=jDay(j),s=jStats(j),st=j.stages.find(x=>x.id===j.curStage)||j.stages[0],ms=j.mosques||[],cm=ms[ms.length-1];
  h+=`<section class="card"><div class="ch"><h2>${t.label}</h2><span class="badge ink">اليوم ${num(Math.max(1,Math.min(d,j.days)))} من ${num(j.days)}</span></div><div class="meter"><i style="width:${Math.min(100,d/j.days*100)}%"></i></div>
   <div class="fld"><span class="lb">المرحلة الحالية</span><select class="inp" data-act="jstage">${j.stages.map(x=>`<option value="${x.id}"${x.id===st.id?' selected':''}>${esc(x.name)} (${esc(x.kind)})</option>`).join('')}</select></div>
   <div class="row-in"><input class="inp" id="stageName" placeholder="اسم المرحلة"><select class="inp" id="stageKind" style="flex:0 0 110px">${STAGE_KINDS.map(x=>`<option${x===t.stageKind?' selected':''}>${x}</option>`).join('')}</select></div>
   <div class="row-in"><button class="btn ghost sm" data-act="stage-add">أضف مرحلة</button><button class="btn ghost sm" data-act="stage-rename">سمّيها</button></div></section>
   <section class="card"><h2>المسجد</h2>${cm?`<p><b>${esc(cm.name)}</b> <span class="small muted">من ${fmt(cm.start,{weekday:'long',day:'numeric',month:'long'})}</span></p>`:'<p class="lead">لسه ما سجّلتش المسجد.</p>'}
   <div class="row-in"><input class="inp" id="mosqueName" placeholder="اسم المسجد"><button class="btn sm" data-act="mosque-add">${cm?'انتقلنا':'سجّل'}</button></div>${ms.length>1?`<p class="small muted">${ms.map(m=>esc(m.name)).join('، ')}</p>`:''}</section>
   <button class="card journey" data-act="go" data-v="shura" style="text-align:start"><span class="ic">${ico('jamaai')}</span><span class="t"><b>المشورة</b><span class="small muted">تسميع الأحوال، والبنود التلاتة، وتوزيع الأعمال</span></span>${ico('fwd')}</button>
   <section class="card"><h2>الحصيلة لحد دلوقتي</h2><div class="stats"><div class="stat"><b>${num(s.qiyam)}</b><span>ليلة قيام</span></div><div class="stat"><b>${num(s.fajrM)}</b><span>فجر في المسجد</span></div><div class="stat"><b>${num(s.halaqa)}</b><span>حلقة تعليم</span></div><div class="stat"><b>${num(s.dawah)}</b><span>دعوة فردية</span></div><div class="stat"><b>${num(s.juz)}</b><span>صفحة قرآن</span></div><div class="stat"><b>${num(db.people.filter(p=>p.j===j.id).length)}</b><span>من الأحباب</span></div></div></section>`;
  const ppl=db.people.filter(p=>p.j===j.id);if(ppl.length)h+=`<section class="card"><h2>الأحباب</h2>${ppl.slice().reverse().map(p=>`<div class="check"><div class="t"><span>${esc(p.name)}</span><span class="small muted">${esc(p.mosque||'')} · <bdi dir="ltr">${esc(p.phone||'')}</bdi></span></div></div>`).join('')}</section>`;
  h+=`<section class="card"><h2>إنهاء الخروج</h2><p class="lead">الخروج يتأرشف، وكل تسجيلاتك تفضل في التقدّم.</p><button class="btn danger" data-act="jend">${view.endAsk?'متأكد؟ اضغط تاني':'أنهِ الخروج'}</button></section>`;return h}
function shuraOf(j,k){j.shura=j.shura||{};return j.shura[k]||(j.shura[k]={ahwal:{},plans:{},assign:{}})}
function renderShura(){const j=activeJ();if(!j){view.sub='khuruj';return renderKhuruj()}
  const k=view.day,sh=(j.shura||{})[k]||{ahwal:{},plans:{},assign:{}},pv=(j.shura||{})[shift(k,-1)];
  const ta=(p,ph,v)=>`<textarea class="inp" data-act="shura" data-path="${p}" placeholder="${ph}">${esc(v||'')}</textarea>`;
  let h=backTop('المشورة',fmt(k,{weekday:'long',day:'numeric',month:'long'}),'go-khuruj');
  h+=`<section class="card"><h2>١. تسميع الأحوال</h2><div class="fld"><span class="lb">زرنا مين</span>${ta('ahwal.visited','أسماء البيوت أو الأشخاص',sh.ahwal.visited)}</div><div class="fld"><span class="lb">كلمنا مين</span>${ta('ahwal.talked','ومين مستعد لإيه',sh.ahwal.talked)}</div>
   <div class="fld"><span class="lb">أخدنا أرقام مين</span><div class="row-in"><input class="inp" id="pName" placeholder="الاسم"><input class="inp" type="tel" id="pPhone" placeholder="الرقم"></div><button class="btn ghost sm" data-act="person-add" style="align-self:flex-start">أضف للأحباب</button></div>
   <div class="fld"><span class="lb">أحوال تانية</span>${ta('ahwal.other','',sh.ahwal.other)}</div></section>`;
  h+=`<section class="card"><h2>٢. هنعمل إيه النهارده، وإزاي</h2>${PLANS.map(([id,q])=>`<div class="fld"><span class="lb">${q}</span>${pv&&pv.plans&&pv.plans[id]?`<span class="small muted">امبارح: ${esc(pv.plans[id])}</span>`:''}${ta('plans.'+id,'الخطة',sh.plans[id])}</div>`).join('')}</section>`;
  const row=([id,n])=>{const a=sh.assign[id]||{};return `<div class="check"><div class="t"><span>${n}</span></div><input class="inp" data-act="assign" data-v="${id}" value="${esc(a.who||'')}" placeholder="مين؟" style="flex:0 0 120px"><button class="chip" data-act="mine" data-v="${id}" aria-pressed="${!!a.mine}">عليّ</button></div>`};
  return h+`<section class="card"><h2>٣. توزيع الأعمال</h2><p class="lead">اضغط "عليّ" على اللي عليك، فيظهرلك في يومك.</p><span class="eyebrow">البيانات</span><div>${BAYANAT.map(row).join('')}</div><span class="eyebrow">الأعمال</span><div>${AMAL.map(row).join('')}</div></section>`}

/* ---------- progress ---------- */
function spark(vals,max){const h=56,pts=vals.map((v,i)=>v==null?null:[vals.length>1?i/(vals.length-1)*100:50,h-4-(Math.min(v,max)/max)*(h-10)]);
  const segs=[];let c=[];pts.forEach(p=>{if(p)c.push(p);else if(c.length){segs.push(c);c=[]}});if(c.length)segs.push(c);
  return `<svg class="spark" viewBox="0 0 100 ${h}" preserveAspectRatio="none" aria-hidden="true"><line x1="0" x2="100" y1="${h-4}" y2="${h-4}" class="base"/>${segs.map(s=>{const q=s.length>1?s:[s[0],s[0]];return `${s.length>1?`<polygon class="area" points="${q[0][0]},${h-4} ${q.map(p=>p.join(',')).join(' ')} ${q[q.length-1][0]},${h-4}"/>`:''}<polyline points="${q.map(p=>p.join(',')).join(' ')}"/>`}).join('')}</svg>`}
/* ---------- حصاد اليوم ---------- */
function dScore(d,k){const e=(db.logs[k]||{})[d.id],s=stOf(d,k);
  const parts=d.cat==='adab'?d.perf.map(f=>score(f,ans(e,f.id))):[s?W(s):0,...(s&&s!=='miss'?(d.heart||[]).map(f=>score(f,ans(e,f.id))):[])];
  const v=avg(parts);return {s,v:v==null?(s?W(s):0):v}}
function harvest(k){const m=metrics(k),list=daily(k),cats=CATS.map(([c,n])=>{const ds=list.filter(d=>d.cat===c).map(d=>({d,...dScore(d,k)}));return {c,n,ds,v:ds.length?avg(ds.map(x=>x.v)):null}}).filter(x=>x.ds.length);
  return {m,cats}}
const pcs=v=>v==null?'–':Math.round(v*100);
function summaryText(k,H){const {m,cats}=H,y=metrics(shift(k,-1)),S=[];const P=v=>`${Math.round(v*100)}%`;
  let s=`يومك ${P(m.pct)}`;if(y.rec){const d=Math.round((m.pct-y.pct)*100);s+=Math.abs(d)<3?'، قريب من إمبارح':d>0?`، أحسن من إمبارح بـ ${d} نقطة`:`، أقل من إمبارح بـ ${-d} نقطة`}S.push(s+'.');
  const rk=cats.filter(c=>c.v!=null).sort((a,b)=>b.v-a.v);if(rk.length>1&&rk[0].v-rk[rk.length-1].v>.1)S.push(`أقوى حاجة كانت ${rk[0].n} (${P(rk[0].v)})، وأضعف حاجة ${rk[rk.length-1].n} (${P(rk[rk.length-1].v)}).`);
  const miss=cats.flatMap(c=>c.ds).filter(x=>!x.s||x.s==='miss').map(x=>dname(x.d,k));if(miss.length)S.push(`فاتك: ${miss.slice(0,4).join('، ')}${miss.length>4?` و${miss.length-4} كمان`:''}.`);else S.push('سجّلت كل أعمال اليوم.');
  if(m.heart!=null){const c={};m.distract.forEach(x=>c[x]=(c[x]||0)+1);const tp=Object.entries(c).sort((a,b)=>b[1]-a[1])[0];S.push(`حضور قلبك في الصلاة ${P(m.heart)}${tp?`، وأكتر حاجة شغلتك: ${tp[0]}`:''}.`)}
  const mr=n=>`${n} ${n>2&&n<11?'مرات':'مرة'}`;if(m.faults>0||m.wins>0){const tp=Object.entries(m.fc).sort((a,b)=>b[1]-a[1])[0],nm=tp&&Number(tp[1])&&(db.faults.find(f=>f.id===tp[0])||{}).name;S.push([m.faults?`وقعت في العيوب ${mr(m.faults)}${nm?`، أكترها: ${nm}`:''}`:'',m.wins?`انتصرت على نفسك ${mr(m.wins)}`:''].filter(Boolean).join('، و')+'.')}
  if(m.pn)S.push(`نفّذت ${m.pd} من ${m.pn} من خطة النهارده.`);
  return S}
function renderHarvest(){const k=view.day,H=harvest(k),{m,cats}=H,y=metrics(shift(k,-1)),r=db.reviews[k]||{},j=jOn(k);
  const dl=(a,b)=>{if(a==null||b==null||!y.rec)return '';const d=Math.round((a-b)*100);return d===0?'<span class="dl">زي إمبارح</span>':`<span class="dl ${d>0?'up':'dn'}">${d>0?'↑':'↓'} <bdi>${Math.abs(d)}</bdi> عن إمبارح</span>`};
  const st=(v,l,yv)=>`<div class="stat"><b>${v==null?'–':num(Math.round(v*100),'%')}</b><span>${l}</span>${dl(v,yv)}</div>`;
  const cls=v=>v<.5?'lo':v<.8?'md':'hi';
  let h=backTop('حصاد اليوم',fmt(k,{weekday:'long',day:'numeric',month:'long'}));
  h+=`<section class="sum rise"><span class="eyebrow">الخلاصة</span>${summaryText(k,H).map(s=>`<p>${esc(s)}</p>`).join('')}</section>`;
  h+=`<div class="stats s4 rise">${st(m.pct,'من يومك',y.pct)}${st(m.heart,'حضور القلب في الصلاة',y.heart)}${st(m.quality,'جودة الأعمال',y.quality)}${st(m.adab,'الآداب وأصول العمل',y.adab)}</div>`;
  h+=`<section class="card rise"><h2>كل عمل بنسبته</h2><div class="cats">${cats.map(c=>`<div><div class="cat-h"><span>${esc(c.n)}</span><b>${num(pcs(c.v),'%')}</b></div><div class="meter cat-m"><i style="width:${Math.round((c.v||0)*100)}%"></i></div>
     ${c.ds.map(x=>`<div class="drow"><span>${esc(dname(x.d,k))}</span><span class="pc ${cls(x.v)}">${x.s?num(pcs(x.v),'%'):'فاتك'}</span></div>`).join('')}</div>`).join('')}</div></section>`;
  if(j){const n=Math.max(1,Math.min(jDay(j,k),j.days)),ks=Array.from({length:n},(_,i)=>shift(j.start,i)),A=avg(ks.map(x=>{const q=metrics(x);return q.rec?q.pct:null}));
    h+=`<section class="card rise"><div class="ch"><h2>الخروج</h2><span class="badge">اليوم ${num(n)} من ${num(j.days)}</span></div><div class="meter"><i style="width:${n/j.days*100}%"></i></div><p class="small muted">متوسط أيامك من أول الخروج: ${A==null?'–':num(Math.round(A*100),'%')}</p></section>`}
  const tp=plan(shift(k,1));if(tp.length)h+=`<section class="card rise"><h2>خطة بكرة</h2>${tp.map(x=>`<p>• ${esc(x.t)}</p>`).join('')}</section>`;
  if((r.thanks||'').trim())h+=`<section class="card rise"><span class="eyebrow">الحمد لله على</span><p>${esc(r.thanks)}</p></section>`;
  return h+`<p class="ayah">﴿بَلِ الْإِنسَانُ عَلَىٰ نَفْسِهِ بَصِيرَةٌ﴾</p><div style="height:90px"></div>`}
/* ---------- أداء عمل واحد في فترة ---------- */
function openDeedHist(id){view.dhId=id;openSheet(()=>{const d=db.deeds.find(x=>x.id===id);if(!d){closeSheet();return {head:'',body:''}}
  const n=view.dhN||14,td=dayKey(),ks=Array.from({length:n},(_,i)=>shift(td,i-n+1)).filter(k=>fits(d,k)),S=ks.map(k=>({k,...dScore(d,k)})),v=avg(S.map(x=>x.v));
  const cnt={done:0,part:0,miss:0,none:0};S.forEach(x=>cnt[x.s||'none']++);
  const fields=[...(d.perf||[]),...(d.heart||[])].filter(f=>['one','many','num'].includes(f.type));
  const brk=f=>{const vals=ks.map(k=>ans((db.logs[k]||{})[d.id],f.id)).filter(x=>x!=null&&x!==''&&!(Array.isArray(x)&&!x.length));if(!vals.length)return '';
    if(f.type==='num')return `<div class="fld"><span class="lb">${esc(f.label)}</span><span>المتوسط <b><bdi>${Math.round(avg(vals.map(Number))*10)/10}</bdi></b>${f.unit?' '+esc(f.unit):''}</span></div>`;
    const c={};vals.flat().forEach(x=>c[x]=(c[x]||0)+1);const e=Object.entries(c).sort((a,b)=>b[1]-a[1]),mx=e[0][1];
    return `<div class="fld"><span class="lb">${esc(f.label)}</span>${e.map(([o,m])=>`<div class="bar-row"><span>${esc(o)}</span><div class="meter"><i style="width:${m/mx*100}%"></i></div><b>${num(m)}</b></div>`).join('')}</div>`};
  const notes=ks.slice().reverse().map(k=>{const e=(db.logs[k]||{})[d.id];if(!e||!e.a)return '';const tx=[...(d.perf||[]),...(d.heart||[]),...CLOSE].filter(f=>f.type==='text'&&!f.kb).map(f=>ans(e,f.id)).filter(x=>typeof x==='string'&&x.trim());return tx.length?`<div class="lgi"><span class="small muted">${fmt(k,{weekday:'short',day:'numeric',month:'short'})}</span>${tx.map(x=>`<p>${esc(x)}</p>`).join('')}</div>`:''}).join('');
  return {head:`<span class="eyebrow">أداء العمل</span><h2 class="title">${esc(d.name)}</h2>`,
   body:`<div class="chips">${[[7,'أسبوع'],[14,'أسبوعين'],[30,'شهر'],[40,'٤٠']].map(([x,l])=>`<button class="chip" data-act="dh-n" data-v="${x}" aria-pressed="${n===x}">${l}</button>`).join('')}</div>
    <div class="prog"><div><b>${v==null?'–':num(Math.round(v*100),'%')}</b><span>الأداء</span></div><div><b>${num(cnt.done)}</b><span>تم</span></div><div><b>${num(cnt.part)}</b><span>جزئي</span></div><div><b>${num(cnt.miss+cnt.none)}</b><span>فاتني</span></div></div>
    <div class="dstrip">${S.map(x=>`<button class="ds ${x.s||'none'}" data-act="dh-day" data-k="${x.k}" title="${x.k}"><bdi>${Number(x.k.slice(8))}</bdi></button>`).join('')}</div>
    ${fields.map(brk).join('')}
    ${notes?`<section class="fold open"><div class="fold-h"><span>ملاحظاتك</span></div><div class="fold-b">${notes}</div></section>`:''}`,
   foot:'<button class="btn" data-act="close-sheet">تمام</button>'}})}
function renderProgress(){const today=dayKey(),[y,mo]=view.month.split('-').map(Number),first=new Date(y,mo-1,1,12),days=new Date(y,mo,0).getDate(),off=(first.getDay()+1)%7;
  let h=top('التقدّم','تطوري',gearBtn);
  h+=`<section class="card rise"><div class="ch"><button class="iconbtn" data-act="month" data-n="-1" aria-label="الشهر اللي فات">${ico('back')}</button><h2>${new Intl.DateTimeFormat('ar-EG-u-nu-latn',{month:'long',year:'numeric'}).format(first)}</h2><button class="iconbtn" data-act="month" data-n="1" aria-label="الشهر الجاي" style="transform:scaleX(-1)">${ico('back')}</button></div>
   <div class="cal">${['س','ح','ن','ث','ر','خ','ج'].map(x=>`<span class="dn">${x}</span>`).join('')}${'<span></span>'.repeat(off)}${Array.from({length:days},(_,i)=>{const k=`${y}-${pad(mo)}-${pad(i+1)}`,m=k<=today?metrics(k):null,lv=!m||!m.rec?0:m.pct<.25?1:m.pct<.5?2:m.pct<.75?3:4;
     return `<button class="l${lv} ${k===today?'today':''} ${k>today?'fut':''}" data-act="open-day" data-k="${k}" ${k>today?'disabled':''}>${num(i+1)}</button>`}).join('')}</div>
   <p class="small muted">اضغط أي يوم لتفاصيله.</p></section>`;
  const n=view.range||14,ks=Array.from({length:n},(_,i)=>shift(today,i-n+1)),M=ks.map(metrics);
  const ch=(t,vals,max,fmtv,hint)=>{const last=[...vals].reverse().find(v=>v!=null);return `<div class="chart"><div class="ch"><span class="small muted">${t}</span><b>${last==null?'–':fmtv(last)}</b></div>${spark(vals,max)}${hint?`<span class="small muted">${hint}</span>`:''}</div>`};
  const pc=v=>num(Math.round(v*100),'%');
  h+=`<section class="card rise"><div class="ch"><h2>آخر ${num(n)} يوم</h2><div class="chips">${[[7,'أسبوع'],[14,'أسبوعين'],[40,'٤٠']].map(([v,t])=>`<button class="chip" data-act="range" data-v="${v}" aria-pressed="${n===v}">${t}</button>`).join('')}</div></div>
   ${ch('أعمال اليوم',M.map(m=>m.rec?m.pct:null),1,pc)}${ch('حضور القلب في الصلاة',M.map(m=>m.heart),1,pc,'من إجاباتك في وقفة القلب')}${ch('جودة الأعمال',M.map(m=>m.quality),1,pc,'متوسط كل أسئلة وقفة القلب')}
   ${ch('الآداب وأصول العمل',M.map(m=>m.adab),1,pc)}${ch('تنفيذ خطة اليوم',M.map(m=>m.plan),1,pc)}${ch('مرات الوقوع في العيوب',M.map(m=>m.rec?m.faults:null),Math.max(3,...M.map(m=>m.faults)),v=>num(v),'كل ما الخط ينزل، كل ما أحسن')}</section>`;
  {const D=db.deeds.filter(d=>d.on&&!d.period).map(d=>{const v=avg(ks.filter(k=>fits(d,k)).map(k=>dScore(d,k).v));return {d,v}}).filter(x=>x.v!=null);
   h+=`<section class="card rise"><div class="ch"><h2>كل عمل</h2><span class="small muted">آخر <bdi>${n}</bdi> يوم</span></div><div class="list">${D.map(({d,v})=>`<button class="row dh" data-act="dhist" data-id="${d.id}"><span class="t"><b>${esc(d.name)}</b><div class="meter"><i style="width:${Math.round(v*100)}%"></i></div></span><b class="pc ${v<.5?'lo':v<.8?'md':'hi'}">${num(Math.round(v*100),'%')}</b></button>`).join('')}</div></section>`}
  const dist={},fl={};M.forEach(m=>{m.distract.forEach(x=>dist[x]=(dist[x]||0)+1);Object.entries(m.fc).forEach(([id,c])=>fl[id]=(fl[id]||0)+Number(c||0))});
  const bars=(o,nameOf)=>{const e=Object.entries(o).filter(x=>x[1]>0).sort((a,b)=>b[1]-a[1]).slice(0,5),mx=e.length?e[0][1]:1;return e.length?e.map(([k,v])=>`<div class="bar-row"><span>${esc(nameOf(k))}</span><div class="meter"><i style="width:${v/mx*100}%"></i></div><b>${num(v)}</b></div>`).join(''):'<p class="small muted">لسه مفيش بيانات كفاية.</p>'};
  h+=`<section class="card rise"><h2>بقع في إيه؟</h2><div class="insight"><span class="eyebrow">أكتر حاجة بتشغلني في الصلاة</span>${bars(dist,x=>x)}</div><div class="insight"><span class="eyebrow">أكتر عيوب بقع فيها</span>${bars(fl,id=>(db.faults.find(f=>f.id===id)||{name:'عيب اتمسح'}).name)}</div></section>`;
  return h}

/* ---------- notes (طلعت بإيه) ---------- */
const noteMeta=n=>[n.src,...(n.topics||[])].filter(Boolean);
const noteCard=n=>`<button class="ncard" data-act="note-open" data-id="${n.id}"><p>${esc(n.text)}</p><span class="nm">${n.star?'<span class="star">★</span>':''}${noteMeta(n).map(x=>`<span class="badge">${esc(x)}</span>`).join('')}${n.by?`<span class="small muted">— ${esc(n.by)}</span>`:''}</span></button>`;
/* ---------- علمي: الأحاديث والآيات والقصص + الفوايد + التصنيفات ---------- */
/* rich text: bold, highlight and colour, kept as clean HTML next to the plain text */
const RTC=[['#1b1b1b','أسود'],['#5a675e','رمادي'],['#1c9151','أخضر'],['#0a4f2c','أخضر غامق'],['#c8101b','أحمر'],['#b45309','برتقالي'],['#1d4ed8','أزرق'],['#7c3aed','بنفسجي']];
const RTH=[['#fbe7c2','أصفر'],['#d3ecdc','أخضر'],['#fde68a','ذهبي'],['#fecaca','وردي'],['#bfdbfe','أزرق'],['transparent','بدون']];
const RTB=[['undo','↶','تراجع'],['redo','↷','إعادة'],'|',['bold','<b>B</b>','عريض'],['italic','<i>I</i>','مائل'],['underline','<u>U</u>','تحته خط'],['strikeThrough','<s>S</s>','مشطوب'],'|',
  ['pal-c','<span class="a">A</span><i class="bar"></i>','لون الخط'],['pal-h','<span class="hl">ab</span>','تظليل'],['pal-t','Aa','الحجم والعنوان'],'|',
  ['insertUnorderedList','•≡','قائمة'],['insertOrderedList','1≡','قائمة مرقّمة'],['bq','❝','اقتباس'],'|',['justifyRight','⇥','يمين'],['justifyCenter','≡','نص'],['justifyLeft','⇤','شمال'],'|',['removeFormat','✕','بدون تنسيق']];
const rtBar=()=>{const p=view.rtPal;return `<div class="rtw"><div class="rtb">${RTB.map(x=>x==='|'?'<i class="sep"></i>':`<button data-act="rt" data-v="${x[0]}" aria-label="${x[2]}" ${p&&x[0]===p?'aria-pressed="true"':''}>${x[1]}</button>`).join('')}</div>
  ${p==='pal-c'?`<div class="rtp">${RTC.map(([c,n])=>`<button data-act="rt" data-v="fc:${c}" aria-label="${n}" style="background:${c}"></button>`).join('')}</div>`:''}
  ${p==='pal-h'?`<div class="rtp">${RTH.map(([c,n])=>`<button data-act="rt" data-v="hc:${c}" aria-label="${n}" style="background:${c==='transparent'?'var(--white)':c}">${c==='transparent'?'✕':''}</button>`).join('')}</div>`:''}
  ${p==='pal-t'?`<div class="rtp txt">${[['fb:h2','عنوان'],['fb:h3','عنوان فرعي'],['fb:p','عادي'],['fs:2','صغير'],['fs:5','كبير'],['fs:6','أكبر']].map(([v,l])=>`<button data-act="rt" data-v="${v}">${l}</button>`).join('')}</div>`:''}</div>`};
const richBox=(act,o,extra='')=>`${rtBar()}<div class="inp rich" contenteditable="true" data-act="${act}" ${extra}>${o.h?o.h:esc(o.t||'').replace(/\n/g,'<br>')}</div>`;
function cleanHTML(html){const box=document.createElement('div');box.innerHTML=html;const out=document.createElement('div');
  const okC=v=>/^(#[0-9a-f]{3,8}|rgba?\([\d\s.,%]+\)|transparent)$/i.test((v||'').trim());
  const SZ={'x-small':'.8em','small':'.9em','medium':'','large':'1.15em','x-large':'1.3em','xx-large':'1.5em','xxx-large':'1.7em'},FS={'1':'.8em','2':'.9em','3':'','4':'1.15em','5':'1.3em','6':'1.5em','7':'1.7em'};
  const KEEP={b:'b',strong:'b',i:'i',em:'i',u:'u',s:'s',strike:'s',del:'s',h1:'h2',h2:'h2',h3:'h3',h4:'h3',blockquote:'blockquote',ul:'ul',ol:'ol',li:'li',p:'div',div:'div'};
  const walk=(src,dst)=>src.childNodes.forEach(n=>{if(n.nodeType===3){dst.appendChild(document.createTextNode(n.textContent));return}if(n.nodeType!==1)return;
    const tag=n.tagName.toLowerCase();if(tag==='br'){dst.appendChild(document.createElement('br'));return}if(['script','style','img','iframe','object','svg','video','audio','input','button','a'].includes(tag)&&tag!=='a'){return}
    const st=n.style||{},sty={};
    if(okC(st.color)||(tag==='font'&&okC(n.getAttribute('color'))))sty.color=st.color||n.getAttribute('color');
    if(okC(st.backgroundColor)&&st.backgroundColor!=='transparent'&&!/rgba\(0, 0, 0, 0\)/.test(st.backgroundColor))sty.backgroundColor=st.backgroundColor;
    if(/^(bold|[6-9]00)$/.test(st.fontWeight||''))sty.fontWeight='700';if(st.fontStyle==='italic')sty.fontStyle='italic';
    const td=(st.textDecoration||st.textDecorationLine||'');if(/underline/.test(td))sty.textDecoration='underline';if(/line-through/.test(td))sty.textDecoration=(sty.textDecoration?sty.textDecoration+' ':'')+'line-through';
    const fz=SZ[(st.fontSize||'').trim()]??(tag==='font'?FS[n.getAttribute('size')]:undefined);if(fz)sty.fontSize=fz;
    const al=(st.textAlign||n.getAttribute('align')||'').trim();
    let el;if(KEEP[tag])el=document.createElement(KEEP[tag]);else if(Object.keys(sty).length)el=document.createElement('span');else{walk(n,dst);return}
    Object.assign(el.style,sty);if(['center','left','right','justify'].includes(al)&&['div','h2','h3','blockquote','li'].includes(el.tagName.toLowerCase()))el.style.textAlign=al;
    walk(n,el);dst.appendChild(el)});
  walk(box,out);return out.innerHTML.replace(/(<br>)+$/,'')}
let rtRange=null,rtT=0;document.addEventListener('selectionchange',()=>{const s=getSelection();if(s.rangeCount&&s.anchorNode&&s.anchorNode.parentElement&&s.anchorNode.parentElement.closest('.rich'))rtRange=s.getRangeAt(0).cloneRange()});
document.addEventListener('mousedown',e=>{if(e.target.closest('.rtw'))e.preventDefault()});
function rtApply(v){const box=document.querySelector('.rich');if(!box)return;
  if(v.startsWith('pal-')){view.rtPal=view.rtPal===v?'':v;const w=document.querySelector('.rtw');if(w)w.outerHTML=rtBar();return}
  box.focus();const s=getSelection();if(rtRange){s.removeAllRanges();s.addRange(rtRange)}
  try{document.execCommand('styleWithCSS',false,true)}catch(e){}
  const [k,arg]=v.split(':');
  if(k==='fc')document.execCommand('foreColor',false,arg);
  else if(k==='hc')document.execCommand('hiliteColor',false,arg);
  else if(k==='fb')document.execCommand('formatBlock',false,arg==='p'?'div':arg);
  else if(k==='fs'){try{document.execCommand('styleWithCSS',false,false)}catch(e){}document.execCommand('fontSize',false,arg)}
  else if(k==='bq'){const cur=s.anchorNode&&s.anchorNode.parentElement&&s.anchorNode.parentElement.closest('blockquote');document.execCommand('formatBlock',false,cur?'div':'blockquote')}
  else if(k==='removeFormat'){document.execCommand('removeFormat');document.execCommand('hiliteColor',false,'transparent');document.execCommand('formatBlock',false,'div')}
  else document.execCommand(k);
  if(k==='fc'||k==='hc'||k==='fb'||k==='fs'){view.rtPal='';const w=document.querySelector('.rtw');if(w)w.outerHTML=rtBar()}
  box.dispatchEvent(new Event('input',{bubbles:true}))}
const richView=x=>x.h?x.h:esc(x.text||x.t||'');
const kbCard=x=>`<button class="ncard" data-act="kb-open" ${kbAttr(x)}><span class="nm"><span class="badge done">${esc(x.type)}</span><span class="small muted">${x.by?esc(x.by)+' · ':''}${kbNext(x)}</span></span>${x.ti?`<b class="kti">${esc(x.ti)}</b>`:''}<p>${esc(x.text)}</p>${x.tags.length?`<span class="tagrow">${x.tags.map(s=>`<span class="tg">${esc(s)}</span>`).join('')}</span>`:''}</button>`;
function allTags(){const kb=kbItems(),m=new Map();const add=(s,key)=>{if(!s)return;const o=m.get(s)||{kb:0,notes:0};if(key)o[key]++;m.set(s,o)};
  (db.tags||[]).forEach(s=>add(s));(db.noteCfg.topics||[]).forEach(s=>add(s));kb.forEach(x=>x.tags.forEach(s=>add(s,'kb')));db.notes.forEach(n=>(n.topics||[]).forEach(s=>add(s,'notes')));
  return [...m].map(([s,o])=>({s,...o})).sort((a,b)=>(b.kb+b.notes)-(a.kb+a.notes))}
function renderTags(){const T=allTags();
  if(view.itag){const s=view.itag,kb=kbItems().filter(x=>x.tags.includes(s)),nt=db.notes.filter(n=>(n.topics||[]).includes(s)).slice().reverse();
    return `<div class="ch"><h2 class="title" style="font-size:24px">${esc(s)}</h2><button class="link" data-act="itag" data-v="">الكل</button></div>
     ${kb.length?`<section class="slot"><div class="slot-h"><span>أحاديث وآيات وقصص · ${num(kb.length)}</span></div><div class="ncards">${kb.map(kbCard).join('')}</div></section>`:''}
     ${nt.length?`<section class="slot"><div class="slot-h"><span>فوايد · ${num(nt.length)}</span></div><div class="ncards">${nt.map(noteCard).join('')}</div></section>`:''}
     ${!kb.length&&!nt.length?'<p class="empty">لسه مفيش حاجة في التصنيف ده.</p>':''}`}
  return `<div class="ch"><p class="lead" style="flex:1">اختار تصنيف، يطلعلك كل اللي كتبته فيه.</p><button class="btn ghost sm" data-act="tagmgr">تعديل</button></div>
   ${T.length?`<div class="tgrid">${T.map(o=>`<button class="tcell" data-act="itag" data-v="${esc(o.s)}"><b>${esc(o.s)}</b><span class="small muted">${o.kb+o.notes?num(o.kb+o.notes):'فاضي'}</span></button>`).join('')}</div>`:'<p class="empty">لسه مفيش تصنيفات.</p>'}`}
/* ================= زاد ================= */
function kbRateOnly(key,q2){return srsRate(key,q2);const today=dayKey(),r=Object.assign({box:0,reps:0},(db.kbr=db.kbr||{})[key]);
  if(q2===0){r.box=1;r.due=kbAdd(today,1)}else if(q2===1){r.box=Math.max(1,r.box);r.due=kbAdd(today,Math.max(1,Math.round(KB_INT[r.box]/2)))}else{r.box=Math.min(7,r.box+1);r.due=kbAdd(today,KB_INT[r.box])}
  r.last=today;r.reps=(r.reps||0)+1;db.kbr[key]=r;buzz();save()}
function memStats(){const all=kbItems(),R2=db.kbr||{},td=dayKey();let mast=0,learn=0,neu=0,due=0;
  all.forEach(x=>{const r=R2[kbKey(x)];if(!r||!r.reps)neu++;else if(r.box>=4)mast++;else learn++;if(r&&r.due&&r.due<=td)due++});
  let streak=0;for(let k=td;streak<400;k=shift(k,-1)){const d=(db.kbDay||{})[k];if(d&&Object.keys(d.done||{}).length)streak++;else if(k!==td)break;else{}if(k<'2020')break}
  return {all,mast,learn,neu,due,streak}}
const colOf=k=>{return kbItems().find(x=>kbKey(x)===k)};
const kbAttr=x=>x.nid?`data-n="${x.nid}"`:x.cid?`data-c="${x.cid}"`:x.sid?`data-s="${x.sid}"`:`data-k="${x.k}" data-id="${x.id}" data-f="${x.f}" data-e="${x.eid}"`;
function sessQueue(only){const td=dayKey(),R2=db.kbr||{},all=only?only:kbItems();
  const due=all.filter(x=>{const r=R2[kbKey(x)];return r&&r.reps&&r.due<=td}).sort((a,b)=>R2[kbKey(a)].due.localeCompare(R2[kbKey(b)].due));
  const dd=(db.kbDay||{})[td]||{},newDone=Object.keys(dd.done||{}).filter(k=>{const r=R2[k];return r&&r.reps===1&&r.last===td}).length;
  const lim=only?999:Math.max(0,(db.settings.zadNew??5)-newDone),neu=all.filter(x=>!(R2[kbKey(x)]||{}).reps).slice().reverse().slice(0,lim);
  return {due,neu,q:[...due,...neu].map(kbKey)}}
function startSess(only,label){const Q=sessQueue(only);if(!Q.q.length){toast(only?'المجموعة فاضية':'مفيش مراجعة دلوقتي. ممتاز');return}
  view.sess={q:Q.q,i:0,open:false,t0:Date.now(),min:view.sessMin??15,stats:{n:0,ok:0},again:{},label:label||''};view.sub='sess';render();scrollTo(0,0)}
function renderSess(){const S=view.sess;if(!S){view.sub=null;return renderZHome()}const map=new Map(kbItems().map(x=>[kbKey(x),x]));
  const el=Math.floor((Date.now()-S.t0)/60000),over=S.min&&el>=S.min;
  if(S.i>=S.q.length||S.done){const pct=S.stats.n?Math.round(S.stats.ok/S.stats.n*100):0;
    return backTop('خلّصت الجلسة','مراجعة','sess-end')+`<section class="card rise sess-end"><div class="prog"><div><b>${num(S.stats.n)}</b><span>راجعت</span></div><div><b>${num(pct,'%')}</b><span>افتكرت</span></div><div><b>${num(Math.max(1,el))}</b><span>دقيقة</span></div></div><p class="lead" style="text-align:center">${pct>=80?'ما شاء الله، حفظك قوي':'كمّل، التكرار هو اللي بيثبّت'}</p></section>
     <button class="btn block rise" data-act="sess-end">تمام</button>${sessQueue().q.length?`<button class="link rise" data-act="sess-go" style="align-self:center">كمّل مراجعة</button>`:''}`}
  const key=S.q[S.i],x=map.get(key);if(!x){S.i++;return renderSess()}const r=(db.kbr||{})[key],isNew=!r||!r.reps;
  const words=x.text.split(/\s+/),hint=words.slice(0,Math.min(8,Math.ceil(words.length/4))).join(' ');
  const nx=[0,1,2,3].map(q=>ivLabel(srsNext(r,q).ivl));
  return `<header class="sess-top rise"><button class="iconbtn" data-act="sess-end" aria-label="إنهاء">${ico('x')}</button><div class="meter"><i style="width:${Math.round(S.i/S.q.length*100)}%"></i></div><span class="small muted"><bdi>${S.i+1}</bdi> من <bdi>${S.q.length}</bdi>${S.min?` · ${ico('clock')}<bdi>${el}</bdi> من <bdi>${S.min}</bdi> دقيقة`:''}</span></header>
   ${over?'<p class="note-c">خلص الوقت اللي حددته. تقدر تكمّل أو تنهي.</p>':''}
   <section class="card sess-card rise"><div class="ch"><span class="badge ${isNew?'':'done'}">${isNew?'جديد':esc(x.type)}</span>${x.tags.length?`<span class="small muted">${esc(x.tags.slice(0,2).join(' · '))}</span>`:''}</div>
    ${x.ti?`<h2 class="sess-ti">${esc(x.ti)}</h2>`:''}${S.open?`<div class="rv sess-txt">${richView(x)}</div>${x.ti?'':`<input class="inp" data-act="sess-ti" data-key="${esc(key)}" placeholder="حط عنوان يفكّرك بيه المرة الجاية">`}`:x.ti?`<p class="small muted">افتكر النص كله، وبعدين اكشف.</p>`:`<p class="sess-hint">${esc(hint)} …</p><p class="small muted">افتكره كله، وبعدين اكشف.</p>`}</section>
   ${S.open?`<div class="rate4 rise">${[['نسيت',0],['صعب',1],['كويس',2],['سهل',3]].map(([l,q])=>`<button data-act="sess-rate" data-v="${q}" class="q${q}"><b>${l}</b><span>${nx[q]}</span></button>`).join('')}</div>`
     :`<button class="btn block rise" data-act="sess-open">اكشف</button>`}`}
function zadReviewCard(){const Q=sessQueue(),m=view.sessMin??15;
  return `<section class="card rv-hero rise"><span class="eyebrow">مراجعة اليوم</span><div class="ch"><h2 style="font-size:28px"><bdi>${Q.due.length}</bdi> <small>مستحق</small> · <bdi>${Q.neu.length}</bdi> <small>جديد</small></h2></div>
   <div class="chips">${[[10,'١٠ د'],[15,'١٥ د'],[30,'٣٠ د'],[0,'لحد ما أخلّص']].map(([v,l])=>`<button class="chip" data-act="sess-min" data-v="${v}" aria-pressed="${m===v}">${l}</button>`).join('')}</div>
   <button class="btn block" data-act="sess-go" ${Q.q.length?'':'disabled'}>${Q.q.length?'ابدأ المراجعة':'خلّصت النهارده ✓'}</button></section>`}
function renderZHome(){const S=memStats(),recent=S.all.slice(0,4);
  return top(fmt(dayKey(),{weekday:'long',day:'numeric',month:'long'}),'زاد',gearBtn)+
  `<section class="prog card rise"><div><b>${num(S.all.length)}</b><span>في المكتبة</span></div><div><b>${num(S.mast)}</b><span>محفوظ</span></div><div><b>${num(S.streak)}</b><span>يوم مراجعة</span></div></section>`
  +zadReviewCard()
  +`<button class="card journey rise" data-act="quiz" data-key="" style="text-align:start"><span class="ic">${ico('spark')}</span><span class="t"><b>اختبار سريع</b><span class="small muted">حديث بكلمات مخفية، تكمّلها من حفظك</span></span>${ico('fwd')}</button>`
  +(recent.length?`<section class="slot rise"><div class="slot-h"><span>أضيف مؤخرًا</span><button class="link" data-tab="lib">الكل</button></div><div class="ncards">${recent.map(kbCard).join('')}</div></section>`:`<p class="empty">ابدأ بإضافة أول حديث من زرار +</p>`)}
function renderCols(){const C=db.cols||[];
  return top(`${num(C.length)} مجموعة`,'المجموعات',gearBtn)+`<div class="list rise">${C.map(c=>`<button class="row" data-act="col-open" data-id="${c.id}"><span class="t"><b>${esc(c.name)}</b><span>${num(c.items.length)} عنصر</span></span>${ico('fwd')}</button>`).join('')||'<p class="empty">جمّع الأحاديث والآيات في مجموعات، زي "ثمرات محبة الله".</p>'}</div>
   <div class="row-in rise"><input class="inp" id="colNew" placeholder="مجموعة جديدة"><button class="btn ghost sm icon" data-act="col-add" aria-label="أضف">${ico('plus')}</button></div>`}
function renderCol(){const c=(db.cols||[]).find(x=>x.id===view.colId);if(!c){view.sub=null;return renderCols()}const O=view.colOrder;
  const its=c.items.map(k=>({k,x:colOf(k)})).filter(o=>o.x);
  return backTop(c.name,`${num(its.length)} عنصر`,'back')+(its.length?`<button class="btn block rise" data-act="col-rev">راجع المجموعة</button>`:'')+`<div class="ch rise"><button class="btn ghost sm" data-act="col-pick">${ico('plus')} من المكتبة</button><span class="hd-act">${its.length>1?`<button class="btn ghost sm" data-act="col-order">${O?'خلّصت':'رتّب'}</button>`:''}<button class="ib dz" data-act="col-del" aria-label="امسح المجموعة">${ico('trash')}</button></span></div>
   <div class="ncards rise">${its.map((o,i)=>O?`<div class="check"><div class="t"><span>${esc(o.x.text.slice(0,70))}…</span></div>${mvBtns('col-mv',`data-key="${esc(o.k)}"`,i,its.length)}</div>`:kbCard(o.x)).join('')||'<p class="empty">ضيف من المكتبة.</p>'}</div>`}
function openColPick(){openSheet(()=>{const c=db.cols.find(x=>x.id===view.colId),q=view.pq||'',all=kbItems().filter(x=>!q||x.text.includes(q));
  return {head:`<span class="eyebrow">${esc(c.name)}</span><h2 class="title">اختار من المكتبة</h2>`,body:`<input class="inp" data-act="cpq" placeholder="دوّر" value="${esc(q)}"><div class="list" id="cpl">${colPickList(all,c)}</div>`,foot:'<button class="btn" data-act="close-sheet">تمام</button>'}})}
const colPickList=(all,c)=>all.map(x=>{const k=kbKey(x),on=c.items.includes(k);return `<button class="row pk ${on?'on':''}" data-act="col-tog" data-c="${c.id}" data-key="${esc(k)}"><span class="ck">${on?ico('ok'):''}</span><span class="t"><b>${esc(x.text.slice(0,90))}${x.text.length>90?'…':''}</b><span>${esc(x.type)}</span></span></button>`}).join('')||'<p class="empty">المكتبة فاضية.</p>';
function renderMem(){const S=memStats(),R2=db.kbr||{};const weak=S.all.filter(x=>{const r=R2[kbKey(x)];return r&&r.reps&&r.box<=1}).slice(0,6);
  const byT={};S.all.forEach(x=>byT[x.type]=(byT[x.type]||0)+1);
  return top('تقدّم الحفظ','الحفظ',gearBtn)+`<section class="card rise"><div class="prog"><div><b>${num(S.mast)}</b><span>محفوظ</span></div><div><b>${num(S.learn)}</b><span>بتتعلمه</span></div><div><b>${num(S.neu)}</b><span>جديد</span></div></div>
   <div class="meter"><i style="width:${S.all.length?Math.round(S.mast/S.all.length*100):0}%"></i></div><span class="small muted">${Object.entries(byT).map(([k,v])=>`${esc(k)} <bdi>${v}</bdi>`).join(' · ')}</span></section>
   <button class="btn block rise" data-act="quiz" data-key="">${ico('spark')} ابدأ اختبار</button>
   ${weak.length?`<section class="slot rise"><div class="slot-h"><span>محتاج تراجعه</span></div><div class="ncards">${weak.map(kbCard).join('')}</div></section>`:''}`}
/* quiz: hide some words, reveal by tapping, then rate */
function quizPick(){const R2=db.kbr||{},td=dayKey(),all=kbItems().filter(x=>x.text.split(/\s+/).length>5);if(!all.length)return null;
  const sc=x=>{const r=R2[kbKey(x)];return !r?1:r.due<=td?0:2+(r.box||0)};const s=all.slice().sort((a,b)=>sc(a)-sc(b)||Math.random()-.5);return s[Math.floor(Math.random()*Math.min(4,s.length))]}
function openQuiz(key){const x=key?kbItems().find(y=>kbKey(y)===key):quizPick();if(!x){toast('ضيف أحاديث الأول');return}
  const W=x.text.split(/(\s+)/);let n=0;const hide=W.map((w,i)=>/\S/.test(w)&&w.replace(/[^ء-ي]/g,'').length>3&&((i*7+x.text.length)%10)<3);
  view.qz={key:kbKey(x),W,hide,shown:{}};openSheet(()=>{const q=view.qz;if(!q)return {head:'',body:''};const left=q.hide.filter((h,i)=>h&&!q.shown[i]).length;
    return {head:`<span class="eyebrow">اختبار · ${esc(x.type)}</span><h2 class="title">كمّل من حفظك</h2>`,
     body:`<p class="qz">${q.W.map((w,i)=>q.hide[i]&&!q.shown[i]?`<button class="qb" data-act="qz-rev" data-i="${i}">${'ـ'.repeat(Math.min(8,Math.max(3,w.length)))}</button>`:esc(w)).join('')}</p>
      ${left?`<button class="link" data-act="qz-all" style="align-self:center">اكشف الكل</button>`:`<span class="lb">فاكر قد إيه؟</span><div class="seg">${[['0','نسيت'],['1','بالعافية'],['2','فاكر كويس']].map(([v,l])=>`<button data-act="kb-rate" data-quiz="1" data-k="${esc(q.key)}" data-v="${v}">${l}</button>`).join('')}</div>`}`,
     foot:'<button class="btn" data-act="quiz" data-key="">واحد تاني</button>'}})}

function renderIlm(){const v=view.ilm||'kb',n=kbItems().length+db.notes.length;
  return top(`${num(n)} حاجة اتعلمتها`,APP==='zad'?'المكتبة':'علمي',gearBtn)+`<div class="seg-tabs">${[['kb','أحاديث وآيات'],['notes','الفوايد'],['tags','التصنيفات']].map(([x,l])=>`<button data-act="ilm" data-v="${x}" aria-pressed="${v===x}">${l}</button>`).join('')}</div>`
   +(v==='notes'?renderNotes():v==='tags'?renderTags():renderKB())}
/* ---------- عنصر واحد من بنك المعرفة ---------- */
const KBT={hadith:'حديث',aya:'آية',qissa:'قصة',sum:'ملخص'},KBT_R={'حديث':'hadith','آية':'aya','قصة':'qissa','ملخص':'sum'},KBTITLE={'حديث':'الحديث','آية':'الآية','قصة':'القصة','ملخص':'الملخص'};
const ZTYPES=()=>db.kbTypes&&db.kbTypes.length?db.kbTypes:['حديث','آية','قصة','بيان','ملخص','فائدة'];
const addSeg=(act,cur)=>APP==='zad'?`<div class="chips tsel">${ZTYPES().map(x=>`<button class="chip" data-act="kbn-type" data-v="${esc(x)}" aria-pressed="${(view.kbn||{}).type===x}">${esc(x)}</button>`).join('')}<button class="chip" data-act="kbt-new" aria-label="نوع جديد">+ نوع</button></div>`
  :`<div class="seg seg5">${[['note','فائدة'],['hadith','حديث'],['aya','آية'],['qissa','قصة'],['plan','خطوة']].map(([x,l])=>`<button data-act="${act}" data-v="${x}" aria-pressed="${cur===x}">${l}</button>`).join('')}</div>`;
function kbRef(r){if(r.n){const n=db.notes.find(x=>x.id===r.n);const o=n&&{get t(){return n.text},set t(v){n.text=v},get h(){return n.h},set h(v){n.h=v},get ti(){return n.ti},set ti(v){n.ti=v},get tags(){return n.topics},set tags(v){n.topics=v},get k(){return n.k},get src(){return n.src},type:'فائدة'};return {o,save:()=>save(),del:()=>{db.notes=db.notes.filter(x=>x.id!==r.n);save()}}}if(r.c){const o=(db.shared||{})[r.c];return {o,save:()=>{if(o){o._dirty=1;save()}},del:()=>{if(o){o.deleted=true;o._dirty=1;save()}}}}if(r.s){const o=(db.kb||[]).find(x=>x.id===r.s);return {o,save:()=>save(),del:()=>{db.kb=db.kb.filter(x=>x.id!==r.s);save()}}}
  const e=(db.logs[r.k]||{})[r.id];if(!e||!e.a)return {o:null,save(){},del(){}};const arr=kbArr(e.a[r.f]),o=arr.find(x=>x.id===r.e);
  return {o,save:()=>{e.a[r.f]=arr;save()},del:()=>{e.a[r.f]=arr.filter(x=>x.id!==r.e);save()}}}
function tagPick(tags,act,newAct,inputId){const all=[...new Set([...(db.tags||[]),...(db.noteCfg.topics||[]),...tags])];
  return `<div class="tagbox">${all.length?`<div class="tagrow">${all.map(x=>`<button class="chip" data-act="${act}" data-v="${esc(x)}" aria-pressed="${tags.includes(x)}">${esc(x)}</button>`).join('')}</div>`:''}
    <div class="row-in"><input class="inp" id="${inputId}" placeholder="تصنيف جديد، زي: الصبر"><button class="btn ghost sm" data-act="${newAct}">أضف</button></div></div>`}
function openKBItem(r){view.kbi=r;view.fix=null;view.kbiTag=false;view.kbn=null;openSheet(()=>{const R2=kbRef(r),o=R2.o;if(!o){closeSheet();return {head:'',body:''}}
  const x=kbItems().find(y=>r.c?y.cid===r.c:r.s?y.sid===r.s:(y.k===r.k&&y.id===r.id&&y.f===r.f&&y.eid===r.e))||{},type=x.type||o.type,tags=o.tags||[],dk=r.c||r.s?o.k:r.k;
  return {head:`<span class="eyebrow">${esc(type)} · ${fmt(dk,{weekday:'long',day:'numeric',month:'long'})}</span><h2 class="title">${KBTITLE[type]||esc(type)}</h2>`,
   body:`<input class="inp ti" data-act="kbi-ti" value="${esc(tiOf(o))}" placeholder="العنوان: موضوعه في جملة تفكّرك بيه">${richBox('kbi-rich',o)}<div class="kbt"><button class="tg add" data-act="fix-run" data-v="kbi">${ico('spark')}صحّح وكمّل</button></div>${fixBox('kbi')}
    <div class="fld"><span class="lb">التصنيفات</span><div class="tagrow">${tags.map(s=>`<span class="tg">${esc(s)}</span>`).join('')}<button class="tg add" data-act="kbi-tagbox">${ico('tag')}${tags.length?'تعديل':'تصنيف'}</button></div>${view.kbiTag?tagPick(tags,'kbi-tag','kbi-tagnew','kbiTag'):''}</div>
    ${(db.cols||[]).length?`<div class="fld"><span class="lb">المجموعات</span><div class="tagrow">${db.cols.map(c=>`<button class="chip" data-act="col-tog" data-c="${c.id}" data-key="${esc(kbKey(x))}" aria-pressed="${c.items.includes(kbKey(x))}">${esc(c.name)}</button>`).join('')}</div></div>`:''}
    <div class="fld"><div class="ch"><span class="lb">المراجعة</span><button class="link" data-act="quiz" data-key="${esc(kbKey(x))}">اختبر نفسك</button></div><span class="small muted">${x.k?kbNext(x):''}</span></div>
    <div class="fld"><span class="lb">المصدر</span>${r.c?`<span>${esc(o.by||'')} · ${esc(o.src||'الحلقة')}</span>`:r.s?`<span>${o.src?esc(o.src):'اتضاف من زرار +'}</span>`:`<button class="link" data-act="kbi-day" style="align-self:flex-start">التعليم الانفرادي · ${fmt(dk,{weekday:'long',day:'numeric',month:'long'})} ←</button>`}</div>`,
   foot:`<button class="btn danger icon" data-act="kbi-del" aria-label="امسح">${ico('trash')}</button><button class="btn" data-act="close-sheet">تمام</button>`}})}
/* ===== التقاط من بيان: write fragments, AI completes them, you approve ===== */
const CCK='waqfa.capcur';let capCurV=(()=>{try{return localStorage.getItem(CCK)}catch(e){return null}})();
const setCapCur=v=>{capCurV=v;try{v?localStorage.setItem(CCK,v):localStorage.removeItem(CCK)}catch(e){}};
function capOf(){db.caps=db.caps||[];if(db.cap){const t=(db.cap.t||'').trim();if((t||db.cap.items)&&!(db.gone||{}).caplegacy&&!db.caps.some(x=>x.id==='caplegacy'||((x.t||'').trim()===t&&t))){db.cap.id='caplegacy';db.caps.push(db.cap);if(!db.caps.some(x=>x.id===capCurV))setCapCur('caplegacy')}db.cap=null}
  let c=db.caps.find(x=>x.id===capCurV);if(!c){db.caps=db.caps.filter(x=>(x.t||'').trim()||(x.items||[]).length);c={id:uid('cap'),t:'',src:db.noteCfg.srcs.includes(autoSrc())?autoSrc():'',k:dayKey(),items:null};db.caps.unshift(c);setCapCur(c.id)}return c}
const capList=c=>{const L=(db.caps||[]).filter(x=>x.id!==c.id&&(x.t||'').trim());if(!L.length)return '';
  return `<div class="fld"><span class="lb">بيانات قبل كده</span><div class="list">${L.slice(0,15).map(x=>`<div class="row"><button class="t" data-act="cap-pick" data-v="${x.id}" style="text-align:start"><b>${esc(x.src||'بيان')} · ${fmt(x.k,{weekday:'long',day:'numeric',month:'long'})}</b><span>${esc((x.t||'').trim().split('\n')[0].slice(0,60))}</span></button>${x.added?`<span class="badge done">اتضاف ${num(x.added)}</span>`:(x.items||[]).length?'<span class="badge part">جاهز للمراجعة</span>':''}${xbtn('cap-del',`data-v="${x.id}"`)}</div>`).join('')}</div></div>`};
const tgtCap=()=>({key:'cap',kind:'ملاحظات من بيان',put:txt=>{const c=capOf();c.t=(c.t||'').trim()?c.t.trim()+'\n'+txt:txt;save();return '#capText'}});
const CONF={high:['done','متأكد'],medium:['part','غالبًا'],low:['miss','اتأكد منه']};
function openCap(){view.kbn=null;view.nd=null;view.capEdit=false;openSheet(capR)}
function capR(){const c=capOf(),sum=c.mode==='sum';
  if(view.capBusy)return {head:`<span class="eyebrow">التقاط من بيان</span><h2 class="title">${sum?'بيلخّص':'بينظّم ويصحّح'}…</h2>`,body:`<p class="lead">${sum?'بيعمل ملخص مرتب للبيان':'بيرتّب كلامك كله في أقسام، ويصحّح الإملاء، ويكمّل الآيات والأحاديث جوّه، من غير ما يشيل حاجة'}، وبيطلّع كل حديث وآية وقصة لوحدها.</p><p class="small muted">ممكن ياخد دقيقة أو اتنين. تقدر تقفل، هيكمّل لوحده ويفتحلك النتيجة لما يخلص.</p>`,foot:'<button class="btn ghost" data-act="close-sheet">اقفل وهو يكمّل</button>'};
  if(c.items&&c.items.length&&!view.capEdit)return {head:`<span class="eyebrow">راجع قبل ما تضيف</span><h2 class="title">لقيت ${num(c.items.length)}</h2>`,
    body:`<p class="small muted">علّم على اللي متأكد منه. اللي مكتوب عليه "اتأكد منه" راجعه في كتاب الأول.</p>${c.itBusy?'<p class="notice">بيطلّع كل حديث وآية وقصة لوحدها… تقدر تضيف البيان دلوقتي أو تستنى.</p>':c.items.every(x=>x.doc||x.sum)?'<button class="link" data-act="cap-items" style="align-self:flex-start">✦ طلّع الأحاديث والآيات لوحدها</button>':''}${c.items.map((x,i)=>{const cf=CONF[x.confidence]||CONF.low;return `<section class="capi ${x.on?'on':''}">
      <div class="ch"><button class="pk-ck" data-act="cap-on" data-i="${i}" aria-label="اختار">${x.on?ico('ok'):''}</button><span class="badge ${x.sum||x.doc?'ink':cf[0]}">${x.sum?'الملخص':x.doc?'البيان مرتّب':cf[1]}</span>
       <select class="inp sm" data-act="cap-type" data-i="${i}">${[...new Set([...ZTYPES(),x.type])].map(o=>`<option ${o===x.type?'selected':''}>${esc(o)}</option>`).join('')}</select></div>
      <input class="inp ti" data-act="cap-ti" data-i="${i}" value="${esc(x.title||'')}" placeholder="العنوان"><textarea class="inp" data-act="cap-txt" data-i="${i}">${esc(x.text||'')}</textarea>
      ${x.source?`<span class="small">${esc(x.source)}</span>`:''}${x.note?`<span class="small" style="color:var(--alert)">${esc(x.note)}</span>`:''}
      <span class="small muted">كتبت: ${esc(x.from||'')}</span></section>`}).join('')}`,
    foot:`<button class="btn ghost" data-act="cap-back">رجوع</button><button class="btn" data-act="cap-add">ضيف (${num(c.items.filter(x=>x.on).length)})</button>`};
  return {head:'<span class="eyebrow">التقاط من بيان</span><h2 class="title">اكتب اللي تلحقه</h2>',
   body:`<div class="fld"><span class="lb">البيان</span>${srcSel('cap-src',c.src)}</div>
    <div class="seg"><button data-act="cap-mode" data-v="tidy" aria-pressed="${!sum}">نظّم وصحّح وكمّل</button><button data-act="cap-mode" data-v="sum" aria-pressed="${sum}">لخّص</button></div>
    <p class="small muted">${sum?'هيطلّع ملخص مختصر للبيان، والنصوص لوحدها.':'كلامك كله يفضل زي ما هو، بس مترتّب ومتصحّح، والآيات والأحاديث كاملة.'}</p>
    <textarea class="inp" id="capText" data-act="cap-text" style="min-height:220px" placeholder="اكتب زي ما تحب، من غير ترتيب&#10;نقط البيان، أو أطراف أحاديث وآيات&#10;مثلًا: إنما الأعمال&#10;ومن يتق الله يجعل له">${esc(c.t||'')}</textarea>
    <div class="kbt"><span class="small muted">أو سجّل بصوتك</span>${toolsHTML('cap','data-capm="1"')}</div>
    ${(c.items||[]).length?`<button class="link" data-act="cap-res" style="align-self:flex-start">← ارجع للنتيجة (${num(c.items.length)})</button>`:''}${(c.t||'').trim()?'<button class="link" data-act="cap-new" style="align-self:flex-start">+ بيان جديد</button>':''}${capList(c)}`,
   foot:`<button class="btn" data-act="cap-run">${ico('spark')} ${sum?'لخّص':'نظّم وصحّح'}</button>`}}
async function capRun(){const c=capOf(),notes=(($('#capText')||{}).value||c.t||'').trim();c.t=notes;save();if(!notes){toast('اكتب حاجة الأول');return}
  if(!auth){toast('سجّل دخول الأول من ⚙︎');return}if(!navigator.onLine){toast('محتاج نت. اللي كتبته متحفظ، كمّله لما النت يرجع');return}
  view.capBusy=true;view.capEdit=false;paintSheet();const ac=new AbortController(),tm=setTimeout(()=>ac.abort(),150000);
  try{const r=await afetch(SB+'/functions/v1/ocr',{method:'POST',signal:ac.signal,headers:{},body:JSON.stringify({task:'organize',notes,mode:c.mode==='sum'?'sum':'tidy'})});
    const j=await r.json().catch(()=>({}));if(!r.ok||!j.items)throw new Error(r.status===401?'الجلسة خلصت. ادخل تاني من ⚙︎':j.error==='rate'?'استنى دقيقة وجرّب تاني':'خدمة الذكاء المجانية زحمة دلوقتي. كلامك متحفظ، جرّب بعد شوية');
    if(j.docFailed&&c.mode!=='sum')toast('الترتيب ما اشتغلش المرة دي، طلّعت النصوص بس. جرّب تاني بعد شوية');
    const sm=j.summary&&j.summary.sections&&j.summary.sections.length?[{type:'ملخص',sum:j.summary,title:j.summary.title||'ملخص البيان',text:'',confidence:'high',on:true,from:'كل ملاحظاتك'}]:[];if(sm.length)sm[0].text=capSumText(sm[0]);
    if(j.doc&&j.doc.sections&&j.doc.sections.length){const dd={type:'بيان',doc:j.doc,title:j.doc.title||'البيان',confidence:'high',on:true,from:'كل ملاحظاتك'};dd.text=docText(dd);sm.unshift(dd)}
    const cc=(db.caps||[]).find(x=>x.id===c.id);if(cc&&cc!==c){Object.assign(c,{...cc,items:c.items});db.caps[db.caps.indexOf(cc)]=c}else if(!cc){db.caps=db.caps||[];db.caps.unshift(c)}
    c.items=[...sm,...(j.items||[]).filter(x=>x&&x.text).map(x=>({...x,type:['حديث','آية','قصة','فائدة'].includes(x.type)?x.type:'فائدة',on:x.confidence!=='low'}))];save();if(!c.items.length)toast('مالقيتش حاجة واضحة');else if(j.itemsFailed)setTimeout(()=>capItems(c.id,notes),50)}
  catch(e){toast(e.name==='AbortError'?'الخدمة بطيئة دلوقتي. جرّب كمان شوية':e.message)}finally{clearTimeout(tm);view.capBusy=false;
    if(sheetEl&&sheetRender===capR)paintSheet();else if((c.items||[]).length){if(!sheetEl){setCapCur(c.id);openCap()}else toast('خلص ✓ افتح + ← التقاط من بيان')}}}
async function capItems(id,notes){const live=()=>(db.caps||[]).find(x=>x.id===id);let c=live();if(!c||c.itBusy)return;notes=notes||c.t;c.itBusy=true;bgPaint();
  try{const r=await afetch(SB+'/functions/v1/ocr',{method:'POST',headers:{},body:JSON.stringify({task:'organize',part:'items',notes})});const j=await r.json().catch(()=>({}));c=live();if(!c)return;
    if(!r.ok||!j.items){toast('ما لحقش يطلّع النصوص. دوس "طلّع الأحاديث" تاني بعد شوية');return}
    const have=new Set((c.items||[]).map(x=>(x.text||'').slice(0,40)));const add=j.items.filter(x=>x&&x.text&&!have.has(x.text.slice(0,40))).map(x=>({...x,type:['حديث','آية','قصة'].includes(x.type)?x.type:'قصة',on:x.confidence!=='low'}));
    c.items=[...(c.items||[]),...add];toast(add.length?`طلّع ${add.length} لوحدهم ✓`:'مالقيتش أحاديث أو آيات')}
  catch(e){toast('ما لحقش يطلّع النصوص. جرّب تاني بعد شوية')}finally{const x=live();if(x)delete x.itBusy;save();bgPaint()}}
/* ✦ صحّح وكمّل: one item, checked and completed by AI */
async function fixRun(where){const txt=where==='kbn'?(($('#kbnText')||{}).value||'').trim():((kbRef(view.kbi).o||{}).t||'').trim();
  if(!txt){toast('اكتب حاجة الأول');return}if(!auth){toast('سجّل دخول الأول من ⚙︎');return}if(!navigator.onLine){toast('محتاج نت');return}
  if(where==='kbn')view.kbn.t=txt;view.fix={where,busy:true};paintSheet();const ac=new AbortController(),tm=setTimeout(()=>ac.abort(),120000);
  try{const r=await afetch(SB+'/functions/v1/ocr',{method:'POST',signal:ac.signal,headers:{},body:JSON.stringify({task:'complete',notes:txt})});
    const j=await r.json().catch(()=>({}));if(!r.ok||!j.items||!j.items.length)throw new Error(r.status===401?'الجلسة خلصت. ادخل تاني من ⚙︎':j.error==='rate'?'استنى دقيقة وجرّب تاني':'مقدرش يتعرّف عليه. جرّب تاني');
    view.fix={where,res:j.items[0]}}
  catch(e){view.fix=null;toast(e.name==='AbortError'?'الخدمة بطيئة دلوقتي':e.message)}finally{clearTimeout(tm);if(sheetEl)paintSheet()}}
function fixBox(where){const F=view.fix;if(!F||F.where!==where)return '';if(F.busy)return '<p class="small muted">بيراجع ويكمّل…</p>';const x=F.res,cf=CONF[x.confidence]||CONF.low;
  return `<section class="capi on"><div class="ch"><span class="badge ${cf[0]}">${cf[1]}</span><span class="small muted">${esc(x.type||'')}</span></div>${x.title?`<b>${esc(x.title)}</b>`:''}<p class="rv">${esc(x.text||'')}</p>
   ${x.source?`<span class="small">${esc(x.source)}</span>`:''}${x.note?`<span class="small" style="color:var(--alert)">${esc(x.note)}</span>`:''}
   <div class="ch"><button class="link" data-act="fix-x">سيبه زي ما هو</button><button class="btn sm" data-act="fix-use">استخدم ده</button></div></section>`}
function fixUse(){const F=view.fix,x=F&&F.res;if(!x)return;const body=(x.text||'').trim(),src=x.source?`\n(${x.source})`:'';
  const h=esc(body).replace(/\n/g,'<br>')+(x.source?`<br><span style="color: rgb(90, 103, 94);">(${esc(x.source)})</span>`:'');
  if(F.where==='kbn'){const s=view.kbn;s.t=body+src;s.h=h;if(x.title)s.ti=x.title;if(['حديث','آية','قصة','فائدة'].includes(x.type)&&ZTYPES().includes(x.type))s.type=x.type;if(x.tags&&x.tags.length)s.tags=[...new Set([...(s.tags||[]),...x.tags.slice(0,2)])];keepDraft()}
  else{const r=kbRef(view.kbi);if(r.o){r.o.t=body+src;r.o.h=h;if(x.title&&!r.o.ti)r.o.ti=x.title;r.save()}}
  view.fix=null;paintSheet();toast('اتعدّل ✓')}
const docText=x=>x.doc.sections.map(s=>(s.heading||'')+'\n'+(s.lines||[]).join('\n')).join('\n\n');
const docHTML=x=>x.doc.sections.map(s=>{let h=`<h3>${esc(s.heading||'')}</h3>`,ul=[];const fl=()=>{if(ul.length){h+='<ul>'+ul.map(l=>`<li>${esc(l)}</li>`).join('')+'</ul>';ul=[]}};
  (s.lines||[]).forEach(l=>{l=String(l).trim();if(!l)return;if(/^[•\-–]\s*/.test(l)){ul.push(l.replace(/^[•\-–]\s*/,''));return}fl();h+=/^[﴿«]/.test(l)?`<blockquote>${esc(l)}</blockquote>`:`<div>${esc(l)}</div>`});fl();return h}).join('');
const capSumText=x=>x.sum.sections.map(s=>(s.heading||'')+'\n'+(s.points||[]).map(p=>'• '+p).join('\n')).join('\n\n');
function capAdd(){const c=capOf(),sel=(c.items||[]).filter(x=>x.on);if(!sel.length){toast('علّم على حاجة الأول');return}db.kb=db.kb||[];const k=dayKey();
  sel.forEach(x=>{if(x.type&&db.kbTypes&&db.kbTypes.length&&!db.kbTypes.includes(x.type))db.kbTypes.push(x.type);
    if(x.doc&&x.text===docText(x)){db.kb.push({id:uid('kb'),k,type:x.type||'بيان',ti:x.title,t:x.text,h:docHTML(x),tags:[],src:c.src||''});return}
    if(x.sum&&x.text===capSumText(x)){db.kb.push({id:uid('kb'),k,type:'ملخص',ti:x.title,t:x.text,h:x.sum.sections.map(s=>`<h3>${esc(s.heading||'')}</h3><ul>${(s.points||[]).map(p=>`<li>${esc(p)}</li>`).join('')}</ul>`).join(''),tags:[],src:c.src||''});return}
    if(x.type==='فائدة'){db.notes.push({id:uid('n'),k,mosque:curMosque(),text:(x.text||'').trim(),ti:(x.title||'').trim()||(x.text||'').trim().split(/\s+/).slice(0,6).join(' '),src:c.src||'',topics:(x.tags||[]).slice(0,3)});return}
    const tx=(x.text||'').trim()+(x.source?`\n(${x.source})`:'');db.kb.push({id:uid('kb'),k,type:x.type,ti:(x.title||'').trim()||(x.text||'').trim().split(/\s+/).slice(0,6).join(' '),t:tx,
    h:esc((x.text||'').trim()).replace(/\n/g,'<br>')+(x.source?`<br><span style="color: rgb(90, 103, 94);">(${esc(x.source)})</span>`:''),tags:(x.tags||[]).slice(0,3),src:c.src||''})});
  c.items=null;c.added=(c.added||0)+sel.length;setCapCur(null);db.caps=(db.caps||[]).slice(0,30);save();closeSheet();toast(`اتضاف ${num(sel.length)} لبنك المعرفة ✓`)}
function openKBNew(type,text,prev){view.kbi=null;view.fix=null;view.nd=null;view.kbn=prev?{...prev,type}:{type,t:text||'',tags:[],src:db.noteCfg.srcs.includes(autoSrc())?autoSrc():''};view.kbiTag=false;keepDraft();
  openSheet(()=>{const s=view.kbn;if(!s)return {head:'',body:''};return {head:`<span class="eyebrow">إضافة لعلمي</span><h2 class="title">${{'حديث':'حديث جديد','آية':'آية جديدة','قصة':'قصة جديدة','ملخص':'ملخص درس أو كتاب'}[s.type]||(s.type+' جديد')}</h2>`,
   body:`<button class="capbtn" data-act="cap-open">${ico('pen')}<span><b>التقاط من بيان</b><small>اكتب أي حاجة، وهو ينظّمها ويطلّع الأحاديث والآيات</small></span>${(db.caps||[]).some(x=>x.id===capCurV&&(x.t||'').trim())?'<span class="badge part">مسودة</span>':''}</button>${addSeg('kbn-mode',KBT_R[s.type])}<input class="inp ti" id="kbnTi" data-act="kbn-ti" value="${esc(s.ti||'')}" placeholder="العنوان: موضوعه في جملة تفكّرك بيه"><textarea class="inp" id="kbnText" data-act="kbn-text" placeholder="${{'حديث':'نص الحديث، وراويه لو تعرفه','آية':'الآية، واسم السورة ورقمها','قصة':'القصة باختصار، ومن أي كتاب','ملخص':'اسم الدرس أو الكتاب، وأهم النقاط'}[s.type]||''}" style="min-height:140px">${esc(s.t)}</textarea>
    <div class="kbt"><button class="tg add" data-act="fix-run" data-v="kbn">${ico('spark')}صحّح وكمّل</button>${toolsHTML('kbn','data-kbn="1"')}</div>${fixBox('kbn')}
    <div class="fld"><span class="lb">التصنيفات</span><div class="tagrow">${(s.tags||[]).map(x=>`<span class="tg">${esc(x)}</span>`).join('')}<button class="tg add" data-act="kbi-tagbox">${ico('tag')}${(s.tags||[]).length?'تعديل':'تصنيف'}</button></div>${view.kbiTag?tagPick(s.tags||[],'kbi-tag','kbi-tagnew','kbiTag'):''}</div>
    <div class="fld"><span class="lb">سمعته فين؟ (اختياري)</span>${srcSel('kbn-srcsel',s.src)}</div>`,
   foot:'<button class="btn" data-act="kbn-save">احفظ</button>'}});
  setTimeout(()=>{const el=$('#kbnText');el&&!el.value&&el.focus()},350)}
function renderNotes(){const v=view.nview||'days';
  return `
   <button class="btn block" data-act="note-new">+ فائدة جديدة</button><div class="ch"><button class="link" data-act="ncfg">المصادر</button><button class="link" data-act="tagmgr">المواضيع</button></div>
   <input class="inp" type="search" data-act="nsearch" value="${esc(view.nq)}" placeholder="دوّر في فوايدك">
   <div class="seg-tabs">${[['days','بالأيام'],['topic','بالموضوع'],['src','بالمصدر'],['star','المميّزة']].map(([x,l])=>`<button data-act="nview" data-v="${x}" aria-pressed="${v===x}">${l}</button>`).join('')}</div>
   <div id="nlist">${notesList()}</div>`}
function notesList(){const q=view.nq.trim(),v=view.nview||'days',L=db.notes.filter(n=>!q||n.text.includes(q)||(n.by||'').includes(q)||noteMeta(n).some(x=>x.includes(q))).slice().reverse();
  if(!L.length)return `<p class="empty">${q?'مفيش نتايج.':'لسه مفيش فوايد. اضغط "فائدة جديدة"، أو + من تحت من أي شاشة.'}</p>`;
  const G=new Map(),add=(key,n)=>{if(!G.has(key))G.set(key,[]);G.get(key).push(n)};
  if(v==='days')L.forEach(n=>add(n.k||'',n));
  if(v==='topic')L.forEach(n=>((n.topics||[]).length?n.topics:['من غير موضوع']).forEach(x=>add(x,n)));
  if(v==='src')L.forEach(n=>add(n.src||'من غير مصدر',n));
  if(v==='star'){const s=L.filter(n=>n.star);if(!s.length)return '<p class="empty">ميّز فائدة تلاقيها هنا.</p>';s.forEach(n=>add('',n))}
  let keys=[...G.keys()];if(v==='topic'||v==='src')keys.sort((x,y)=>G.get(y).length-G.get(x).length);
  return keys.map(key=>{const arr=G.get(key),lab=v==='days'?(key?fmt(key,{weekday:'long',day:'numeric',month:'long'}):'من غير تاريخ')+(arr[0].mosque?' · '+esc(arr[0].mosque):''):esc(key);
    return `<section class="slot">${key||v!=='star'?`<div class="slot-h"><span>${lab}</span><span class="tm">${num(arr.length)}</span></div>`:''}<div class="ncards">${arr.map(noteCard).join('')}</div></section>`}).join('')}
function autoSrc(){return ({fajr:'بيان الفجر',duha:'حلقة التعليم',dhuhr:'حديثين الظهر',asr:'بيان العصر',maghrib:'الترغيب',isha:'بيان العشاء',night:'خاطرة'})[windowNow().key]||''}
/* drafts: what you typed stays until you save it, even if the sheet closes by mistake */
const DRAFT='waqfa.draft';
const getDraft=()=>{try{return JSON.parse(localStorage.getItem(DRAFT)||'null')}catch(e){return null}};
function keepDraft(){try{const n=view.nd,k=view.kbn;
  if(n&&!n.id&&((n.text||'').trim()||(n.by||'').trim()))localStorage.setItem(DRAFT,JSON.stringify({kind:'nd',v:n}));
  else if(k&&(k.t||'').trim())localStorage.setItem(DRAFT,JSON.stringify({kind:'kbn',v:k}));
  else if((n&&!n.id)||k)localStorage.removeItem(DRAFT)}catch(e){}}
const dropDraft=()=>{try{localStorage.removeItem(DRAFT)}catch(e){}};
let ndT=0;function ndApply(){const s=view.nd;if(!s)return;if(!s.id)return keepDraft();const n=db.notes.find(x=>x.id===s.id);if(!n)return;
  const txt=(s.text||'').trim();if(!txt)return;clearTimeout(ndT);ndT=setTimeout(()=>{Object.assign(n,{text:txt,h:s.h||'',src:s.src,topics:s.topics,by:(s.by||'').trim(),star:s.star});save()},500)}
const draftNote=()=>{const d=getDraft();return d&&d.v?d:null};
const srcSel=(act,cur)=>`<select class="inp" data-act="${act}"><option value="">من غير مصدر</option>${db.noteCfg.srcs.map(o=>`<option ${cur===o?'selected':''}>${esc(o)}</option>`).join('')}<option value="__new">+ مصدر جديد</option><option value="__edit">تعديل القايمة</option></select>`;
function srcPick(v,set,reopen){if(v==='__new'){const n=(prompt('اسم المصدر، مثلًا: مذاكرة')||'').trim();if(n&&!db.noteCfg.srcs.includes(n))db.noteCfg.srcs.push(n);if(n)set(n);save();paintSheet();return true}
  if(v==='__edit'){view.cfgRet=reopen;openNoteCfg();return true}return false}
function openNote(id,quick){const n=id&&db.notes.find(x=>x.id===id);
  const dr=!n&&draftNote();if(dr&&dr.kind==='kbn')return openKBNew(dr.v.type,dr.v.t,dr.v);
  view.nd=n?{id,text:n.text,h:n.h||'',src:n.src||'',topics:[...(n.topics||[])],by:n.by||'',star:!!n.star,mode:'note'}:dr?{...dr.v,quick:!!quick,restored:true}:{text:'',src:db.noteCfg.srcs.includes(autoSrc())?autoSrc():'',topics:[],by:'',star:false,mode:'note',quick:!!quick};view.ndTop=false;
  openSheet(()=>{const s=view.nd,cfg=db.noteCfg,chips=(arr,act,on)=>`<div class="chips">${arr.map(o=>`<button class="chip" data-act="${act}" data-v="${esc(o)}" aria-pressed="${on(o)}">${esc(o)}</button>`).join('')}</div>`;
    return {head:`<span class="eyebrow">${n?fmt(n.k,{weekday:'long',day:'numeric',month:'long'})+(n.mosque?' · '+esc(n.mosque):''):'إضافة'}</span><h2 class="title">${n?'الفائدة':s.mode==='plan'?'خطوة في خطة النهارده':'فائدة جديدة'}</h2>`,
     body:(s.quick?`${addSeg('nd-mode',s.mode)}`:'')
      +(s.id?'':`<button class="capbtn" data-act="cap-open">${ico('pen')}<span><b>التقاط من بيان</b><small>اكتب أي حاجة، وهو ينظّمها ويطلّع الأحاديث والآيات</small></span>${(db.caps||[]).some(x=>x.id===capCurV&&(x.t||'').trim())?'<span class="badge part">مسودة</span>':''}</button>`)+(s.restored?`<div class="ch small"><span class="muted">رجّعنالك اللي كنت كاتبه</span><button class="link" data-act="nd-clear">جديد</button></div>`:'')+(s.id?richBox('nd-rich',{t:s.text,h:s.h}):`<textarea class="inp" data-act="nd-text" id="ndText" placeholder="${s.mode==='plan'?'الخطوة':'الفائدة أو الرسالة اللي جاتلك'}" style="min-height:130px">${esc(s.text)}</textarea>`)
      +(s.mode==='note'?`<div class="fld"><span class="lb">المصدر</span>${srcSel('nd-srcsel',s.src)}</div>
       <div class="fld"><span class="lb">الموضوع</span><div class="tagrow">${s.topics.map(o=>`<span class="tg">${esc(o)}</span>`).join('')}<button class="tg add" data-act="nd-topbox">${ico('tag')}${s.topics.length?'تعديل':'اختار موضوع'}</button></div>${view.ndTop?`<div class="tagbox">${chips(cfg.topics,'nd-top',o=>s.topics.includes(o))}</div>`:''}</div>
       <div class="fld"><span class="lb">مين قالها؟ (اختياري)</span><input class="inp" data-act="nd-by" value="${esc(s.by)}" placeholder="الاسم"></div>
       <button class="chip" data-act="nd-star" aria-pressed="${s.star}" style="align-self:flex-start">${s.star?'★ مميّزة':'☆ ميّزها'}</button>
       <button class="link" data-act="ncfg" style="align-self:flex-start">+ مصدر أو موضوع</button>
       ${n?'<button class="btn ghost" data-act="nd-plan">+ خطة بكرة</button>':''}`:''),
     foot:n?'<button class="btn danger icon" data-act="nd-del" aria-label="امسح">'+ico('trash')+'</button><button class="btn" data-act="nd-save">تمام</button>':'<button class="btn" data-act="nd-save">احفظ</button>'}});
  if(!n)setTimeout(()=>{const x=$('#ndText');x&&x.focus()},350)}
function openTagMgr(){view.tagEdit='';openSheet(()=>{const T=allTags();
  return {head:'<span class="eyebrow">علمي</span><h2 class="title">المواضيع والتصنيفات</h2>',
   body:`<p class="small muted">اسم موجود = دمج.</p>
    <div class="list">${T.map(o=>view.tagEdit===o.s?`<div class="tagbox"><input class="inp" id="tagRen" value="${esc(o.s)}"><div class="row-in"><button class="btn sm" data-act="tag-ren" data-v="${esc(o.s)}">احفظ</button><button class="btn ghost sm" data-act="tag-edit" data-v="">إلغاء</button><button class="btn danger sm" data-act="tag-del" data-v="${esc(o.s)}">امسح</button></div></div>`
      :`<button class="row" data-act="tag-edit" data-v="${esc(o.s)}"><span class="t"><b>${esc(o.s)}</b><span>${o.notes?`${num(o.notes)} فائدة`:''}${o.notes&&o.kb?' · ':''}${o.kb?`${num(o.kb)} من الأحاديث والآيات`:''}${!o.notes&&!o.kb?'فاضي':''}</span></span><span class="small muted">تعديل</span></button>`).join('')}</div>
    <div class="row-in"><input class="inp" id="tagAdd" placeholder="موضوع جديد"><button class="btn ghost sm" data-act="tag-add">أضف</button></div>`,
   foot:'<button class="btn" data-act="close-sheet">تمام</button>'}})}
function openNoteCfg(){const back=view.nd&&sheetEl&&!view.cfgRet?view.nd:null;openSheet(()=>{const sec=(key,l)=>`<div class="fld"><span class="lb">${l}</span><div class="chips">${db.noteCfg[key].map((o,i)=>`<span class="tag">${esc(o)}${xbtn('cfg-del',`data-v="${key}" data-i="${i}"`)}</span>`).join('')}</div><div class="row-in"><input class="inp" id="cfg-${key}" placeholder="أضف"><button class="btn ghost sm" data-act="cfg-add" data-v="${key}">أضف</button></div></div>`;
  return {head:'<span class="eyebrow">طلعت بإيه</span><h2 class="title">المصادر والمواضيع</h2>',body:sec('srcs','المصادر')+sec('topics','المواضيع')+(back?'':'<button class="btn ghost" data-act="tagmgr">دمج وتسمية</button>'),foot:`<button class="btn" data-act="${back||view.cfgRet?'cfg-back':'close-sheet'}">تمام</button>`}})}
function fawaidCard(k){const pool=db.notes.filter(n=>n.k!==dayKey());if(!pool.length)return '';let h=0;for(const c of k)h=(h*31+c.charCodeAt(0))>>>0;
  const st=pool.filter(n=>n.star),P=st.length&&!((view.fseed||0)%2)?st:pool,n=P[(h+(view.fseed||0))%P.length];
  return `<section class="card fcard rise"><div class="ch"><span class="eyebrow">فائدة من اللي فات</span><button class="link" data-act="fseed">غيّرها</button></div><p class="ftext">${esc(n.text)}</p><span class="small muted">${noteMeta(n).map(esc).join(' · ')}${n.k?' · '+fmt(n.k,{day:'numeric',month:'long'}):''}</span></section>`}

/* ---------- schedule (جدول اليوم) ---------- */
const an=a=>(ANCH.find(x=>x[0]===a)||['',''])[1];
const durTxt=m=>{const h=Math.floor(m/60),r=m%60;return h?`${num(h)} س${r?` و${num(r)} د`:''}`:`${num(r)} دقيقة`};
const schedStart=(it,P)=>it.anchor==='clock'?it.off:Math.round(P[it.anchor]+it.off);
const anchorText=it=>it.anchor==='clock'?'وقت ثابت':!it.off?`مع ${an(it.anchor)}`:`${it.off>0?'بعد':'قبل'} ${an(it.anchor)} بـ${durTxt(Math.abs(it.off))}`;
function schedList(k){const P=timesFor(k),fr=wd(k)===5;return db.sched.items.map((it,i)=>({...it,...(fr&&it.link==='dhuhr'?{name:'صلاة الجمعة',link:'jumuah'}:{}),i,start:schedStart(it,P)})).sort((a,b)=>a.start-b.start)}
function schedNow(){if(!db.sched.on||!db.sched.items.length)return null;const now=new Date(),k=keyOf(now),m=now.getHours()*60+now.getMinutes(),L=schedList(k);
  let cur=null,next=null;for(const it of L){if(it.start<=m)cur=it;else{next=it;break}}
  if(cur&&cur.dur&&m>=cur.start+cur.dur)cur=null;if(!next){const f=schedList(shift(k,1))[0];next={...f,start:f.start+1440}}return {cur,next,m}}
function schedHero(){const s=schedNow();if(!s)return '';
  return `<button class="sched" data-act="go" data-v="sched"><span><span class="eyebrow">دلوقتي</span><b>${s.cur?esc(s.cur.name):'وقت حر'}</b>${s.cur&&s.cur.dur?`<span class="small" style="color:rgba(255,255,255,.55)">لحد ${hm(s.cur.start+s.cur.dur)}</span>`:''}</span><span><span class="eyebrow">العمل الجاي</span><b>${esc(s.next.name)}</b><span class="cd">بعد ${until(s.next.start-s.m)}</span></span></button>`}
function locLine(){return `<div class="locl"><span>المواقيت على ${esc(city()[1])}</span><button data-act="${db.settings.useLoc?'loc-use':'settings'}">${db.settings.useLoc?'حدّث موقعي':'غيّر'}</button></div>`}
function renderSched(){const k=keyOf(new Date()),s=schedNow(),L=schedList(k);
  let h=backTop('جدول اليوم','برنامج الخروج')+`<section class="card"><div class="fld"><span class="lb">يظهر فوق في يومك</span><div class="seg">${[['1','يظهر'],['0','مخفي']].map(([v,l])=>`<button data-act="sc-on" data-v="${v}" aria-pressed="${db.sched.on===(v==='1')}">${l}</button>`).join('')}</div></div>
   <p class="lead">اضغط أي عمل تعدّله.</p></section>`;
  h+=`<div class="list">${L.map(it=>`<button class="row ${s&&s.cur&&s.cur.i===it.i?'cur':''}" data-act="sc-open" data-i="${it.i}"><span class="tmc"><b>${hm(it.start)}</b>${it.dur?`<span>${hm(it.start+it.dur)}</span>`:''}</span><span class="t"><b>${esc(it.name)}</b><span>${anchorText(it)}${it.link&&byId(it.link)?' · مربوط بـ'+esc(byId(it.link).name):''}</span></span>${s&&s.cur&&s.cur.i===it.i?'<span class="badge done">دلوقتي</span>':''}</button>`).join('')}</div>
   <div class="row-in"><button class="btn" data-act="sc-add">+ أضف عمل</button><button class="btn ghost" data-act="sc-reset">${view.scReset?'متأكد؟':'رجّع الأصلي'}</button></div>`;return h}
function openSchedItem(i){openSheet(()=>{const it=db.sched.items[i];if(!it){closeSheet();return {head:'',body:''}}const P=timesFor(keyOf(new Date())),st=schedStart(it,P),lk=it.link&&byId(it.link);
  return {head:`<span class="eyebrow">جدول اليوم · النهارده ${hm(st)}</span><h2 class="title">${esc(it.name)}</h2>`,
   body:`<div class="fld"><span class="lb">الاسم</span><input class="inp" data-act="sc-name" data-i="${i}" value="${esc(it.name)}"></div>
    <div class="fld"><span class="lb">مربوط بـ</span><select class="inp" data-act="sc-anchor" data-i="${i}">${ANCH.map(([v,l])=>`<option value="${v}"${it.anchor===v?' selected':''}>${l}</option>`).join('')}</select></div>
    ${it.anchor==='clock'?`<div class="fld"><span class="lb">الوقت</span><input class="inp" type="time" data-act="sc-time" data-i="${i}" value="${pad(Math.floor(it.off/60))}:${pad(it.off%60)}"></div>`
     :`<div class="fld"><span class="lb">${it.off<0?'قبل':'بعد'} ${an(it.anchor)} بكام دقيقة</span><div class="stepper"><button class="sb" data-act="sc-inc" data-i="${i}" data-n="-5">−</button><input type="number" inputmode="numeric" data-act="sc-off" data-i="${i}" value="${it.off}"><button class="sb" data-act="sc-inc" data-i="${i}" data-n="5">+</button></div><span class="small muted">بالسالب يعني قبل الصلاة.</span></div>`}
    <div class="fld"><span class="lb">المدة بالدقايق</span><input class="inp" type="number" inputmode="numeric" data-act="sc-dur" data-i="${i}" value="${it.dur||''}" placeholder="لحد العمل اللي بعده"></div>
    <div class="fld"><span class="lb">مربوط بعمل في يومك</span><select class="inp" data-act="sc-link" data-i="${i}"><option value="">مفيش</option>${db.deeds.map(d=>`<option value="${d.id}"${it.link===d.id?' selected':''}>${esc(d.name)}</option>`).join('')}</select><span class="small muted">تسجّله من الجدول على طول.</span></div>
    ${lk?`<button class="btn ghost" data-act="sc-deed" data-v="${it.link}">سجّل ${esc(lk.name)}</button>`:''}`,
   foot:`<button class="btn danger icon" data-act="sc-del" data-i="${i}" aria-label="امسح">${ico('trash')}</button><button class="btn" data-act="close-sheet">تمام</button>`}})}

/* ---------- cloud sync (Supabase) ---------- */
let auth=null;try{auth=JSON.parse(localStorage.getItem(AK)||'null')}catch(e){}
const sync={state:'idle',msg:'',busy:false};
const saveAuth=()=>{try{auth?localStorage.setItem(AK,JSON.stringify(auth)):localStorage.removeItem(AK)}catch(e){}};
const errAr=m=>/Invalid login/i.test(m)?'الإيميل أو الباسورد غلط.':/not confirmed/i.test(m)?'لسه ما أكّدتش الإيميل. افتح الإيميل اللي وصلك واضغط على اللينك، وبعدين ارجع اضغط دخول.':/already registered|duplicate key|users_email/i.test(m)?'الإيميل ده عنده حساب. اضغط "دخول".':/rate limit|too many/i.test(m)?'محاولات كتير. استنى شوية وجرّب تاني.':/password/i.test(m)?'الباسورد لازم ٦ حروف على الأقل.':/fetch|network/i.test(m)?'مفيش نت دلوقتي.':'حصلت مشكلة: '+m;
async function sbAuth(path,body){const r=await fetch(SB+'/auth/v1/'+path,{method:'POST',headers:{apikey:SBK,'Content-Type':'application/json'},body:JSON.stringify(body)});const j=await r.json().catch(()=>({}));if(!r.ok)throw Object.assign(new Error(j.msg||j.error_description||j.message||('HTTP '+r.status)),{status:r.status});return j}
function setSession(j){auth={at:j.access_token,rt:j.refresh_token,exp:Date.now()+((j.expires_in||3600)-60)*1000,email:(j.user&&j.user.email)||(auth&&auth.email),uid:(j.user&&j.user.id)||(auth&&auth.uid)};saveAuth()}
const storedAuth=()=>{try{return JSON.parse(localStorage.getItem(AK)||'null')}catch(e){return null}};
async function token(force){if(!force&&Date.now()<auth.exp)return auth.at;const st=storedAuth();if(st&&st.at!==auth.at&&Date.now()<st.exp){auth=st;return auth.at}try{setSession(await sbAuth('token?grant_type=refresh_token',{refresh_token:auth.rt}))}catch(e){if(e.status===400||e.status===401){auth=null;saveAuth();sync.msg='انتهت الجلسة. ادخل تاني.'}throw e}return auth.at}
async function afetch(url,opt={}){const go=async f=>fetch(url,{...opt,headers:{apikey:SBK,Authorization:'Bearer '+(await token(f)),'Content-Type':'application/json',...(opt.headers||{})}});let r=await go();if(r.status===401&&auth)r=await go(true);return r}
async function rest(path,opt={}){const r=await afetch(SB+'/rest/v1/'+path,{...opt,headers:{...(opt.headers||{})}});
  if(!r.ok){const j=await r.json().catch(()=>({}));throw new Error(j.message||('HTTP '+r.status))}return r.status===204?null:r.json().catch(()=>null)}
function mergeDB(a,b){const gone={...(b.gone||{}),...(a.gone||{})},cut=Date.now()-90*864e5;for(const k in gone)if(gone[k]<cut)delete gone[k];const ng=o=>!(o&&gone[o.id]);const m=cp(a),ua=(x=[],y=[])=>{const ids=new Set(x.map(o=>o&&o.id)),yb=new Map((y||[]).map(o=>[o&&o.id,o]));x=x.map(o=>{const r=o&&yb.get(o.id);if(!r)return o;const f={...o};for(const k in r)if(f[k]==null||f[k]==='')f[k]=r[k];return f});return x.concat((y||[]).filter(o=>o&&!ids.has(o.id)))};
  MKEYS.forEach(k=>m[k]=ua(a[k]||[],b[k]||[]).filter(ng));m.gone=gone;m.tags=[...new Set([...(a.tags||[]),...(b.tags||[])])];
  m.gsecs=ua(a.gsecs,b.gsecs).filter(ng).map(s=>{const o=(b.gsecs||[]).find(x=>x.id===s.id);return o?{...s,items:ua(s.items,o.items).filter(ng)}:s});
  for(const t2 in b.goals||{})m.goals[t2]=ua((a.goals||{})[t2],b.goals[t2]).filter(ng);
  for(const k in b.plans||{})m.plans[k]=ua((a.plans||{})[k],b.plans[k]);
  for(const k in b.reviews||{})m.reviews[k]={...b.reviews[k],...((a.reviews||{})[k]||{})};
  for(const k in b.logs||{}){const la=m.logs[k]||(m.logs[k]={}),lb=b.logs[k];for(const id in lb){if(!la[id]||JSON.stringify(lb[id]).length>JSON.stringify(la[id]).length)la[id]=lb[id]}}
  normNotes(m);return m}
const cloudState=()=>!auth?['miss','مش محفوظ أونلاين']:sync.busy?['','بيحفظ…']:!navigator.onLine?['part','من غير نت']:sync.state==='error'?['miss','مشكلة في الحفظ']:db.meta.dirty?['part','لسه ما اتحفظش']:['done','✓ محفوظ'];
const cloudChip=()=>{const [c,l]=cloudState();return `<span class="badge ${c}" data-cloud>${l}</span>`};
function paintCloud(){document.querySelectorAll('[data-cloud]').forEach(el=>el.outerHTML=cloudChip())}
function timeAgo(iso){const m=Math.round((Date.now()-Date.parse(iso))/60000);return m<1?'من شوية':m<60?`من ${num(m)} دقيقة`:m<1440?`من ${num(Math.round(m/60))} ساعة`:fmt(keyOf(new Date(iso)),{day:'numeric',month:'long'})}
const typing=()=>{const a=document.activeElement;return !!(a&&a.matches&&a.matches('input,textarea,select,[contenteditable="true"]'))};let bgPend=false;
function bgPaint(){if(typing()){bgPend=true;return}bgPend=false;if(sheetEl)paintSheet();else render()}
document.addEventListener('focusout',()=>setTimeout(()=>{if(bgPend&&!typing())bgPaint()},350));
async function syncNow(force){if(!auth||sync.busy)return paintCloud();if(!navigator.onLine){sync.state='offline';return paintCloud()}
  sync.busy=true;paintCloud();let retry=false;
  try{const rows=await rest(`user_data?select=data,updated_at&user_id=eq.${auth.uid}`),r=rows&&rows[0];
    if(r&&r.updated_at!==db.meta.base){const rem=migrate(r.data);
      if(db.meta.dirty||!db.meta.base){markGone();db=mergeDB(db,rem);db.meta.dirty=true}else{db=rem;db.meta={...db.meta,dirty:false}}lastIds=idsOf(db);
      db.meta.base=r.updated_at;db.meta.syncedAt=r.updated_at;saveLocal();bgPaint()}
    if(!r||db.meta.dirty){const ed=db.meta.editAt;db.meta.cv=2;
      const out=await rest('user_data?on_conflict=user_id&select=updated_at',{method:'POST',headers:{Prefer:'resolution=merge-duplicates,return=representation'},body:JSON.stringify({user_id:auth.uid,data:db,device:navigator.userAgent.slice(0,90)})});
      const u=out&&out[0]&&out[0].updated_at;if(u){db.meta.base=u;db.meta.syncedAt=u}if(db.meta.editAt===ed)db.meta.dirty=false;
      if(!db.meta.snapAt||Date.now()-db.meta.snapAt>30*60e3){await rest('snapshots?on_conflict=user_id,day',{method:'POST',headers:{Prefer:'resolution=merge-duplicates,return=minimal'},body:JSON.stringify({user_id:auth.uid,day:dayKey(),data:db})});db.meta.snapAt=Date.now()}
      saveLocal()}
    sync.state='ok';sync.msg=''}
  catch(e){if(/stale/.test(e.message||'')&&!force){retry=true;db.meta.dirty=true}else{sync.state='error';if(!sync.msg)sync.msg=errAr(e.message)}}
  sync.busy=false;paintCloud();if(retry){setTimeout(()=>syncNow(true),400);return}circleSync();if(view.sub==='settings'&&!sheetEl&&!typing())render()}
/* ===== الحلقة: library shared with friends; reviews stay personal ===== */
const myPre=()=>auth?auth.uid.slice(0,8)+':':'';
function myLibrary(){const out={},P=myPre();
  (db.kb||[]).forEach(x=>{if((x.t||'').trim())out[P+'s:'+x.id]={type:x.type,ti:x.ti||'',t:x.t,h:x.h||'',tags:x.tags||[],k:x.k,src:x.src||''}});
  (db.notes||[]).forEach(n=>{if((n.text||'').trim())out[P+'n:'+n.id]={type:'فائدة',ti:n.ti||'',t:n.text,h:n.h||'',tags:n.topics||[],k:n.k,src:n.src||''}});
  Object.entries(db.logs||{}).forEach(([k,l])=>Object.entries(l||{}).forEach(([id,e])=>{const d=db.deeds.find(x=>x.id===id);if(!d||!e||!e.a)return;
    fieldsOf(d).filter(f=>f.kb).forEach(f=>kbArr(e.a[f.id]).forEach(o=>{if((o.t||'').trim())out[P+'l:'+k+'|'+id+'|'+f.id+'|'+o.id]={type:f.kb,ti:o.ti||'',t:o.t,h:o.h||'',tags:o.tags||[],k,src:''}}))}));
  return out}
let cBusy=false;
async function circleSync(){if(!auth||!db.circle||cBusy||!navigator.onLine)return;cBusy=true;
  try{const C=db.circle,M=db.cmeta=db.cmeta||{pull:'1970-01-01T00:00:00Z',h:{}},mine=myLibrary(),rows=[],P=myPre();
    Object.entries(mine).forEach(([id,d])=>{const h=JSON.stringify(d);if(M.h[id]!==h){rows.push({circle_id:C.id,id,data:d,deleted:false,author_email:auth.email});M.h[id]=h}});
    Object.keys(M.h).forEach(id=>{if(!mine[id]){rows.push({circle_id:C.id,id,data:{},deleted:true,author_email:auth.email});delete M.h[id]}});
    Object.entries(db.shared||{}).forEach(([id,x])=>{if(x._dirty){const {_dirty,by,byId,...d}=x;rows.push({circle_id:C.id,id,data:d,deleted:!!x.deleted});delete x._dirty}});
    for(let i=0;i<rows.length;i+=200)await rest('circle_items?on_conflict=circle_id,id',{method:'POST',headers:{Prefer:'resolution=merge-duplicates,return=minimal'},body:JSON.stringify(rows.slice(i,i+200))});
    const got=await rest(`circle_items?circle_id=eq.${C.id}&updated_at=gt.${encodeURIComponent(M.pull)}&select=id,author_id,author_email,data,deleted,updated_at&order=updated_at.asc&limit=2000`)||[];
    db.shared=db.shared||{};let ch=false;
    got.forEach(r=>{if(r.updated_at>M.pull)M.pull=r.updated_at;
      if(r.id.startsWith(P)){const loc=mine[r.id];if(!r.deleted&&loc&&JSON.stringify(r.data)!==M.h[r.id]&&r.id.slice(P.length).startsWith('s:')){const o=(db.kb||[]).find(x=>'s:'+x.id===r.id.slice(P.length));if(o){Object.assign(o,{t:r.data.t,h:r.data.h,tags:r.data.tags,ti:r.data.ti||o.ti});M.h[r.id]=JSON.stringify(myLibrary()[r.id]);ch=true}}return}
      if(r.deleted){if(db.shared[r.id]){delete db.shared[r.id];ch=true}}else{db.shared[r.id]={...r.data,by:(r.author_email||'').split('@')[0],byId:r.author_id};ch=true}});
    if(ch)save();else if(rows.length||got.length)saveLocal();if(ch&&!sheetEl&&!typing())render()}
  catch(e){console.warn('circle',e)}finally{cBusy=false}}
async function circleCall(fn,arg){const r=await afetch(SB+'/rest/v1/rpc/'+fn,{method:'POST',headers:{},body:JSON.stringify(arg)});const j=await r.json().catch(()=>({}));if(!r.ok)throw new Error(j.message||'HTTP '+r.status);return j}
async function circleMembers(){if(!db.circle||!auth)return;try{view.cmem=await rest(`circle_members?circle_id=eq.${db.circle.id}&select=email,user_id,joined_at&order=joined_at`);if(view.sub==='settings')render()}catch(e){}}
function circleCard(){if(!auth)return `<section class="card"><h2>الحلقة</h2><p class="small muted">سجّل دخول الأول، وبعدين تقدر تذاكر مع صاحبك.</p></section>`;
  const C=db.circle;if(!C)return `<section class="card"><h2>الحلقة</h2><p class="small muted">كل حاجة أي حد يضيفها بتظهر عند الكل، والمراجعة فردية.</p>
   <div class="row-in"><input class="inp" id="cName" placeholder="اسم الحلقة"><button class="btn sm" data-act="c-new">اعمل حلقة</button></div>
   <div class="row-in"><input class="inp" id="cCode" placeholder="كود من صاحبك" style="text-transform:uppercase" dir="ltr"><button class="btn ghost sm" data-act="c-join">ادخل</button></div></section>`;
  if(!view.cmem)circleMembers();
  return `<section class="card"><div class="ch"><h2>${esc(C.name)}</h2><span class="badge done">حلقة</span></div>
   <div class="ch"><span class="small muted">الكود</span><b dir="ltr" style="font-size:22px;letter-spacing:3px">${esc(C.code)}</b><button class="btn ghost sm" data-act="c-share">ابعته</button></div>
   ${(view.cmem||[]).map(m=>`<div class="ch small"><span>${esc((m.email||'').split('@')[0])}${m.user_id===auth.uid?' (انت)':''}</span><span class="muted">${fmt(m.joined_at.slice(0,10),{day:'numeric',month:'short'})}</span></div>`).join('')}
   ${C.owner?`<button class="link danger" data-act="c-leave" style="align-self:flex-start">اقفل الحلقة عندي</button>`:''}</section>`}
async function doLogin(signup){const email=$('#acc-email').value.trim(),password=$('#acc-pass').value;if(!email||password.length<6){toast('اكتب الإيميل وباسورد ٦ حروف على الأقل');return}
  sync.msg='';toast(signup?'بنعمل الحساب…':'بندخّلك…');
  try{const j=await sbAuth(signup?'signup':'token?grant_type=password',{email,password});
    if(j.access_token){setSession(j);db.meta.syncedAt=null;db.meta.base=null;toast('أهلًا بيك. بنحفظ بياناتك…');await syncNow();toast('بياناتك اتحفظت أونلاين ✓')}
    else sync.msg=`بعتنالك إيميل تأكيد على ${email}. افتحه واضغط على اللينك (لو فتح صفحة مش شغالة تجاهلها)، وبعدين ارجع هنا واضغط "دخول".`}
  catch(e){sync.msg=errAr(e.message)}render()}
function accountCard(){if(!auth)return `<section class="card"><h2>احفظ بياناتك أونلاين</h2><p class="lead">سجّل بإيميلك، وبياناتك تتحفظ أونلاين وتلاقيها من أي موبايل.</p>
   <input class="inp" type="email" id="acc-email" placeholder="الإيميل" autocomplete="email" dir="ltr"><input class="inp" type="password" id="acc-pass" placeholder="الباسورد (٦ حروف على الأقل)" autocomplete="current-password" dir="ltr">
   ${sync.msg?`<div class="notice"><span>${esc(sync.msg)}</span></div>`:''}<div class="row-in"><button class="btn" data-act="acc-login">دخول</button><button class="btn ghost" data-act="acc-signup">حساب جديد</button></div></section>`;
  return `<section class="card"><div class="ch"><h2>الحفظ أونلاين</h2>${cloudChip()}</div><p class="lead"><bdi dir="ltr">${esc(auth.email||'')}</bdi>${db.meta.syncedAt?` · آخر حفظ ${timeAgo(db.meta.syncedAt)}`:''}</p>
   <p class="small muted">بيتحفظ لوحده، ونسخة كاملة كل نص ساعة.</p>${sync.msg?`<div class="notice"><span>${esc(sync.msg)}</span></div>`:''}
   <div class="row-in"><button class="btn" data-act="acc-sync">احفظ دلوقتي</button><button class="btn ghost" data-act="acc-logout">${view.logoutAsk?'متأكد؟':'خروج من الحساب'}</button></div></section>`}
function shrinkImage(file,max=1800){return new Promise((res,rej)=>{const url=URL.createObjectURL(file),img=new Image();img.onload=()=>{const s=Math.min(1,max/Math.max(img.width,img.height)),c=document.createElement('canvas');
  c.width=Math.round(img.width*s);c.height=Math.round(img.height*s);c.getContext('2d').drawImage(img,0,0,c.width,c.height);URL.revokeObjectURL(url);res(c.toDataURL('image/jpeg',0.85).split(',')[1])};img.onerror=rej;img.src=url})}
function toolsHTML(key,A){const busy=view.aiBusy&&view.aiBusy.key===key,isRec=rec&&rec.key===key;
  return `<span class="tools">${busy?`<span class="busytxt"><i class="spin"></i>${esc(view.aiBusy.label)}</span>`:isRec?`<span class="busytxt rect" data-rect>0:00</span>`:''}
    <label class="tool ${busy||rec?'off':''}" aria-label="صوّر الصفحة" title="صوّر الصفحة">${ico('cam')}<input type="file" accept="image/*" data-act="ocr" ${A} hidden></label>
    <button class="tool ${isRec?'rec':''} ${busy||(rec&&!isRec)?'off':''}" data-act="mic" ${A} aria-label="${isRec?'وقّف التسجيل':'سجّل بصوتك'}" title="${isRec?'وقّف التسجيل':'سجّل بصوتك'}">${ico(isRec?'stop':'mic')}</button></span>`}
// where the text from a photo or voice goes
const tgtDeed=(d,f)=>({key:d.id+f.id,kind:f.kb,put:txt=>{const e=E(d.id);e.a=e.a||{};const arr=kbArr(e.a[f.id]).filter(o=>(o.t||'').trim()),nid=uid('e');arr.push({id:nid,t:txt});e.a[f.id]=arr;delete e.miss;save();return `[data-act="kbtext"][data-e="${nid}"]`}});
const tgtNew=()=>({key:'kbn',kind:(view.kbn||{}).type,put:txt=>{const s=view.kbn;s.t=(s.t||'').trim()?s.t.trim()+'\n\n'+txt:txt;return '#kbnText'}});
let rec=null;
const paintKB=()=>{if(sheetEl)paintSheet();else render()};
const blobB64=blob=>new Promise((res,rej)=>{const r=new FileReader();r.onload=()=>res(String(r.result).split(',')[1]);r.onerror=rej;r.readAsDataURL(blob)});
async function toWav16k(ab){const AC=window.AudioContext||window.webkitAudioContext,OC=window.OfflineAudioContext||window.webkitOfflineAudioContext;const ac=new AC();
  const audio=await new Promise((res,rej)=>ac.decodeAudioData(ab,res,rej));try{ac.close()}catch(e){}
  const sr=16000,len=Math.max(1,Math.ceil(audio.duration*sr)),off=new OC(1,len,sr),src=off.createBufferSource();src.buffer=audio;src.connect(off.destination);src.start(0);
  const r=await off.startRendering(),ch=r.getChannelData(0),buf=new ArrayBuffer(44+ch.length*2),v=new DataView(buf),ws=(o,s)=>{for(let i=0;i<s.length;i++)v.setUint8(o+i,s.charCodeAt(i))};
  ws(0,'RIFF');v.setUint32(4,36+ch.length*2,true);ws(8,'WAVE');ws(12,'fmt ');v.setUint32(16,16,true);v.setUint16(20,1,true);v.setUint16(22,1,true);v.setUint32(24,sr,true);v.setUint32(28,sr*2,true);v.setUint16(32,2,true);v.setUint16(34,16,true);ws(36,'data');v.setUint32(40,ch.length*2,true);
  for(let i=0;i<ch.length;i++){const s=Math.max(-1,Math.min(1,ch[i]));v.setInt16(44+i*2,s<0?s*0x8000:s*0x7fff,true)}return new Blob([buf],{type:'audio/wav'})}
async function sendAI(payload,T,label){if(!auth){toast('سجّل دخول الأول من ⚙︎');return}if(!navigator.onLine){toast('محتاج نت');return}
  view.aiBusy={key:T.key,label};paintKB();
  const ac=new AbortController(),tm=setTimeout(()=>ac.abort(),130000);
  try{const r=await afetch(SB+'/functions/v1/ocr',{method:'POST',signal:ac.signal,headers:{},body:JSON.stringify({...payload,kind:T.kind})});
    const j=await r.json().catch(()=>({}));
    if(!r.ok)throw new Error(j.error==='no_key'?'لسه مفتاح Gemini ما اتحطّش في Supabase':j.error==='rate'?'استنى دقيقة وجرّب تاني':j.error==='key'?'مفتاح Gemini فيه مشكلة':j.error==='too_big'?'التسجيل طويل. خليه أقل من دقيقتين':j.error==='model'?'الخدمة زحمة دلوقتي. جرّب كمان دقيقة':'حصلت مشكلة. جرّب تاني');
    const txt=(j.text||'').trim();if(!txt||txt==='لا يوجد نص')throw new Error(payload.image?'مش لاقي نص واضح. قرّب الكاميرا وخلّي الإضاءة كويسة':'مسمعتش كلام واضح. جرّب تاني');
    const sel=T.put(txt);view.aiBusy=null;paintKB();const el=document.querySelector(sel);if(el)el.scrollIntoView({block:'center'})
    toast('اتكتب ✓ راجعه وعدّل لو محتاج')}
  catch(err){view.aiBusy=null;paintKB();toast(err.name==='AbortError'?'الخدمة بطيئة دلوقتي. جرّب كمان شوية':err.message||'حصلت مشكلة')}finally{clearTimeout(tm)}}
async function ocrImage(file,T){try{const image=await shrinkImage(file);await sendAI({image,mime:'image/jpeg'},T,'بيقرا الصفحة…')}catch(e){toast('مقدرناش نفتح الصورة')}}
async function toggleMic(T){const key=T.key;if(rec&&rec.key===key){rec.mr.stop();return}if(rec)return;
  if(!auth){toast('سجّل دخول الأول من ⚙︎');return}if(!navigator.onLine){toast('محتاج نت');return}
  if(!navigator.mediaDevices||!window.MediaRecorder){toast('استخدم مايك الكيبورد');return}
  let stream;try{stream=await navigator.mediaDevices.getUserMedia({audio:true})}catch(e){toast('اسمح بالمايك من الإعدادات');return}
  const mime=['audio/mp4','audio/webm','audio/ogg'].find(m=>MediaRecorder.isTypeSupported&&MediaRecorder.isTypeSupported(m))||'';
  const mr=new MediaRecorder(stream,mime?{mimeType:mime}:undefined),chunks=[];mr.ondataavailable=ev=>{if(ev.data&&ev.data.size)chunks.push(ev.data)};
  rec={key,mr,start:Date.now()};buzz();
  rec.tick=setInterval(()=>{if(!rec)return;const s=Math.floor((Date.now()-rec.start)/1000),el=document.querySelector('[data-rect]');if(el)el.textContent=`${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;if(s>=120)rec.mr.stop()},300);
  mr.onstop=async()=>{stream.getTracks().forEach(x=>x.stop());clearInterval(rec.tick);const dur=Date.now()-rec.start;rec=null;buzz();
    const blob=new Blob(chunks,{type:(mr.mimeType||mime||'audio/mp4').split(';')[0]});if(dur<1200||blob.size<1500){toast('التسجيل قصير');paintKB();return}
    let out=blob;try{out=await toWav16k(await blob.arrayBuffer())}catch(e){out=blob}
    await sendAI({audio:await blobB64(out),mime:out.type||'audio/mp4'},T,'بيكتب كلامك…')};
  mr.start(1000);paintKB()}
function useLocation(){if(!navigator.geolocation){toast('الموقع مش متاح هنا');return}toast('بنجيب موقعك…');
  navigator.geolocation.getCurrentPosition(p=>{db.settings.loc={lat:+p.coords.latitude.toFixed(4),lng:+p.coords.longitude.toFixed(4),at:dayKey()};db.settings.useLoc=true;save();render();toast('المواقيت بقت على موقعك ✓')},
   ()=>toast('اسمح بالموقع من الإعدادات'),{timeout:15000,maximumAge:3600e3})}

/* ---------- zad ---------- */
function renderZad(){if(view.zad==='kb')view.zad='goals';const z=view.zad;let h=top('زادي',{goals:'أهدافي',duas:'أدعيتي',faults:'تزكية'}[z],gearBtn)+`<div class="seg-tabs">${[['goals','أهدافي'],['duas','أدعيتي'],['faults','تزكية']].map(([v,t])=>`<button data-act="zad" data-v="${v}" aria-pressed="${z===v}">${t}</button>`).join('')}</div>`;
  return h+(z==='goals'?renderGoals():z==='duas'?renderDuas():renderFaults())}
const metricVal=(m,j,s)=>m==='people'?db.people.filter(p=>p.j===j.id).length:s[m];
const mvBtns=(act,attrs,i,len)=>`<span class="mv"><button data-act="${act}" ${attrs} data-n="-1" ${i?'':'disabled'} aria-label="لفوق">${ico('up')}</button><button data-act="${act}" ${attrs} data-n="1" ${i<len-1?'':'disabled'} aria-label="لتحت">${ico('down')}</button></span>`;
function renderGoals(){const j=activeJ(),gt=view.gtype||(j?j.type:'d40'),s=j&&j.type===gt?jStats(j):null,G=db.goals[gt],O=view.gOrder;
  if(O)return `<div class="ordbar rise"><span>رتّب بالأسهم</span><button class="btn sm" data-act="g-order">خلّصت</button></div>`+db.gsecs.map((sec,si)=>`<section class="card rise"><div class="ch"><h2>${esc(sec.name)}</h2>${mvBtns('gsec-mv',`data-id="${sec.id}"`,si,db.gsecs.length)}</div>${sec.items.map((g,i)=>`<div class="check"><div class="t"><span>${esc(g.text)}</span></div>${mvBtns('goal-mv',`data-w="s:${sec.id}" data-id="${g.id}"`,i,sec.items.length)}</div>`).join('')}</section>`).join('')
    +`<section class="card rise"><div class="ch"><h2>أرقام الخروج</h2></div>${G.map((g,i)=>`<div class="check"><div class="t"><span>${esc(g.text)}</span></div>${mvBtns('goal-mv',`data-w="j:${gt}" data-id="${g.id}"`,i,G.length)}</div>`).join('')}</section>`;
  let h=`<div class="ordbar rise"><span class="small muted">عايز تغيّر الترتيب؟</span><button class="btn ghost sm" data-act="g-order">رتّب</button></div><section class="card rise"><h2>أرقام الخروج</h2><div class="chips">${Object.entries(JTYPES).map(([id,t])=>`<button class="chip" data-act="gtype" data-v="${id}" aria-pressed="${gt===id}">${t.label}</button>`).join('')}</div>
   ${G.map(g=>{const v=s?metricVal(g.metric,j,s):null;return `<div class="check"><div class="t"><span>${esc(g.text)}</span>${v==null?'<span class="small muted">بيتحسب لما تبدأ الخروج ده</span>':`<span class="small muted">${num(v)} من ${num(g.target)}</span><div class="meter"><i style="width:${Math.min(100,v/g.target*100)}%"></i></div>`}</div>${xbtn('goal-del',`data-w="j:${gt}" data-id="${g.id}"`)}</div>`}).join('')}
   <div class="row-in"><input class="inp" id="gj-text" placeholder="هدف جديد"></div><div class="row-in"><select class="inp" id="gj-m">${METRICS.map(([v,t])=>`<option value="${v}">${t}</option>`).join('')}</select><input class="inp" type="number" inputmode="numeric" id="gj-t" placeholder="الرقم" style="flex:0 0 90px"><button class="btn sm" data-act="goal-add" data-w="j:${gt}">أضف</button></div></section>`;
  db.gsecs.forEach(sec=>{const d=sec.items.filter(x=>x.done).length;h+=`<section class="card rise"><div class="ch"><h2>${esc(sec.name)}</h2>${xbtn('gsec-del',`data-id="${sec.id}"`,'امسح القسم')}</div>${sec.items.map(g=>`<div class="check ${g.done?'done':''}">${tick('goal-done',`data-w="s:${sec.id}" data-id="${g.id}"`,g.done)}<div class="t"><span>${esc(g.text)}</span></div>${xbtn('goal-del',`data-w="s:${sec.id}" data-id="${g.id}"`)}</div>`).join('')||'<p class="lead">لسه فاضي.</p>'}
   <div class="row-in"><input class="inp" id="g-${sec.id}" placeholder="هدف جديد"><button class="btn sm" data-act="goal-add" data-w="s:${sec.id}">أضف</button></div></section>`});
  return h+`<div class="row-in"><input class="inp" id="gsec-new" placeholder="قسم جديد"><button class="btn ghost sm" data-act="gsec-add">أضف قسم</button></div>`}
/* tags, like Google Keep: several per entry, filter by any of them */
function tagRow(o,A,key){const tg=o.tags||[],open=view.tagFor===key;
  let h=`<div class="tagrow">${tg.map(x=>`<span class="tg">${esc(x)}</span>`).join('')}<button class="tg add" data-act="tag-open" data-key="${esc(key)}">${ico('tag')}${tg.length?'تعديل':'تصنيف'}</button></div>`;
  if(open){const all=[...new Set([...(db.tags||[]),...(db.noteCfg.topics||[]),...tg])];
    h+=`<div class="tagbox">${all.length?`<div class="tagrow">${all.map(x=>`<button class="chip" data-act="tag-tog" ${A} data-e="${o.id}" data-v="${esc(x)}" aria-pressed="${tg.includes(x)}">${esc(x)}</button>`).join('')}</div>`:'<p class="small muted">لسه معندكش تصنيفات. اكتب أول واحد.</p>'}
      <div class="row-in"><input class="inp" id="tagnew" placeholder="تصنيف جديد، زي: الصبر"><button class="btn ghost sm" data-act="tag-new" ${A} data-e="${o.id}">أضف</button></div>
      <button class="link" data-act="tag-open" data-key="" style="align-self:flex-start">تمام</button></div>`}
  return h}
function setTag(d,fid,eid,tag,on){const e=E(d.id);e.a=e.a||{};const arr=kbArr(e.a[fid]),o=arr.find(x=>x.id===eid);if(!o)return;
  o.tags=(o.tags||[]).filter(x=>x!==tag);if(on)o.tags.push(tag);db.tags=db.tags||[];if(!db.tags.includes(tag))db.tags.push(tag);e.a[fid]=arr;save()}
const tiOf=o=>{if(!o)return '';if(o.ti)return o.ti;const L=(o.t||'').trim().split('\n');return L.length>1&&L[0].length<=70?L[0].trim():''};
function kbItems(){const out=[];Object.keys(db.logs).sort().reverse().forEach(k=>{const l=db.logs[k];for(const id in l){const d=byId(id),e=l[id];if(!d||!e||!e.a)continue;
    fieldsOf(d).filter(f=>f.kb).forEach(f=>kbArr(e.a[f.id]).forEach(o=>{const v=(o.t||'').trim();if(v)out.push({k,id,f:f.id,eid:o.id,type:f.kb,ti:tiOf(o),text:v,h:o.h||'',tags:o.tags||[]})}))}});
  Object.entries(db.shared||{}).forEach(([id,x])=>{if(!x.deleted&&(x.t||'').trim())out.push({k:x.k||'2000-01-01',cid:id,type:x.type,ti:tiOf(x),text:x.t.trim(),h:x.h||'',tags:x.tags||[],src:x.src||'',by:x.by})});
  (db.notes||[]).forEach(n=>{if((n.text||'').trim())out.push({k:n.k||'2000-01-01',nid:n.id,type:'فائدة',ti:n.ti||'',text:n.text.trim(),h:n.h||'',tags:n.topics||[],src:n.src||''})});
  (db.kb||[]).forEach(x=>{if((x.t||'').trim())out.push({k:x.k,sid:x.id,type:x.type,ti:tiOf(x),text:x.t.trim(),h:x.h||'',tags:x.tags||[],src:x.src||''})});
  return out.sort((a,b)=>b.k.localeCompare(a.k))}
/* spaced repetition (Leitner): remembered well -> longer gap, forgot -> back tomorrow */
const KB_INT=[1,1,3,7,14,30,60,120];
const kbKey=x=>x.nid?`n|${x.nid}`:x.cid?`c|${x.cid}`:x.sid?`s|${x.sid}`:`${x.k}|${x.id}|${x.f}`+(x.eid&&x.eid!=='0'?'|'+x.eid:'');
/* SRS (SM-2 style): every item has its own ease. q: 0 نسيت · 1 صعب · 2 كويس · 3 سهل */
function srsNext(r,q){r=Object.assign({reps:0,ease:2.5,ivl:0,lapses:0},r||{});if(!r.ivl&&r.box)r.ivl=KB_INT[Math.min(r.box,KB_INT.length-1)]||1;
  let iv=r.ivl||0,e=r.ease||2.5;
  if(q===0){iv=1;e=Math.max(1.3,e-.2);r.lapses=(r.lapses||0)+1}
  else if(q===1){iv=Math.max(1,Math.round((iv||1)*1.2));e=Math.max(1.3,e-.15)}
  else if(q===2){iv=!r.reps||!iv?1:(iv<3?3:Math.round(iv*e))}
  else{iv=!r.reps||!iv?3:Math.round(Math.max(iv,2)*e*1.3);e+=.15}
  iv=Math.min(iv,365);return {...r,ivl:iv,ease:Math.round(e*100)/100,reps:(r.reps||0)+1,box:iv>=21?5:iv>=7?3:iv>=3?2:1}}
const ivLabel=n=>n<=1?'بكرة':n<30?`${num(n)} يوم`:n<365?`${num(Math.round(n/30))} شهر`:'سنة';
function srsRate(key,q){const td=dayKey();db.kbr=db.kbr||{};const r=srsNext(db.kbr[key],q);r.last=td;r.due=shift(td,r.ivl);db.kbr[key]=r;
  db.kbDay=db.kbDay||{};const d=db.kbDay[td]||(db.kbDay[td]={keys:[],done:{}});d.done=d.done||{};d.done[key]=q;save();return r}
const kbAdd=(k,n)=>shift(k,n);
function kbEligible(){const today=dayKey();db.kbr=db.kbr||{};return kbItems().filter(x=>x.k<today)}
function kbDueSort(arr){const st=x=>db.kbr[kbKey(x)]||{};return arr.slice().sort((a,b)=>(st(a).due||a.k).localeCompare(st(b).due||b.k))}
function kbToday(){const today=dayKey();db.kbr=db.kbr||{};db.kbDay=db.kbDay||{};if(db.kbDay[today])return db.kbDay[today];
  const due=kbDueSort(kbEligible().filter(x=>{const s=db.kbr[kbKey(x)];return !s||s.due<=today}));if(!due.length)return null;
  const pick=[];['حديث','آية','قصة'].forEach(ty=>{const x=due.find(y=>y.type===ty);if(x)pick.push(x)});due.forEach(x=>{if(pick.length<3&&!pick.includes(x))pick.push(x)});
  db.kbDay[today]={keys:pick.map(kbKey),done:{}};saveLocal();return db.kbDay[today]}
function reviewCard(){if(view.day!==dayKey())return '';const td=kbToday();if(!td)return '';const map=new Map(kbItems().map(x=>[kbKey(x),x]));
  const keys=td.keys.filter(k=>map.has(k));if(!keys.length)return '';const dn=keys.filter(k=>td.done[k]!=null).length,cur=keys.find(k=>td.done[k]==null);
  let h=`<section class="card rise"><div class="ch"><h2>مراجعة اليوم</h2><span class="badge ${cur?'':'done'}">${num(dn)} من ${num(keys.length)}</span></div>`;
  if(cur){const x=map.get(cur),w=x.text.split(/\s+/),cue=w.slice(0,3).join(' ')+(w.length>3?' …':''),open=view.kbRev===cur;
    h+=`<div class="ch"><span class="badge done">${esc(x.type)}</span><span class="small muted">كتبته ${fmt(x.k,{weekday:'long',day:'numeric',month:'long'})}</span></div>`;
    h+=open?`<p class="ftext rv">${richView(x)}</p><span class="lb">فاكر قد إيه؟</span><div class="seg">${[['0','نسيت'],['1','بالعافية'],['2','فاكر كويس']].map(([v,l])=>`<button data-act="kb-rate" data-v="${v}" data-k="${esc(cur)}">${l}</button>`).join('')}</div>`
      :`<p class="small muted">حاول تفتكره كله الأول، وبعدين اكشفه:</p><p class="ftext" style="color:var(--muted)">${esc(cue)}</p><button class="btn" data-act="kb-reveal" data-k="${esc(cur)}">اكشف</button>`}
  else h+=`<p class="lead">خلّصت مراجعة النهارده ✓</p><button class="btn ghost" data-act="kb-more">كمان واحدة</button>`;
  return h+'</section>'}
const kbNext=x=>{const s=(db.kbr||{})[kbKey(x)];if(!s)return 'لسه ماتراجعش';const d=diffDays(dayKey(),s.due);return d<=0?'عليه مراجعة':`المراجعة الجاية بعد ${num(d)} يوم`};
function kbList(){const all=kbItems(),q=(view.kbq||'').trim(),sel=view.kbtags||[],L=all.filter(x=>(!view.kbt||x.type===view.kbt)&&sel.every(s=>x.tags.includes(s))&&(!q||x.text.includes(q)||x.tags.some(s=>s.includes(q))));
  if(!L.length)return `<p class="empty">${all.length?'مفيش نتايج.':'لسه مكتبتش حاجة. اكتب حديث اليوم وآيته وقصته في "التعليم الانفرادي"، أو ضيفهم من زرار + اللي تحت.'}</p>`;
  const G=new Map();L.forEach(x=>{if(!G.has(x.k))G.set(x.k,[]);G.get(x.k).push(x)});
  return [...G].map(([k,arr])=>`<section class="slot"><div class="slot-h"><span>${fmt(k,{weekday:'long',day:'numeric',month:'long'})}</span></div><div class="ncards">${arr.map(kbCard).join('')}</div></section>`).join('')}
function renderKB(){const all=kbItems(),types=[...new Set(KBF.map(f=>f.kb).concat(all.map(x=>x.type)))],cnt=t2=>all.filter(x=>x.type===t2).length;
  let h=`
   <div class="stats">${types.map(t2=>`<button class="stat" data-act="kbt" data-v="${esc(t2)}" style="text-align:start;${view.kbt===t2?'outline:2px solid var(--forest)':''}"><b>${num(cnt(t2))}</b><span>${esc(t2==='آية'?'آيات':t2==='حديث'?'أحاديث':t2==='قصة'?'قصص':t2)}</span></button>`).join('')}</div>`;
  if(all.length){const pick=view.kbPick!=null&&all[view.kbPick%all.length];
    h+=`<section class="card fcard"><div class="ch"><span class="eyebrow">راجع واحدة</span><button class="link" data-act="kb-rand">${pick?'غيرها':'طلّع واحدة عشوائية'}</button></div>${pick?`<span class="badge done" style="align-self:flex-start">${esc(pick.type)}</span><p class="ftext">${esc(pick.text)}</p><span class="small muted">${fmt(pick.k,{weekday:'long',day:'numeric',month:'long'})}</span>`:'<p class="lead">حاجة عشوائية من اللي كتبته.</p>'}</section>`}
  return h+`<input class="inp" type="search" data-act="kbq" value="${esc(view.kbq||'')}" placeholder="دوّر في بنك المعرفة"><div class="filters"><button class="chip" data-act="kbt" data-v="" aria-pressed="${!view.kbt}">الكل · ${num(all.length)}</button>${types.map(t2=>`<button class="chip" data-act="kbt" data-v="${esc(t2)}" aria-pressed="${view.kbt===t2}">${esc(t2)}</button>`).join('')}</div>${(()=>{const used=[...new Set(all.flatMap(x=>x.tags))];return used.length?`<div class="tagf"><span class="small muted">التصنيفات</span><div class="filters">${used.map(s=>`<button class="chip" data-act="kbtag" data-v="${esc(s)}" aria-pressed="${(view.kbtags||[]).includes(s)}">${esc(s)} · ${num(all.filter(x=>x.tags.includes(s)).length)}</button>`).join('')}</div></div>`:''})()}<div id="kblist">${kbList()}</div>`}
function renderDuas(){const sec=(k,t)=>{const L=db.duas.filter(x=>x.k===k);return `<section class="slot rise"><div class="slot-h"><span>${t}${L.length?` · <bdi>${L.length}</bdi>`:''}</span></div>${L.length?`<div class="ncards">${L.map(x=>`<div class="ncard dcard"><p>${esc(x.text)}</p><div class="dc-f"><button class="ib dz sm" data-act="dua-del" data-id="${x.id}" aria-label="امسح">${ico('trash')}</button></div></div>`).join('')}</div>`:'<p class="empty">لسه فاضية.</p>'}</section>`};
  return sec('mine','أدعيتي')+sec('mathur','أدعية مأثورة')+`<section class="card rise"><h2>دعاء جديد</h2><textarea class="inp" id="duaText" placeholder="اكتب الدعاء"></textarea><div class="seg" id="duaKind">${[['mine','من أدعيتي'],['mathur','مأثور']].map(([v,t],i)=>`<button data-act="dkind" data-v="${v}" aria-pressed="${(view.dkind||'mine')===v}">${t}</button>`).join('')}</div><button class="btn block" data-act="dua-add">أضف الدعاء</button></section>`}
const fStage=f=>{const s=f.stg||[];return s.length?s[s.length-1][1]:0};
const fStageAt=f=>{const s=f.stg||[];return s.length?s[s.length-1][0]:null};
function fRange(id,from,to){let fa=0,wi=0;for(const k in db.logs){if(k<from||k>to)continue;const tz=db.logs[k].tazkiya;fa+=Number((ans(tz,'f')||{})[id]||0);wi+=Number((ans(tz,'fw')||{})[id]||0)}return {fa,wi}}
const fWeeks=(id,n=8)=>Array.from({length:n},(_,i)=>{const to=shift(dayKey(),-7*(n-1-i)),r=fRange(id,shift(to,-6),to);return r});
function wkBars(id,bare){const W8=fWeeks(id),mx=Math.max(1,...W8.map(r=>Math.max(r.fa,r.wi))),bw=14,gap=10,H=56;
  return `<svg viewBox="0 0 ${W8.length*(bw*2+gap)} ${H+14}" class="wk" preserveAspectRatio="none">${W8.map((r,i)=>{const x=i*(bw*2+gap),hf=r.fa/mx*H,hw=r.wi/mx*H;
    return `<rect x="${x}" y="${H-hf}" width="${bw-2}" height="${Math.max(hf,1)}" rx="3" fill="var(--alert)" opacity=".75"/><rect x="${x+bw}" y="${H-hw}" width="${bw-2}" height="${Math.max(hw,1)}" rx="3" fill="var(--forest)"/>`}).join('')}</svg>
    ${bare?'':`<div class="ch small muted"><span><i class="dot" style="background:var(--alert)"></i> وقعت <i class="dot" style="background:var(--forest)"></i> انتصرت</span><span>آخر ٨ أسابيع</span></div>`}`}
const stgDots=n=>`<span class="sdots">${FSTG.map((_,i)=>`<i class="${i<n?'on':''}"></i>`).join('')}</span>`;
function fGrad(f){const s=f.stg||[];if(fStage(f)<5)return false;let i=s.length-1;while(i>0&&s[i-1][1]===5)i--;return diffDays(s[i][0],dayKey())>=14}
function fStreak(id){const td=dayKey();let n=0;const ks=Object.keys(db.logs).filter(k=>db.logs[k].tazkiya).sort();if(!ks.length)return 0;
  for(let k=td;k>=ks[0]&&n<400;k=shift(k,-1)){if(Number((ans((db.logs[k]||{}).tazkiya,'f')||{})[id]||0)>0)break;n++}return n}
function fRel(f){const keys=[vName(f),f.name].filter(Boolean);return {kb:kbItems().filter(x=>x.tags.some(s=>keys.includes(s))),nt:db.notes.filter(n=>(n.topics||[]).some(s=>keys.includes(s))).slice().reverse()}}
async function suggestFault(id,auto){let f=db.faults.find(x=>x.id===id);if(!f)return;if(!auth){if(!auto)toast('سجّل دخول الأول من ⚙︎');return}if(!navigator.onLine){if(!auto)toast('محتاج نت');return}
  view.fSug=id;if(sheetEl)paintSheet();const ac=new AbortController(),tm=setTimeout(()=>ac.abort(),100000);
  try{const r=await afetch(SB+'/functions/v1/ocr',{method:'POST',signal:ac.signal,headers:{},body:JSON.stringify({task:'tazkiya',virtue:f.virtue||'',fault:f.name||''})});
    const j=await r.json().catch(()=>({}));f=db.faults.find(x=>x.id===id)||f;if(!r.ok||!j.plan)throw new Error(r.status===401?'الجلسة خلصت. ادخل تاني من ⚙︎':j.error==='rate'?'استنى دقيقة وجرّب تاني':'الخدمة زحمة دلوقتي. جرّب كمان شوية');
    const P=j.plan,s=x=>String(x||'').trim();if(!f.virtue&&s(P.virtue))f.virtue=s(P.virtue);if(!f.name&&s(P.fault))f.name=s(P.fault);
    f.rules=f.rules||[];(P.rules||[]).forEach(x=>{const ra=s(x.if||x.a),rb=s(x.then||x.b);if(ra&&rb&&!f.rules.some(y=>y.a===ra))f.rules.push({id:uid('r'),a:ra,b:rb})});
    ['drill','signs','when','kaff'].forEach(k=>{if(!s(f[k])&&s(P[k]))f[k]=s(P[k])});save();toast('اقترحت عليك ✓ عدّل اللي مش مناسبك')}
  catch(e){toast(e.name==='AbortError'?'الخدمة بطيئة دلوقتي. جرّب كمان شوية':e.message||'حصلت مشكلة')}
  finally{clearTimeout(tm);view.fSug=null;if(sheetEl)paintSheet();else render()}}
function renderFaults(){const td=dayKey(),foc=db.faults.filter(f=>f.mode==='focus');
  let h='';const due=foc.filter(f=>!fStageAt(f)||diffDays(fStageAt(f),td)>=7);
  if(due.length)h+=`<section class="note-c rise"><b>وقفة الأسبوع</b><span>حدّد مرحلتك في ${due.map(f=>`<button class="link" data-act="fault" data-id="${f.id}">${esc(vName(f))}</button>`).join('، ')}</span></section>`;
  foc.filter(fGrad).forEach(f=>{h+=`<section class="note-c rise"><b>${esc(vName(f))} ثابت معاك من أسبوعين</b><button class="link" data-act="f-mode" data-id="${f.id}" data-v="watch">طلّعه</button></section>`});
  h+=`<section class="slot rise"><div class="slot-h"><span>تركيز</span></div>${foc.length?foc.map(f=>{const r=fRange(f.id,shift(td,-6),td),tot=r.fa+r.wi,st=fStage(f);
    return `<button class="card fcard2" data-act="fault" data-id="${f.id}"><div class="ch"><b class="vt">${esc(vName(f))}</b>${stgDots(st)}</div>${f.name&&f.virtue?`<span class="small muted">ضد ${esc(f.name)}</span>`:''}
      <div class="ch small"><span>✓ <bdi>${r.wi}</bdi>  ·  ✕ <bdi>${r.fa}</bdi></span>${tot?`<b class="pc ${r.wi/tot>=.7?'hi':r.wi/tot>=.4?'md':'lo'}">${num(Math.round(r.wi/tot*100),'%')}</b>`:''}</div>${wkBars(f.id,true)}</button>`}).join(''):'<p class="empty">اختار خُلق أو اتنين من تحت وخلّيهم تركيز.</p>'}</section>`;
  FGROUPS.forEach(([g,tt])=>{const fl=db.faults.filter(f=>f.g===g&&f.mode!=='focus');if(g==='other'&&!fl.length)return;
    h+=`<section class="slot rise"><div class="slot-h"><span>${tt}</span></div><div class="list">${fl.map(f=>`<button class="row" data-act="fault" data-id="${f.id}"><span class="t"><b>${esc(vName(f))}</b>${f.name&&f.virtue?`<span>ضد ${esc(f.name)}</span>`:''}</span>${stgDots(fStage(f))}</button>`).join('')}</div>
     <div class="row-in"><input class="inp" id="fn-${g}" placeholder="خُلق أو عيب جديد"><button class="btn ghost sm icon" data-act="f-add" data-v="${g}" aria-label="أضف">${ico('plus')}</button></div></section>`});
  return h}
function openFault(id){openSheet(()=>{const f=db.faults.find(x=>x.id===id);if(!f){closeSheet();return {head:'',body:''}}const st=fStage(f),v=vName(f),rl=fRel(f),td=dayKey(),r=fRange(f.id,shift(td,-6),td),tot=r.fa+r.wi,op=view.fOpen||{};
  const txt=(k,l,ph)=>`<div class="fld"><span class="lb">${l}</span><textarea class="inp" data-act="f-txt" data-id="${f.id}" data-k="${k}" placeholder="${esc(ph)}">${esc(f[k]??'')}</textarea></div>`;
  const fold=(k,l,body)=>`<section class="fold ${op[k]?'open':''}"><button class="fold-h" data-act="f-fold" data-v="${k}"><span>${l}</span>${ico(op[k]?'up':'down')}</button>${op[k]?`<div class="fold-b">${body}</div>`:''}</section>`;
  const lg=(f.log||[]).slice().reverse(),edit=view.fEditName;
  const items=[...rl.kb.map(x=>`<button class="tgb-i" data-act="kb-open" data-back="${f.id}" ${kbAttr(x)}><span class="badge">${esc(x.type)}</span><p>${esc(x.text)}</p>${x.text.length>140?'<span class="more">اقرا كله</span>':''}</button>`),
    ...rl.nt.map(n=>`<button class="tgb-i" data-act="note-open" data-back="${f.id}" data-id="${n.id}"><span class="badge">فائدة</span><p>${esc(n.text)}</p>${n.text.length>140?'<span class="more">اقرا كله</span>':''}</button>`)];
  return {head:`<div class="ch"><div><h2 class="title">${esc(v)}</h2>${f.name&&f.virtue?`<span class="small muted">ضد ${esc(f.name)}</span>`:''}</div><span class="hd-act">${stgDots(st)}<button class="ib" data-act="f-ename" aria-label="تعديل الاسم">${ico('pen')}</button><button class="ib dz" data-act="f-del" data-id="${f.id}" aria-label="امسح">${ico('trash')}</button></span></div>`,
   body:`${edit?`<div class="tagbox"><div class="fld"><span class="lb">الخُلق</span><input class="inp" data-act="f-txt" data-id="${f.id}" data-k="virtue" value="${esc(f.virtue||'')}" placeholder="التواضع"></div><div class="fld"><span class="lb">ضده</span><input class="inp" data-act="f-txt" data-id="${f.id}" data-k="name" value="${esc(f.name||'')}" placeholder="الكبر"></div></div>`:''}
    <section class="tgb"><div class="ch"><span class="eyebrow">ترغيب${items.length?` · <bdi>${items.length}</bdi>`:''}</span><span class="hd-act"><button class="ib lt" data-act="f-pick" data-id="${f.id}" aria-label="اختار من علمي">${ico('book')}</button><button class="ib lt" data-act="f-kb" data-id="${f.id}" data-v="حديث" aria-label="أضف جديد">${ico('plus')}</button></span></div>
      ${items.length?`<div class="tgb-l">${items.join('')}</div>`:`<p class="small" style="color:rgba(255,255,255,.7)">ضيف أو اختار من علمي</p>`}</section>
    <div class="fld"><div class="ch"><span class="lb">لو… هعمل…</span><span class="hd-act">${view.fSug===f.id?'<span class="busytxt">بيفكّر…</span>':`<button class="ib" data-act="f-sug" data-id="${f.id}" aria-label="اقترح عليّ">${ico('spark')}</button>`}<button class="ib" data-act="fr-add" data-id="${f.id}" aria-label="قاعدة جديدة">${ico('plus')}</button></span></div>
      ${(f.rules||[]).map(x=>view.rEdit===x.id?`<div class="rule"><div class="rule-r"><span>لو</span><input class="inp" data-act="fr" data-id="${f.id}" data-r="${x.id}" data-k="a" value="${esc(x.a||'')}" placeholder="الموقف"></div><div class="rule-r"><span>←</span><input class="inp" data-act="fr" data-id="${f.id}" data-r="${x.id}" data-k="b" value="${esc(x.b||'')}" placeholder="هعمل إيه"></div><div class="ch"><button class="link danger" data-act="fr-del" data-id="${f.id}" data-r="${x.id}">امسح</button><button class="btn sm" data-act="r-edit" data-v="">تمام</button></div></div>`
        :`<button class="rl" data-act="r-edit" data-v="${x.id}"><span class="if">لو ${esc(x.a||'…')}</span><span class="th">← ${esc(x.b||'…')}</span></button>`).join('')||'<p class="small muted">لسه مفيش. دوس ✦ يقترح عليك.</p>'}</div>
    <div class="fld"><span class="lb">تمرين كل يوم</span><input class="inp" data-act="f-txt" data-id="${f.id}" data-k="drill" value="${esc(f.drill||'')}" placeholder="${esc(DRILL[v]||'فعل صغير كل يوم')}"></div>
    <div class="prog"><div><b>${tot?num(Math.round(r.wi/tot*100),'%'):'–'}</b><span>انتصار</span></div><div><b>${num(fStreak(f.id))}</b><span>يوم سليم</span></div><div><b>${st?num(st):'–'}<small>/5</small></b><span>المرحلة</span></div></div>
    <div class="chart">${wkBars(f.id,true)}</div>
    ${fold('stage','المرحلة والمتابعة',`<div class="seg">${FMODES.map(([x,l])=>`<button data-act="f-mode" data-id="${f.id}" data-v="${x}" aria-pressed="${f.mode===x}">${l}</button>`).join('')}</div><div class="stages">${FSTG.map((l,i)=>`<button data-act="f-stage" data-id="${f.id}" data-v="${i+1}" aria-pressed="${st===i+1}"><i>${num(i+1)}</i>${l}</button>`).join('')}</div>`)}
    ${fold('log',`المواقف${lg.length?` · <bdi>${lg.length}</bdi>`:''}`,`${view.flog?`<div class="tagbox"><div class="seg">${[['win','انتصرت'],['fall','وقعت']].map(([x,l])=>`<button data-act="fl-kind" data-v="${x}" aria-pressed="${view.flog.kind===x}">${l}</button>`).join('')}</div><textarea class="inp" id="flWhat" placeholder="الموقف"></textarea><textarea class="inp" id="flFelt" placeholder="كنت حاسس بإيه؟"></textarea><textarea class="inp" id="flNext" placeholder="المرة الجاية؟"></textarea><div class="ch"><button class="link" data-act="fl-new" data-v="">إلغاء</button><button class="btn sm" data-act="fl-save" data-id="${f.id}">حفظ</button></div></div>`:`<button class="ib" data-act="fl-new" data-v="1" aria-label="موقف جديد" style="align-self:flex-start">${ico('plus')}</button>`}
      ${lg.map(x=>`<div class="lgi"><div class="ch"><span class="badge ${x.kind==='win'?'done':'miss'}">${x.kind==='win'?'انتصرت':'وقعت'}</span><span class="small muted">${fmt(x.k,{day:'numeric',month:'short'})}</span></div>${x.what?`<p>${esc(x.what)}</p>`:''}${x.felt?`<p class="small muted">${esc(x.felt)}</p>`:''}${x.next?`<p class="small">← ${esc(x.next)}</p>`:''}</div>`).join('')}`)}
    ${f.name?fold('more','عن العيب',txt('signs','بيظهر إزاي؟','تصرفات محددة')+txt('when','إمتى ومع مين؟','المواقف اللي بتطلّعه')+txt('kaff','لو وقعت؟',(FCURE[f.name]||[])[1]||'استغفار، وحسنة تمحوها')):''}
    `,
   foot:'<button class="btn" data-act="close-sheet">تمام</button>'}})}
/* choose items from علمي for a virtue: tapping adds or removes its tag */
function openKBPick(fid){view.kbiBack=fid;view.pq='';openSheet(()=>{const f=db.faults.find(x=>x.id===fid),v=vName(f),q=view.pq||'',all=kbItems().filter(x=>!q||x.text.includes(q));
  return {head:`<span class="eyebrow">اختار لـ ${esc(v)}</span><h2 class="title">من علمي</h2>`,
   body:`<input class="inp" data-act="pq" placeholder="دوّر" value="${esc(q)}"><div class="list" id="pkl">${pickList(all,v)}</div>`,foot:'<button class="btn" data-act="close-sheet">تمام</button>'}})}
const pickList=(all,v)=>all.map(x=>{const on=x.tags.includes(v);return `<button class="row pk ${on?'on':''}" data-act="pk" ${kbAttr(x)}><span class="ck">${on?ico('ok'):''}</span><span class="t"><b>${esc(x.text.slice(0,90))}${x.text.length>90?'…':''}</b><span>${esc(x.type)}</span></span></button>`}).join('')||'<p class="empty">مفيش حاجة في علمي لسه.</p>';


/* ---------- settings & customize ---------- */
function renderSettings(){const s=db.settings;if(APP==='zad')return backTop('الإعدادات','زاد','back')+accountCard()+circleCard()+`<a class="card journey" href="../" style="text-align:start;color:inherit;text-decoration:none"><span class="ic">${ico('nafs')}</span><span class="t"><b>وقفة</b><span class="small muted">محاسبة النفس</span></span>${ico('fwd')}</a>`;
  return backTop('الإعدادات','وقفة','back')+accountCard()+`
  <button class="card journey" data-act="go" data-v="sched" style="text-align:start"><span class="ic">${ico('salah')}</span><span class="t"><b>جدول اليوم</b><span class="small muted">برنامج الخروج ومواعيده، والعمل الجاي</span></span>${ico('fwd')}</button>
  <a class="card journey" href="widget.html" style="text-align:start;color:inherit;text-decoration:none"><span class="ic">${ico('map')}</span><span class="t"><b>ويدجت للشاشة الرئيسية</b><span class="small muted">الصلاة الجاية والعمل الجاي على شاشة الآيفون</span></span>${ico('fwd')}</a>
  <button class="card journey" data-act="p40-edit" style="text-align:start"><span class="ic">${ico('adab')}</span><span class="t"><b>خطة الأربعين</b><span class="small muted">${db.p40.length?`${num(db.p40.length)} بند يومي`:'بنودك اليومية طول الخروج'}</span></span>${ico('fwd')}</button>
  <button class="card journey" data-act="go" data-v="custom" style="text-align:start"><span class="ic">${ico('gear')}</span><span class="t"><b>تخصيص الأعمال والأسئلة</b><span class="small muted">ضيف وامسح وعدّل أي عمل أو سؤال أو اختيار</span></span>${ico('fwd')}</button>
  <section class="card"><h2>مواقيت الصلاة</h2><p class="lead">بتتحسب من غير نت.</p>
   <div class="seg">${[['0','محافظة'],['1','موقعي بالظبط']].map(([v,l])=>`<button data-act="loc-mode" data-v="${v}" aria-pressed="${!!s.useLoc===(v==='1')}">${l}</button>`).join('')}</div>
   ${s.useLoc?`<p class="small muted">${s.loc?`آخر تحديث للموقع: ${fmt(s.loc.at,{day:'numeric',month:'long'})}. لما تنتقل لمكان جديد اضغط "حدّث موقعي".`:'لسه ما جبناش موقعك.'}</p><button class="btn ghost" data-act="loc-use">حدّث موقعي</button>`
    :`<select class="inp" data-act="city">${CITIES.map(c=>`<option value="${c[0]}"${c[0]===s.city?' selected':''}>${c[1]}</option>`).join('')}</select>`}
   <div class="fld"><span class="lb">بداية اليوم الجديد</span><input class="inp" type="time" value="${s.dayStart}" data-act="daystart"><span class="small muted">قيام الليل بعد نص الليل يتحسب لليلة نفسها. خليها قبل الفجر بشوية.</span></div></section>
  <section class="card"><h2>نسخة احتياطية يدوية</h2><p class="lead">نسخة على واتساب، أو ترجيع نسخة.</p>
   <div class="row-in"><button class="btn ghost" data-act="backup">ابعت النسخة</button><button class="btn ghost" data-act="copy">انسخها</button></div>
   <textarea class="inp" id="importBox" placeholder="الصق نسخة احتياطية أو نص استيراد"></textarea><button class="btn ghost" data-act="import">استرجاع</button></section>
  <p class="ayah">﴿بَلِ الْإِنسَانُ عَلَىٰ نَفْسِهِ بَصِيرَةٌ﴾</p>`}
function renderCustom(){return backTop('تخصيص الأعمال','الإعدادات','go-settings')+`<p class="lead">اختار العمل وعدّل أسئلته.</p><div class="list">${CATS.map(([id,n])=>`<button class="row" data-act="cat" data-v="${id}"><span class="ic">${ico(id)}</span><span class="t"><b>${n}</b><span>${num(db.deeds.filter(d=>d.cat===id).length)} عمل</span></span>${ico('fwd')}</button>`).join('')}</div>`}
function renderCat(){const c=view.cat,list=db.deeds.filter(d=>d.cat===c);
  return backTop((CATS.find(x=>x[0]===c)||[])[1],'تخصيص','go-custom')+`<div class="list">${list.map((d,i)=>`<div class="row"><span class="t"><b>${esc(d.name)}</b><span>${d.on?'ظاهر':'مقفول'}${d.modes?(d.modes[0]==='k'?' · في الخروج بس':' · في البيت بس'):''}${d.period?(d.period==='week'?' · أسبوعي':' · شهري'):''}</span></span>
    <button class="x" data-act="mv" data-id="${d.id}" data-n="-1" aria-label="لفوق">${ico('up')}</button><button class="x" data-act="mv" data-id="${d.id}" data-n="1" aria-label="لتحت">${ico('down')}</button><button class="btn ghost sm" data-act="edit-deed" data-id="${d.id}">عدّل</button></div>`).join('')}</div>
   <section class="card"><h2>عمل جديد</h2><input class="inp" id="nd-name" placeholder="اسم العمل"><div class="fld"><span class="lb">وقته في اليوم</span><select class="inp" id="nd-slot">${SLOTS.concat([['review','في محاسبة الليلة']]).map(([v,t])=>`<option value="${v}">${t}</option>`).join('')}</select></div><button class="btn block" data-act="d-add" data-v="${c}">أضف العمل</button></section>`}
function openDeedEditor(id){openSheet(()=>{const d=byId(id);if(!d){closeSheet();return {head:'',body:''}}
  const fEd=(f,sec)=>`<div class="ed-f"><div class="row-in"><input class="inp" data-act="fl-label" data-id="${d.id}" data-s="${sec}" data-f="${f.id}" value="${esc(f.label)}"><span class="badge">${(FTYPES.find(x=>x[0]===f.type)||[0,f.type==='counts'?'أعداد':'عيوب'])[1]}</span>${xbtn('fl-del',`data-id="${d.id}" data-s="${sec}" data-f="${f.id}"`,'امسح السؤال')}</div>
    ${f.opts?`<div class="chips">${f.opts.map((o,i)=>`<span class="tag">${esc(o)}${xbtn('op-del',`data-id="${d.id}" data-s="${sec}" data-f="${f.id}" data-i="${i}"`)}</span>`).join('')}</div><div class="row-in"><input class="inp" id="op-${sec}-${f.id}" placeholder="اختيار جديد"><button class="btn ghost sm" data-act="op-add" data-id="${d.id}" data-s="${sec}" data-f="${f.id}">أضف</button></div>`:''}
    ${f.type==='num'?`<div class="row-in"><span class="small">الهدف</span><input class="inp" type="number" inputmode="numeric" data-act="fl-goal" data-id="${d.id}" data-s="${sec}" data-f="${f.id}" value="${f.goal||''}"><span class="small">الوحدة</span><input class="inp" data-act="fl-unit" data-id="${d.id}" data-s="${sec}" data-f="${f.id}" value="${esc(f.unit||'')}"></div>`:''}
    ${f.type==='counts'?`<div class="chips">${f.items.map((it,i)=>`<span class="tag">${esc(it.n)} · ${num(it.goal)}${xbtn('it-del',`data-id="${d.id}" data-s="${sec}" data-f="${f.id}" data-i="${i}"`)}</span>`).join('')}</div><div class="row-in"><input class="inp" id="it-${f.id}" placeholder="ذكر جديد"><input class="inp" type="number" id="itg-${f.id}" placeholder="الهدف" style="flex:0 0 80px"><button class="btn ghost sm" data-act="it-add" data-id="${d.id}" data-s="${sec}" data-f="${f.id}">أضف</button></div>`:''}</div>`;
  const addF=sec=>`<div class="row-in"><input class="inp" id="nf-${sec}" placeholder="سؤال جديد"><select class="inp" id="nft-${sec}" style="flex:0 0 130px">${FTYPES.map(([v,t])=>`<option value="${v}">${t}</option>`).join('')}</select></div><button class="btn ghost sm" data-act="fl-add" data-id="${d.id}" data-s="${sec}" style="align-self:flex-start">أضف السؤال</button>`;
  return {head:`<span class="eyebrow">تعديل العمل</span><h2 class="title">${esc(d.name)}</h2>`,
   body:`<div class="fld"><span class="lb">الاسم</span><input class="inp" data-act="d-name" data-id="${d.id}" value="${esc(d.name)}"></div>
    <div class="fld"><span class="lb">الظهور</span><div class="seg">${[['1','ظاهر'],['0','مقفول']].map(([v,t])=>`<button data-act="d-on" data-id="${d.id}" data-v="${v}" aria-pressed="${d.on===(v==='1')}">${t}</button>`).join('')}</div></div>
    <div class="fld"><span class="lb">وقته في اليوم</span><select class="inp" data-act="d-slot" data-id="${d.id}">${SLOTS.concat([['review','في محاسبة الليلة']]).map(([v,t])=>`<option value="${v}"${d.slot===v?' selected':''}>${t}</option>`).join('')}</select></div>
    <div class="sec"><h3>${d.cat==='adab'?'النقط':'الأداء والتفاصيل'}</h3>${(d.perf||[]).map(f=>fEd(f,'perf')).join('')}${addF('perf')}</div>
    ${d.cat==='adab'||d.noClose?'':`<div class="sec"><h3>وقفة القلب</h3>${(d.heart||[]).map(f=>fEd(f,'heart')).join('')}${addF('heart')}</div>`}`,
   foot:`<button class="btn danger icon" data-act="d-del" data-id="${d.id}" aria-label="امسح">${ico('trash')}</button><button class="btn" data-act="close-sheet">تمام</button>`}})}

/* ---------- quick add ---------- */
function openQuickOld(){view.qk=view.qk||'note';openSheet(()=>({head:`<span class="eyebrow">إضافة سريعة</span><h2 class="title">اكتب اللي في بالك</h2>`,
  body:`<div class="seg">${[['note','نقطة في طلعت بإيه'],['plan','خطوة في خطة النهارده']].map(([v,t])=>`<button data-act="qk" data-v="${v}" aria-pressed="${view.qk===v}">${t}</button>`).join('')}</div><textarea class="inp" id="qText" placeholder="${view.qk==='note'?'النقطة أو الرسالة':'الخطوة'}" style="min-height:120px"></textarea>`,
  foot:`<button class="btn" data-act="qk-save">احفظ</button>`}));setTimeout(()=>{const t=$('#qText');t&&t.focus()},300)}

/* ================= import / backup ================= */
const curMosque=()=>{const j=activeJ(),m=j&&(j.mosques||[]).slice(-1)[0];return m?m.name:''};
const addNote=(text,tag)=>db.notes.push({id:uid('n'),k:dayKey(),text,src:'',topics:tag?[tag]:[],mosque:curMosque()});
function doImport(txt){const d=JSON.parse(txt);
  if(d.waqfaImport){(d.notes||[]).forEach(n=>{if(!db.notes.some(x=>x.text===n.text))db.notes.push({id:uid('n'),k:n.k||dayKey(),text:n.text,tag:n.tag||'',mosque:''})});
    (d.faults||[]).forEach(f=>{const ex=db.faults.find(x=>x.name===f.name);const o=ex||{id:uid('flt'),g:f.g||'other',name:f.name,on:true,detail:'',hist:[]};if(f.detail)o.detail=f.detail;if(f.pct!=null)o.hist.push([dayKey(),f.pct]);if(!ex)db.faults.push(o)});
    (d.duas||[]).forEach(t=>{if(!db.duas.some(x=>x.text===t))db.duas.push({id:uid('dua'),text:t,k:'mine'})});
    (d.gsecs||[]).forEach(s=>{if(!db.gsecs.some(x=>x.name===s.name))db.gsecs.push({id:uid('s'),name:s.name,items:s.items.map(t=>({id:uid('g'),text:t,done:false}))})});
    (d.p40||[]).forEach(p=>{const t=p.text||p;if(!db.p40.some(x=>x.text===t))db.p40.push({id:uid('p40'),text:t,link:p.link||null})});normNotes(db);return 'اتضافت بياناتك'}
  const d2=migrate(d);if(!d2.deeds)throw 0;db=d2;return 'اترجعت النسخة'}
const markBackup=()=>{db.settings.lastBackup=dayKey();save();render()};
function copyText(t){try{navigator.clipboard.writeText(t).then(()=>{toast('اتنسخت. الصقها في الواتساب أو الملاحظات');markBackup()},()=>toast('النسخ مش متاح هنا'))}catch(e){toast('النسخ مش متاح هنا')}}

/* ================= events ================= */
const toggle=(arr,v)=>{const i=arr.indexOf(v);i<0?arr.push(v):arr.splice(i,1);return arr};
function upd(){save();if(sheetEl)paintSheet();render()}
function secArr(d,s){return d[s]||(d[s]=[])}
document.addEventListener('click',ev=>{
  const t=ev.target.closest('[data-tab]');if(t){view.tab=t.dataset.tab;view.sub=null;if(view.tab==='today')view.day=dayKey();closeSheet(true);render();scrollTo(0,0);return}
  const b=ev.target.closest('[data-act]');if(!b||['INPUT','TEXTAREA','SELECT'].includes(b.tagName))return;
  const a=b.dataset.act,id=b.dataset.id,d=id&&byId(id),k=view.day,fid=b.dataset.f,v=b.dataset.v;
  /* answers */
  if(['one','many','inc','cinc','finc','miss'].includes(a)&&d){const e=E(id);e.a=e.a||{};buzz();
    if(a==='one'){e.a[fid]=e.a[fid]===v?null:v;delete e.miss}
    if(a==='many'){e.a[fid]=toggle(e.a[fid]||[],v);delete e.miss}
    if(a==='inc'){e.a[fid]=Math.max(0,Number(e.a[fid]||0)+Number(b.dataset.n));delete e.miss}
    if(a==='cinc'||a==='finc'){const o=e.a[fid]||(e.a[fid]={});o[b.dataset.k]=Math.max(0,Number(o[b.dataset.k]||0)+Number(b.dataset.n))}
    if(a==='miss')e.miss=!e.miss;
    return upd()}
  if(a==='open')return openDeed(id);
  if(a==='close-sheet')return closeSheet();
  if(a==='quick'){if(APP==='zad'){const dr=draftNote();if(dr&&dr.kind==='kbn')return openKBNew(dr.v.type,dr.v.t,dr.v);return openKBNew('حديث','')}return openNote(null,true)}
  if(a==='nd-mode'&&KBT[v]){const tx=(($('#ndText')||{}).value||'');dropDraft();return openKBNew(KBT[v],tx)}
  if(a==='kbn-mode'){const tx=(($('#kbnText')||{}).value||'');if(KBT[v]){view.kbn.type=KBT[v];view.kbn.t=tx;keepDraft();return paintSheet()}view.kbn=null;dropDraft();openNote(null,true);view.nd.mode=v;view.nd.text=tx;keepDraft();return paintSheet()}
  /* notes */
  if(a==='note-new')return openNote(null);
  if((a==='kb-open'||a==='note-open'))view.kbiBack=b.dataset.back||null;
  if(a==='note-open')return openNote(id);
  if(a==='nd-mode'){view.nd.mode=v;keepDraft();return paintSheet()}
  if(a==='nd-src'){view.nd.src=view.nd.src===v?'':v;ndApply();return paintSheet()}
  if(a==='nd-topbox'){view.ndTop=!view.ndTop;return paintSheet()}
  if(a==='nd-clear'){dropDraft();const q=view.nd.quick;view.nd={text:'',src:db.noteCfg.srcs.includes(autoSrc())?autoSrc():'',topics:[],by:'',star:false,mode:'note',quick:q};return paintSheet()}
  if(a==='nd-top'){toggle(view.nd.topics,v);ndApply();return paintSheet()}
  if(a==='nd-star'){view.nd.star=!view.nd.star;ndApply();return paintSheet()}
  if(a==='nd-save'){const s=view.nd,txt=(s.text||'').trim();if(!txt){toast('اكتب الأول');return}
    if(s.mode==='plan'){plan(dayKey()).push({id:uid('p'),t:txt,done:false});dropDraft();save();closeSheet();toast('اتضافت لخطة النهارده');return}
    const o={text:txt,src:s.src,topics:s.topics,by:(s.by||'').trim(),star:s.star};if(s.id)o.h=s.h||'';if(s.id)Object.assign(db.notes.find(x=>x.id===s.id),o);else db.notes.push({id:uid('n'),k:dayKey(),mosque:curMosque(),...o});
    if(!s.id)dropDraft();save();closeSheet();toast(s.id?'اتحفظت':'اتحفظت الفائدة ✓');return}
  if(a==='nd-del'){if(!b.dataset.sure){b.dataset.sure=1;b.classList.add('sure');b.textContent='متأكد؟';return}db.notes=db.notes.filter(x=>x.id!==view.nd.id);save();closeSheet();return}
  if(a==='nd-plan'){plan(shift(dayKey(),1)).push({id:uid('p'),t:(view.nd.text||'').trim(),done:false});save();toast('اتضافت لخطة بكرة');return}
  if(a==='nview'){view.nview=v;return render()}
  if(a==='ncfg')return openNoteCfg();
  if(a==='tagmgr')return openTagMgr();
  if(a==='tag-edit'){view.tagEdit=v;paintSheet();const x=$('#tagRen');if(x)x.focus();return}
  if(a==='tag-ren'){const to=(($('#tagRen')||{}).value||'').trim();if(!to||to===v){view.tagEdit='';return paintSheet()}const merge=allTags().some(o=>o.s===to);renameTagIn(db,v,to);save();view.tagEdit='';toast(merge?`اتدمج في "${to}"`:'اتغيّر الاسم');return paintSheet()}
  if(a==='tag-del'){if(!b.dataset.sure){b.dataset.sure=1;b.textContent='متأكد؟ هيتشال من كل حاجة';return}renameTagIn(db,v,'');save();view.tagEdit='';toast('اتمسح');return paintSheet()}
  if(a==='tag-add'){const s=(($('#tagAdd')||{}).value||'').trim();if(!s)return;db.noteCfg.topics=db.noteCfg.topics||[];if(!db.noteCfg.topics.includes(s))db.noteCfg.topics.push(s);save();return paintSheet()}
  if(a==='cfg-back'&&view.cfgRet){const f=view.cfgRet;view.cfgRet=null;return f()}
  if(a==='cfg-back'){const n=view.nd;openNote(n.id||null,n.quick);Object.assign(view.nd,n);return paintSheet()}
  if(a==='cfg-add'){const inp=$('#cfg-'+v),val=inp.value.trim();if(!val)return;if(!db.noteCfg[v].includes(val))db.noteCfg[v].push(val);save();return paintSheet()}
  if(a==='cfg-del'){db.noteCfg[v].splice(Number(b.dataset.i),1);save();return paintSheet()}
  if(a==='fseed'){view.fseed=(view.fseed||0)+1;return render()}
  /* account & location */
  if(a==='acc-login')return doLogin(false);
  if(a==='acc-signup')return doLogin(true);
  if(a==='acc-sync'){sync.msg='';return syncNow()}
  if(a==='acc-logout'){if(!view.logoutAsk){view.logoutAsk=true;return render()}view.logoutAsk=false;auth=null;saveAuth();sync.msg='';render();toast('خرجت. بياناتك لسه هنا');return}
  if(a==='loc-use')return useLocation();
  if(a==='loc-mode'){if(v==='1'){if(db.settings.loc){db.settings.useLoc=true;save();return render()}return useLocation()}db.settings.useLoc=false;save();return render()}
  /* schedule */
  if(a==='sc-open')return openSchedItem(Number(b.dataset.i));
  if(a==='sc-on'){db.sched.on=v==='1';save();return render()}
  if(a==='sc-add'){const P=timesFor(keyOf(new Date())),n=new Date(),m=n.getHours()*60+n.getMinutes();db.sched.items.push({id:uid('s'),name:'عمل جديد',anchor:'clock',off:Math.ceil(m/15)*15%1440,dur:30,link:''});save();render();return openSchedItem(db.sched.items.length-1)}
  if(a==='sc-del'){if(!b.dataset.sure){b.dataset.sure=1;b.classList.add('sure');b.textContent='متأكد؟';return}db.sched.items.splice(Number(b.dataset.i),1);save();closeSheet();return}
  if(a==='sc-reset'){if(!view.scReset){view.scReset=true;return render()}view.scReset=false;db.sched.items=defSched();save();render();toast('رجع الجدول الأصلي');return}
  if(a==='sc-inc'){const it=db.sched.items[Number(b.dataset.i)];it.off+=Number(b.dataset.n);save();return paintSheet()}
  if(a==='sc-deed'){closeSheet(true);return openDeed(v,dayKey())}
  if(a==='qk'){view.qk=v;const t=$('#qText').value;paintSheet();$('#qText').value=t;return}
  if(a==='qk-save'){const t=$('#qText').value.trim();if(!t){toast('اكتب الأول');return}if(view.qk==='note')addNote(t,NTAGS[0]);else plan(dayKey()).push({id:uid('p'),t,done:false});save();closeSheet();toast('اتحفظ');return}
  /* plans */
  if(a==='pl-tog'){const x=plan(b.dataset.k)[b.dataset.i];x.done=!x.done;buzz();return upd()}
  if(a==='pl-del'){plan(b.dataset.k).splice(b.dataset.i,1);return upd()}
  if(a==='pl-add'){const inp=document.getElementById('pl-'+b.dataset.k),val=inp.value.trim();if(!val){toast('اكتب الخطوة الأول');return}plan(b.dataset.k).push({id:uid('p'),t:val,done:false});upd();const n2=document.getElementById('pl-'+b.dataset.k);n2&&n2.focus();return}
  if(a==='mic'){if(b.dataset.capm)return toggleMic(tgtCap());if(b.dataset.kbn)return toggleMic(tgtNew());if(d){const f=findF(d,fid);if(f)toggleMic(tgtDeed(d,f))}return}
  if(a==='kbadd'&&d){const e=E(id);e.a=e.a||{};const arr=kbArr(e.a[fid]).filter(o=>(o.t||'').trim());const nid=uid('e');arr.push({id:nid,t:''});e.a[fid]=arr;save();if(sheetEl)paintSheet();else render();
    const el=document.querySelector(`[data-act="kbtext"][data-id="${id}"][data-f="${fid}"][data-e="${nid}"]`);if(el)el.focus();return}
  if(a==='kbdel'&&d){if(!b.dataset.sure){b.dataset.sure=1;b.style.color='var(--alert)';toast('اضغط تاني للمسح');return}const e=E(id);e.a[fid]=kbArr(e.a[fid]).filter(o=>o.id!==b.dataset.e);save();if(sheetEl)paintSheet();else render();return}
  if(a==='kb-reveal'){view.kbRev=b.dataset.k;return render()}
  if(a==='kb-rate'){const key=b.dataset.k,q2=Number(v);if(b.dataset.quiz){const r3=srsRate(key,q2);view.qz=null;closeSheet();toast(`هيرجعلك ${ivLabel(r3.ivl)}`);return}{const r3=srsRate(key,q2);const td=kbToday();if(td)td.done[key]=q2;view.kbRev=null;buzz();save();render();toast(`هيرجعلك ${ivLabel(r3.ivl)}`);return}
    if(q2===0){r.box=1;r.due=kbAdd(today,1)}else if(q2===1){r.box=Math.max(1,r.box);r.due=kbAdd(today,Math.max(1,Math.round(KB_INT[r.box]/2)))}else{r.box=Math.min(7,r.box+1);r.due=kbAdd(today,KB_INT[r.box])}
    r.last=today;r.reps++;db.kbr[key]=r;const td=kbToday();if(td)td.done[key]=q2;view.kbRev=null;buzz();save();render();toast(q2===0?'هيرجعلك بكرة':q2===1?`هيرجعلك بعد ${diffDays(today,r.due)} يوم`:`ممتاز. هيرجعلك بعد ${diffDays(today,r.due)} يوم`);return}
  if(a==='kb-more'){const td=kbToday();if(!td)return;const nx=kbDueSort(kbEligible().filter(x=>!td.keys.includes(kbKey(x))))[0];if(!nx){toast('راجعت كل اللي عندك النهارده');return}td.keys.push(kbKey(nx));save();return render()}
  if(a==='kbt'){view.kbt=view.kbt===v?'':v;return render()}
  if(a==='ilm'){view.ilm=v;view.itag='';render();scrollTo(0,0);return}
  if(a==='itag'){view.itag=v;render();scrollTo(0,0);return}
  if(a==='kbtag'){const s=view.kbtags||[];view.kbtags=s.includes(v)?s.filter(x=>x!==v):[...s,v];return render()}
  if(a==='tag-open'){view.tagFor=view.tagFor===b.dataset.key?'':b.dataset.key;return sheetEl?paintSheet():render()}
  if(a==='tag-tog'&&d){setTag(d,fid,b.dataset.e,v,b.getAttribute('aria-pressed')!=='true');return sheetEl?paintSheet():render()}
  if(a==='tag-new'&&d){const inp=$('#tagnew'),s=(inp&&inp.value||'').trim().replace(/^#/,'');if(!s)return;setTag(d,fid,b.dataset.e,s,true);return sheetEl?paintSheet():render()}
  if(a==='kb-rand'){const n=kbItems().length;if(n)view.kbPick=Math.floor(Math.random()*n);return render()}
  if(a==='kb-open'&&b.dataset.n)return openNote(b.dataset.n);
  if(a==='kb-open')return openKBItem(b.dataset.c?{c:b.dataset.c}:b.dataset.s?{s:b.dataset.s}:{k:b.dataset.k,id,f:b.dataset.f,e:b.dataset.e});
  if(a==='kbi-day'){const r=view.kbi;closeSheet(true);return openDeed(r.id,r.k)}
  if(a==='kbi-tagbox'){view.kbiTag=!view.kbiTag;return paintSheet()}
  if(a==='kbi-tag'||a==='kbi-tagnew'){const s=a==='kbi-tag'?v:($('#kbiTag')||{}).value||'',x=s.trim().replace(/^#/,'');if(!x)return;const o=view.kbi?kbRef(view.kbi).o:view.kbn;if(!o)return;
    const on=a==='kbi-tagnew'||!(o.tags||[]).includes(x);o.tags=(o.tags||[]).filter(y=>y!==x);if(on)o.tags.push(x);db.tags=db.tags||[];if(!db.tags.includes(x))db.tags.push(x);if(view.kbi)kbRef(view.kbi).save();else keepDraft();return paintSheet()}
  if(a==='kbi-del'){if(!b.dataset.sure){b.dataset.sure=1;b.classList.add('sure');b.textContent='متأكد؟';return}kbRef(view.kbi).del();closeSheet();toast('اتمسح');return}
  if(a==='kbn-type'){view.kbn.type=v;keepDraft();return paintSheet()}
  if(a==='kbn-src'){view.kbn.src=view.kbn.src===v?'':v;return paintSheet()}
  if(a==='kbn-save'){const s=view.kbn,tx=(($('#kbnText')||{}).value||s.t||'').trim(),ti=(($('#kbnTi')||{}).value||s.ti||'').trim();if(!tx){toast('اكتب الأول');return}if(!ti){toast('حط عنوان، هو اللي هيفكّرك في المراجعة');const t=$('#kbnTi');t&&t.focus();return}
    if(s.type==='فائدة'){db.notes.push({id:uid('n'),k:dayKey(),mosque:curMosque(),text:tx,ti,...(s.h&&tx===(s.t||'').trim()?{h:s.h}:{}),src:s.src||'',topics:s.tags||[]});dropDraft();save();view.kbn=null;closeSheet();toast('اتحفظت في الفوايد ✓');return}db.kb=db.kb||[];db.kb.push({id:uid('kb'),k:dayKey(),type:s.type,ti,t:tx,...(s.h&&tx===(s.t||'').trim()?{h:s.h}:{}),tags:s.tags||[],src:s.src||''});dropDraft();save();view.kbn=null;closeSheet();toast(`اتحفظ في علمي ✓`);if(view.kbnBack){const fb=view.kbnBack;view.kbnBack=null;openFault(fb)}return}
  if(a==='p40-edit')return openP40();
  if(a==='p40-add'){const v2=$('#p40-new').value.trim();if(!v2){toast('اكتب البند الأول');return}db.p40.push({id:uid('p40'),text:v2,link:$('#p40-newlink').value||null});save();paintSheet();render();toast('اتضاف');return}
  if(a==='p40-del'){if(!b.dataset.sure){b.dataset.sure=1;b.style.color='var(--alert)';toast('اضغط تاني للمسح');return}db.p40=db.p40.filter(x=>x.id!==id);save();paintSheet();return render()}
  if(a==='p40-mv'){const i=db.p40.findIndex(x=>x.id===id),j=i+Number(b.dataset.n);if(j<0||j>=db.p40.length)return;[db.p40[i],db.p40[j]]=[db.p40[j],db.p40[i]];save();paintSheet();return render()}
  if(a==='p40'){const l=logOf(k);l._p40=toggle(l._p40||[],id);buzz();return upd()}
  /* navigation */
  if(a==='go'){view.sub=v;if(v==='review')view.step=0;view.endAsk=false;closeSheet(true);render();scrollTo(0,0);return}
  if(a==='back'){view.sub=null;render();scrollTo(0,0);return}
  if(a==='go-khuruj'){view.sub='khuruj';return render()}
  if(a==='go-settings'){view.sub='settings';return render()}
  if(a==='go-custom'){view.sub='custom';return render()}
  if(a==='settings'){view.sub='settings';render();scrollTo(0,0);return}
  if(a==='cat'){view.sub='cat';view.cat=v;render();scrollTo(0,0);return}
  if(a==='filter'){view.filter=v;return render()}
  if(a==='go-today'){view.day=dayKey();return render()}
  if(a==='open-day'){view.day=b.dataset.k;view.tab='today';view.sub=null;render();scrollTo(0,0);return}
  if(a==='ready'){view.ready++;return render()}
  if(a==='wz'){view.step=Math.max(0,Math.min(STEPS.length-1,view.step+Number(b.dataset.n)));render();scrollTo(0,0);return}
  if(a==='rv-done'){(db.reviews[k]||(db.reviews[k]={})).done=true;save();view.sub='harvest';render();scrollTo(0,0);return}
  if(a==='month'){const [y,m]=view.month.split('-').map(Number),dt=new Date(y,m-1+Number(b.dataset.n),1);view.month=dt.getFullYear()+'-'+pad(dt.getMonth()+1);return render()}
  if(a==='range'){view.range=Number(v);return render()}
  /* customize */
  if(a==='edit-deed')return openDeedEditor(id);
  if(a==='mv'&&d){const i=db.deeds.indexOf(d),same=db.deeds.map((x,j)=>[x,j]).filter(([x])=>x.cat===d.cat),pos=same.findIndex(([x])=>x===d),to=same[pos+Number(b.dataset.n)];if(!to)return;db.deeds[i]=to[0];db.deeds[to[1]]=d;return upd()}
  if(a==='d-on'&&d){d.on=v==='1';return upd()}
  if(a==='d-del'&&d){if(!b.dataset.sure){b.dataset.sure=1;b.textContent='متأكد؟ اضغط تاني';return}db.deeds=db.deeds.filter(x=>x!==d);(db.removed=db.removed||[]).push(d.id);db.p40.forEach(p=>{if(p.link===d.id)p.link=null});closeSheet();toast('اتمسح العمل');return}
  if(a==='d-add'){const name=$('#nd-name').value.trim();if(!name){toast('اكتب اسم العمل');return}
    const nd={id:uid('c'),name,cat:v,slot:$('#nd-slot').value,on:true,perf:[{id:'perf',label:'الأداء',type:'one',opts:['اتعمل','جزء منه','ما اتعملش']}],heart:H('heart'),st:{f:'perf',map:{'اتعمل':'done','جزء منه':'part','ما اتعملش':'miss'}}};
    if(v==='adab'){nd.perf=[];nd.heart=[];nd.noClose=true;nd.st={avg:true};nd.slot='review'}
    db.deeds.push(nd);save();render();openDeedEditor(nd.id);return}
  const F=d&&b.dataset.s?(secArr(d,b.dataset.s).find(f=>f.id===fid)):null;
  if(a==='fl-del'&&d){if(!b.dataset.sure){b.dataset.sure=1;b.style.color='var(--alert)';toast('اضغط تاني للمسح');return}d[b.dataset.s]=secArr(d,b.dataset.s).filter(f=>f.id!==fid);if(d.st&&(d.st.f===fid||d.st.num===fid))d.st={any:true};return upd()}
  if(a==='op-del'&&F){F.opts.splice(Number(b.dataset.i),1);return upd()}
  if(a==='op-add'&&F){const inp=document.getElementById(`op-${b.dataset.s}-${fid}`),val=inp.value.trim();if(!val)return;F.opts.push(val);return upd()}
  if(a==='it-del'&&F){F.items.splice(Number(b.dataset.i),1);return upd()}
  if(a==='it-add'&&F){const val=document.getElementById('it-'+fid).value.trim();if(!val)return;F.items.push({n:val,goal:Number(document.getElementById('itg-'+fid).value||100)});return upd()}
  if(a==='fl-add'&&d){const s=b.dataset.s,lab=document.getElementById('nf-'+s).value.trim(),ty=document.getElementById('nft-'+s).value;if(!lab){toast('اكتب السؤال');return}
    const f={id:uid('q'),label:lab,type:ty};if(ty==='one'||ty==='many')f.opts=d.cat==='adab'?['قصّرت','إلى حدٍّ ما','التزمت']:[];if(ty==='num'){f.goal=10;f.unit=''}if(d.cat==='adab'&&ty==='one')f.cmt=true;
    secArr(d,s).push(f);upd();toast(f.opts?'ضيف اختياراته تحت':'اتضاف السؤال');return}
  /* zad */
  if(a==='zad'){view.zad=v;return render()}
  if(a==='zad-go'){closeSheet(true);if(v==='kb'){if(APP!=='zad'){location.href='zad/';return}view.tab='lib';view.ilm='kb';view.sub=null;render();scrollTo(0,0);return}view.tab='zad';view.zad=v;view.sub=null;render();scrollTo(0,0);return}
  if(a==='gtype'){view.gtype=v;return render()}
  const WL=w=>{const [t2,x]=w.split(':');return t2==='j'?db.goals[x]:(db.gsecs.find(s=>s.id===x)||{items:[]}).items};
  if(a==='goal-add'){const w=b.dataset.w,isJ=w[0]==='j',el=isJ?$('#gj-text'):document.getElementById('g-'+w.slice(2)),text=el.value.trim();if(!text){toast('اكتب الهدف الأول');return}
    const g={id:uid('g'),text,done:false};if(isJ){g.metric=$('#gj-m').value;g.target=Number($('#gj-t').value||0);if(!g.target){toast('اكتب الرقم');return}}WL(w).push(g);return upd()}
  if(a==='goal-done'){const g=WL(b.dataset.w).find(x=>x.id===id);if(g){g.done=!g.done;buzz()}return upd()}
  if(a==='goal-del'){const arr=WL(b.dataset.w),i=arr.findIndex(x=>x.id===id);if(i>=0)arr.splice(i,1);return upd()}
  if(a==='g-order'){view.gOrder=!view.gOrder;render();scrollTo(0,0);return}
  if(a==='goal-mv'||a==='gsec-mv'){const arr=a==='goal-mv'?WL(b.dataset.w):db.gsecs,i=arr.findIndex(x=>x.id===id),k=i+Number(b.dataset.n);if(i<0||k<0||k>=arr.length)return;[arr[i],arr[k]]=[arr[k],arr[i]];buzz();save();render();
    const el=document.querySelector(`[data-act="${a}"][data-id="${id}"]`);if(el)el.closest(a==='goal-mv'?'.check':'section').animate([{background:'var(--lime)'},{background:'transparent'}],{duration:600});return}
  if(a==='gsec-add'){const val=$('#gsec-new').value.trim();if(!val)return;db.gsecs.push({id:uid('s'),name:val,items:[]});return upd()}
  if(a==='gsec-del'){const s=db.gsecs.find(x=>x.id===id);if(s&&s.items.length&&!b.dataset.sure){b.dataset.sure=1;toast('القسم فيه أهداف. اضغط تاني للمسح');return}db.gsecs=db.gsecs.filter(x=>x.id!==id);return upd()}
  if(a==='dkind'){view.dkind=v;const t2=$('#duaText').value;render();$('#duaText').value=t2;return}
  if(a==='dua-add'){const val=$('#duaText').value.trim();if(!val){toast('اكتب الدعاء الأول');return}db.duas.push({id:uid('dua'),text:val,k:view.dkind||'mine'});upd();toast('اتحفظ الدعاء');return}
  if(a==='dua-del'){if(!b.dataset.sure){b.dataset.sure=1;toast('اضغط تاني للمسح');return}db.duas=db.duas.filter(x=>x.id!==id);return upd()}
  if(a==='fault'){view.fOpen={};view.flog=null;view.fEditName=false;view.rEdit='';return openFault(id)}
  if(a==='f-add'){const val=$('#fn-'+v).value.trim();if(!val){toast('اكتب الخُلق الأول');return}const nf={id:uid('flt'),g:v,name:'',virtue:val,mode:'watch',on:true,detail:'',hist:[],stg:[],rules:[],log:[]};db.faults.push(nf);save();render();view.fOpen={};view.flog=null;openFault(nf.id);suggestFault(nf.id,true);return}
  if(a==='f-on'){const f=db.faults.find(x=>x.id===id);if(f)f.on=v==='1';return upd()}
  if(a==='f-mode'){const f=db.faults.find(x=>x.id===id);if(!f)return;if(v==='focus'&&f.mode!=='focus'&&db.faults.filter(x=>x.mode==='focus').length>=2)toast('الأفضل متزودش عن عيبين تركيز');f.mode=v;f.on=v!=='off';return upd()}
  if(a==='f-stage'){const f=db.faults.find(x=>x.id===id);if(!f)return;f.stg=f.stg||[];const k=dayKey(),last=f.stg[f.stg.length-1];if(last&&last[0]===k)last[1]=Number(v);else f.stg.push([k,Number(v)]);buzz();return upd()}
  if(a==='f-fold'){view.fOpen=view.fOpen||{};view.fOpen[v]=!view.fOpen[v];return paintSheet()}
  if(a==='f-kb'){const f=db.faults.find(x=>x.id===id);if(!f)return;view.kbnBack=f.id;return openKBNew(v,'',{type:v,t:'',tags:[vName(f)],src:''})}
  if(a==='dhist'){view.dhN=view.range||14;return openDeedHist(id)}
  if(a==='dh-n'){view.dhN=Number(v);return paintSheet()}
  if(a==='dh-day'){const k=b.dataset.k,i2=view.dhId;view.kbiBack=null;closeSheet(true);view.dhBack=i2;return openDeed(i2,k)}
  if(a==='rt')return rtApply(v);
  if(a==='go-zad'){location.href='zad/';return}
  if(a==='sess-go'){closeSheet(true);return startSess()}
  if(a==='sess-min'){view.sessMin=Number(v);return render()}
  if(a==='sess-open'){view.sess.open=true;return render()}
  if(a==='sess-rate'){const S=view.sess,key=S.q[S.i],q=Number(v);S.seen=S.seen||{};if(!S.seen[key]){srsRate(key,q);S.seen[key]=1}buzz();S.stats.n++;if(q>=2)S.stats.ok++;if(q===0&&!S.again[key]){S.again[key]=1;S.q.push(key)}S.i++;S.open=false;render();scrollTo(0,0);return}
  if(a==='sess-end'){if(view.sess&&!view.sess.done&&view.sess.i<view.sess.q.length&&view.sess.stats.n){view.sess.done=true;return render()}view.sess=null;view.sub=null;render();scrollTo(0,0);return}
  if(a==='col-rev'){const c=db.cols.find(x=>x.id===view.colId);return startSess(c.items.map(colOf).filter(Boolean),c.name)}
  if(a==='kbt-new'){const n2=prompt('اسم النوع الجديد');const s2=(n2||'').trim();if(!s2)return;db.kbTypes=[...ZTYPES()];if(!db.kbTypes.includes(s2))db.kbTypes.push(s2);if(view.kbn)view.kbn.type=s2;save();return paintSheet()}
  if(a==='c-new'||a==='c-join'){const val=(($(a==='c-new'?'#cName':'#cCode')||{}).value||'').trim();if(a==='c-join'&&!val){toast('اكتب الكود');return}
    (async()=>{try{const j=await circleCall(a==='c-new'?'create_circle':'join_circle',a==='c-new'?{cname:val}:{ccode:val});if(j.error){toast('الكود ده مش موجود');return}
      db.circle={id:j.id,name:j.name,code:j.code,owner:a==='c-new'};db.cmeta={pull:'1970-01-01T00:00:00Z',h:{}};save();view.cmem=null;render();toast(a==='c-new'?'اتعملت. ابعت الكود لصاحبك':'دخلت الحلقة ✓');await circleSync();render()}catch(e){toast('محتاج نت، جرّب تاني')}})();return}
  if(a==='c-share'){const C=db.circle,msg=`تعالى نذاكر مع بعض على زاد\nالكود: ${C.code}\nhttps://designpple2-wq.github.io/waqfa-/zad/`;if(navigator.share)navigator.share({text:msg}).catch(()=>{});else{navigator.clipboard&&navigator.clipboard.writeText(msg);toast('اتنسخ')}return}
  if(a==='c-leave'){if(!b.dataset.sure){b.dataset.sure=1;b.textContent='متأكد؟ الحاجات اللي من غيرك هتختفي عندك';return}(async()=>{try{await rest(`circle_members?circle_id=eq.${db.circle.id}&user_id=eq.${auth.uid}`,{method:'DELETE'})}catch(e){}db.circle=null;db.shared={};db.cmeta=null;save();render()})();return}
  if(a==='cap-open'){dropDraft();return openCap()}
  if(a==='cap-run')return capRun();
  if(a==='cap-items')return capItems(capOf().id);
  if(a==='cap-new'){view.capEdit=false;const t=$('#capText');if(t)capOf().t=t.value;setCapCur(null);capOf();save();return paintSheet()}
  if(a==='cap-pick'){view.capEdit=false;const t=$('#capText');if(t)capOf().t=t.value;setCapCur(b.dataset.v);save();return paintSheet()}
  if(a==='cap-del'){if(!b.dataset.sure){b.dataset.sure=1;b.style.color='var(--alert)';toast('اضغط تاني للمسح');return}db.caps=db.caps.filter(x=>x.id!==b.dataset.v);save();return paintSheet()}
  if(a==='cap-mode'){const c=capOf(),t=$('#capText');if(t)c.t=t.value;c.mode=b.dataset.v;save();return paintSheet()}
  if(a==='fix-run')return fixRun(v);
  if(a==='fix-use')return fixUse();
  if(a==='fix-x'){view.fix=null;return paintSheet()}
  if(a==='cap-on'){const x=capOf().items[b.dataset.i];x.on=!x.on;save();return paintSheet()}
  if(a==='cap-back'){view.capEdit=true;return paintSheet()}
  if(a==='cap-res'){view.capEdit=false;return paintSheet()}
  if(a==='cap-add')return capAdd();
  if(a==='quiz'){closeSheet(true);return openQuiz(b.dataset.key||'')}
  if(a==='qz-rev'){view.qz.shown[b.dataset.i]=1;return paintSheet()}
  if(a==='qz-all'){view.qz.hide.forEach((h,i)=>{if(h)view.qz.shown[i]=1});return paintSheet()}
  if(a==='col-add'){const v2=(($('#colNew')||{}).value||'').trim();if(!v2)return;db.cols=db.cols||[];db.cols.push({id:uid('c'),name:v2,items:[]});save();return render()}
  if(a==='col-open'){view.colId=id;view.colOrder=false;view.sub='col';render();scrollTo(0,0);return}
  if(a==='col-pick'){view.pq='';return openColPick()}
  if(a==='col-order'){view.colOrder=!view.colOrder;return render()}
  if(a==='col-del'){if(!b.dataset.sure){b.dataset.sure=1;b.classList.add('sure');b.textContent='متأكد؟';return}db.cols=db.cols.filter(c=>c.id!==view.colId);view.sub=null;save();return render()}
  if(a==='col-mv'){const c=db.cols.find(x=>x.id===view.colId),i=c.items.indexOf(b.dataset.key),k2=i+Number(b.dataset.n);if(i<0||k2<0||k2>=c.items.length)return;[c.items[i],c.items[k2]]=[c.items[k2],c.items[i]];save();return render()}
  if(a==='col-tog'){const c=(db.cols||[]).find(x=>x.id===b.dataset.c),k2=b.dataset.key;if(!c)return;c.items=c.items.includes(k2)?c.items.filter(y=>y!==k2):[...c.items,k2];save();buzz();if(sheetEl){paintSheet()}if(view.sub==='col')render();return}
  if(a==='f-sug')return suggestFault(id);
  if(a==='f-ename'){view.fEditName=!view.fEditName;return paintSheet()}
  if(a==='r-edit'){view.rEdit=v;return paintSheet()}
  if(a==='f-pick')return openKBPick(id);
  if(a==='pk'){const f=db.faults.find(x=>x.id===view.kbiBack),vv=vName(f),R2=kbRef(b.dataset.n?{n:b.dataset.n}:b.dataset.c?{c:b.dataset.c}:b.dataset.s?{s:b.dataset.s}:{k:b.dataset.k,id:b.dataset.id,f:b.dataset.f,e:b.dataset.e});if(!R2.o)return;
    const tg=R2.o.tags||[];R2.o.tags=tg.includes(vv)?tg.filter(x=>x!==vv):[...tg,vv];db.tags=db.tags||[];if(!db.tags.includes(vv))db.tags.push(vv);R2.save();buzz();return paintSheet()}
  if(a==='fr-add'){const f=db.faults.find(x=>x.id===id);f.rules=f.rules||[];const nr={id:uid('r'),a:'',b:''};f.rules.push(nr);view.rEdit=nr.id;save();paintSheet();const ins=sheetEl.querySelectorAll('[data-act=fr][data-k=a]');ins.length&&ins[ins.length-1].focus();return}
  if(a==='fr-del'){const f=db.faults.find(x=>x.id===id);f.rules=(f.rules||[]).filter(x=>x.id!==b.dataset.r);save();return paintSheet()}
  if(a==='fl-new'){view.flog=v?{kind:'win'}:null;return paintSheet()}
  if(a==='fl-kind'){view.flog.kind=v;const keep=['flWhat','flFelt','flNext'].map(i=>($('#'+i)||{}).value||'');paintSheet();['flWhat','flFelt','flNext'].forEach((i,j)=>{const x=$('#'+i);if(x)x.value=keep[j]});return}
  if(a==='fl-save'){const f=db.faults.find(x=>x.id===id),g=i=>(($('#'+i)||{}).value||'').trim(),o={id:uid('l'),k:dayKey(),kind:view.flog.kind,what:g('flWhat'),felt:g('flFelt'),next:g('flNext')};if(!o.what&&!o.next){toast('اكتب الموقف الأول');return}f.log=f.log||[];f.log.push(o);save();view.flog=null;toast('اتسجّل');return paintSheet()}
  if(a==='fdrill'&&d){const e=E(d.id);e.a=e.a||{};const m={...(e.a.fd||{})};if(m[b.dataset.k])delete m[b.dataset.k];else m[b.dataset.k]=true;e.a.fd=m;save();buzz();return sheetEl?paintSheet():render()}
  if(a==='fmore'){view.fmore=true;return sheetEl?paintSheet():render()}
  if(a==='f-del'){if(!b.dataset.sure){b.dataset.sure=1;b.classList.add('sure');b.textContent='متأكد؟';return}db.faults=db.faults.filter(x=>x.id!==id);closeSheet();return}
  /* notes */
  if(a==='ntag'){view.newTag=v;const t2=$('#nText').value;render();$('#nText').value=t2;return}
  if(a==='nfilter'){view.ntag=v;return render()}
  if(a==='note-add'){const val=$('#nText').value.trim();if(!val){toast('اكتب النقطة الأول');return}addNote(val,view.newTag||NTAGS[0]);upd();toast('اتحفظت');return}
  if(a==='note-del'){if(!b.dataset.sure){b.dataset.sure=1;toast('اضغط تاني للمسح');return}db.notes=db.notes.filter(x=>x.id!==id);return upd()}
  /* journey */
  if(a==='jtype'){view.jtype=v;return render()}
  if(a==='jbegin'){const ty=view.jtype||'d40',t2=JTYPES[ty],start=($('#jstart')||{}).value||dayKey(),jid='j'+Date.now(),stages=t2.stages.map((n,i)=>({id:jid+'s'+i,name:n,kind:t2.stageKind}));
    db.journeys.push({id:jid,type:ty,days:t2.days,start,status:'active',stages,curStage:stages[0].id,mosques:[],shura:{}});upd();toast('بدأ الخروج، ربنا يتقبّل');return}
  const j=activeJ();
  if(a==='stage-add'&&j){const n=$('#stageName').value.trim();if(!n){toast('اكتب اسم المرحلة');return}const st={id:j.id+'s'+Date.now(),name:n,kind:$('#stageKind').value};j.stages.push(st);j.curStage=st.id;return upd()}
  if(a==='stage-rename'&&j){const n=$('#stageName').value.trim();if(!n){toast('اكتب الاسم');return}const st=j.stages.find(x=>x.id===j.curStage);st.name=n;st.kind=$('#stageKind').value;return upd()}
  if(a==='mosque-add'&&j){const n=$('#mosqueName').value.trim();if(!n){toast('اكتب اسم المسجد');return}j.mosques.push({id:'m'+Date.now(),name:n,stage:j.curStage,start:dayKey()});upd();toast('اتسجل المسجد');return}
  if(a==='jend'&&j){if(!view.endAsk){view.endAsk=true;return render()}j.status='archived';j.end=dayKey();view.endAsk=false;upd();toast('اتأرشف الخروج');return}
  if(a==='person-add'&&j){const n=$('#pName').value.trim(),p=$('#pPhone').value.trim();if(!n){toast('اكتب الاسم');return}db.people.push({id:'p'+Date.now(),name:n,phone:p,date:k,j:j.id,mosque:curMosque()});upd();toast('اتضاف للأحباب');return}
  if(a==='mine'&&j){const sh=shuraOf(j,k),x=sh.assign[v]||(sh.assign[v]={});x.mine=!x.mine;return upd()}
  /* backup */
  if(a==='backup'){const txt=JSON.stringify(db);if(navigator.share)navigator.share({title:'نسخة وقفة '+dayKey(),text:txt}).then(markBackup,()=>{});else copyText(txt);return}
  if(a==='copy')return copyText(JSON.stringify(db));
  if(a==='import'){try{toast(doImport($('#importBox').value));save();render()}catch(e){toast('النص ده مش نسخة سليمة')}return}
});
document.addEventListener('change',ev=>{const el=ev.target,a=el.dataset.act;if(!a)return;const id=el.dataset.id,d=id&&byId(id),fid=el.dataset.f,v=el.value;
  if(a==='ocr'){const file=el.files&&el.files[0];el.value='';if(!file)return;if(el.dataset.capm)return ocrImage(file,tgtCap());if(el.dataset.kbn)return ocrImage(file,tgtNew());const f=d&&findF(d,fid);if(f)ocrImage(file,tgtDeed(d,f));return}
  if(a==='kbtext'&&d){const e=E(id);e.a=e.a||{};const arr=kbArr(e.a[fid]),eid=el.dataset.e,o=arr.find(x=>x.id===eid);
    if(o)o.t=v.trim();else if(v.trim()){const nid=uid('e');arr.push({id:nid,t:v.trim()});el.dataset.e=nid}e.a[fid]=arr;delete e.miss;save();
    if(sheetEl){const hh=sheetEl.querySelector('.hh');if(hh)hh.innerHTML=sheetRender().head}return}
  if(['numin','text','cmt','cnt','fcnt'].includes(a)&&d){const e=E(id);e.a=e.a||{};
    if(a==='numin')e.a[fid]=Math.max(0,Number(v||0));if(a==='text')e.a[fid]=v.trim();if(a==='cmt')(e.c||(e.c={}))[fid]=v.trim();
    if(a==='cnt'||a==='fcnt')(e.a[fid]||(e.a[fid]={}))[el.dataset.k]=Math.max(0,Number(v||0));
    save();if(a!=='text'&&a!=='cmt')upd();else if(sheetEl){const hh=sheetEl.querySelector('.hh');if(hh)hh.innerHTML=sheetRender().head}return}
  const SI=el.dataset.i!=null?db.sched.items[Number(el.dataset.i)]:null;
  if(SI&&a.startsWith('sc-')){const P=timesFor(keyOf(new Date()));
    if(a==='sc-name')SI.name=v.trim()||SI.name;
    if(a==='sc-anchor'){const st=schedStart(SI,P);SI.anchor=v;SI.off=v==='clock'?((st%1440)+1440)%1440:Math.round(st-P[v])}
    if(a==='sc-time'){const [hh,mm]=v.split(':').map(Number);if(!isNaN(hh))SI.off=hh*60+mm}
    if(a==='sc-off')SI.off=Number(v||0);if(a==='sc-dur')SI.dur=Math.max(0,Number(v||0));if(a==='sc-link')SI.link=v;
    save();paintSheet();return}
  if(a==='p40-text'||a==='p40-link'){const it=db.p40.find(x=>x.id===id);if(!it)return;if(a==='p40-text')it.text=v.trim()||it.text;else it.link=v||null;save();return render()}
  if(a==='rv'){(db.reviews[view.day]||(db.reviews[view.day]={}))[el.dataset.f]=v.trim();save();return}
  const F=d&&el.dataset.s?secArr(d,el.dataset.s).find(f=>f.id===fid):null;
  if(a==='fl-label'&&F){F.label=v.trim()||F.label;return upd()}
  if(a==='fl-goal'&&F){F.goal=Math.max(1,Number(v||1));return upd()}
  if(a==='fl-unit'&&F){F.unit=v.trim();return upd()}
  if(a==='d-name'&&d){d.name=v.trim()||d.name;delete d.nameK;return upd()}
  if(a==='d-slot'&&d){d.slot=v;return upd()}
  const f=db.faults.find(x=>x.id===id);
  if(a==='f-name'&&f){f.name=v.trim()||f.name;return upd()}
  if(a==='f-detail'&&f){f.detail=v.trim();save();return}
  if(a==='cap-src'){if(srcPick(v,v=>{capOf().src=v},()=>openCap()))return;capOf().src=v;save();return}
  if(a==='cap-type'){capOf().items[el.dataset.i].type=v;save();return}
  if(a==='cap-ti'){capOf().items[el.dataset.i].title=v.trim();save();return}
  if(a==='cap-txt'){capOf().items[el.dataset.i].text=v;save();return}
  if(a==='nd-srcsel'&&view.nd){if(srcPick(v,v=>{view.nd.src=v;ndApply()},null))return;view.nd.src=v;ndApply();return}
  if(a==='kbn-srcsel'&&view.kbn){if(srcPick(v,v=>{view.kbn.src=v;keepDraft()},(k=>()=>{openKBNew(k.type,k.t,k)})({...view.kbn})))return;view.kbn.src=v;keepDraft();return}
  if(a==='kbi-text'){const r=kbRef(view.kbi);if(r.o){r.o.t=v.trim();r.save()}return}
  if(a==='kbn-text'){view.kbn.t=v;return}
  if(a==='kbn-ti'&&view.kbn){view.kbn.ti=v.trim();keepDraft();return}
  if(a==='kbi-ti'){const r=kbRef(view.kbi);if(r.o){r.o.ti=v.trim();r.save()}return}
  if(a==='sess-ti'){const x=kbItems().find(y=>kbKey(y)===el.dataset.key),r=x&&kbRef(x.nid?{n:x.nid}:x.cid?{c:x.cid}:x.sid?{s:x.sid}:{k:x.k,id:x.id,f:x.f,e:x.eid});if(r&&r.o){r.o.ti=v.trim();r.save();toast('اتحفظ العنوان')}return}
  if(a==='kbti'&&d){const e=E(id),o=kbArr((e.a||{})[fid]).find(x=>x.id===el.dataset.e);if(o){o.ti=v.trim();save()}return}
  if(a==='f-txt'&&f){f[el.dataset.k]=v.trim();save();return}
  if(a==='fr'&&f){const r=(f.rules||[]).find(x=>x.id===el.dataset.r);if(r){r[el.dataset.k]=v.trim();save()}return}
  if(a==='f-pct'&&f){const k=dayKey(),last=f.hist[f.hist.length-1];if(last&&last[0]===k)last[1]=Number(v);else f.hist.push([k,Number(v)]);return upd()}
  if(a==='daystart'){db.settings.dayStart=v||'03:30';save();toast('اتحفظ');return}
  if(a==='city'){db.settings.city=v;save();toast('اتحفظت المحافظة');return}
  const j=activeJ();if(!j)return;
  if(a==='jstage'){j.curStage=v;save();return}
  if(a==='shura'){const sh=shuraOf(j,view.day),[g,ff]=el.dataset.path.split('.');(sh[g]||(sh[g]={}))[ff]=v.trim();save();return}
  if(a==='assign'){const sh=shuraOf(j,view.day),x=sh.assign[el.dataset.v]||(sh.assign[el.dataset.v]={});x.who=v.trim();save();return}
});
document.addEventListener('input',ev=>{const a=ev.target.dataset.act;if(ev.target.matches('textarea.inp'))fitTA(ev.target.parentNode);if(a==='kbq'){view.kbq=ev.target.value;const el=$('#kblist');if(el)el.innerHTML=kbList()}if(a==='nsearch'){view.nq=ev.target.value;$('#nlist').innerHTML=notesList()}if(a==='kbi-rich'||a==='nd-rich'){const el=ev.target.closest('.rich'),h=cleanHTML(el.innerHTML),tx=(el.innerText??el.textContent).trim();if(a==='nd-rich'&&view.nd){view.nd.text=tx;view.nd.h=h;ndApply()}else if(view.kbi){const r=kbRef(view.kbi);if(r.o){r.o.t=tx;r.o.h=h;clearTimeout(rtT);rtT=setTimeout(()=>r.save(),500)}}return}if(a==='cpq'){view.pq=ev.target.value;const el=$('#cpl'),c=(db.cols||[]).find(x=>x.id===view.colId);if(el&&c)el.innerHTML=colPickList(kbItems().filter(x=>!view.pq||x.text.includes(view.pq)),c)}if(a==='cap-text'){capOf().t=ev.target.value;clearTimeout(rtT);rtT=setTimeout(save,600)}if(a==='pq'){view.pq=ev.target.value;const el=$('#pkl'),f=db.faults.find(x=>x.id===view.kbiBack);if(el&&f)el.innerHTML=pickList(kbItems().filter(x=>!view.pq||x.text.includes(view.pq)),vName(f))}if(a==='nd-text'&&view.nd){view.nd.text=ev.target.value;ndApply()}if(a==='nd-by'&&view.nd){view.nd.by=ev.target.value;ndApply()}if(a==='kbn-text'&&view.kbn){view.kbn.t=ev.target.value;keepDraft()}});
document.addEventListener('keydown',ev=>{if(ev.key==='Enter'&&ev.target.id==='kbiTag'){ev.preventDefault();const b=document.querySelector('[data-act="kbi-tagnew"]');if(b)b.click();return}if(ev.key==='Enter'&&ev.target.id==='tagnew'){ev.preventDefault();const b=document.querySelector('[data-act="tag-new"]');if(b)b.click();return}if(ev.key==='Enter'&&ev.target.id&&ev.target.id.startsWith('pl-')){ev.preventDefault();const b=document.querySelector(`[data-act="pl-add"][data-k="${ev.target.id.slice(3)}"]`);b&&b.click()}});
['gesturestart','gesturechange'].forEach(t=>document.addEventListener(t,e=>e.preventDefault(),{passive:false}));
let lastTouch=0;document.addEventListener('touchend',e=>{const n=Date.now();if(n-lastTouch<300&&!e.target.closest('input,textarea,select'))e.preventDefault();lastTouch=n},{passive:false});
window.addEventListener('online',syncNow);window.addEventListener('offline',paintCloud);
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible')syncNow()});
setInterval(()=>{if(auth&&db.meta.dirty)syncNow()},120000);
setInterval(()=>{if(view.tab==='today'&&!view.sub&&!sheetEl&&!document.activeElement.matches('input,textarea,select')){const k=dayKey();if(view.day!==k&&view.day===shift(k,-1))view.day=k;render()}},60000);
render();
if(auth)syncNow();
setInterval(()=>{if(!document.hidden)circleSync()},45000);document.addEventListener('visibilitychange',()=>{if(!document.hidden)circleSync()});
})();
