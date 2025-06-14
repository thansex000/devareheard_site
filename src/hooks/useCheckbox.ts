import { useState } from 'react';

const useCheckbox = () => {
    const [checkedIds, setCheckedIds] = useState<number[]>([]);

    const isChecked = (id: number) => checkedIds.includes(id);

    const toggle = (id: number) => {
        setCheckedIds((prev) =>
            prev.includes(id)
                ? prev.filter((item) => item !== id)
                : [...prev, id]
     
        );
        return checkedIds;
    };

    return {
        checkedIds,
        isChecked,
        toggle,
    };
};

export default useCheckbox;
