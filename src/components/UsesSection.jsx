import ModelPreview from './shared/ModelPreview.jsx';
const uses=[
 ['Model demonstrations','Introduce AR MEND with a shared 3D view, then show how its surface, mesh and point renderings relate.'],
 ['Education and explanation','Use a movable visual reference to explain shape and spatial relationships beyond a flat image.'],
 ['Research conversations','Bring the model into a discussion, compare viewpoints and identify questions for further investigation.']
];
export default function Uses(){return <section className="uses-section" id="uses"><div className="uses-content"><p className="section-kicker">Applications</p><h2>A new perspective<br/>on the model.</h2><p className="uses-description">A spatial reference for demonstrations, explanation and research conversations.</p><div className="uses-list">{uses.map(([title,body],i)=><details key={title} open={i===0}><summary>{title}<span aria-hidden="true">+</span></summary><p>{body}</p></details>)}</div></div><div className="uses-art"><div className="model-orbit" aria-hidden="true"/><ModelPreview view="points" alt="The brain model rendered as a surface point cloud"/><span>SPATIAL UNDERSTANDING / AR MEND</span></div></section>}
