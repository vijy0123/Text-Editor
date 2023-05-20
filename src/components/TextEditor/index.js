import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {TextAreaElement, ButtonContainer, Button} from './styles'

import './styles.css'

class TextEditor extends Component {
  state = {
    textToBold: false,
    textToItalic: false,
    textToUnderline: false,
  }

  onClickBold = () => {
    this.setState(prev => ({textToBold: !prev.textToBold}))
  }

  onClickItalic = () => {
    this.setState(prev => ({textToItalic: !prev.textToItalic}))
  }

  onClickUnderline = () => {
    this.setState(prev => ({textToUnderline: !prev.textToUnderline}))
  }

  render() {
    const {textToBold, textToItalic, textToUnderline} = this.state

    const boldButtonColor = textToBold === false ? '#f1f5f9' : ' #faff00'

    const italicButtonColor = textToItalic === false ? '#f1f5f9' : ' #faff00'

    const underlineButtonColor =
      textToUnderline === false ? '#f1f5f9' : ' #faff00'

    const fontWeight = textToBold ? 'bold' : 'normal'

    const fontStyle = textToItalic ? 'italic' : 'normal'

    const textDecoration = textToUnderline ? 'underline' : 'normal'

    return (
      <div className="bg-container">
        <div className="responsive-container">
          <div className="image-container">
            <div>
              <h1 className="heading">Text Editor</h1>
              <div className="img-ele-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                  className="image"
                  alt="text editor"
                />
              </div>
            </div>
            <div className="editor-container">
              <ButtonContainer>
                <li>
                  <Button
                    type="button"
                    className="button"
                    onClick={this.onClickBold}
                    data-testid="bold"
                    color={boldButtonColor}
                  >
                    <VscBold size={25} />
                  </Button>
                </li>

                <li>
                  <Button
                    type="button"
                    className="button"
                    onClick={this.onClickItalic}
                    data-testid="italic"
                    color={italicButtonColor}
                  >
                    <GoItalic size={25} />
                  </Button>
                </li>

                <li>
                  <Button
                    type="button"
                    className="button"
                    onClick={this.onClickUnderline}
                    data-testid="underline"
                    color={underlineButtonColor}
                  >
                    <AiOutlineUnderline size={25} />
                  </Button>
                </li>
              </ButtonContainer>
              <hr className="line" />
              <TextAreaElement
                fontWeight={fontWeight}
                fontStyle={fontStyle}
                textDecoration={textDecoration}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default TextEditor
