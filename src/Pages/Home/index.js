import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import {Container, Content} from './styles'
import {BsTrash} from 'react-icons/bs'
import api from '../../services/api'

const Home = () => {
  const {register, handleSubmit, watch, errors} = useForm()
  const [loading, setIsLoading] = useState(false)
  const [company, setCompany] = useState(['Titulo']);
  const [value, setValue] = useState([])
  
  const onSubmit = async data => {
 
    try {
      setIsLoading(true)

     await api({
        method: 'post',
        url: '/companys',
        data: {
          name: data.name,
          url: data.url
        }
      })
     
    } catch(error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }


  
  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      try {
        const response = await api.get('/companys')
        
        setCompany(response.data)
        console.log(response.data)   

      }catch(error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }

    }

    getData()
  }, [])
  
  return (
  <>
    <Container>
      <h1>Company Apply</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
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

          <div onClick={() => console.log('deletar')}>
            <BsTrash size={25} color="#777" />

          </div>
           
        </Content>
          ))} 
    </Container>
  </>
  )
}

export default Home;
