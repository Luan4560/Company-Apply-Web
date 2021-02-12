import React from 'react';
import {Image, Container, Card} from './style'
import { useForm } from 'react-hook-form';

const SignIn = () => {
  const {register, handleSubmit, watch, errors} = useForm()


  const onSubmit = (data, e) => {
    e.target.reset()
    console.log(data)
  }

  return (
    <Container>
      <Card>
          <h1>Sign In</h1>
        <form>
          <input type="email" name="email" placeholder="Email" ref={register}/>
          <input type="password" name="password" placeholder="Password " ref={register}/>
          <input type="submit" name="url" placeholder="Company " ref={register}/>
        </form>
          <button type="button">
            Create Count
          </button>
        <a href="/">Forgot the password?</a>
      </Card>
      <Image />

    </Container>

  )
}

export default SignIn;
