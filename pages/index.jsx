import Link from 'next/link'
import { useState } from 'react';

import {useSelector} from 'react-redux'
import MainLayout from '../layouts/MainLayout';

import Start from '../components/Start';

import {useUserManagementHook} from '../hooks/userManagementHook';

export default function Home() {
  useUserManagementHook();

  const [status, setStatus] = useState('login');
  const user = useSelector(state => state.UserReducer);

  return (
    <>
    {
      !user.isLogin && <Start status={status} changeStatus={setStatus}/>
    }
    {
      user.isLogin && user.data.title.toLowerCase() == 'student' && <MainLayout>
        <h1>Dashboard is in development!</h1>
      </MainLayout>
    }
    </>
  )
}
