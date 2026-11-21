const fs=require('fs'),vm=require('vm');
const el=()=>({innerHTML:'',textContent:'',className:'',dataset:{},style:{},hidden:false,value:'',setAttribute(){},removeAttribute(){},appendChild(){},firstChild:null,classList:{contains:()=>false}});
const store={};
const ctx={console,Math,Date,JSON,Object,Array,String,Number,Set,Intl,parseFloat,setTimeout,clearTimeout,setInterval:()=>0,navigator:{onLine:true},scrollY:0,scrollTo(){},addEventListener(){},
 localStorage:{getItem:k=>store[k]??null,setItem:(k,v)=>{store[k]=v},removeItem:k=>{delete store[k]}},
 document:{querySelector:()=>el(),querySelectorAll:()=>[],addEventListener(){},documentElement:el()}};
ctx.window=ctx;vm.createContext(ctx);
vm.runInContext(fs.readFileSync('check.js','utf8')+`;(function(){
 const t=today();
 putExpense({id:'a',amount:100,cat:'food',date:t,merchant:'swggy',payment:'UPI'});putExpense({id:'a2',amount:250,cat:'transport',date:t,payment:'UPI'});putExpense({id:'z',amount:80,cat:'food',date:'2026-10-13'});
 putExpense({id:'b',amount:2000,cat:'food',date:'2026-10-15',payment:'UPI'});
 putExpense({id:'c',amount:555,cat:'transport',date:'2026-10-13',merchant:'Metro',payment:'UPI',note:'to office'});
 const h=histList(filtered());
 const strip=s=>s.replace(/<[^>]+>/g,'|').replace(/\\|+/g,'|');
 console.log(strip(h));
})()`,ctx);
