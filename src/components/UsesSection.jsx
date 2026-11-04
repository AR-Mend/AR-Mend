const uses=[
 ['Model demonstrations','Introduce AR MEND with a shared 3D view, then show how its surface, mesh and point renderings relate.'],
 ['Education and explanation','Use a movable visual reference to explain shape and spatial relationships beyond a flat image.'],
 ['Research conversations','Bring the model into a discussion, compare viewpoints and identify questions for further investigation.']
];
export default function Uses(){return <section className="uses-section" id="uses"><div className="uses-heading"><p className="section-kicker">Uses</p><h2>A model you can<br/><em>share and explain.</em></h2></div><div className="uses-list">{uses.map(([title,body])=><article key={title}><h3>{title}</h3><p>{body}</p></article>)}</div></section>}
