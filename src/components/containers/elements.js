import styled from 'styled-components'
import { BACKGROUND, FONT } from '../../colors'

export const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;
  margin: 0;
  background-color: ${BACKGROUND};
  font-family: Roboto, Georgia, serif;
  color: ${FONT};
`

export const AppTitle = styled.h1`
  text-align: center;
  padding: 10px;
  margin-top: 40px;
  margin-bottom: 0;
  font-size: 3vw;
  @media (min-width: 320px) and (max-width: 600px) {
    text-align: center;
    padding: 10px;
    margin-top: 5px;
    font-size: 7vw;
  }
  @media (min-width: 1280px) {
    font-size: 60px;
  }
`

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
  @media (min-width: 1280px) {
    max-width: 80vw;
    margin-left: auto;
    margin-right: auto;
  }
`

export const PanelContainer = styled.div`
  display: flex;
  overflow-x: scroll;
  justify-content: space-between;
  background-color: ${BACKGROUND};
`