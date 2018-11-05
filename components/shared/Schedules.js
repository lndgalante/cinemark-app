import { Table, Badge } from 'evergreen-ui'
import styled from 'styled-components'

import Badges from './Badges'

const StyledHead = styled(Table.Head)`
  position: sticky;
  top: -17px;
`

const Schedules = ({ schedules }) => (
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
      {schedules.map(({ date, timetable }) =>
        timetable.map(({ type, schedules }) => (
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
      )}
    </Table.Body>
  </Table>
)

export default Schedules
