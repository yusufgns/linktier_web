import React from 'react';
import clsx from 'clsx';
import {useUser} from '@/stores/User'

interface SituationProps {
  type: null | string,
}

const Situation: React.FC<SituationProps> = ({
  type,
}) => {
  const {completing_color, overdue_color} = useUser()

  return (
    <div
      className={clsx(
        'text-[10px] text-center my-auto py-[2px] px-[10px] rounded font-medium',
        type === 'Completing' && `bg-[${completing_color}]`,
        type === 'Over Due' && `bg-[${overdue_color}]`,
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
