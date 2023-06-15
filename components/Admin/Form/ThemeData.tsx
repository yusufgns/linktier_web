'use client'
import React from 'react'

import { useUser } from '@/stores/User'
import TextThemes from '@/components/uı/Admin/TextThemes'
import ThemesData from '@/components/uı/Admin/themes'
import Notif, { ErrorNotify, SuccesNotify } from '@/components/Notification'

export default function ThemeData() {
    const { setBg_color, setCompC, setTextC, setOverdueC, setCompletingC, bg_color, text_color, comp_color } = useUser()

    const bg_colors = (themes: any) => {
        setBg_color(themes)
        navigator.clipboard.writeText('text')
            .then(() => {
                SuccesNotify('Theme preview is active')
            })
            .catch((error) => {
                ErrorNotify('Could not add theme!')
            });
    }
    const textTheme = (bg_c: any) => {
        setTextC(bg_c)
        navigator.clipboard.writeText('text')
            .then(() => {
                SuccesNotify('Saved in preview!')
            })
            .catch((error) => {
                ErrorNotify('Failed to save to self-monitoring!')
            });
    }


    //Theme 1
    const theme1_color1 = '#171717'
    const theme1_color2 = '#121212'

    //Theme 2
    const theme2_color1 = '#4D455D'
    const theme2_color2 = '#6D5D6E'

    //Theme 3
    const theme3_color1 = '#8D7B68'
    const theme3_color2 = '#C8B6A6'

    //Theme 4
    const theme4_color1 = '#9BA888'
    const theme4_color2 = '#99A799'

    //Theme5
    const theme5_color1 = '#FFF323'
    const theme5_color2 = '#D06224'

    //Theme6
    const theme6_color1 = '#fff'
    const theme6_color2 = '#E6E8E9'

    //Theme7
    const theme7_color1 = '#C8B6A6'
    const theme7_color2 = '#594545'

    return (
        <>
            <Notif></Notif>
            <div
                className='
            rounded-xl
            bg-[#222831]
            h-fit
            px-[25px]
            py-[20px]
            text-white
            flex
            flex-col
            gap-[40px]
            w-full
    '>
                <span className='relative flex items-center'>
                    <div className='w-[180px] rounded-md m-auto py-[15px]' style={{ background: bg_color ? bg_color : undefined }}>
                        <div className='w-[150px] h-[40px] rounded-md m-auto text-center flex items-center justify-center font-medium text-black' style={{ background: comp_color ? comp_color : undefined, color: text_color ? text_color : undefined }}>
                            Text
                        </div>
                    </div>
                </span>

                <div>
                    <div className='mb-[10px]'>Background    Color</div>
                    <div className='flex items-center gap-2 flex-wrap'>
                        <ThemesData color_1={theme1_color1} color_2={theme1_color2} onClick={() => (bg_colors({
                            color1: theme1_color1,
                            color2: theme1_color2,
                        }))}></ThemesData>

                        <ThemesData color_1={theme2_color1} color_2={theme2_color2} onClick={() => (bg_colors({
                            color1: theme2_color1,
                            color2: theme2_color2
                        }))}></ThemesData>

                        <ThemesData color_1={theme3_color1} color_2={theme3_color2} onClick={() => (bg_colors({
                            color1: theme3_color1,
                            color2: theme3_color2,
                        }))}></ThemesData>

                        <ThemesData color_1={theme4_color1} color_2={theme4_color2} onClick={() => (bg_colors({
                            color1: theme4_color1,
                            color2: theme4_color2,
                        }))}></ThemesData>

                        <ThemesData color_1={theme5_color1} color_2={theme5_color2} onClick={() => (bg_colors({
                            color1: theme5_color1,
                            color2: theme5_color2
                        }))}></ThemesData>

                        <ThemesData color_1={theme6_color1} color_2={theme6_color2} onClick={() => (bg_colors({
                            color1: theme6_color1,
                            color2: theme6_color2,
                        }))}></ThemesData>

                        <ThemesData color_1={theme7_color1} color_2={theme7_color2} onClick={() => (bg_colors({
                            color1: theme7_color1,
                            color2: theme7_color2
                        }))}></ThemesData>
                    </div>
                </div>

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
        </>
    )
}
