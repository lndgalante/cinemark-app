import React, { Component } from 'react'
import { Dialog, Tablist, Tab, Pane } from 'evergreen-ui'

import Schedules from './shared/Schedules'
import Description from './shared/Description'
import Trailer from './shared/Trailer'

class Modal extends Component {
  state = {
    selectedIndex: 0,
    tabs: ['Funciones', 'Descripción', 'Trailer'],
  }

  handleSelectIndex = index => this.setState({ selectedIndex: index })

  componentDidUpdate(prevProps) {
    const { modalVisibility } = this.props
    if (modalVisibility !== prevProps.modalVisibility) this.setState({ selectedIndex: 0 })
  }

  render() {
    const { tabs, selectedIndex } = this.state
    const { modalVisibility, toggleVisibility, selectedPremiere, selectedPremiereShows } = this.props

    return (
      <Dialog
        hasFooter={false}
        cancelLabel="Cerrar"
        isShown={modalVisibility}
        title={`${selectedPremiere.name} ${selectedPremiere.isPremiere ? '- Estreno' : ''}`}
        onCloseComplete={toggleVisibility}
      >
        <Tablist marginBottom={14} display="flex">
          {tabs.map((tab, index) => (
            <Tab
              id={tab}
              key={tab}
              flex={1}
              height={40}
              aria-controls={`panel-${tab}`}
              isSelected={index === selectedIndex}
              onSelect={() => this.handleSelectIndex(index)}
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
              {tab === 'Funciones' && <Schedules shows={selectedPremiereShows} />}
              {tab === 'Descripción' && <Description movie={selectedPremiere} />}
              {tab === 'Trailer' && <Trailer videoId={selectedPremiere.youTubeId} />}
            </Pane>
          ))}
        </Pane>
      </Dialog>
    )
  }
}

export default Modal
