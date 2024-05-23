import React from 'react'
import Head from 'next/head'
// import PageLayout from '@/layout/pageLayout'
import PageLayoutComponent from '@/layout/PageLayoutComponent'
import { basePageServerSide } from '@/lib/getPageSchema'
// import { basePageServerSide } from '@/lib/getPageProps'

export default function Homepage(props: any) {
  return (
    <>
      <Head>
        <title>Paws Palace</title>
        <meta
          name='description'
          content='An exclusive store where your fashion meets drift'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/drift_icon.png' sizes='any' />
      </Head>
      <PageLayoutComponent {...props} />
    </>
  )
}

export const getServerSideProps = async (context: any) => {
  let { resolvedUrl } = context
  const baseProps = await basePageServerSide(context, resolvedUrl.split('?')[0])
  return baseProps
}
