import axios from 'axios'
import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'
import { REST_API_KEY, REDIRECT_URI } from '../api/KakaoLoginData'

function KakaoLogin() {
  const location = useLocation()
  const navigate = useNavigate()
  const KAKAO_CODE = location.search.split('=')[1]
  const getKAkaoToken = () => {
    console.log(KAKAO_CODE);
    fetch(`http://localhost:8080/oauth`, {
      method: 'GET',
    })
    .then((res) => console.log(res));

      // .then((res) => res.json())
      // .then((data) => {
      //   if (data.access_token) {
      //     localStorage.setItem('token', data.access_token)
      //   } else {
      //     navigate('/')
      //   }
      // })
  }
  useEffect(() => {
    // console.log(KAKAO_CODE)
    if (!location.search) return
    getKAkaoToken()
  }, [])
  return <div>카카오로그인</div>
}

export default KakaoLogin
