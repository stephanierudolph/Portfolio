function ArrangementRow({arrangement}){
    return (
        <tr className={arrangement.title}>
        <td>{arrangement.title}</td>
        <td>{arrangement.voicing}</td>
        <td>{arrangement.opb}</td>
        <td>{arrangement.written}</td>
        <td>{arrangement.credits}</td>
        </tr>
    );
}

export default function ArrangementTable({arrangements}){
    const rows = [];
    arrangements.forEach((arrangement) =>{
        rows.push(<ArrangementRow
            arrangement={arrangement}
            key={arrangement.title} />
        )
    });

    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Voicing</th>
                    <th>Original Artist</th>
                    <th>Year</th>
                    <th>Credits</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}