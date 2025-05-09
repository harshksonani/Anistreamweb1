"use client"

import AnimeReel from '@/components/AnimeReel'
import Footer from '@/components/Footer'
import { Wrapper } from '@/components/Wrapper'
import React from 'react'

const page = () => {
  return (
    <>
    <Wrapper>
      <div className="" >
      
      <AnimeReel query={{sort:'desc',limit:25}} title="All Anime" />
      </div>
     
    </Wrapper>
    <Footer />
    </>
  )
}

export default page