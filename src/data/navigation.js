import {offeringGroups} from './offerings.js';

export default [
  {label:'Home',id:'model'},
  {label:'About',id:'about'},
  {label:'Features',id:'features'},
  {label:offeringGroups[0].title,id:'technology',pages:offeringGroups[0].pages},
  {label:offeringGroups[1].title,id:'systems',pages:offeringGroups[1].pages},
  {label:'Workflow',id:'workflow'},
  {label:'FAQ',id:'faq'},
  {label:'Contact',id:'contact'},
];
