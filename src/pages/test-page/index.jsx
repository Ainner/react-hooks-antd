import React, { useState } from 'react'
import TestComponent from '@/component/test-component'

const TestPage = () => {
  const [value, setValue] = useState('page init value')

  return (
    <div>
      <TestComponent testPropValue={value} changeValue={setValue} />
    </div>
  )
}

export default TestPage
