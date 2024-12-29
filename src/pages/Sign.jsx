import React, { useState } from 'react'
import RegisterUrl from '../axios'
import { Link, useNavigate } from 'react-router-dom'

function Sign () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [show, setShow] = useState(false)
  const navigate = useNavigate()

  function validate () {
    if (username.length === 0) {
      alert('Username kiritilmagan!!!')
      return false
    }
    if (password.length === 0) {
      alert('Parol kiritilmagan!!!')
      return false
    }
    return true
  }

  function handleLogin (e) {
    e.preventDefault()
    let isValid = validate()
    if (!isValid) return

    let user = { username, password }
    setLoading(true)

    RegisterUrl.post('auth/signin', user, {
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        if (response.status == 200) {
          localStorage.setItem('user', JSON.stringify(response.data))
          localStorage.setItem('token', response.data.accessToken)
          navigate('/home')
        }
      })
      .catch(err => {
        if (err.status == 404 || err.status == 401) {
          alert(err.message)
        }
      })
      .finally(() => setLoading(false))
  }

  return (
    <div>
      <form className='max-w-[500px] mx-auto bg-blue-500 w-[600px] font-serif p-5 flex flex-col rounded-lg shadow-2xl mt-5 items-center justify-center gap-4 mb-5'>
        <input
          value={username}
          placeholder='you username'
          type='text'
          onChange={e => setUsername(e.target.value)}
          className='border w-full py-2 px-3 rounded-md shadow-md focus:outline-none'
        />
        <div className='flex items-center w-full gap-3'>
          <input
            value={password}
            placeholder='you password...'
            type={show ? 'text' : 'password'}
            onChange={e => setPassword(e.target.value)}
            className='border py-2 px-3 rounded-md shadow-md focus:outline-none w-full'
          />
        </div>
        <button
          className='btn btn-success w-full text-white shadow-lg'
          onClick={handleLogin}
        >
          {loading ? 'Loading' : 'Login'}
        </button>

        <Link to='/register' className='btn btn-active btn-link'>
          Registratsiya qilish
        </Link>
      </form>
    </div>
  )
}

export default Sign
