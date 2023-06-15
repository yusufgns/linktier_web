'use client'
import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Profil from './Profil/Profil';
import FetchButton from '@/components/FetchButton';
import Link from 'next/link'
import { useUser } from '../../stores/User'
import SituationBlock from '../uı/SituationBloc'
import { MdDelete, MdEdit } from 'react-icons/md'
import supabase from '@/lib/supabase-client';
import { useEdit } from '@/stores/Edit'
import { useStore } from '@/stores/zustand'
import { IoIosAddCircle, IoMdColorPalette } from 'react-icons/io'
import { FaTimesCircle } from 'react-icons/fa'
import ThemeData from './Form/ThemeData';
import Entries from './Form/Entries';
import Settings from '../Admin/Form/Settings'
import ProfilData from '../Admin/Form/ProfilData'
import LinkSendData from './Form/LinkSendData';
import Notif, { ErrorNotify, SuccesNotify } from '@/components/Notification'

export default function Mobil(): any {
    const { bg_color, comp_color, completing_color, overdue_color, text_color, useUsers, EntriesData } = useUser()
    const users: any = useUsers ? useUsers : []
    const { EditData, setEditData } = useEdit()
    const [stores, setStores] = useState<any>([]);
    const { linktire, mobil_menu } = useStore()

    useEffect(() => {
        setStores(EntriesData)
    }, [EntriesData])

    const handleDragEnd = (result: any, entryIndex: number) => {
        const { source, destination } = result;
        if (!destination) return;

        if (source.droppableId === destination.droppableId && source.index === destination.index) return;

        const reorderedEntries = [...stores];
        const entry = reorderedEntries[entryIndex];
        const [draggedItem] = entry.EntriesData.splice(source.index, 1);
        entry.EntriesData.splice(destination.index, 0, draggedItem);

        setStores(reorderedEntries);
    };

    const DeleteEntries = async (entryId: any) => {
        const updatedStores = stores.filter((store: any) => store.id !== entryId);

        setStores(updatedStores);

        const { data, error } = await supabase
            .from('user')
            .update({
                EntriesData: updatedStores
            })
            .eq('user_id', users[0]?.user_id)

        navigator.clipboard.writeText('text')
            .then(() => {
                SuccesNotify('Delete Entries!')
            })
            .catch((error) => {
                ErrorNotify('Error delete entries!')
            });

    };

    const EditEntries = (entryId: any) => {
        const updatedStores = stores.map((entry: any) => {
            entry.EntriesData.find((entry: any) => {
                if (entryId === entry.id) {
                    setEditData(entry)
                    useStore.setState({
                        linktire: 'edit'
                    });
                }
            })
            return entry;
        });

        setStores(updatedStores);
    };

    const MenuStores = (e: any) => {
        useStore.setState({
            mobil_menu: e
        });
    }


    return (
        <>
            <Notif></Notif>
            {users[0]?.user_name &&
                <span className='h-[700px] relative'>
                    <div
                        className='custom-scrollbar w-[400px] overflow-auto h-[700px] flex flex-col rounded-[40px] border-[6px] relative'
                        style={{ background: `${bg_color}` }}
                    >
                        <span className='px-[15px] py-[10px]'>
                            <Profil />
                            <div className='flex flex-col'>
                                {stores.map((entry: any, entryIndex: number) => (
                                    <div
                                        className='rounded-lg relative'
                                        key={entry.id || entryIndex}
                                    >
                                        <DragDropContext onDragEnd={(result) => handleDragEnd(result, entryIndex)}>
                                            <Droppable droppableId={entry.id.toString()} type='entry'>
                                                {(provided) => (
                                                    <div {...provided.droppableProps} ref={provided.innerRef}>
                                                        <Draggable draggableId={`${entry.id}-${entry.id}`} key={`${entry.id}-${entry.id}`} index={entryIndex}>
                                                            {(provided) => (
                                                                <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                                                                    {!entry.website && (
                                                                        <div className=' rounded-lg mt-[5px] mb-[5px] flex items-center relative' style={{ background: `${comp_color}` }}>
                                                                            <div className='h-fit px-[18px] py-[10px] w-full'>
                                                                                <div className='flex items-center justify-between break-words max-w-[332px]'>
                                                                                    <p className='text-[14px] break-words' style={{ color: `${text_color}` }}>{entry.title}</p>
                                                                                    <SituationBlock type={entry.type} completing_color={completing_color} overdue_color={overdue_color} />
                                                                                </div>
                                                                                <div className='mt-[5px] break-words text-[11px]' style={{ color: `${text_color}` }}>
                                                                                    {entry.description}
                                                                                </div>
                                                                            </div>

                                                                            <div className='z-10 w-[15px] py-[10px] mr-[6px]'>
                                                                                <div className='mb-2' onClick={() => EditEntries(entry.id)}><MdEdit /></div>
                                                                                <div onClick={() => DeleteEntries(entry.id)}><MdDelete /></div>
                                                                            </div>
                                                                        </div>
                                                                    )}

                                                                    {entry.website && (
                                                                        <div className=' rounded-lg mt-[5px] mb-[5px] flex items-center relative' style={{ background: `${comp_color}` }}>
                                                                            <Link href={'https://www.' + entry.website} target='_blank' className='w-full'>
                                                                                <div className='
                                                                                    hover:opacity-50
                                                                                    rounded-lg 
                                                                                    mt-[5px] 
                                                                                    mb-[5px]
                                                                                    flex
                                                                                    items-center'
                                                                                    style={{ background: `${comp_color}` }}>
                                                                                    <div className='h-fit px-[18px] py-[10px] w-full'>
                                                                                        <div className='flex items-center justify-between break-words max-w-[332px]'>
                                                                                            <p className='text-[14px] break-words' style={{ color: `${text_color}` }}>
                                                                                                {entry.title}
                                                                                            </p>
                                                                                            <SituationBlock type={entry.type} completing_color={completing_color} overdue_color={overdue_color} />
                                                                                        </div>
                                                                                        <div className='mt-[5px] break-words text-[11px]' style={{ color: `${text_color}` }}>
                                                                                            {entry.description}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </Link>
                                                                            <div className='z-10 w-[15px] py-[10px] mr-[6px]'>
                                                                                <div className='mb-2' onClick={() => EditEntries(entry.id)}><MdEdit /></div>
                                                                                <div onClick={() => DeleteEntries(entry.id)}><MdDelete /></div>
                                                                            </div>
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            )}
                                                        </Draggable>
                                                        {provided.placeholder}
                                                    </div>
                                                )}
                                            </Droppable>
                                        </DragDropContext>
                                    </div>
                                ))}
                            </div>
                        </span>

                        <div className='absolute bottom-0 w-full h-[80px] flex items-center justify-center z-[9999]' style={{ color: `${text_color}` }}>
                            {mobil_menu == '' &&
                                <div className='h-[50px]'>
                                    <FetchButton stores={stores} />
                                </div>
                            }

                            <div className='absolute text-[30px] rounded-full right-4' onClick={() => MenuStores('entries')}>
                                <div><IoIosAddCircle></IoIosAddCircle></div>
                            </div>

                            <div className='absolute text-[30px] rounded-full left-4' onClick={() => MenuStores('theme')}>
                                <IoMdColorPalette></IoMdColorPalette>
                            </div>
                        </div>

                        {mobil_menu !== '' &&
                            <div className='bg-[#222831] w-full h-full absolute z-[999]'>
                                <div className='absolute py-[25px] w-full'>
                                    <span className='flex items-center justify-between px-[20px]'>
                                        <h1 className='font-medium text-[18px]'>
                                            {mobil_menu === 'theme' && 'Theme Color'}
                                            {mobil_menu === 'entries' && 'Entries'}
                                            {mobil_menu === 'settings' && 'Settings'}
                                        </h1>

                                        <span className='text-[22px]' onClick={() => MenuStores('')}>
                                            <FaTimesCircle></FaTimesCircle>
                                        </span>
                                    </span>

                                    {mobil_menu === 'theme' &&
                                        <div>
                                            <ThemeData></ThemeData>
                                        </div>
                                    }

                                    {mobil_menu === 'entries' &&
                                        <div>
                                            <Entries></Entries>
                                        </div>
                                    }

                                    {mobil_menu === 'settings' &&
                                        <div className='mt-[25px]'>
                                            <ProfilData></ProfilData>
                                            <LinkSendData></LinkSendData>
                                        </div>
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </span>
            }
        </>
    );
}
