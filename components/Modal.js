import { Dialog, Tablist, Tab, Pane } from 'evergreen-ui'

import { Schedules, Description } from './shared'
import Trailer from './shared/Trailer'

const Modal = ({
  state: { modalData, tabs, isShown, selectedMovie, selectedIndex },
  toggleDialog,
  handleSelectIndex,
  handleConfirmDialog,
}) =>
  modalData && (
    <Dialog
      isShown={isShown}
      cancelLabel="Cerrar"
      confirmLabel="Comprar entradas"
      onCloseComplete={toggleDialog}
      onConfirm={handleConfirmDialog}
      title={selectedMovie.title}
    >
      <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
        {tabs.map((tab, index) => (
          <Tab
            id={tab}
            key={tab}
            aria-controls={`panel-${tab}`}
            isSelected={index === selectedIndex}
            onSelect={() => handleSelectIndex(index)}
          >
            {tab}
          </Tab>
        ))}
      </Tablist>
      <Pane background="tint1" flex="1">
        {tabs.map((tab, index) => (
          <Pane
            key={tab}
            role="tabpanel"
            id={`panel-${tab}`}
            aria-labelledby={tab}
            aria-hidden={index !== selectedIndex}
            display={index === selectedIndex ? 'block' : 'none'}
          >
            {tab === 'Horarios' && <Schedules schedules={modalData} />}
            {tab === 'Descripción' && <Description movie={selectedMovie} />}
            {tab === 'Trailer' && <Trailer videoId={selectedMovie.details.youTubeId} />}
          </Pane>
        ))}
      </Pane>
    </Dialog>
  )

export default Modal
