import React,{lazy,Suspense} from 'react';
import Fallback from './BrainFallback.jsx';

const BrainScene=lazy(()=>import('../../scenes/BrainScene.jsx'));

class SceneBoundary extends React.Component {
  state = {
    failed: false
  };
  static getDerivedStateFromError() {
    return {
      failed: true
    };
  }
  render() {
    return this.state.failed ? <Fallback /> : this.props.children;
  }
}

function Scene({
  mode = 0,
  reduced = false,
  showControls = true
}) {
  return <SceneBoundary><Suspense fallback={<Fallback />}><BrainScene mode={mode} reduced={reduced} showControls={showControls} /></Suspense></SceneBoundary>;
}

export default Scene;
