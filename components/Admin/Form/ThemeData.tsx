'use client'
import React from 'react'

import { useUser } from '@/stores/User'
import TextThemes from '@/components/uı/Admin/TextThemes'

export default function ThemeData() {
     const {setBg_color, setCompC, setTextC, setOverdueC, setCompletingC} = useUser()

    const bg_color = (bg_c: any) => setBg_color(bg_c)
    const CompC = (cp_c: any) => setCompC(cp_c)
    const textTheme = (bg_c: any) => {setTextC(bg_c)}
    const Completing = (bg_c: any) => {setCompletingC(bg_c)}
    const Overdue = (bg_c: any) => {setOverdueC(bg_c)}

  return (
    <div
    className='
    rounded-xl
    bg-[#222831]
    h-fit
    px-[25px]
    py-[20px]
    w-[660px]
    text-white
    flex
    flex-col
    gap-[40px]
    '>  
        <span>
            <div className='mb-[10px]'>Background Color</div>
            <div className='flex items-center gap-2 flex-wrap'>
                <TextThemes
                bg_c={'#171717'} 
                onClick={() => (bg_color('#171717')) }
                ></TextThemes>

                <TextThemes
                bg_c={'#393646'} 
                onClick={() => bg_color('#393646')}
                ></TextThemes>

                <TextThemes
                bg_c={'#4D455D'} 
                onClick={() => bg_color('#4D455D')}
                ></TextThemes>
                
                <TextThemes
                bg_c={'#8D7B68'} 
                onClick={() => bg_color('#8D7B68')}
                ></TextThemes>


                <TextThemes
                bg_c={'#9BA888'} 
                onClick={() => bg_color('#9BA888')}
                ></TextThemes>

                <TextThemes
                bg_c={'#495371'} 
                onClick={() => bg_color( '#495371')}
                ></TextThemes>

                <TextThemes
                bg_c={'#316B83'}
                onClick={() => bg_color('#316B83')}
                ></TextThemes>

                <TextThemes
                bg_c={'#FFF323'} 
                onClick={() => bg_color( '#FFF323')}
                ></TextThemes>
                
                <TextThemes
                bg_c={'#594545'} 
                onClick={() => bg_color('#594545')}
                ></TextThemes>



                <TextThemes
                bg_c={'#ffff'} 
                onClick={() => bg_color('#ffff')}
                ></TextThemes>
            </div>
        </span>

        <span>
            <div className='mb-[10px]'>Component Color</div>
            <div className='flex items-center gap-2 flex-wrap'>
                <TextThemes
                bg_c={'#121212'}
                onClick={() => (CompC('#121212')) }
                ></TextThemes>

                <TextThemes
                bg_c={'#4D455D'}
                onClick={() => CompC('#4D455D')}
                ></TextThemes>

                <TextThemes
                bg_c={'#6D5D6E'}
                onClick={() => CompC( '#6D5D6E')}
                ></TextThemes>

                <TextThemes
                bg_c={'#C8B6A6'}
                onClick={() => CompC('#C8B6A6')}
                ></TextThemes>

                <TextThemes
                bg_c={'#99A799'}
                onClick={() => CompC('#99A799')}
                ></TextThemes>

                <TextThemes
                bg_c={'#27374D'}
                onClick={() => CompC( '#27374D')}
                ></TextThemes>

                <TextThemes
                bg_c={'#A75D5D'}
                onClick={() => CompC( '#A75D5D')}
                ></TextThemes>

                <TextThemes
                bg_c={'#C6D57E'}
                onClick={() => CompC('#C6D57E')}
                ></TextThemes>


                <TextThemes
                bg_c={'#D06224'}
                onClick={() => CompC( '#D06224')}
                ></TextThemes>

                <TextThemes
                bg_c={'#E6E8E9'}
                onClick={() => CompC( '#E6E8E9')}
                ></TextThemes>

                <TextThemes
                bg_c={'#FFF8EA'}
                onClick={() => CompC( '#FFF8EA')}
                ></TextThemes>
                
            </div>
        </span>

        <span>
            <div className='mb-[10px]'>Text Color</div>
            <div className='flex items-center gap-2 flex-wrap'>
                <TextThemes
                bg_c={'#000'}
                onClick={() => textTheme('#000')}
                ></TextThemes>

                <TextThemes
                bg_c={'#fff'}
                onClick={() => textTheme('#fff')}
                ></TextThemes>

                <TextThemes
                bg_c={'#D3DEDC'}
                onClick={() => textTheme('#D3DEDC')}
                ></TextThemes>

                <TextThemes
                bg_c={'#FF1700'}
                onClick={() => textTheme('#FF1700')}
                ></TextThemes>

                <TextThemes
                bg_c={'#3E8E7E'}
                onClick={() => textTheme('#3E8E7E')}
                ></TextThemes>

                <TextThemes
                bg_c={'#344CB7'}
                onClick={() => textTheme('#344CB7')}
                ></TextThemes>

                <TextThemes
                bg_c={'#FFF323'}
                onClick={() => textTheme('#FFF323')}
                ></TextThemes>
            </div>
        </span>

        {/* <span>
            <div className='mb-[10px]'>Completing Color</div>
            <div className='flex items-center gap-2 flex-wrap'>
                <TextThemes
                bg_c={'rgb(57,109,63)'}
                onClick={() => Completing('rgb(57,109,63)')}
                ></TextThemes>
                <TextThemes
                bg_c={'#226B80'}
                onClick={() => Completing('#226B80')}
                ></TextThemes>

                <TextThemes
                bg_c={'#79BD8F'}
                onClick={() => Completing('#79BD8F')}
                ></TextThemes>
            </div>
        </span> */}

         {/* <span>
            <div className='mb-[10px]'>OverDue Color</div>
            <div className='flex items-center gap-2 flex-wrap'>
                    <TextThemes
                bg_c={'#B33030'}
                onClick={() => Overdue('#B33030')}
                ></TextThemes>

                <TextThemes
                bg_c={'#FF6138'}
                onClick={() => Overdue('#FF6138')}
                ></TextThemes>

                <TextThemes
                bg_c={'#9B6B70'}
                onClick={() => Overdue('#9B6B70')}
                ></TextThemes>
            </div>
        </span> */}
    </div>
  )
}
