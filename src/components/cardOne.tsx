import { FC } from 'react';

interface Props {

}

const CardOne: FC<Props> = ({ }) => {
    return <div className="flex gap-2 flex-wrap items-center justify-center grid-cols-4">
        <div className="w-60 h-40 bg-red-500" />
    </div>;

}

export default CardOne;