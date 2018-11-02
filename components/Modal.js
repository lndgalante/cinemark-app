import { Dialog, Tablist, Tab, Pane, Table, Badge, Paragraph } from 'evergreen-ui'
import YouTube from 'react-youtube'

import { Badges } from './shared'

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
            padding={6}
            role="tabpanel"
            id={`panel-${tab}`}
            aria-labelledby={tab}
            aria-hidden={index !== selectedIndex}
            display={index === selectedIndex ? 'block' : 'none'}
          >
            {tab === 'Horarios' && (
              <Table>
                <Table.Head>
                  <Table.TextCell>Fecha</Table.TextCell>
                  <Table.TextCell>Tipo</Table.TextCell>
                  <Table.TextCell>Horarios</Table.TextCell>
                </Table.Head>
                <Table.Body>
                  {modalData.map(({ date, timetable }) => {
                    return timetable.map(({ type, schedules }) => (
                      <Table.Row key={`${date}-${type}`} height="auto" paddingY={12}>
                        <Table.TextCell>{date}</Table.TextCell>
                        <Table.TextCell>{type}</Table.TextCell>
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
              <Pane>
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
