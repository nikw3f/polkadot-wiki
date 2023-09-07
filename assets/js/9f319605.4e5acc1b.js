"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},48442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),s=["components"],o={id:"learn-xcm-docs-journey-fees",title:"Fee Handling",sidebar_label:"Fee Handling",description:"How Fees for XCM Transfers are Handled.",keywords:["xcm","cross-consensus messaging","transfers","fees"],slug:"../journey-fees"},l="Fee handling",u={unversionedId:"learn/xcm/journey/learn-xcm-docs-journey-fees",id:"learn/xcm/journey/learn-xcm-docs-journey-fees",title:"Fee Handling",description:"How Fees for XCM Transfers are Handled.",source:"@site/../docs/learn/xcm/journey/fees.md",sourceDirName:"learn/xcm/journey",slug:"/learn/xcm/journey-fees",permalink:"/docs/learn/xcm/journey-fees",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/xcm/journey/fees.md",tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1694099593,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{id:"learn-xcm-docs-journey-fees",title:"Fee Handling",sidebar_label:"Fee Handling",description:"How Fees for XCM Transfers are Handled.",keywords:["xcm","cross-consensus messaging","transfers","fees"],slug:"../journey-fees"},sidebar:"docs",previous:{title:"Reserve-backed Transfers",permalink:"/docs/learn/xcm/journey/transfers-reserve"},next:{title:"Transact: A General Solution",permalink:"/docs/learn/xcm/journey-transact"}},c={},d=[{value:"BuyExecution",id:"buyexecution",level:2},{value:"SetFeesMode",id:"setfeesmode",level:2},{value:"UnpaidExecution",id:"unpaidexecution",level:2},{value:"RefundSurplus",id:"refundsurplus",level:2},{value:"Example",id:"example",level:3}],p={toc:d},m="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fee-handling"},"Fee handling"),(0,i.kt)("p",null,"Like we learnt in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/xcm/fundamentals-fees"},"weight and fees")," chapter, the XCM\noperations our messages perform need to be paid for. To accomplish this, we'll make use of different\ninstructions in this chapter."),(0,i.kt)("h2",{id:"buyexecution"},"BuyExecution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"BuyExecution { fees: MultiAsset, weight_limit: WeightLimit }\n")),(0,i.kt)("p",null,"This instruction is used to buy weight using fees. While in some cases there's no need to pay for\nexecution (if you control both systems for example), in most cases you'll need to add this\ninstruction. There's a predefined ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/xcm/config-deep-dive#barrier"},"barrier"),",\n",(0,i.kt)("inlineCode",{parentName:"p"},"AllowTopLevelPaidExecutionFrom<T>"),", that explicitly drops messages that do not include this\ninstruction."),(0,i.kt)("p",null,"Let's grab the teleport message from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/xcm/journey/transfers-teleport"},"transfers chapter")," and add fee\npayment."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"let message = Xcm(vec![\n  WithdrawAsset((Here, withdraw_amount + fee_estimation).into()),\n  BuyExecution { // <-- Added here\n    fees: (Here, fee_estimation).into(),\n    weight_limit: WeightLimit::Limited(weight_estimation),\n  },\n  InitiateTeleport {\n    assets: All.into(),\n    dest: Parachain(1).into(),\n    xcm: Xcm(vec![DepositAsset {\n      assets: All.into(),\n      beneficiary: Junction::AccountId32 {\n        network: None,\n        id: ALICE.into(),\n      },\n    }]),\n  },\n]);\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"fee_estimation")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"weight_estimation")," are values that can be calculated from the configuration of\nthe receiving chain. As mentioned in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/xcm/fundamentals-fees"},"weight and fees"),"\nchapter of the fundamentals, XCMs instructions are usually assigned weights separately, so, in order\nto estimate the weight, you need to estimate the weight of every instruction and add them together.\nBy using ",(0,i.kt)("inlineCode",{parentName:"p"},"WeightLimit::Limited()"),", you guarantee the message will error if it tries to use more\nweight than you expect, if you don't mind this, you can use ",(0,i.kt)("inlineCode",{parentName:"p"},"WeightLimit::Unlimited"),". The\n",(0,i.kt)("inlineCode",{parentName:"p"},"fee_estimation")," value is the maximum assets you want to use, if it doesn't cover all fees, message\nexecution will fail. You can add a higher value (all of ",(0,i.kt)("inlineCode",{parentName:"p"},"withdraw_amount")," for example) to make sure\nyou have enough assets for fee payment. If you plan to use the entirety of ",(0,i.kt)("inlineCode",{parentName:"p"},"withdraw_amount"),",\nhowever, it's recommended to add a little extra for fee payment."),(0,i.kt)("p",null,"In our examples, we use a very simple method, where all instructions weigh a constant value. This is\nvery useful for testing purposes, but it's recommended to actually benchmark every instruction as\nthey differ in resource usage. Given our setup, we estimate the weight and fee using only the number\nof instructions in each message."),(0,i.kt)("h2",{id:"setfeesmode"},"SetFeesMode"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"SetFeesMode { jit_withdraw: bool }\n")),(0,i.kt)("p",null,"This instruction changes the fee mode of the XCVM. If ",(0,i.kt)("inlineCode",{parentName:"p"},"jit_withdraw")," is set to true, then fee assets\nare taken directly from the origin's on-chain account, instead of the holding register. This means\nthe fees are taken directly from the account, no need for a ",(0,i.kt)("inlineCode",{parentName:"p"},"BuyExecution")," instruction. That means\nyou make sure the message will get executed, as long as there are enough assets in the account. It's\nuseful when paying sending fees, which are difficult to estimate, as they usually depend on network\ncongestion."),(0,i.kt)("h2",{id:"unpaidexecution"},"UnpaidExecution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"UnpaidExecution { weight_limit: WeightLimit, check_origin: Option<MultiLocation> }\n")),(0,i.kt)("p",null,"This instruction is used for explicitly stating this message shouldn't be paid for. It can be used\nas a way of identifying certain priviledged messages that don't pay fees, coming from a particular\nsystem. This instruction can be searched for in ",(0,i.kt)("a",{parentName:"p",href:"/docs/learn/xcm/config-deep-dive#barrier"},"barriers")," to\nallow this. Make sure you trust the origin system because it won't be paying fees. There's already a\npredefined barrier in xcm-builder, ",(0,i.kt)("inlineCode",{parentName:"p"},"AllowExplicitUnpaidExecutionFrom<T>"),", that makes sure this is\nthe first instruction in the message. As always, you can build your own for your own use-cases."),(0,i.kt)("p",null,"This is safer than allowing all messages from a particular system to not pay fees, as it's an\nexception to the rule and not the default. Extra measures can be taken to limit who can use this\ninstruction."),(0,i.kt)("h2",{id:"refundsurplus"},"RefundSurplus"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"RefundSurplus\n")),(0,i.kt)("p",null,"Refunds any surplus weight previously bought with ",(0,i.kt)("inlineCode",{parentName:"p"},"BuyExecution"),". This is useful in many cases:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When you pay for execution of your whole message, but there's an error and not all instructions\nget executed"),(0,i.kt)("li",{parentName:"ul"},"When you set an error handler, buy weight for it, but in the end there's no error so it doesn't\nget called"),(0,i.kt)("li",{parentName:"ul"},"When you use the ",(0,i.kt)("a",{parentName:"li",href:"/docs/learn/xcm/journey-transact"},(0,i.kt)("inlineCode",{parentName:"a"},"Transact")," instruction")," and the call takes less weight than\nexpected")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"let message = Xcm(vec![\n  WithdrawAsset((Parent, message_fee).into()),\n  BuyExecution {\n    fees: (Parent, message_fee).into(),\n    weight_limit: WeightLimit::Unlimited,\n  },\n  SetErrorHandler(Xcm(vec![\n    RefundSurplus,\n    DepositAsset {\n      assets: All.into(),\n      beneficiary: AccountId32 {\n        network: Some(ByGenesis([0; 32])),\n        id: relay_sovereign_account_id().into(),\n      }\n      .into(),\n    },\n  ])),\n  Trap(1),\n  ClearOrigin,\n  ClearOrigin,\n  ClearOrigin,\n]);\n")),(0,i.kt)("p",null,"In this example, we pay upfront for all the instructions in the XCM. When the ",(0,i.kt)("inlineCode",{parentName:"p"},"Trap")," instruction\nthrows an error, the error handler will be called and the weight for all the instructions that\nweren't executed is refunded. For the full example, check our\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-docs/tree/main/examples"},"repo"),"."))}h.isMDXComponent=!0}}]);