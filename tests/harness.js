const fs=require('fs');const vm=require('vm');
const el=()=>({innerHTML:'',textContent:'',className:'',dataset:{},style:{},hidden:false,setAttribute(){},removeAttribute(){},appendChild(){},firstChild:null,classList:{contains:()=>false}});
const store={};
const ctx={console,Math,Date,JSON,Object,Array,String,Number,Set,Intl,parseFloat,isNaN,setTimeout,clearTimeout,setInterval:()=>0,
 navigator:{onLine:true},scrollY:0,scrollTo(){},addEventListener(){},
 localStorage:{getItem:k=>store[k]??null,setItem:(k,v)=>{store[k]=v},removeItem:k=>{delete store[k]}},
 document:{querySelector:()=>el(),querySelectorAll:()=>[],addEventListener(){},documentElement:el()}};
ctx.window=ctx;vm.createContext(ctx);
const src=fs.readFileSync('check.js','utf8')+`
;(function(){
 const t=today();
 putExpense({id:'a1',amount:450.5,cat:'food',date:t,merchant:'Cafe',note:'lunch'});
 putExpense({id:'a2',amount:1200,cat:'transport',date:addDays(t,-1),merchant:'Metro',note:''});
 putExpense({id:'a3',amount:300,cat:'food',date:t,merchant:'Tea, \\"Chai\\"',note:'x'});
 putProfile({budget:{overall:2000,cats:{food:900}}});
 const rows=budgetRows(mkey(t));
 console.log('rows',JSON.stringify(rows.map(r=>[r.key,r.spent,r.limit,Math.round(r.pct),r.level])));
 console.log('byCat',JSON.stringify(byCat(monthExp(mkey(t)))));
 S.hist.q='cafe';console.log('search',filtered().length);S.hist.q='';S.hist.min='400';console.log('min400',filtered().length);S.hist.min='';
 console.log('money',money(1234567.5),money(450),compact(1234567));
 delExpense('a2');console.log('live',live().length,'pending',Object.keys(S.pending.e).join());
 console.log(vHome().length>500,vHistory().length>200,vBudget().length>200,vProfile().length>200,vCats().length>200);
 console.log(niceMax(1234),niceMax(0),donut([{name:'a',v:1,color:'red'},{name:'b',v:3,color:'blue'}],4).slice(0,60));
 SH={amt:''};keyEntry('0');keyEntry('0');keyEntry('.');keyEntry('5');keyEntry('7');keyEntry('9');console.log('amt',SH.amt);
})();`;
try{vm.runInContext(src,ctx)}catch(e){console.log('ERR',e.stack.split('\n').slice(0,4).join('\n'))}
