import { ToggleLeftIcon, ToggleRightIcon } from 'lucide-react';
import React from 'react';

interface CheckerProps {
    isChecked: boolean;
    change: () => void;
}

const Checkboxcs: React.FC<CheckerProps> = ({ isChecked, change }) => {
    return (
        <div onClick={() => { change() }}>
            {isChecked ? (
                <ToggleRightIcon />
            ) : (
                <ToggleLeftIcon />
            )}
        </div>
    );
};

export default Checkboxcs;
