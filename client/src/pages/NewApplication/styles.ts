import styled from 'styled-components'
import { Theme } from '../../config'

const PhotoURL = styled.img.attrs({
  className: 'block',
})`
  margin: 0 auto;
`

const FilePicker = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`

const FilePickerContainer = styled.div.attrs({
  className: 'flex items-center justify-center mb-8 width-full overflow-hidden',
})`
  border: 1px solid ${Theme.border};
  max-height: 226px;
  min-height: 226px;
  height: 226px;
  width: 226px;
`

export { PhotoURL, FilePicker, FilePickerContainer }
