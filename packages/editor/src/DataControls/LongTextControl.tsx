import { Button } from '@magickml/client-core'
import { useLayout } from '../contexts/LayoutProvider'

const LongText = () => {
  const { createOrFocus, windowTypes } = useLayout()

  const onClick = () => {
    createOrFocus(windowTypes.TEXT_EDITOR, 'Text Editor')
  }

  return <Button style={{width:'5em'}} onClick={onClick}>Open in text editor</Button>
}

export default LongText
