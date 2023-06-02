'use client'
import React from 'react'
import { useStore } from '@/stores/zustand'
import Themes from '@/components/uı/Admin/themes'
import TextThemes from '@/components/uı/Admin/TextThemes'
import SituationTheme from '@/components/uı/Admin/SituationThemes'

export default function ThemeData() {
     const {bg_color, comp_color, complating_color, overdue_color,  situation_color, text_color} = useStore()

    const themeData = (bg_c: any, cp_c: any) => {
        useStore.setState({
            bg_color: bg_c,
            comp_color: cp_c,
        });
    }

    const textTheme = (bg_c: any) => {
        useStore.setState({
            text_color: bg_c,
        });
    }

    const situationTheme = (completing_c: any, over_c: any, text_c: any) => {
        useStore.setState({
            complating_color: completing_c,
            overdue_color: over_c,
            situation_color: text_c,
        });
    }

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
            <div className='mb-[10px]'>Component Color</div>
            <div className='flex items-center gap-[18.5px] flex-wrap justify-center'>
                <Themes
                bg_c={'#171717'} 
                cp_c={'#121212'}
                onClick={() => themeData('#121212', '#171717')}
                ></Themes>

                <Themes
                bg_c={'#ffff'} 
                cp_c={'#E6E8E9'}
                onClick={() => themeData('#ffff', '#E6E8E9')}
                ></Themes>

                <Themes
                bg_c={'#393646'} 
                cp_c={'#6D5D6E'}
                onClick={() => themeData('#393646', '#6D5D6E')}
                ></Themes>

                <Themes
                bg_c={'#8D7B68'} 
                cp_c={'#C8B6A6'}
                onClick={() => themeData('#8D7B68', '#C8B6A6')}
                ></Themes>

                <Themes
                bg_c={'#4D455D'} 
                cp_c={'#A75D5D'}
                onClick={() => themeData('#4D455D', '#A75D5D')}
                ></Themes>

                <Themes
                bg_c={'#495371'} 
                cp_c={'#27374D'}
                onClick={() => themeData('#495371', '#27374D')}
                ></Themes>

                <Themes
                bg_c={'#9BA888'} 
                cp_c={'#4D455D'}
                onClick={() => themeData('#9BA888', '#4D455D')}
                ></Themes>

                <Themes
                bg_c={'#594545'} 
                cp_c={'#FFF8EA'}
                onClick={() => themeData('#594545', '#FFF8EA')}
                ></Themes>

                <Themes
                bg_c={'#495371'} 
                cp_c={'#99A799'}
                onClick={() => themeData('#495371', '#99A799')}
                ></Themes>

                <Themes
                bg_c={'#FFF323'} 
                cp_c={'#D06224'}
                onClick={() => themeData('#FFF323', '#D06224')}
                ></Themes>

                <Themes
                bg_c={'#316B83'} 
                cp_c={'#C6D57E'}
                onClick={() => themeData('#316B83', '#C6D57E')}
                ></Themes>
            </div>
        </span>

        <span>
            <div className='mb-[10px]'>Text Color</div>
            <div className='flex items-center gap-[18.5px] flex-wrap justify-center'>
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

        <span>
            <div className='mb-[10px]'>Situation Color</div>
            <div className='flex items-center gap-[18.5px] flex-wrap justify-center'>
                <SituationTheme
                completing_c={'rgb(57,109,63)'}
                over_c={'#B33030'}
                text_c={'#fff'}
                onClick={() => situationTheme('rgb(57,109,63)', '#B33030', '#fff')}
                ></SituationTheme>

                <SituationTheme
                completing_c={'#226B80'}
                over_c={'#FF6138'}
                text_c={'#fff'}
                onClick={() => situationTheme('#226B80', '#FF6138', '#fff')}
                ></SituationTheme>

                <SituationTheme
                completing_c={'#79BD8F'}
                over_c={'#9B6B70'}
                text_c={'#fff'}
                onClick={() => situationTheme('#79BD8F', '#9B6B70', '#fff')}
                ></SituationTheme>
            </div>
        </span>
    </div>
  )
}
