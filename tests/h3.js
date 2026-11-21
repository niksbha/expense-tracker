const fs=require('fs'),vm=require('vm');
const el=()=>({innerHTML:'',textContent:'',className:'',dataset:{},style:{},hidden:false,value:'',setAttribute(){},removeAttribute(){},appendChild(){},firstChild:null,classList:{contains:()=>false}});
const store={};
const ctx={console,Math,Date,JSON,Object,Array,String,Number,Set,Intl,parseFloat,setTimeout,clearTimeout,setInterval:()=>0,navigator:{onLine:true},scrollY:0,scrollTo(){},addEventListener(){},
 localStorage:{getItem:k=>store[k]??null,setItem:(k,v)=>{store[k]=v},removeItem:k=>{delete store[k]}},
 document:{querySelector:()=>el(),querySelectorAll:()=>[],addEventListener(){},documentElement:el()}};
ctx.window=ctx;vm.createContext(ctx);
vm.runInContext(fs.readFileSync('check.js','utf8')+`;(function(){
 // only current month first
 putExpense({id:'x0',amount:100,cat:'food',date:today()});
 let h=vCompare();console.log('single month ok',h.includes('Comparisons fill in'),h.includes('<svg'));
 const t=today();
 let k=mkey(t),n=0;
 for(let m=1;m<=4;m++){k=prevKey(k);for(let d=1;d<=20;d+=3){putExpense({id:'m'+m+'d'+d,amount:100*m+d,cat:d%2?'food':'transport',date:k+'-'+pad2(d)})}}
 const D=compareData();
 console.log('past',D.past.length,'mtd',D.mtd,'lastMtd',Math.round(D.lastMtd),'avgMtd',Math.round(D.avgMtd),'avgMonth',Math.round(D.avgMonth),'avgLen',D.avg.length,'prevLen',D.prev.length);
 h=vCompare();console.log('full ok',h.length>3000,h.includes('Average of 4 months'),h.includes('higher')||h.includes('lower'));
 console.log(tabsHtml().includes('Compare'),tabsHtml().includes('Budgets'));
 S.tab='compare';render();console.log('render ok');
})()`,ctx);
