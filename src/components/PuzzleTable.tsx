import { convertTo2D } from '@/helpers/convertTo2D';

interface Props {
	layouts: IBoard;
}

const PuzzleTable: React.FC<Props> = ({ layouts }) => {
	return (
		<table className=''>
			<tbody>
				{convertTo2D(layouts).map((row, i) => (
					<tr key={`row-${i}`}>
						{row.map((cell, j) => (
							<td
								className={`h-12 w-12 border-collapse border border-gray-500 ${cell ? 'bg-gray-500/40' : ''}`}
								key={`cell-${i}-${j}`}
							>
								<span className='flex h-full w-full items-center justify-center text-xl font-bold'>
									{cell}
								</span>
							</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export default PuzzleTable;
