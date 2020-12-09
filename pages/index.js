import Head from 'next/head'
import Layout, { siteTitle } from '@/components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { useContext } from 'react'
import { Context } from './_app'
import { motion } from 'framer-motion'

export default function Home({ allPostsData }) {

  const { state, upState } = useContext(Context);

  return (
    <motion.div initial={{ scale: .5 }} animate={{ scale: 1 }}>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>[Your Self Introduction]</p>
          <Link href='/posts/first-page'><a>To post</a></Link>
          <p>{state}</p>
          <button onClick={upState}>upstate</button>
        </section>
      </Layout>
    </motion.div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
