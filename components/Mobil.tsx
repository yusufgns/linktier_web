    'use client'
    import React, { useState, useEffect } from 'react';
    import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
    import Profil from './Admin/Profil/Profil';
    import FetchButton from '@/components/FetchButton';
    import Link from 'next/link'
    import {useMobil} from '../stores/Mobil'
    import {useUser} from '../stores/User'
    import SituationBlock from '../components/uı/SituationBloc'
    import {MdDelete, MdEdit} from 'react-icons/md'
    import supabase from '@/lib/supabase-client';

    export default function Mobil(): any {
        const [menu, setMenu] = useState('false')

        const {bg_color, comp_color, completing_color, overdue_color, text_color, useUsers} = useUser()
        const {EntriesData} = useMobil()
        const users: any = useUsers ? useUsers: []

        const [stores, setStores] = useState < any > ([]);

        useEffect(() => {
            setStores(useMobil.getState().EntriesData)
        }, [EntriesData]);

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
            const updatedStores = stores.map((entry: any) => {
                const updatedEntriesData = entry.EntriesData.filter((e: any) => e.id !== entryId);
                return { ...entry, EntriesData: updatedEntriesData };
            });  

            setStores(updatedStores);

            await supabase
            .from('entries')
            .update({
                EntriesData: updatedStores[0]?.EntriesData
            })
            .eq('user_id', users[0]?.user_id)
        };

        return (
            <>
            {users[0]?.user_name &&
            <span className='h-[700px] relative'>
            <div
                className='custom-scrollbar w-[360px] overflow-auto h-[700px] px-[15px] py-[10px] flex flex-col rounded-[40px] border-[6px] relative'
                style={{ background: `${bg_color}` }}
            >
                <Profil />
                <div className='flex flex-col gap-[15px]'>
                    {stores.map((entry: any, entryIndex: number) => (
                        <div
                            className='rounded-lg mt-[5px] mb-[5px] relative'
                            key={entry.id || entryIndex}
                        >
                            {entry.EntriesData?.length > 0 && (
                                <DragDropContext onDragEnd={(result) => handleDragEnd(result, entryIndex)}>
                                    <Droppable droppableId={entry.id.toString()} type='entry'>
                                        {(provided) => (
                                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                                {entry.EntriesData.map((e: any, eIndex: number) => (
                                                    <Draggable draggableId={`${entry.id}-${e.id}`} key={`${entry.id}-${e.id}`} index={eIndex}>
                                                        {(provided) => (
                                                            <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                                                                {!e.website && (
                                                                    <div className=' rounded-lg mt-[5px] mb-[5px] flex items-center relative' style={{ background: `${comp_color}` }}>
                                                                        <div className='h-fit px-[18px] py-[10px] w-full'>
                                                                            <div className='flex items-center justify-between break-words max-w-[332px]'>
                                                                                <p className='text-[14px] break-words' style={{ color: `${text_color}` }}>{e.title}</p>
                                                                                <SituationBlock type={e.type} completing_color={completing_color} overdue_color={overdue_color} />
                                                                            </div>
                                                                            <div className='mt-[5px] break-words text-[11px]' style={{ color: `${text_color}` }}>
                                                                                {e.description}
                                                                            </div>
                                                                        </div>

                                                                        <div className='absolute right-0 z-10 w-[10px] py-[10px] mr-[6px]'>
                                                                            {/* <div className='mb-2'><MdEdit /></div> */}
                                                                            <div onClick={() => DeleteEntries(e.id)}><MdDelete /></div>
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                {e.website && (
                                                                    <div className='relative flex items-center w-full'>
                                                                        <Link href={'https://www.' + e.website} target='_blank' className='w-full'>
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
                                                                                        {e.title}
                                                                                    </p>
                                                                                    <SituationBlock type={e.type} completing_color={completing_color} overdue_color={overdue_color} />
                                                                                </div>
                                                                                <div className='mt-[5px] break-words text-[11px]' style={{ color: `${text_color}` }}>
                                                                                    {e.description}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
                                                                        <div className='absolute right-0 z-10 w-[10px] py-[10px] mr-[6px]'>
                                                                            {/* <div className='mb-2'><MdEdit /></div> */}
                                                                            <div onClick={() => DeleteEntries(e.id)}><MdDelete /></div>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        )}
                                                    </Draggable>
                                                ))}
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </DragDropContext>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <FetchButton stores={stores}/>
            </div>
            </span>
            }

            {!users[0]?.user_name &&
                <div className='h-screen m-auto absolute flex items-center'>
                    <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"></path>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"></path>
                    </svg>
                </div>
            }
            </>
        );
    }
