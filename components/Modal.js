import React, { Component } from 'react'
import { Dialog, Tablist, Tab, Pane, toaster } from 'evergreen-ui'

import Schedules from './shared/Schedules'
import Description from './shared/Description'
import Trailer from './shared/Trailer'

class Modal extends Component {
  state = {
    selectedIndex: 0,
    tabs: ['Horarios', 'Descripción', 'Trailer'],
  }

  handleSelectIndex = index => this.setState({ selectedIndex: index })

  handleConfirmDialog = () => window.open(this.props.selectedPremiere.link)

  componentDidUpdate(prevProps) {
    if (
      this.props.modalData &&
      this.props.modalData.error &&
      this.props.modalData.erorr !== prevProps.modalData.error
    ) {
      toaster.warning('Primero debes elegir tu cine favorito')
    }

    if (this.props.modalVisibility !== prevProps.modalVisibility) {
      this.setState({ selectedIndex: 0 })
    }
  }

  render() {
    const { tabs, selectedIndex } = this.state
    const { modalData, modalVisibility, toggleVisibility, selectedPremiere } = this.props

    if (!selectedPremiere.title) return null

    return (
      <Dialog
        cancelLabel="Cerrar"
        isShown={modalVisibility}
        title={selectedPremiere.title}
        confirmLabel="Comprar entradas"
        onCloseComplete={toggleVisibility}
        onConfirm={this.handleConfirmDialog}
      >
        <Tablist marginBottom={16} flexBasis={240} marginRight={24}>
          {tabs.map((tab, index) => (
            <Tab
              id={tab}
              key={tab}
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
              {tab === 'Horarios' && <Schedules schedules={modalData} />}
              {tab === 'Descripción' && <Description movie={selectedPremiere} />}
              {tab === 'Trailer' && <Trailer videoId={selectedPremiere.details.youTubeId} />}
            </Pane>
          ))}
        </Pane>
      </Dialog>
    )
  }
}

export default Modal
