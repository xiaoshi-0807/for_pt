// 原始代码开始
(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var If={exports:{}},ws={},zf={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xr=Symbol.for("react.element"),Tm=Symbol.for("react.portal"),Em=Symbol.for("react.fragment"),Am=Symbol.for("react.strict_mode"),Mm=Symbol.for("react.profiler"),Vm=Symbol.for("react.provider"),Dm=Symbol.for("react.context"),Nm=Symbol.for("react.forward_ref"),Rm=Symbol.for("react.suspense"),Lm=Symbol.for("react.memo"),jm=Symbol.for("react.lazy"),pu=Symbol.iterator;function _m(e){return e===null||typeof e!="object"?null:(e=pu&&e[pu]||e["@@iterator"],typeof e=="function"?e:null)}var Bf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Uf=Object.assign,$f={};function Yn(e,t,n){this.props=e,this.context=t,this.refs=$f,this.updater=n||Bf}Yn.prototype.isReactComponent={};Yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Wf(){}Wf.prototype=Yn.prototype;function Bl(e,t,n){this.props=e,this.context=t,this.refs=$f,this.updater=n||Bf}var Ul=Bl.prototype=new Wf;Ul.constructor=Bl;Uf(Ul,Yn.prototype);Ul.isPureReactComponent=!0;var mu=Array.isArray,Hf=Object.prototype.hasOwnProperty,$l={current:null},Kf={key:!0,ref:!0,__self:!0,__source:!0};
// ... [继续下一部分]

// 原始代码继续
function Gf(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)Hf.call(t,r)&&!Kf.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Xr,type:e,key:s,ref:o,props:i,_owner:$l.current}}

// ... [中间的原始代码保持不变，直到 Lw 函数]

// 原始的 Lw 函数被替换为新版本
function Lw() {
  const { selectedModule, setSelectedModule, setShowPVSlider } = Fs();

  const handleSelect = (moduleType) => {
    setSelectedModule(moduleType);
    setShowPVSlider(true);
    setTimeout(() => {
      const nextStep = document.querySelector('[data-step="2"]');
      if (nextStep) {
        const top = nextStep.getBoundingClientRect().top + window.pageYOffset - 100;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold mb-5">ステップ1：クリックして製品を選択</h1>
        <div className="text-gray-600 animate-bounce">👇🏻 以下の製品からお選びください</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Insight Card */}
        <div 
          onClick={() => handleSelect('insight')}
          className="relative p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#6BC845] transition-all duration-200 hover:shadow-lg cursor-pointer group"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-[#6BC845]/10">
              <Tw className="w-6 h-6 text-[#6BC845]" />
            </div>
            <span className="text-xl font-bold text-[#6BC845]">Insight</span>
          </div>
          <div className="text-gray-600 mb-6">
            ヒートマップやアクセス解析で、ユーザー行動を可視化し、Webサイトの課題を発見
          </div>
          <div className="font-medium text-gray-900 mb-4">主な機能：</div>
          <div className="space-y-3">
            {Rw.insight.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Pw className="w-4 h-4 text-[#6BC845]" />
                <span className="text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
          <div className="absolute right-6 bottom-6 text-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Click to Select →
          </div>
        </div>

        {/* Experience Card */}
        <div 
          onClick={() => handleSelect('experience')}
          className="relative p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#0F62FE] transition-all duration-200 hover:shadow-lg cursor-pointer group"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-[#0F62FE]/10">
              <Cw className="w-6 h-6 text-[#0F62FE]" />
            </div>
            <span className="text-xl font-bold text-[#0F62FE]">Experience</span>
          </div>
          <div className="text-gray-600 mb-6">
            A/Bテスト、Web接客、ノーコードサイト編集で、ユーザー体験を最適化
          </div>
          <div className="font-medium text-gray-900 mb-4">主な機能：</div>
          <div className="space-y-3">
            {Rw.experience.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Pw className="w-4 h-4 text-[#0F62FE]" />
                <span className="text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
          <div className="absolute right-6 bottom-6 text-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Click to Select →
          </div>
        </div>

        {/* Bundle Card */}
        <div 
          onClick={() => handleSelect('bundle')}
          className="relative p-6 rounded-2xl bg-white border border-gray-200 hover:border-[#FF6F00] transition-all duration-200 hover:shadow-lg cursor-pointer group"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-[#FF6F00]/10">
                <Aw className="w-6 h-6 text-[#FF6F00]" />
              </div>
              <span className="text-xl font-bold text-[#FF6F00]">Bundle</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-[#091E42] text-white text-xs px-2 py-1 rounded-full">
                おすすめ
              </div>
              <div className="flex items-center bg-[#091E42] text-white text-xs px-2 py-1 rounded-full">
                <Mw className="w-3 h-3 mr-1" />
                20%お得
              </div>
            </div>
          </div>
          <div className="text-gray-600 mb-6">
            InsightとExperienceを統合し、分析から改善までをシームレスに実現
          </div>
          <div className="font-medium text-gray-900 mb-4">主な機能：</div>
          <div className="space-y-3">
            {Rw.bundle.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <Pw className="w-4 h-4 text-[#FF6F00]" />
                <span className="text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
          <div className="absolute right-6 bottom-6 text-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            Click to Select →
          </div>
        </div>
      </div>
    </div>
  );
}

// 原始代码继续
// ... [后续的原始代码]

// 原始代码继续
function Fw(){const[e,t]=M.useState(3e3),[n,r]=M.useState(!1),{selectedModule:i,showPVSlider:s}=Fs(),o=Of.find(c=>c.pv===e)||Of[0],l=Cm[i],a=ri[i],u=e>5e5;return w.jsxs("div",{className:"min-h-screen bg-gray-50",children:[w.jsx(jw,{}),w.jsx("main",{className:"max-w-7xl mx-auto px-4",children:w.jsxs("div",{className:"pt-36 pb-12",children:[w.jsx("p",{className:"text-xl text-gray-600 text-center mb-14",children:"ビジネスの規模に合わせて最適なプランを選びましょう！"}),w.jsx(_f.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5},children:w.jsxs("div",{className:"mb-8",children:[w.jsx("div",{className:"flex items-center justify-center mb-4",children:w.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"ステップ 1：製品を選択"})}),w.jsx(Lw,{})]})}),w.jsx(xw,{children:s&&w.jsx(_f.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.5},"data-step":"2",children:w.jsxs("div",{className:"mt-32 mb-8 scroll-mt-24",children:[w.jsx("div",{className:"flex items-center justify-center mb-4",children:w.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"ステップ 2：月間PV数を選択"})}),w.jsxs("div",{className:"space-y-4",children:[w.jsx(D

