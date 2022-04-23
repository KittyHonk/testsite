import React from "react";
import { useTable } from "react-table";
import { CSVLink } from "react-csv";

const csvData = [
    { firstName: "John", lastName: "Doe" },
    { firstName: "Jane", lastName: "Doe" }
];

const Table = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable({
        columns,
        data
    });

    return (
        <table {...getTableProps()}>
            <thead>
            {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                            return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                        })}
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
};

export default function App() {
    const columns = React.useMemo(
        () => [
            {
                Header: "Name",
                columns: [
                    {
                        Header: "First Name",
                        accessor: "firstName"
                    },
                    {
                        Header: "Last Name",
                        accessor: "lastName"
                    }
                ]
            }
        ],
        []
    );

    const data = React.useMemo(() => {
        return csvData.map((d) => Object.values(d));
    }, []);

    return (
        <>
            <CSVLink data={data}>Download me</CSVLink>
            <Table columns={columns} data={csvData} />;
        </>
    );
}