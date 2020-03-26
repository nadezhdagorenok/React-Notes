import React, {Profiler} from 'react';
import './App.css';
import {FormNotes} from './components/FormNotes/FormNotes';

function App() {
  const onRenderCallback=(
    id, // проп "id" из дерева компонента Profiler, для которого было зафиксировано изменение
    phase, // либо "mount" (если дерево было смонтировано), либо "update" (если дерево было повторно отрендерено)
    actualDuration, // время, затраченное на рендер зафиксированного обновления
    baseDuration, // предполагаемое время рендера всего поддерева без кеширования
    startTime, // когда React начал рендерить это обновление
    commitTime, // когда React зафиксировал это обновление
    interactions // Множество «взаимодействий» для данного обновления 
  ) =>{
    console.log(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions);
  }
  return (
    <div className="App">
      <h1 className="title">Notes</h1>
      <Profiler id="FormNotes" onRender={onRenderCallback}>
        <FormNotes />
      </Profiler>
    </div>
  );
}

export default App;
