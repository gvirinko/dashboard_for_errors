import React from 'react'
import PropTypes from 'prop-types'

import { Card } from '../Card'
import { PanelComponent, PanelTitle, PanelTitleText, PanelCards } from './elements'

export const Panel = ({ name, data }) => {
  return (
    <PanelComponent>
      <PanelTitle>
        <PanelTitleText>{name.toUpperCase()}</PanelTitleText>
      </PanelTitle>
      <PanelCards>
        {data.map(item =>
          <Card
            key={item.index}
            item={item}
            sourcePanel={name}>
          </Card>)
        }
      </PanelCards>
    </PanelComponent>
  )
}

Panel.propTypes = {
  name: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired
}