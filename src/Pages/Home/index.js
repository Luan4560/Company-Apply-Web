import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import {Container, Content} from './styles'
import api from '../../services/api'

const Home = () => {
  const {register, handleSubmit, watch, errors} = useForm()
  const [loading, setIsLoading] = useState(false)
  const onSubmit = async (data) => {
    const newProject = await api.post('/companys', data)


    setCompany([...company, newProject])

  }
  const [company, setCompany] = useState([]);
  const [value, setValue] = useState([])
  console.log(value)
  
  useEffect(() => {
    setIsLoading(true)
    api.get('/companys')
    .then(response => {
      setCompany(response.data)
      console.log(response.data)
    })
    .catch(error => console.log(error))

    setIsLoading(false)

  }, [])
  
  return (
  <>
    <Container>
      <h1>Company Apply</h1>
      <form onSubmit={handleSubmit(onSubmit)} >
        <input type="text" name="name" placeholder="Nome da empresa" ref={register}/>
        <input type="text" name="url" placeholder="URL do site da empresa" ref={register}/>
        <input type="submit" value="Submit"  />
      </form>

      {company.map(company => (
        <Content>
          <div key={company.url}>
            <h3>{company.name}</h3>
            <h4>{company.url}</h4>
          </div> 
          
        </Content>
      ))}
        
    </Container>
  </>
  )
}

export default Home;
