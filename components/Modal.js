import { Dialog, Tablist, Tab, Pane, Table, Badge, Paragraph } from 'evergreen-ui'
import YouTube from 'react-youtube'
import styled from 'styled-components'

import { Badges } from './shared'

const StyledHead = styled(Table.Head)`
  position: sticky;
  top: -17px;
`

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
      confirmLabel="Ver película"
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
            {tab === 'Horarios' && (
              <Table>
                <StyledHead>
                  <Table.TextCell flexBasis={120} flexShrink={0} flexGrow={0}>
                    Fecha
                  </Table.TextCell>
                  <Table.TextCell flexBasis={110} flexShrink={0} flexGrow={0}>
                    Tipo
                  </Table.TextCell>
                  <Table.TextCell>Horarios</Table.TextCell>
                </StyledHead>
                <Table.Body>
                  {modalData.map(({ date, timetable }) => {
                    return timetable.map(({ type, schedules }) => (
                      <Table.Row key={`${date}-${type}`} height="auto" paddingY={12}>
                        <Table.TextCell flexBasis={120} flexShrink={0} flexGrow={0}>
                          {date}
                        </Table.TextCell>
                        <Table.TextCell flexBasis={110} flexShrink={0} flexGrow={0}>
                          {type}
                        </Table.TextCell>
                        <Table.TextCell>
                          <Badges>
                            {schedules.map(schedule => (
                              <Badge key={`${date}-${type}-${schedule}`}>{schedule}</Badge>
                            ))}
                          </Badges>
                        </Table.TextCell>
                      </Table.Row>
                    ))
                  })}
                </Table.Body>
              </Table>
            )}
            {tab === 'Sinopsis' && (
              <Pane paddingX={14} paddingY={10}>
                <Paragraph size={500}>{selectedMovie.details.description}</Paragraph>
              </Pane>
            )}
            {tab === 'Trailer' && (
              <Pane height={297}>
                <YouTube
                  videoId={selectedMovie.details.youTubeId}
                  opts={{
                    width: '100%',
                    height: '100%',
                  }}
                />
              </Pane>
            )}
          </Pane>
        ))}
      </Pane>
    </Dialog>
  )

export default Modal
