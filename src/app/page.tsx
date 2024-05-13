'use client';

import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import PuzzleTable from '@/components/PuzzleTable';

const target = [1, 2, 3, 4, 5, 6, 7, 8, null];

enum Action {
	Up,
	Right,
	Down,
	Left,
}

const swap = (board: IBoard, point1: number, point2: number) => {
	return board.map((value, i) =>
		i === point1 ? board[point2] : i === point2 ? board[point1] : value
	);
};

const move = (action: Action, board: IBoard) => {
	let pos = 0;
	let swapResult: IBoard = [...board];

	for (let i = 0; i < board.length; i++) {
		if (board[i] === null) {
			pos = i;
			break;
		}
	}

	switch (action) {
		case Action.Left:
			if (pos % 3 !== 2) {
				swapResult = swap(board, pos, pos + 1);
			}
			break;
		case Action.Up:
			if (pos < 6) {
				swapResult = swap(board, pos, pos + 3);
			}
			break;
		case Action.Right:
			if (pos % 3 !== 0) {
				swapResult = swap(board, pos, pos - 1);
			}
			break;
		case Action.Down:
			if (pos > 2) {
				swapResult = swap(board, pos, pos - 3);
			}
			break;
		default:
			break;
	}

	return swapResult;
};

const reset = () => {
	let board: IBoard = target;

	for (let i = 0; i < 1000; i++) {
		board = move(Math.floor(Math.random() * 4), board);
	}

	return board;
};

export default function Home() {
	const [gameBoard, setGameBoard] = useState<Array<number | null>>(reset());

	useEffect(() => {
		const handleKeyPress = (e: KeyboardEvent) => {
			switch (e.key) {
				case 'ArrowLeft':
					setGameBoard((prev) => move(Action.Left, prev));
					break;
				case 'ArrowUp':
					setGameBoard((prev) => move(Action.Up, prev));
					break;
				case 'ArrowRight':
					setGameBoard((prev) => move(Action.Right, prev));
					break;
				case 'ArrowDown':
					setGameBoard((prev) => move(Action.Down, prev));
					break;
			}
		};

		document.addEventListener('keydown', handleKeyPress);

		return () => {
			document.removeEventListener('keydown', handleKeyPress);
		};
	}, []); //eslint-disable-line

	useEffect(() => {
		if (JSON.stringify(gameBoard) === JSON.stringify(target)) {
			window.alert('Congratulations');
		}
	}, [gameBoard]);

	const handleMove = (action: Action) => {
		setGameBoard(move(action, gameBoard));
	};

	return (
		<div className='mx-auto w-full max-w-7xl space-y-12 py-12'>
			<p>Move the tiles using arrow keys or buttons</p>
			<PuzzleTable layouts={target} />
			<div className='flex items-center gap-8'>
				<PuzzleTable layouts={gameBoard} />
				<div className='flex flex-col items-center gap-2'>
					<button
						className='h-10 w-20 border border-black'
						onClick={() => setGameBoard(reset())}
					>
						Reset
					</button>
					<div className='grid w-32 grid-cols-3 gap-0.5'>
						<div />
						<button className='keyboard' onClick={() => handleMove(Action.Up)}>
							<Icon icon='entypo:arrow-up' className='text-xl' />
						</button>
						<div />
						<button className='keyboard' onClick={() => handleMove(Action.Left)}>
							<Icon icon='entypo:arrow-left' className='text-xl' />
						</button>
						<button className='keyboard' onClick={() => handleMove(Action.Down)}>
							<Icon icon='entypo:arrow-down' className='text-xl' />
						</button>
						<button className='keyboard' onClick={() => handleMove(Action.Right)}>
							<Icon icon='entypo:arrow-right' className='text-xl' />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
