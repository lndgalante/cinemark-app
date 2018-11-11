import { Popover, Switch, Icon, Position, Menu, Button } from 'evergreen-ui'

const Languages = ({ english = true, spanish = true, handleChangeEnglish, handleChangeSpanish }) => (
  <Popover
    position={Position.BOTTOM_RIGHT}
    minWidth={100}
    content={
      <Menu>
        <Menu.Group>
          <Menu.Item secondaryText="EN">
            <Switch checked={english} onChange={({ target }) => handleChangeEnglish(target.checked)} />
          </Menu.Item>
          <Menu.Item secondaryText="ES">
            <Switch checked={spanish} onChange={({ target }) => handleChangeSpanish(target.checked)} />
          </Menu.Item>
        </Menu.Group>
      </Menu>
    }
  >
    <Button height={40}>
      <Icon icon="filter" />
    </Button>
  </Popover>
)

export default Languages
