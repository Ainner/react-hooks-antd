import React, { useState } from 'react'
import { Input } from 'antd'
import PropTypes from 'prop-types'

const TestComponent = (props) => {
  const [value, setValue] = useState(props.testPropValue)
  return (
    <div>
      <Input
        value={value}
        onChange={(v) => {
          const updateValue = v.target.value
          setValue(updateValue)
          props.changeValue(updateValue)
        }}
      />
    </div>
  )
}

TestComponent.propTypes = {
  testPropValue: PropTypes.string,
  changeValue: PropTypes.func
}

export default TestComponent
