import React from 'react';
import {Image, Container, Card} from './style'
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom'
const SignIn = () => {
  const {register, handleSubmit, watch, errors} = useForm()

  return (
    <Container>
      <Card>

          <h1>Sign In</h1>
        <form>
          <input type="email" name="email" placeholder="Email" ref={register}/>
          <input type="password" name="password" placeholder="Password " ref={register}/>
        </form>
        <Link to="/home">
          <button type="button">
            Sign In
          </button>

        </Link>

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
