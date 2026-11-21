const fs=require('fs'),vm=require('vm');
const vals={},els={};
const el=s=>els[s]||(els[s]={innerHTML:'',textContent:'',className:'',dataset:{},style:{},hidden:false,get value(){return vals[s]!==undefined?vals[s]:''},set value(v){vals[s]=v},options:[],setAttribute(){},removeAttribute(){},appendChild(){},firstChild:null,classList:{contains:()=>false}});
const store={};
const ctx={console,Math,Date,JSON,Object,Array,String,Number,Set,Intl,parseFloat,setTimeout,clearTimeout,setInterval:()=>0,navigator:{onLine:true},scrollY:0,scrollTo(){},addEventListener(){},
 localStorage:{getItem:k=>store[k]??null,setItem:(k,v)=>{store[k]=v},removeItem:k=>{delete store[k]}},
 document:{querySelector:el,querySelectorAll:()=>[],addEventListener(){},documentElement:el('')}};
ctx.window=ctx;ctx.vals=vals;ctx.els=els;vm.createContext(ctx);
vm.runInContext(fs.readFileSync('check.js','utf8')+`;(function(){
 const t=today();
 const add=(id,amt,cat,m)=>putExpense({id,amount:amt,cat,date:t,merchant:m,payment:'UPI'});
 add('1',100,'food','Swiggy');add('2',80,'food','Zomato');add('3',300,'transport','Uber');add('4',999,'shopping','Amazon');add('5',50,'shopping','Swiggy');
 const opts=()=>(els['#smerch'].innerHTML.match(/<option[^>]*>([^<]*)</g)||[]).map(x=>x.replace(/<option[^>]*>/,'').replace('<',''));
 S.lastCat='food';openExpense();console.log('food list',opts().join('|'));
 console.log('freq',els['#mfreq'].innerHTML.replace(/<[^>]+>/g,' ').trim().replace(/ +/g,','));
 console.log('hint',els['#mhint'].innerHTML.replace(/<[^>]+>/g,''));
 SH.cat='transport';refreshMerchantUI();console.log('transport list',opts().join('|'));
 SH.cat='food';SH.allM=true;refreshMerchantUI();console.log('all list',opts().join('|'));
 applyMerchant('Uber');console.log('cat after Uber in all mode',SH.cat);
 SH.allM=false;SH.cat='shopping';refreshMerchantUI();console.log('shopping list',opts().join('|'));
 // new merchant saved w/ category mapping
 SH.amt='40';vals['#sdate']=t;vals['#smerch']='__new__';vals['#smnew']='Blue Tokai';vals['#spay']='UPI';vals['#snote']='';SH.cat='food';
 saveExpense();console.log('mcat',JSON.stringify(S.profile.mcat));
 openExpense();console.log('food list after',opts().join('|'));
 // manager grouping + move
 console.log('groups',merchantGroups().replace(/<[^>]+>/g,'|').replace(/\\|+/g,'|').slice(0,200));
 SL={kind:'merchant',old:'Amazon'};vals['#lname']='Amazon';vals['#lcat']='bills';vals['#lmove']={checked:true};els['#lmove']={checked:true};
 saveListItem();console.log('after move',S.profile.mcat.Amazon,live().find(e=>e.merchant==='Amazon').cat);
 S.mq='zom';console.log('search',merchantGroups().includes('Zomato'),merchantGroups().includes('Uber'));
 SL={kind:'merchant',old:'Uber'};deleteListItem();console.log('deleted',merchantList().includes('Uber'),S.profile.mcat.Uber);
 console.log(vMerchants().length>200);
})()`,ctx);
