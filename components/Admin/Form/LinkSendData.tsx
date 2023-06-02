'use client'
import React, {useState} from 'react'
import {useStore} from '@/stores/zustand'
import {BsGlobe2, BsTwitter, BsYoutube, BsInstagram, BsDribbble, BsBehance, BsGithub} from 'react-icons/bs'
import Input from '@/components/uı/Input'

export default function LinkSendData() {
    const [link, setLink] = useState('website')
    const [links, setLinks] = useState(
        [
            {
            website: '',
            instagram: '',
            youtube: '',
            twitter: '',
            github: '',
            behance: '',
            dribbble: ''
            }
        ]
    )


    const linkSendData = (e: any) => {
        e.preventDefault();

        useStore.setState({
            linkData: {
                website: links[0]?.website,
                instagram: links[0]?.instagram,
                youtube: links[0]?.youtube,
                twitter: links[0]?.twitter,
                github: links[0]?.github,
                behance: links[0]?.behance,
                dribbble: links[0]?.dribbble
            }
        });
    }

  return (
    <span>
        <form onSubmit={linkSendData}
                    className='
                    mt-[20px]
                    rounded-xl
                    bg-[#222831]
                    h-fit
                    px-[25px]
                    py-[20px]
                    w-[660px]
                    text-white'>
                    <div className='text-[20px] text-white gap-[10px] my-[15px] flex items-center'>
                        <div onClick={(e) => setLink('website')}>
                            <BsGlobe2 />
                        </div>

                        <div onClick={(e) => setLink('instagram')}>
                            <BsInstagram />
                        </div>

                        <div onClick={(e) => setLink('twitter')}>
                            <BsTwitter />
                        </div>

                        <div onClick={(e) => setLink('youtube')}>
                            <BsYoutube />
                        </div>

                        <div onClick={(e) => setLink('github')}>
                            <BsGithub />
                        </div>

                        <div onClick={(e) => setLink('dribbble')}>
                            <BsDribbble />
                        </div>

                        <div onClick={(e) => setLink('behance')}>
                            <BsBehance />
                        </div>
                    </div>

                    <div>
                        {link === 'website' &&
                            <Input
                                length={80}
                                placeholder='website'
                                type={'website'}
                                value={links[0]?.website}
                                onChange={(e) =>
                                    setLinks((prevLinks) => [
                                    {
                                        ...prevLinks[0],
                                        website: e.target.value,
                                    },
                                    ])
                                }
                            ></Input>
                        }

                        {link === 'instagram' &&
                            <Input
                                length={80}
                                placeholder='instagram'
                                type={'website'}
                                value={links[0]?.instagram}
                                onChange={(e) =>
                                    setLinks((prevLinks) => [
                                    {
                                        ...prevLinks[0],
                                        instagram: e.target.value,
                                    },
                                    ])
                                }
                            ></Input>
                        }

                        {link === 'twitter' &&
                            <Input
                                length={80}
                                placeholder='twitter'
                                type={'website'}
                                value={links[0]?.twitter}
                                onChange={(e) =>
                                    setLinks((prevLinks) => [
                                    {
                                        ...prevLinks[0],
                                        twitter: e.target.value,
                                    },
                                    ])
                                }
                            ></Input>
                        }

                        {link === 'youtube' &&
                            <Input
                                length={80}
                                placeholder='youtube'
                                type={'website'}
                                value={links[0]?.youtube}
                                onChange={(e) =>
                                    setLinks((prevLinks) => [
                                    {
                                        ...prevLinks[0],
                                        youtube: e.target.value,
                                    },
                                    ])
                                }
                            ></Input>
                        }

                        {link === 'github' &&
                            <Input
                                length={80}
                                placeholder='github'
                                type={'website'}
                                value={links[0]?.github}
                                onChange={(e) =>
                                    setLinks((prevLinks) => [
                                    {
                                        ...prevLinks[0],
                                        github: e.target.value,
                                    },
                                    ])
                                }
                            ></Input>
                        }

                        {link === 'dribbble' &&
                            <Input
                                length={80}
                                placeholder='dribbble'
                                type={'website'}
                                value={links[0]?.dribbble}
                                onChange={(e) =>
                                    setLinks((prevLinks) => [
                                    {
                                        ...prevLinks[0],
                                        dribbble: e.target.value,
                                    },
                                    ])
                                }
                            ></Input>
                        }

                        {link === 'behance' &&
                            <Input
                                length={80}
                                placeholder='behance'
                                type={'website'}
                                value={links[0]?.behance}
                                onChange={(e) =>
                                    setLinks((prevLinks) => [
                                    {
                                        ...prevLinks[0],
                                        behance: e.target.value,
                                    },
                                    ])
                                }
                            ></Input>
                        }
                    </div>

                    <div className='w-full relative h-[40px]'>
                        <p className='right-0 absolute bottom-0 bg-[#393E46] text-white font-medium px-[10px] py-[2px] rounded-md text-[15px] hover:bg-opacity-40 cursor-pointer outline-none'>
                            <button type='submit'>Save Link</button>
                        </p>
                    </div>
        </form>
    </span>
  )
}
