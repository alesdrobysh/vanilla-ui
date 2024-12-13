import { UiElement } from "./UiElement.js";

const tags =
  "a,abbr,address,area,article,aside,audio,b,base,bdi,bdo,blockquote,body,br,button,canvas,caption,cite,code,col,colgroup,data,datalist,dd,del,details,dfn,dialog,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,i,iframe,img,input,ins,kbd,label,legend,li,link,main,map,mark,menu,meta,meter,nav,noscript,object,ol,optgroup,option,output,p,param,picture,pre,progress,q,rp,rt,ruby,s,samp,script,section,select,slot,small,source,span,strong,style,sub,summary,sup,table,tbody,td,template,textarea,tfoot,th,thead,time,title,tr,track,u,ul,var,video,wbr".split(
    ",",
  );

const factories = {};

tags.forEach((tag) => {
  factories[tag] = (arg) => {
    if (!arg) {
      return new UiElement(tag);
    }

    if (typeof arg === "string") {
      return new UiElement(tag, [], [], [arg]);
    }

    if (Array.isArray(arg)) {
      return new UiElement(tag, [], [], arg);
    }

    if (typeof arg === "object") {
      return new UiElement(tag, arg.attributes, arg.listeners, arg.children);
    }

    throw new Error(`Invalid argument: ${arg} passed to ${tag} factory`);
  };
});

export default factories;
