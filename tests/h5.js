const fs=require('fs'),vm=require('vm');
const vals={};
const el=s=>({innerHTML:'',textContent:'',className:'',dataset:{},style:{},hidden:false,value:vals[s]||'',options:[],setAttribute(){},removeAttribute(){},appendChild(){},firstChild:null,classList:{contains:()=>false}});
const store={};
const ctx={console,Math,Date,JSON,Object,Array,String,Number,Set,Intl,parseFloat,setTimeout,clearTimeout,setInterval:()=>0,navigator:{onLine:true},scrollY:0,scrollTo(){},addEventListener(){},
 localStorage:{getItem:k=>store[k]??null,setItem:(k,v)=>{store[k]=v},removeItem:k=>{delete store[k]}},
 document:{querySelector:el,querySelectorAll:()=>[],addEventListener(){},documentElement:el('')}};
ctx.window=ctx;ctx.vals=vals;vm.createContext(ctx);
vm.runInContext(fs.readFileSync('check.js','utf8')+`;(function(){
 const t=today();
 putExpense({id:'a',amount:100,cat:'food',date:t,merchant:'swggy',payment:'UPI'});
 putExpense({id:'b',amount:500,cat:'food',date:addDays(t,-1),merchant:'Swiggy',payment:'Credit card'});
 putExpense({id:'c',amount:900,cat:'transport',date:addDays(t,-2),merchant:'redbus',payment:'UPI'});
 console.log('lastFor',lastFor('redbus').cat,merchantList().join('|'),payList().length);
 // merge swggy -> Swiggy
 SL={kind:'merchant',old:'swggy'};vals['#lname']='swiggy';saveListItem();
 console.log('after merge',live().map(e=>e.merchant).join('|'),S.profile.merchants.join('|'));
 // delete payment
 SL={kind:'pay',old:'Credit card'};deleteListItem();console.log('pay deleted',live().map(e=>e.payment||'-').join('|'),payList().join('|'));
 // history pay filter
 S.hist.pay=['UPI'];console.log('pay filter',filtered().length);S.hist.pay=[];
 // recurring: day 1 template created long ago
 S.profile.recurring=[{id:'t1',amount:15000,day:1,cat:'bills',merchant:'Rent',payment:'UPI',note:'',last:prevKey(prevKey(prevKey(mkey(t))))}];
 runRecurring();
 const rr=live().filter(e=>e.recurring).map(e=>e.date+':'+e.amount);console.log('recurring',rr.join(','),S.profile.recurring[0].last===mkey(t));
 runRecurring();console.log('idempotent',live().filter(e=>e.recurring).length);
 // delete one generated then rerun should not recreate
 delExpense(live().find(e=>e.recurring).id);runRecurring();console.log('no recreate',live().filter(e=>e.recurring).length);
 // compare
 const h=vCompare();console.log('compare',h.includes('On pace for the month'),h.includes('Top merchants'),h.includes('Payment methods this month'));
 console.log(vList('merchant').length>100,vList('pay').length>100,vRecur().length>100,vProfile().includes('Recurring expenses'));
 S.sub='merchants';render();S.sub='recur';render();S.sub=null;
 // future warn
 openExpense();SH.amt='10';vals['#sdate']=addDays(t,1);vals['#smerch']='';vals['#spay']='UPI';
 saveExpense();console.log('future blocked',live().length,SH&&SH.future);saveExpense();console.log('future saved',live().length);
})()`,ctx);
