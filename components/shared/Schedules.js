import { Table, Badge, Avatar, Link, Icon } from 'evergreen-ui'
import styled from 'styled-components'

const StyledHead = styled(Table.Head)`
  position: sticky;
  top: -17px;
  z-index: 10;
`

const BadgeContainer = styled.div`
  display: grid;
  height: 18px;
`

const StyledBadge = styled(Badge)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Schedules = ({ shows }) => (
  <Table>
    <StyledHead>
      <Table.TextCell flexBasis={52} flexShrink={0} flexGrow={0}>
        Tipo
      </Table.TextCell>
      <Table.TextCell className="date-cell">Fecha</Table.TextCell>
      <Table.TextCell flexBasis={90} flexShrink={0} flexGrow={0}>
        Idioma
      </Table.TextCell>
      <Table.TextCell>Horarios</Table.TextCell>
    </StyledHead>
    <Table.Body>
      {shows.map(({ format, version, cinemas }) =>
        cinemas.map(({ date, time, link }) => (
          <Table.Row key={link} height="auto" paddingY={12} isSelectable onSelect={() => window.open(link)}>
            <Table.TextCell flexBasis={52} flexShrink={0} flexGrow={0}>
              <Avatar name={format.split('').join(' ')} isSolid size={28} />
            </Table.TextCell>
            <Table.TextCell className="date-cell">{date}</Table.TextCell>
            <Table.TextCell flexBasis={90} flexShrink={0} flexGrow={0}>
              {version}
            </Table.TextCell>
            <Table.TextCell isNumber>
              <BadgeContainer>
                <StyledBadge>{time}</StyledBadge>
              </BadgeContainer>
            </Table.TextCell>
          </Table.Row>
        ))
      )}
    </Table.Body>
  </Table>
)

export default Schedules
