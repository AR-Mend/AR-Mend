export default function ModelPreview({view,alt}){return <div className="model-preview"><img src={'/previews/'+view+'.png'} alt={alt} width="400" height="400" loading="lazy"/></div>}
