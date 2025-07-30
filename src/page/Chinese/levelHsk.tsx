import React from 'react'


interface lvHsk {
    hsk: (lv: number) => void;
}

export const levelHsk: React.FC<lvHsk> = ({ hsk }) => {

    const list: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div>
            {list.map((item) => (
                <button onClick={() => hsk(item)} key={item}>HSK {item}</button>
            ))}
        </div>
    )
}
