import React, {Component} from 'react'
import { TextInput } from 'react-native'
import { observer } from 'mobx-react'
import { observable  } from 'mobx'
import styled from 'styled-components/native'

const FormInput = styled.TextInput`
  height:40;
  background: rgba(255,255,255,0.2);
  margin-bottom:10;
  color:#fff;
  padding-horizontal:10;
`

@observer
export default class InputField extends Component {
  @observable name = ''
  @observable text = ''

  onChangeText = (text) => {
    setTimeout(() => {this.setState({ text: text })})
    this.props.onChange(this.name , text)
  }
  render () {
    const input = this.props
    this.name = input.name
    return (
        <FormInput
            {...this.props}
            underlineColorAndroid='transparent'
            onChangeText={(text) => this.onChangeText(text)}
            value={input.value} />
    )
  }
}

InputField.defaultProps = {
  type: 'text'
}
