import { createContext, useState } from 'react'

export const DefaultContextPage = createContext()

const DefaultContextPageProvider = ({ children }) => {
  const [name, setName] = useState('name')
  const [profission, setProfission] = useState('frontend developer')
  const [description, setDescription] = useState('this is my description')

  return (
    <DefaultContextPage.Provider
      value={{
        name,
        profission,
        description,
        setName,
        setProfission,
        setDescription,
      }}
    >
      {children}
    </DefaultContextPage.Provider>
  )
}

export default DefaultContextPageProvider
