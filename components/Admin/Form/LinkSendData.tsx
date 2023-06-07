'use client'
import React, {useState} from 'react'
import {BsGlobe2, BsTwitter, BsYoutube, BsInstagram, BsDribbble, BsBehance, BsGithub} from 'react-icons/bs'
import Input from '@/components/uı/Input'
import { useUser } from '@/stores/User'
import clsx from 'clsx'

export default function LinkSendData() {
    const {linkData} = useUser()
    const bio_links: any = linkData ? linkData : {};

    const [link, setLink] = useState('website')
    const [ilinks, setLinks] = useState(
    [
            {
                website: bio_links.website,
                instagram: bio_links.instagram,
                youtube: bio_links.youtube,
                twitter: bio_links.twitter,
                github: bio_links.github,
                behance: bio_links.behance,
                dribbble:bio_links.dribbble,
            }
        ]
    )


    const linkSendData = (e: any) => {
        e.preventDefault();

        useUser.setState({
            linkData: {
                website: ilinks[0]?.website,
                instagram: ilinks[0]?.instagram,
                youtube: ilinks[0]?.youtube,
                twitter: ilinks[0]?.twitter,
                github: ilinks[0]?.github,
                behance: ilinks[0]?.behance,
                dribbble: ilinks[0]?.dribbble
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
                    w-[660px]'>
                    <div className='text-[20px] gap-[10px] my-[15px] flex items-center'>
                        <div className={clsx(ilinks[0].website !== '' || link === 'website' && 'text-white opacity-70',
                        ilinks[0].website !== '' && 'text-white',
                            link !== 'website' && bio_links.website === '' && 'opacity-20'
                            )}
                            onClick={(e) => setLink('website')}>
                            <BsGlobe2 />
                        </div>

                        <div className={clsx(ilinks[0].instagram !== '' || link === 'instagram' && 'text-white opacity-70',
                        ilinks[0].instagram !== '' && 'text-white',
                            link !== 'instagram' && bio_links.instagram === '' && 'opacity-20'
                            )}
                        onClick={(e) => setLink('instagram')}>
                            <BsInstagram />
                        </div>

                        <div className={clsx(bio_links.twitter !== '' || link === 'twitter' && 'text-white opacity-70',
                        ilinks[0].twitter !== '' && 'text-white',
                            link !== 'twitter' && bio_links.twitter === '' && 'opacity-20'
                            )}
                        onClick={(e) => setLink('twitter')}>
                            <BsTwitter />
                        </div>

                        <div className={clsx(bio_links.youtube !== '' || link === 'youtube' && 'text-white opacity-70',
                        ilinks[0].youtube !== '' && 'text-white',
                            link !== 'youtube' && bio_links.youtube === '' && 'opacity-20'
                            )}
                        onClick={(e) => setLink('youtube')}>
                            <BsYoutube />
                        </div>

                        <div className={clsx(bio_links.github !== '' || link === 'github' && 'text-white opacity-70',
                        ilinks[0].github !== '' && 'text-white',
                            link !== 'github' && bio_links.github === '' && 'opacity-20'
                            )}
                        onClick={(e) => setLink('github')}>
                            <BsGithub />
                        </div>

                        <div className={clsx(bio_links.dribbble !== '' || link === 'dribbble' && 'text-white opacity-70',
                           ilinks[0].dribbble !== '' && 'text-white',
                            link !== 'dribbble' && bio_links.dribbble === '' && 'opacity-20'
                            )}
                        onClick={(e) => setLink('dribbble')}>
                            <BsDribbble />
                        </div>

                        <div className={clsx(bio_links.behance !== '' || link === 'behance' && 'text-white opacity-70',
                        ilinks[0].behance !== '' && 'text-white',
                            link !== 'behance' && bio_links.behance === '' && 'opacity-20'
                            )}
                        onClick={(e) => setLink('behance')}>
                            <BsBehance />
                        </div>
                    </div>

                    <div>
                        {link === 'website' &&
                            <Input
                                length={80}
                                placeholder='website'
                                type={'website'}
                                value={ilinks[0]?.website}
                                onChange={(e) =>
                                    setLinks((prevLinks) => [
                                    {
                                        ...prevLinks[0],
                                        website: e.target.value,
                                    },
                                    ]
                                    )
                                }
                            ></Input>
                        }

                        {link === 'instagram' &&
                            <Input
                                length={80}
                                placeholder='instagram'
                                type={'website'}
                                value={ilinks[0]?.instagram}
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
                                value={ilinks[0]?.twitter}
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
                                value={ilinks[0]?.youtube}
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
                                value={ilinks[0]?.github}
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
                                value={ilinks[0]?.dribbble}
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
                                value={ilinks[0]?.behance}
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
                            <button type='submit'>Preview Link</button>
                        </p>
                    </div>
        </form>
    </span>
  )
}
