export default function InfoTable({ tableInfos }) {
	const tableRows = Object.keys(tableInfos).map((key) => {
		return (<tr key={key}>
			<td>{key}</td>
			<td>{tableInfos[key] || 'N/A'}</td>
		</tr>)
	})
	
	return (<>
		<table>
			<tbody>
				{tableRows}
			</tbody>
		</table>
	</>)
}