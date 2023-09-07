"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1446],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57904:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"learn-xcm-docs-journey-expectations",title:"Expectations",sidebar_label:"Expectations",description:"Expect Instructions to Check if a Condition is Valid.",keywords:["xcm","cross-consensus messaging","expectations"],slug:"../journey-expectations"},l="Expects",c={unversionedId:"learn/xcm/journey/learn-xcm-docs-journey-expectations",id:"learn/xcm/journey/learn-xcm-docs-journey-expectations",title:"Expectations",description:"Expect Instructions to Check if a Condition is Valid.",source:"@site/../docs/learn/xcm/journey/expects.md",sourceDirName:"learn/xcm/journey",slug:"/learn/xcm/journey-expectations",permalink:"/docs/learn/xcm/journey-expectations",draft:!1,editUrl:"https://github.com/w3f/polkadot-wiki/edit/master/docs/learn/xcm/journey/expects.md",tags:[],version:"current",lastUpdatedBy:"bader y",lastUpdatedAt:1694099593,formattedLastUpdatedAt:"Sep 7, 2023",frontMatter:{id:"learn-xcm-docs-journey-expectations",title:"Expectations",sidebar_label:"Expectations",description:"Expect Instructions to Check if a Condition is Valid.",keywords:["xcm","cross-consensus messaging","expectations"],slug:"../journey-expectations"},sidebar:"docs",previous:{title:"Trap and Claim Assets",permalink:"/docs/learn/xcm/journey-assets"},next:{title:"Queries",permalink:"/docs/learn/xcm/journey-queries"}},p={},u=[{value:"ExpectAsset",id:"expectasset",level:2},{value:"Example",id:"example",level:3},{value:"ExpectOrigin",id:"expectorigin",level:2},{value:"Example",id:"example-1",level:3},{value:"ExpectPallet",id:"expectpallet",level:2},{value:"Example",id:"example-2",level:3},{value:"ExpectError",id:"expecterror",level:2},{value:"Example",id:"example-3",level:3},{value:"ExpectTransactStatus",id:"expecttransactstatus",level:2},{value:"Example",id:"example-4",level:3}],m={toc:u},d="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"expects"},"Expects"),(0,i.kt)("p",null,"XCM contains instructions to check for specific conditions during the execution of the message.\nThese 'expect' instructions check for a specific condition and if it's not fulfilled, an error is\nthen thrown. These instructions are used for things like checking the state of the registers before\nexecuting specific instructions. XCM contains the following expect instructions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ExpectAsset")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ExpectOrigin")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ExpectPallet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ExpectError")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ExpectTransactStatus"))),(0,i.kt)("h2",{id:"expectasset"},"ExpectAsset"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpectAsset")," instruction throws an ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpectationFalse")," error if the holding register does not\ncontain at least the given assets."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"ExpectAsset(MultiAssets)\n")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"For the full example, check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-docs/tree/main/examples"},"here"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust,",metastring:"noplayground",noplayground:!0},"WithdrawAsset((Here, AMOUNT).into()),\nBuyExecution { fees: (Here, AMOUNT).into(), weight_limit: WeightLimit::Unlimited },\n// Set the instructions that are executed when ExpectAsset does not pass.\n// In this case, reporting back an error to the Parachain.\nSetErrorHandler(Xcm(vec![\n    ReportError(QueryResponseInfo {\n        destination: Parachain(1).into(),\n        query_id: QUERY_ID,\n        max_weight: Weight::from_all(0),\n    })\n])),\nExpectAsset((Here, AMOUNT + 10).into()),\n// Add Instructions that do something with assets in holding when ExpectAsset passes.\n\n")),(0,i.kt)("h2",{id:"expectorigin"},"ExpectOrigin"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpectOrigin")," instruction throws an ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpectationFalse")," error if the origin register does not\nequal the expected origin."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"ExpectOrigin(Option<MultiLocation>)\n")),(0,i.kt)("h3",{id:"example-1"},"Example"),(0,i.kt)("p",null,"For the full example, check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-docs/tree/main/examples"},"here"),". The\n",(0,i.kt)("inlineCode",{parentName:"p"},"ExpectOrigin")," instruction errors because the ",(0,i.kt)("inlineCode",{parentName:"p"},"ClearOrigin")," clears the origin register and we expect\nit to be equal to ",(0,i.kt)("inlineCode",{parentName:"p"},"Parachain(1)"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"// Set the instructions that are executed when ExpectOrigin does not pass.\n// In this case, reporting back an error to the Parachain.\nSetErrorHandler(Xcm(vec![ReportError(QueryResponseInfo {\n    destination: Parachain(1).into(),\n    query_id: QUERY_ID,\n    max_weight: Weight::from_all(0),\n})])),\nClearOrigin,\n// Checks if the XcmContext origin is equal to `Parachain(1)`.\nExpectOrigin(Some(Parachain(1).into())),\n")),(0,i.kt)("h2",{id:"expectpallet"},"ExpectPallet"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpectPallet")," instruction ensures that a particular pallet with a particular version exists in\nthe destination's runtime. It throws a ",(0,i.kt)("inlineCode",{parentName:"p"},"PalletNotFound")," error if there is no pallet at the given\nindex. It throws a ",(0,i.kt)("inlineCode",{parentName:"p"},"NameMismatch")," error is the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"module_name")," mismatch and a\n",(0,i.kt)("inlineCode",{parentName:"p"},"VersionIncompatible")," error if the ",(0,i.kt)("inlineCode",{parentName:"p"},"crate_major")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"crate_minor")," mismatch. The ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"module_name")," represent a byte representation of the pallet's name and module name (e.g. 'Balances'\nand 'pallet_balances'). Consensus systems that are not substrate-based may throw an ",(0,i.kt)("inlineCode",{parentName:"p"},"Unimplemented"),"\nerror for this instruction."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"ExpectPallet {\n    #[codec(compact)]\n    index: u32,\n    name: Vec<u8>,\n    module_name: Vec<u8>,\n    #[codec(compact)]\n    crate_major: u32,\n    #[codec(compact)]\n    min_crate_minor: u32,\n},\n")),(0,i.kt)("h3",{id:"example-2"},"Example"),(0,i.kt)("p",null,"For the full example, check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-docs/tree/main/examples"},"here"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust,",metastring:"noplayground",noplayground:!0},'// Set the instructions that are executed when ExpectPallet does not pass.\n// In this case, reporting back an error to the Parachain.\nSetErrorHandler(Xcm(vec![\n    ReportError(QueryResponseInfo {\n        destination: Parachain(1).into(),\n        query_id: QUERY_ID,\n        max_weight: Weight::from_all(0),\n    })\n])),\n// Configured pallet has different `crate_major` so `VersionIncompatible` error is thrown.\nExpectPallet {\n    index: 1,\n    name: "Balances".into(),\n    module_name: "pallet_balances".into(),\n    crate_major: 3,\n    min_crate_minor: 0,\n}\n')),(0,i.kt)("h2",{id:"expecterror"},"ExpectError"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpectError")," instruction throws an ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpectationFalse")," error if the error register does not\nequal the expected error at that point in the execution. This instruction is useful during the error\nhandler execution to halt the error handler if the error that started the execution of the error\nhandler is not as expected. The ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpectError")," instruction allows to only execute the instructions in\nthe error handler, when a specific error is thrown."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"    ExpectError(Option<(u32, Error)>)\n")),(0,i.kt)("h3",{id:"example-3"},"Example"),(0,i.kt)("p",null,"For the full example, check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-docs/tree/main/examples"},"here"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'SetErrorHandler(Xcm(vec![\n    ExpectError(Some((1, XcmError::VersionIncompatible))),\n    ReportError(QueryResponseInfo {\n        destination: Parachain(1).into(),\n        query_id: QUERY_ID,\n        max_weight: Weight::from_all(0),\n    }),\n])),\n// Pallet index is wrong, so throws `PalletNotFound` error.\nExpectPallet {\n    index: 100,\n    name: "Balances".into(),\n    module_name: "pallet_balances".into(),\n    crate_major: 4,\n    min_crate_minor: 0,\n},\n')),(0,i.kt)("h2",{id:"expecttransactstatus"},"ExpectTransactStatus"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpectTransactStatus")," instruction throws an ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpectationFalse")," error if the transact status\nregister does not equal the expected transact status."),(0,i.kt)("h3",{id:"example-4"},"Example"),(0,i.kt)("p",null,"For the full example, check ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/paritytech/xcm-docs/tree/main/examples"},"here"),". The\ntransact status is reported to ",(0,i.kt)("inlineCode",{parentName:"p"},"Parachain(1)")," if the call in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Transact")," errors."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"SetErrorHandler(Xcm(vec![ReportTransactStatus(QueryResponseInfo {\n    destination: Parachain(1).into(),\n    query_id: QUERY_ID,\n    max_weight: Weight::from_all(0),\n})])),\nTransact {\n    origin_kind: OriginKind::SovereignAccount,\n    require_weight_at_most: Weight::from_parts(INITIAL_BALANCE as u64, 1024 * 1024),\n    call: call.encode().into(),\n},\nExpectTransactStatus(MaybeErrorCode::Success),\n")))}h.isMDXComponent=!0}}]);