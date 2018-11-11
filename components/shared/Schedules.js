import { Table, Badge, Avatar, Link, Icon } from 'evergreen-ui'
import styled from 'styled-components'

const StyledHead = styled(Table.Head)`
  position: sticky;
  top: -17px;
  z-index: 10;
`

const Schedules = ({ shows }) => (
  <Table>
    <StyledHead>
      <Table.TextCell flexBasis={75} flexShrink={0} flexGrow={0}>
        Formato
      </Table.TextCell>
      <Table.TextCell flexBasis={120} flexShrink={0} flexGrow={0}>
        Fecha
      </Table.TextCell>
      <Table.TextCell>Idioma</Table.TextCell>
      <Table.TextCell>Horarios</Table.TextCell>
      <Table.TextCell flexBasis={60} flexShrink={0} flexGrow={0}>
        Link
      </Table.TextCell>
    </StyledHead>
    <Table.Body>
      {shows.map(({ format, version, cinemas }) =>
        cinemas.map(({ date, time, link }) => (
          <Table.Row key={link} height="auto" paddingY={12}>
            <Table.TextCell flexBasis={75} flexShrink={0} flexGrow={0}>
              <Avatar name={format.split('').join(' ')} isSolid size={28} />
            </Table.TextCell>
            <Table.TextCell flexBasis={120} flexShrink={0} flexGrow={0}>
              {date}
            </Table.TextCell>
            <Table.TextCell>{version}</Table.TextCell>
            <Table.TextCell>
              <Badge>{time}</Badge>
            </Table.TextCell>
            <Table.TextCell flexBasis={60} flexShrink={0} flexGrow={0}>
              <Link href={link} target="_blank">
                <Icon icon="shopping-cart" color="muted" size={14} title="Comprar entrada" />
              </Link>
            </Table.TextCell>
          </Table.Row>
        ))
      )}
    </Table.Body>
  </Table>
)

export default Schedules
