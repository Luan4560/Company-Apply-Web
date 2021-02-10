import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import {Container, Content} from './styles'
import {BsTrash} from 'react-icons/bs'
import api from '../../services/api'

const Home = () => {
  const {register, handleSubmit, watch, errors} = useForm()
  const [isLoading, setIsLoading] = useState(false);
  const [company, setCompany] = useState([])
  const [newCompany, setNewCompany] = ([]);

  const onSubmit = async(data) => {
    try {
      setIsLoading(true)
      await api.post('companys', {
        name: data.name,
        url: data.url
      })
    }catch(error) {
      console.log(error)
    }finally {
      setIsLoading(false)
    }
  }

  const getCompany = async() => {
    try{
      setIsLoading(true)
      const response = await api.get('companys')
      setCompany(response.data)
    }catch(error) {
      console.log('Error')
    }finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getCompany()
  }, [])
  

  return (
  <>
    <Container>
      <h1>Company Apply</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="name" placeholder="Nome da empresa" ref={register}/>
        <input type="text" name="url" placeholder="URL do site da empresa" ref={register}/>
        <input type="submit" value="Submit"/>
      </form>

    
    
      {company.map(company => (
        <Content  key={company.url}>
          <div>
            <h3>{company.name}</h3>
            <h4>{company.url}</h4>
          </div> 

          <button type="button" onClick={() => console.log('deletar')}>
            <BsTrash size={25} color="#ED254E" />
          </button>
        </Content>
        ))} 
    </Container>
  </>
  )
}

export default Home;
