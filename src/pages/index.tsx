import React from 'react'
import '../styles/pages/Index.less'
import Head from 'next/head'
import { Typography } from 'antd';
const { Title, Paragraph } = Typography;
const Home: React.FC = () => {
  return (
    <div className="container-home">
      <Head>
        <title>Home Page</title>
      </Head>

      <main>
        <Title>Brevemente Disponível</Title>
        <Paragraph>@Copyright 2020 Lutero Elavoco. All rights reserved.</Paragraph>
      </main>
    </div>
  )
}
export default Home
