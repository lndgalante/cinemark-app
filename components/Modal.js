import React, { Component } from 'react'
import { Dialog, Tablist, Tab, Pane, toaster } from 'evergreen-ui'
import Router from 'next/router'

import Schedules from './shared/Schedules'
import Description from './shared/Description'
import Trailer from './shared/Trailer'

class Modal extends Component {
  state = {
    selectedIndex: 0,
    hasFooter: false,
    tabs: ['Funciones', 'Descripción', 'Trailer'],
  }

  componentDidMount() {
    this.toggleFooter()
  }

  componentDidUpdate(prevProps) {
    const { modalVisibility } = this.props
    if (modalVisibility !== prevProps.modalVisibility) this.setState({ selectedIndex: 0 })
  }

  toggleFooter = () => {
    const hasFooter = navigator.hasOwnProperty('share') || navigator.hasOwnProperty('clipboard')
    this.setState({ hasFooter })
  }

  handleSelectIndex = index => this.setState({ selectedIndex: index })

  handleConfirm = async () => {
    const { selectedPremiere } = this.props

    if (navigator.share) {
      navigator.share({
        url: window.location.href,
        title: selectedPremiere.name,
        text: selectedPremiere.description,
      })
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href)
      toaster.notify(`Link copiado al portapapeles`)
    }
  }

  handleClose = () => {
    this.props.toggleVisibility()
    Router.push('/', '/', { shallow: true })
  }

  render() {
    const { tabs, selectedIndex, hasFooter } = this.state
    const { modalVisibility, selectedPremiere, selectedPremiereShows } = this.props

    return (
      <Dialog
        cancelLabel="Cerrar"
        confirmLabel="Compartir"
        isShown={modalVisibility}
        hasFooter={hasFooter}
        onConfirm={this.handleConfirm}
        onCloseComplete={this.handleClose}
        title={`${selectedPremiere.name} ${selectedPremiere.isPremiere ? '- Estreno' : ''}`}
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
