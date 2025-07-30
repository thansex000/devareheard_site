import React, { type ReactNode } from 'react'
import {
  Table,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell
} from '../ui/table'

interface PropTable {
  title: string
  colums: string[]
  row: ReactNode[][]
  loading: boolean
}

const Tablecs: React.FC<PropTable> = ({ title, colums, row, loading }) => {
  return (
    <div className="rounded-lg border shadow-md overflow-x-auto">
      <Table>
        <TableCaption className="text-lg font-semibold py-4">{title}</TableCaption>
        <TableHeader>
          <TableRow className="bg-gray-100 text-gray-700">
            {colums.map((col, index) => (
              <TableHead
                key={index}
                className="text-sm font-bold px-4 py-2 border-b text-center border-gray-300"
              >
                {col}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell colSpan={colums.length} className="text-center py-4">
                Đang tải dữ liệu...
              </TableCell>
            </TableRow>
          ) : (
            row.map((rowData, rowIndex) => (
              <TableRow
                key={rowIndex}
                className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
              >
                {rowData.map((cell, cellIndex) => (
                  <TableCell
                    key={cellIndex}
                    className="px-4 py-2 border-b border-gray-200 text-sm text-gray-800"
                  >
                    {cell}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default Tablecs
