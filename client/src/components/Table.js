const Table = ({ data }) => {
    return (
        <table>
            <tbody>
            <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Team</th>
            </tr>
            {data.map((item) => (
                <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.team}</td>
                </tr>
            ))}
            </tbody>
        </table>
        );
    };
    
export default Table;