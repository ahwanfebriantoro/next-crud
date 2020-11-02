import { ComponentElement } from 'react'
import ComponentGroup from '../../components'

const componentList = [{ name: 'Button', component: ComponentGroup.Button }]

const ComponentView = () => {
  return (
    <div>
      <h1>Here is default component</h1>
      {componentList.map((item) => (
        <>
          <h3>{item.name}</h3>
          <item.component />
        </>
      ))}
    </div>
  )
}

export default ComponentView
