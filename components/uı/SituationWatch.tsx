import React from 'react';
import clsx from 'clsx';
import {useStore} from '@/stores/zustand'

interface SituationProps {
  type: 'Completing' | 'Over Due' | 'Planned' | 'Empty' | null,
}

const Situation: React.FC<SituationProps> = ({
  type,
}) => {
  const {bg_color, comp_color, complating_color, overdue_color,  situation_color, text_color} = useStore()

  let backgroundColor: any = '' || null;

  if (type === 'Completing') {
    backgroundColor = complating_color;
  } else if (type === 'Over Due') {
    backgroundColor = overdue_color;
  }

  return (
    <div
      style={{ backgroundColor, color: situation_color || undefined }}
      className={clsx(
        'text-[10px] text-center my-auto py-[2px] px-[10px] rounded font-medium'
      )}
    >
      {type === 'Completing' && <p>Completing</p>}
      {type === 'Over Due' && <p>Over Due</p>}
      {type === 'Planned' && <p>Planned</p>}
      {type === 'Empty' && ''}
    </div>
  );
};

export default Situation;
