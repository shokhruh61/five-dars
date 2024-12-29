import React, { useState } from 'react'
import RegisterUrl from '../axios'
import { Link, useNavigate } from 'react-router-dom'

function Register () {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  const [show1, setShow1] = useState(false)

  const navigate = useNavigate()

  function validate () {
    if (password != rePassword) {
      alert(
        'Parolni togri kiriting 2ala kiritish maydonidagi parol larni qiymati teng bolishi shart!!!'
      )
      return false
    }
    if (!username || !email || !password) {
      alert('Formani toldirish majburiy!!!')
      return false
    }
    return true
  }

  function handleRegister (e) {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return

    const user = {
      username,
      email,
      password
    }
    setLoading(true)

    RegisterUrl.post('auth/signup', user, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (response.status == 200) {
          navigate('/login')
        }
      })
      .catch(error => {
        if (error.status == 400) {
          alert(error.message)
          return
        }
      })
      .finally(() => setLoading(false))
  }

  return (
    <div className='font-mono max-w-[400px] mx-auto mt-5 mb-5'>
      <form
        onSubmit={handleRegister}
        className='bg-blue-500 w-[600px] mx-auto flex flex-col gap-4 p-4 rounded-lg shadow-2xl'
      >
        <input
          className='bg-slate-100 shadow-lg rounded-md py-2 px-3 focus:outline-none'
          placeholder='Enter username...'
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          className='bg-slate-100 shadow-lg rounded-md py-2 px-3 focus:outline-none'
          placeholder='Enter email...'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <div className='flex items-center gap-4'>
          <input
            className='bg-slate-100 shadow-lg w-11/12 rounded-md py-2 px-3 focus:outline-none'
            placeholder='Enter password...'
            type={show ? 'text' : 'password'}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <span
            className='bg-slate-300 rounded-md text-center py-2 font-mono w-16 cursor-pointer inline-block'
            onClick={() => setShow(!show)}
          >
            {show ? 'hide' : 'show'}
          </span>
        </div>
        <div className='flex items-center gap-4'>
          <input
            className='bg-slate-100 shadow-lg w-11/12 rounded-md py-2 px-3 focus:outline-none'
            placeholder='Confirm password...'
            type={show1 ? 'text' : 'password'}
            value={rePassword}
            onChange={e => setRePassword(e.target.value)}
          />
          <span
            className='bg-slate-300 rounded-md text-center py-2 font-mono w-16 cursor-pointer inline-block'
            onClick={() => setShow1(!show1)}
          >
            {show1 ? 'hide' : 'show'}
          </span>
        </div>
        <button type='submit' className='btn btn-accent'>
          {loading ? 'Loading...' : 'Register'}
        </button>
        <Link to='/sign' className='btn btn-active btn-link'>
          Login ga otish
        </Link>
      </form>
    </div>
  )
}

export default Register
