'use client'
import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useStore } from '../stores/zustand'; // Import the required modules
import supabase from '../lib/supabase-client';
import Profil from './Admin/Profil/Profil';
import FetchButton from '@/components/FetchButton';
import SituationWatch from './uı/SituationWatch'
import Link from 'next/link'
import { useEntries } from '../stores/StoreEntries'


export default function Mobil(): any {
    const { EntriesData } = useEntries()

    const { bg_color, comp_color, text_color } = useStore(); // Include all the required state variables
    const [stores, setStores] = useState < any > ([]);

    async function fetchEntries() {
        const { data: entries } = await supabase.from('entries').select('*');
        setStores(entries || []);
    }

    useEffect(() => {
        fetchEntries();
    }, []);

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

    return (
        <span>
            <div
                className='custom-scrollbar w-[400px] overflow-auto h-[700px] px-[15px] py-[10px] flex flex-col rounded-3xl border-2 relative'
                style={{ background: `${bg_color}` }}
            >
                <Profil />
                <div className='flex flex-col gap-[15px]'>
                    {stores.map((entry: any, entryIndex: number) => (
                        <div
                            className='rounded-lg mt-[5px] mb-[5px] relative'
                            key={entry.id || entryIndex}
                        >
                            {entry.EntriesData.length > 0 && (
                                <DragDropContext onDragEnd={(result) => handleDragEnd(result, entryIndex)}>
                                    <Droppable droppableId={entry.id.toString()} type='entry'>
                                        {(provided) => (
                                            <div {...provided.droppableProps} ref={provided.innerRef}>
                                                {entry.EntriesData.map((e: any, eIndex: number) => (
                                                    <Draggable draggableId={`${entry.id}-${e.id}`} key={`${entry.id}-${e.id}`} index={eIndex}>
                                                        {(provided) => (
                                                            <div {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                                                                {e.website && (
                                                                    <div className=' rounded-lg mt-[5px] mb-[5px]' style={{ background: `${comp_color}` }}>
                                                                        <div className='h-fit px-[18px] py-[10px] w-full'>
                                                                            <div className='flex items-center justify-between break-words max-w-[332px]'>
                                                                                <p className='text-[14px] break-words' style={{ color: `${text_color}` }}>{e.title}</p>
                                                                                <SituationWatch type={e.type} />
                                                                            </div>
                                                                            <div className='mt-[5px] break-words text-[11px]' style={{ color: `${text_color}` }}>
                                                                                {e.description}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                )}

                                                                {!e.website && (
                                                                    <Link href={'https://www.' + e.website} target='_blank'>
                                                                        <div className=' rounded-lg mt-[5px] mb-[5px]' style={{ background: `${comp_color}` }}>
                                                                            <div className='h-fit px-[18px] py-[10px] w-full'>
                                                                                <div className='flex items-center justify-between break-words max-w-[332px]'>
                                                                                    <p className='text-[14px] break-words' style={{ color: `${text_color}` }}>
                                                                                        {e.title}
                                                                                    </p>
                                                                                    <SituationWatch type={e.type} />
                                                                                </div>
                                                                                <div className='mt-[5px] break-words text-[11px]' style={{ color: `${text_color}` }}>
                                                                                    {e.description}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Link>
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
            <FetchButton stores={stores} />
        </span>
    );
}
