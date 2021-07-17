import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { moveTask } from '../../reducers/taskReducer'
import { rememberAction } from '../../reducers/actionReducer'
import { DESTINATIONS } from '../../content'
import { CardComponent, CardDescription, CardErrorName, CardText } from './elements'
import { ButtonMove } from '../Buttons/elements'

export const Card = ({ item, sourcePanel }) => {
  const destinationPanel = DESTINATIONS[sourcePanel]
  const dispatch = useDispatch()

  // handling 'Move to...' button click by sending data to both reducers:
  // - task index, source panel and destination panel => to tasks reducer
  // - action performed => to action reducer
  const handleClick = () => {
    dispatch(moveTask(item.index, sourcePanel, destinationPanel))
    dispatch(rememberAction(item.index, sourcePanel, destinationPanel))
  }

  return (
    <CardComponent>
      <CardDescription>
        <CardErrorName>Error: {item.code}</CardErrorName>
        <CardText>{item.text}</CardText>
      </CardDescription>
      <ButtonMove
        onClick={handleClick}>Move to {destinationPanel}
      </ButtonMove>
    </CardComponent>
  )
}

Card.propTypes = {
  item: PropTypes.object.isRequired,
  sourcePanel: PropTypes.string.isRequired
}