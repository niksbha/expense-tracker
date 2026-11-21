const fs=require('fs'),vm=require('vm');
const vals={'#sdate':'2026-11-16','#smerch':'__new__','#smnew':'Blue Tokai','#spay':'__new__','#spnew':'upi wallet','#snote':'beans'};
const el=s=>({innerHTML:'',textContent:'',className:'',dataset:{},style:{},hidden:false,value:vals[s]||'',disabled:false,setAttribute(){},removeAttribute(){},appendChild(){},firstChild:null,classList:{contains:()=>false}});
const store={};
const ctx={console,Math,Date,JSON,Object,Array,String,Number,Set,Intl,parseFloat,setTimeout,clearTimeout,setInterval:()=>0,navigator:{onLine:true},scrollY:0,scrollTo(){},addEventListener(){},
 localStorage:{getItem:k=>store[k]??null,setItem:(k,v)=>{store[k]=v},removeItem:k=>{delete store[k]}},
 document:{querySelector:el,querySelectorAll:()=>[],addEventListener(){},documentElement:el('')}};
ctx.window=ctx;vm.createContext(ctx);
vm.runInContext(fs.readFileSync('check.js','utf8')+`;(function(){
 openExpense(); console.log('sheet ok');
 SH={id:null,amt:'250',cat:'food'}; saveExpense();
 const e=live()[0]; console.log(JSON.stringify([e.merchant,e.payment,e.amount]),S.profile.merchants.join(),S.profile.payments.slice(-1)[0],S.lastPay);
 vals['#smerch']='Blue Tokai';vals['#spay']='upi wallet'; openExpense(); console.log('default pay',S.lastPay);
 console.log(vHistory().includes('upi wallet'),vHome().includes('upi wallet'));
})()`,ctx);
