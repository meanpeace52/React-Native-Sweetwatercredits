'use strict'
import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'

// Vendor Components
import DropDown, { Select, Option, OptionList } from 'react-native-selectme'

class ZoneForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      zoneType: ''
    }
  }

  _getOptionList () {
    return this.refs['OPTIONLIST']
  }

  _zoneType (type) {
    this.setState({
      ...this.state,
      zoneType: type
    })
  }

  render () {
    return (
      <View>
        <View style={styles.loginInput}>
          <TouchableHighlight>
            <TextInput
              style={styles.inputView}
              keyboardType='numeric'
              placeholder='Acreage'/>
          </TouchableHighlight>
        </View>
        {/* React Native Select Me */}
          <Select
            width={325}
            ref='SELECT1'
            optionListRef={this._getOptionList.bind(this)}
            defaultValue='Zone Type'
            onSelect={this._zoneType.bind(this)}>
            <Option>Core</Option>
            <Option>Non-Core</Option>
          </Select>
          <OptionList ref='OPTIONLIST'/>
          {/* End React Native Select Me */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  inputView: {
    height: 30,
    width: 300
  },
  loginInput: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    marginBottom: 10,
    marginTop: 10
  }
})

module.exports = ZoneForm
