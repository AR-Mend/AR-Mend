const views=[['Anatomy',0],['Wireframe',3],['Points',4]];
export default function ViewSwitcher({mode,onChange}){
 return <div className="view-switcher" role="group" aria-label="Model appearance">{views.map(([label,value])=><button key={label} type="button" aria-pressed={mode===value} onClick={()=>onChange(value)}>{label}</button>)}</div>;
}
