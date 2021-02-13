import React, {useState, useEffect} from 'react';
import { useForm } from 'react-hook-form';
import {Container, Content, ContentButton} from './styles'
import {BsTrash, BsCheckCircle, BsStar} from 'react-icons/bs'
import api from '../../services/api'

const Home = () => {
  const {register, handleSubmit, watch, errors} = useForm()
  const [isLoading, setIsLoading] = useState(false);
  const [company, setCompany] = useState([])
  const [newCompany, setNewCompany] = ([]);

  const onSubmit = async(data, e) => {
    e.target.reset()

    try {
      setIsLoading(true)

      const response = await api.post('companys', data )

      setCompany([...company, response.data])
    }catch(error) {
      console.log(error)
    }finally {
      setIsLoading(false)
    }
  }

  const handleDelete = async(id, e) => {
    try{
      setIsLoading(true);
      await api.delete(`/companys/${id}`)
     setCompany(company.filter((item) => item.id !== id))
    }catch(err) {
      console.log(err, 'Error ao deletar')
    }finally {
      setIsLoading(false);
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
        <input type="text" name="name" placeholder="Company" ref={register}/>
        <input type="text" name="url" placeholder="Company " ref={register}/>
        <input type="text" name="country" placeholder="Country" ref={register}/>
        <input type="text" name="city" placeholder="City" ref={register}/>
        <input type="submit" value="Insert"/>
      </form>

      {company.map(company => (
        <Content  key={company.url}>
          <div>
            <h3>{company.name}</h3>
            <p>
              Country: {company.country}<br/>
              City:{company.city}
            </p>

            <h4>Visite a Empresa</h4>
          </div>

          <ContentButton>
            <button className="blue" type="button" onClick={() => handleDelete(company.id)}>
              <BsStar size={25} color="#fff" />
            </button>

            <button className="green"type="button" onClick={() => handleDelete(company.id)}>
              <BsCheckCircle size={25} color="#fff" />
            </button>

            <button className="red" type="button" onClick={() => handleDelete(company.id)}>
              <BsTrash size={25} color="#fff" />
            </button>

          </ContentButton>
        </Content>
        ))}
    </Container>
  </>
  )
}

export default Home;
